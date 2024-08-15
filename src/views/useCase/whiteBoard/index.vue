<!-- canvas白板 -->
<template>
  <div class="whiteboard-box">
    <div class="whiteboard-btns">
      <el-button
        :type="config.drawType == 'paint'? 'primary' : ''" 
        @click="setDrawType('paint')">
        画笔
      </el-button>

      <el-button
        :type="config.drawType == 'rect'? 'primary' : ''"
        @click="setDrawType('rect')">
        矩形
      </el-button>

      <el-button
        :type="config.drawType == 'ellipse'? 'primary' : ''"
        @click="setDrawType('ellipse')">
        椭圆
      </el-button>

      <el-button
        :type="config.drawType == 'arrow'? 'primary' : ''"
        @click="setDrawType('arrow')">
        箭头
      </el-button>

      <el-button
        :type="config.drawType == 'text'? 'primary' : ''"
        @click="setDrawType('text')">
        文本
      </el-button>

      <el-color-picker v-model="config.color" :predefine="predefine" />

      <el-button
        :type="config.drawType == 'eraser'? 'primary' : ''"
        @click="setDrawType('eraser')">
        橡皮擦
      </el-button>

      <el-button style="margin-left: 36px;" type="" @click="clearCanvas">清空</el-button>
    </div>

    <div class="whiteboard">
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
        v-show="['rect', 'ellipse', 'arrow'].includes(config.drawType)"
        ref="canvasTemp"
        class="whiteboard-temp"
        width="" height=""
        @mousedown="onStart"
        @mousemove="onDrawing"
        @mouseup="onEnd"
        @mouseleave="onEnd">
      </canvas>

      <div ref="inputRef"
        v-show="config.drawType == 'text' && isInput"
        class="whiteboard-input" contenteditable="true"
        :style="{ 'color': config.color, 'left': pageX + 'px', 'top': (pageY - 16) + 'px' }"
        @blur="drawText">
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'

const canvas = ref()
const canvasTemp = ref()
const ctx = ref()
const ctxTemp = ref()

// 配置
const config = reactive({
  drawType: 'paint', // 绘制类型
  lineWidth: 1.5,    // 线条粗细
  color: '#ff0000',  // 线条颜色
  eraserWidth: 20,   // 橡皮擦大小
})

/**
 * 设置绘制类型
 * @param type paint画笔，rect矩形，ellipse椭圆，arrow箭头，eraser橡皮
 */
function setDrawType(type) {
  config.drawType = type
}

// color-picker 预置颜色
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
const pageX = ref(0)
const pageY = ref(0)
// 是否在绘制
const isDrawing = ref(false)
// 是否在输入文本
const isInput = ref(false)
const inputRef = ref()

// 开始绘制
function onStart(e) {
  if (config.drawType != 'text') {
    isDrawing.value = true
    startX.value = e.offsetX
    startY.value = e.offsetY
  } else {
    if (!isInput.value) {
      isInput.value = true
      startX.value = e.offsetX
      startY.value = e.offsetY
      pageX.value = e.pageX
      pageY.value = e.pageY
      setTimeout(() => {
        inputRef.value.focus()
      }, 20)
    }
  }
}

// 绘制
function onDrawing(e) {
  if (isDrawing.value) {
    // 画笔
    if (config.drawType == 'paint') {
      drawPaint(startX.value, startY.value, e.offsetX, e.offsetY)
      startX.value = e.offsetX
      startY.value = e.offsetY
    // 橡皮擦
    } else if (config.drawType == 'eraser') {
      ctx.value.clearRect(
        e.offsetX - 0.5 * config.eraserWidth,
        e.offsetY - 0.5 * config.eraserWidth,
        config.eraserWidth,
        config.eraserWidth
      )
    // 矩形
    } else if (config.drawType == 'rect') {
      drawRect(startX.value, startY.value, e.offsetX - startX.value, e.offsetY - startY.value)
    // 椭圆
    } else if (config.drawType == 'ellipse') {
      drawEllipse(startX.value, startY.value, e.offsetX, e.offsetY)
    // 箭头
    } else if (config.drawType == 'arrow') {
      drawArrow(startX.value, startY.value, e.offsetX, e.offsetY)
    }
  }
}

// 结束绘制
function onEnd() {
  if (isDrawing.value) {
    if (['rect', 'ellipse', 'arrow'].includes(config.drawType)) {
      mergeCanvas()
    }
    isDrawing.value = false
  }
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

// 绘制文本
function drawText(e) {
  let textArr = e.target.innerText.split(/\n\r|\n/)
  textArr.forEach((item, index) => {
    ctx.value.fillStyle = config.color
    ctx.value.font = '14px "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif'
    let x = startX.value + 9
    let y = startY.value - 14 + (index + 1) * 20
    ctx.value.fillText(item, x, y)
  })
  e.target.innerText = ''
  isInput.value = false
}

// 清空
function clearCanvas() {
  ctx.value.clearRect(0, 0, canvas.value.width, canvas.value.height)
  if (config.drawType == 'eraser') {
    setDrawType('paint')
  }
}
</script>

<style lang="scss">
.whiteboard-box {
  width: 100%;
  height: 100%;
}

.whiteboard-btns {
  margin-bottom: 12px;
  .el-color-picker {
    margin: 0 12px;
    vertical-align: middle;
  }
}

.whiteboard {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: calc(100% - 32px - 12px);
  border: 1px solid var(--el-border-color-light);
}

.whiteboard-canvas {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  cursor: grabbing;
}

.whiteboard-temp {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  cursor: crosshair;
}

.whiteboard-input {
  position: fixed;
  z-index: 3;
  overflow: hidden;
  box-sizing: border-box;
  min-width: 60px;
  max-width: 100%;
  padding: 6px 8px;
  line-height: 20px;
  white-space: nowrap;
  border: 1px solid var(--el-border-color);
  border-radius: 4px;
}
</style>
