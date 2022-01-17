// 处理业务逻辑的中间件，读取某个json文件的数据
const path = require('path');

const fileUtils = require('../utils/file_utils');

module.exports = async (ctx, next) => {
    const url = ctx.request.url; //  /api/seller   ../data/seller.json
    let filePath = url.replace('/api', '');
    filePath = '../data' + filePath + '.json';
    filePath = path.join(__dirname, filePath);
    try {
        const ret = await fileUtils.getFileJsonData(filePath);
        return ret;
    } catch(error) {
        const errorMsg = {
            message: '读取文件内容失败，文件资源不存在',
            status: 404
        }
        return JSON.stringify(errorMsg);
    }
    
    await next();
}