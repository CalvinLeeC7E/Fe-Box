![VERSION](https://img.shields.io/badge/VERSION-1.0.3-blue.svg)
![VERSION](https://img.shields.io/badge/node-%3E%3D8.0.0-brightgreen.svg)

# fe-cli

前端命令行工具

专注业务，化繁为简

### 注意
node 版本需要 8.0 以上

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
* css-dev默认会启动浏览器并加载`src/index.html`，修改sass会自动刷新
* css-dist输出的文件会自动压缩

css-dev

```bash
fe-cli css-dev [targetDir]
```
> options：
>
> targetDir 选填，项目路径，默认是执行命令的当前面目录

css-dist

```bash
fe-cli css-dist [targetDir]
```
> options：
>
> targetDir 选填，项目路径，默认是执行命令的当前面目录

