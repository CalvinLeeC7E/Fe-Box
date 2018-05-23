# fe-cli

前端命令行工具，提供标准化的解决方案

### 安装
```bash
cnpm i -g git+ssh://git@code.yuanbei.biz:front-end/fe-cli.git
```

### 使用
```bash
fe-cli <command> [options]
```

### 关于样式构建
目录规范
* scss输入路径：`src/css/**/*.scss`
* dev 输出路径：`dev/css`
* dist输出路径：`dist/css`

工作模式
* css-dev会自动启动http-server用来方便开发，无需拷贝文件
* css-dist输出的文件会自动压缩

css-dev

```bash
fe-cli css-dev -p 8080 -a 127.0.0.1 [targetDir]
```
> options：
>
> -p port 默认8080
>
> -a address 默认0.0.0.0
>
> targetDir 选填，项目路径，默认是执行命令的当前面目录

css-dist

```bash
fe-cli css-dist [targetDir]
```
> options：
>
> targetDir 选填，项目路径，默认是执行命令的当前面目录

