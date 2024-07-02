<template>
  <div class="whiteboard-box">
    <div class="whiteboard-btns">
      <el-button
        :type="drawType == 'paint'? 'primary' : ''" 
        @click="setDrawType('paint')">
        画笔
      </el-button>

      <el-button
        :type="drawType == 'rect'? 'primary' : ''"
        @click="setDrawType('rect')">
        矩形
      </el-button>

      <el-button
        :type="drawType == 'ellipse'? 'primary' : ''"
        @click="setDrawType('ellipse')">
        椭圆
      </el-button>

      <el-button
        :type="drawType == 'arrow'? 'primary' : ''"
        @click="setDrawType('arrow')">
        箭头
      </el-button>

      <el-color-picker v-model="config.color" :predefine="predefine" />

      <el-button 
        :type="drawType == 'eraser'? 'primary' : ''"
        @click="setDrawType('eraser')">
        橡皮擦
      </el-button>

      <el-button type="" @click="clearCanvas">清空</el-button>
    </div>

    <div ref="boardEl" class="whiteboard">
      <canvas
        ref="canvas"
        class="whiteboard-canvas"
        width="" height=""
        @mousedown="onStart"
        @mousemove="onDrawing"
        @mouseup="onEnd"
        @mouseleave="onEnd">
      </canvas>

      <canvas
        v-show="['rect', 'ellipse', 'arrow'].includes(drawType)"
        ref="canvasTemp"
        class="whiteboard-temp"
        width="" height=""
        @mousedown="onStart"
        @mousemove="onDrawing"
        @mouseup="onEnd"
        @mouseleave="onEnd">
      </canvas>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
const props = defineProps({
  
})

const boardEl = ref()
const canvas = ref()
const canvasTemp = ref()
const ctx = ref()
const ctxTemp = ref()

// 绘制类型
const drawType = ref('paint')

/**
 * 设置绘制类型
 * @param type paint画笔，rect矩形，ellipse椭圆，arrow箭头，eraser橡皮
 */
function setDrawType(type) {
  drawType.value = type
}

// 配置
const config = reactive({
  lineWidth: 1.5, // 线条粗细
  color: '#ff0000', // 线条颜色
  eraserWidth: 20, // 橡皮擦大小
})
const predefine = ref([
  '#ff0000',
  '#0000ff'
])

// canvas初始化
function initCanvase() {
  ctx.value = canvas.value.getContext('2d')
  ctxTemp.value = canvasTemp.value.getContext('2d')
  let parentWidth = canvas.value.parentNode.clientWidth
  let parentHeight = canvas.value.parentNode.clientHeight
  let dpr = window.devicePixelRatio || 1
  canvas.value.width = Math.round(parentWidth * dpr)
  canvas.value.height = Math.round(parentHeight * dpr)
  canvas.value.style.width = parentWidth + 'px'
  canvas.value.style.height = parentHeight + 'px'
  canvasTemp.value.width = Math.round(parentWidth * dpr)
  canvasTemp.value.height = Math.round(parentHeight * dpr)
  canvasTemp.value.style.width = parentWidth + 'px'
  canvasTemp.value.style.height = parentHeight + 'px'
  ctx.value.scale(dpr, dpr)
  ctxTemp.value.scale(dpr, dpr)
}

onMounted(() => {
  initCanvase()
})

// 开始坐标位置
const startX = ref(0)
const startY = ref(0)
// 是否在绘制
const isDrawing = ref(false)

// 开始绘制
function onStart(e) {
  isDrawing.value = true
  startX.value = e.offsetX
  startY.value = e.offsetY
}

// 绘制
function onDrawing(e) {
  if (isDrawing.value) {
    // 画笔
    if (drawType.value == 'paint') {
      drawPaint(startX.value, startY.value, e.offsetX, e.offsetY)
      startX.value = e.offsetX
      startY.value = e.offsetY
    // 橡皮擦
    } else if (drawType.value == 'eraser') {
      ctx.value.clearRect(
        e.offsetX - 0.5 * config.eraserWidth,
        e.offsetY - 0.5 * config.eraserWidth,
        config.eraserWidth,
        config.eraserWidth
      )
    // 矩形
    } else if (drawType.value == 'rect') {
      drawRect(startX.value, startY.value, e.offsetX - startX.value, e.offsetY - startY.value)
    // 椭圆
    } else if (drawType.value == 'ellipse') {
      drawEllipse(startX.value, startY.value, e.offsetX, e.offsetY)
    // 箭头
    } else if (drawType.value == 'arrow') {
      drawArrow(startX.value, startY.value, e.offsetX, e.offsetY)
    }
  }
}

// 结束绘制
function onEnd() {
  if (['rect', 'ellipse', 'arrow'].includes(drawType.value)) {
    mergeCanvas()
  }
  isDrawing.value = false
}

// 绘制画笔
function drawPaint(x1, y1, x2, y2) {
  ctx.value.beginPath()
  ctx.value.moveTo(x1, y1)
  ctx.value.lineTo(x2, y2)
  ctx.value.lineWidth = config.lineWidth
  ctx.value.strokeStyle = config.color
  ctx.value.stroke()
}

// 绘制矩形框
function drawRect(x, y, width, height) {
  ctxTemp.value.clearRect(0, 0, canvasTemp.value.width, canvasTemp.value.height)
  ctxTemp.value.beginPath()
  ctxTemp.value.lineWidth = config.lineWidth
  ctxTemp.value.strokeStyle = config.color
  ctxTemp.value.rect(x, y, width, height)
  ctxTemp.value.stroke()
}

// 绘制椭圆
function drawEllipse(x1, y1, x2, y2) {
  ctxTemp.value.clearRect(0, 0, canvasTemp.value.width, canvasTemp.value.height)
  ctxTemp.value.beginPath()
  ctxTemp.value.lineWidth = config.lineWidth
  ctxTemp.value.strokeStyle = config.color
  ctxTemp.value.ellipse(x1 + Math.abs(x2 - x1) / 2, y1 + Math.abs(y2 - y1) / 2, Math.abs(x2 - x1), Math.abs(y2 - y1), 0, 0, Math.PI * 2, false)
  ctxTemp.value.stroke()
}

// 绘制箭头
function drawArrow(x1, y1, x2, y2) {
  ctxTemp.value.clearRect(0, 0, canvasTemp.value.width, canvasTemp.value.height)
  ctxTemp.value.beginPath()
  ctxTemp.value.moveTo(x1, y1)
  ctxTemp.value.lineTo(x2, y2)
  ctxTemp.value.lineWidth = config.lineWidth
  ctxTemp.value.strokeStyle = config.color
  ctxTemp.value.stroke()

  let angle = Math.atan2(y2 - y1, x2 - x1)
  let arrowWidth = parseInt(config.lineWidth * 7, 10)
  let endX = x2 + 0.5 * arrowWidth * Math.cos(angle)
  let endY = y2 + 0.5 * arrowWidth * Math.sin(angle)
  ctxTemp.value.beginPath()
  ctxTemp.value.moveTo(endX, endY)
  ctxTemp.value.lineTo(x2 - arrowWidth * Math.cos(angle - Math.PI / 6), y2 - arrowWidth * Math.sin(angle - Math.PI / 6))
  ctxTemp.value.lineTo(x2 - arrowWidth * Math.cos(angle + Math.PI / 6), y2 - arrowWidth * Math.sin(angle + Math.PI / 6))
  ctxTemp.value.closePath()
  ctxTemp.value.fillStyle = config.color
  ctxTemp.value.fill()
}

// 合并canvas
function mergeCanvas() {
  let width = parseInt(canvas.value.style.width, 10)
  let height = parseInt(canvas.value.style.height, 10)
  ctx.value.drawImage(canvasTemp.value, 0, 0, canvasTemp.value.width, canvasTemp.value.height, 0, 0, width, height)
  ctxTemp.value.clearRect(0, 0, canvasTemp.value.width, canvasTemp.value.height)
}

// 清空
function clearCanvas() {
  ctx.value.clearRect(0, 0, canvas.value.width, canvas.value.height)
  if (drawType.value == 'eraser') {
    setDrawType('paint')
  }
}
</script>

<style lang="scss">
.whiteboard-box {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.whiteboard-btns {
  flex-shrink: 0;
  margin-bottom: 12px;
  .el-color-picker {
    margin: 0 12px;
    vertical-align: middle;
  }
}

.whiteboard {
  position: relative;
  overflow: hidden;
  flex: 1;
  border: 1px solid var(--el-border-color-light);
}
.whiteboard-canvas {
  display: block;
  cursor: grabbing;
}
.whiteboard-temp {
  display: none;
  position: absolute;
  left: 0;
  top: 0;
  display: block;
  cursor: crosshair;
}
</style>
