/* 
 * 数据流保存为文件
 * @param response: 服务端返回数据
 * @param customFilename: 自定义文件名，选填
 */
function saveBlobFile(response, customFilename) {
    // 提取文件名
    let filename = '',
        type = 'application/octet-stream';
    // 从头文件获取文件名
    if (response.headers['content-disposition']) {
        filename = response.headers['content-disposition'].match(/filename=(.*)/)[1];
    }
    if (customFilename) {
        filename = customFilename;
    }
    // 文件类型
    if (response.headers['content-type']) {
        type = response.headers['content-type'];
    }
    // 将二进制流转为blob
    const blob = new Blob([response.data], {
        type: type
    });
    // 兼容IE：window.navigator.msSaveBlob以本地方式保存文件
    if (typeof window.navigator.msSaveBlob !== 'undefined') {
        window.navigator.msSaveBlob(blob, decodeURI(filename));
    } else {
        // 创建blob url地址
        const blobURL = window.URL.createObjectURL(blob);
        const tempLink = document.createElement('a');
        tempLink.style.display = 'none';
        tempLink.href = blobURL;
        tempLink.setAttribute('download', decodeURI(filename));
        if (typeof tempLink.download === 'undefined') {
            tempLink.setAttribute('target', '_blank');
        }
        document.body.appendChild(tempLink);
        tempLink.click();
        document.body.removeChild(tempLink);
        // 释放blob url地址
        window.URL.revokeObjectURL(blobURL);
    }
}

export default saveBlobFile;
