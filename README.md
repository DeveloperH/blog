# 博客站点

自己搭建的个人博客网站，用于分享和记录知识。网站内容主要分为几大块：

* 博客内容展示
* 后台新增博客和修改已有博客
* GitBook文档归类
* 个人介绍信息。

网站已通过国家ICP备案，并且可以使用https协议进行安全访问。https://www.huangyihui.cn/



1. 网站主体使用vue前端框架搭建，通过组件模块化开发+vue-router实现页面展示，使用axios访问接口

2. 采用Bootstrap实现响应式布局，搭配其内置组件，在移动端和PC端都有良好的用户体验

3. 服务端使用 Express+MySQL实现数据交互，通过连接池保证多用户能够同时正常访问，在安全性上，对用户的自定义查询语句进行转义和判断，防止了恶意SQL注入

4. 优化方面：在搜索功能中通过使用函数防抖，减少对服务器的请求，节约资源

5. 该项目已开源。可在Github / Gitee中查看源代码



项目还有很多不足之处，接下来会继续改进和更新...