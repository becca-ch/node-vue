# node-vue
node.js+vue.js全栈开发

1. 在server 里创建一个子项目
```bash
$ nest g app admin
```
将原来的结构(server => src) 转换成 (server => apps => admin/server) 多出 admin模块

2. 这时候启动 切换到server文件下
```bash
$ nest start -w admin
```

3. 新建一个lib文件 数据库 公共的数据库，所有的数据库文件都在这里写
```bash
$ nest g lib db
```

4. 连接数据库模块
```bash
$ yarn add @nestjs-typegoose @typegoose/typegoose
```

5.在admin 子项目里创建模块 -p admin 指向admin文件下创建子模块
```bash
$ nest g mo -p admin users 
$ nest g co -p admin users  创建控制器
```

### 后台管理界面
1. 在根目录下创建 admin 文件夹
```bash
$ vue create admin
```

2. 安装依赖插件
```bash
$ vue add element router
```

3. 启动admin
```bash
$ yarn serve
```
