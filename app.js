// 服务器入口文件
// 创建实例对象
const Koa = require('koa');
const app = new Koa();
// 绑定中间件

// 第一层响应耗时时间记录
const resDurationMiddleware = require('./middleware/koa_response_duration');
app.use(resDurationMiddleware);
// 第二层响应头处理，跨域响应头处理
const resHeaderMiddleware = require('./middleware/koa_response_header');
app.use(resHeaderMiddleware);
// 第三层业务逻辑数据处理
const resDataMiddleware = require('./middleware/koa_response_data');
app.use(resDataMiddleware);

// 监听端口
app.listen(8888);