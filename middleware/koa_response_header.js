// 设置响应头的中间件
module.exports = async (ctx, next) => {
    // 设置响应类型
    const contentType = 'applocation/json;charset=utf-8';
    ctx.set('Content-Tyoe', contentType);
    ctx.set('Access-Control-Allow-Origin', '*');
    ctx.set('Access-Control-Allow-Methods', 'OPTIONS,GET,PUT,POST,DELETE');
    
    const ret = await next();
    ctx.response.body = ret;
}