![VERSION](https://img.shields.io/badge/VERSION-1.0.4-blue.svg)
![VERSION](https://img.shields.io/badge/node-%3E%3D8.0.0-brightgreen.svg)

# Fe-Box

前端命令行工具

专注业务，化繁为简

### 注意
node 版本需要 8.0 以上

### 安装
```bash
npm i -g https://github.com/llb421270473/Fe-Box.git
```

### 使用
```bash
fe-box <command> [options]
```

### 关于样式构建
目录规范

sass -> css

* scss输入路径：`src/css/**/*.scss`
* dev 输出路径：`dev/css`
* dist输出路径：`dist/css`

sass -> wxss
* scss输入路径：`pages/**/*.scss`
* scss输出路径：`pages`

工作模式
* css-dev 默认会启动浏览器并加载`src/index.html`，修改sass会自动刷新
* css-dist 输出的文件会自动压缩
* wxss-dev 将sass转成wxss

css-dev

```bash
fe-box css-dev [targetDir]
```
> options：
>
> targetDir 选填，项目路径，默认是执行命令的当前面目录

css-dist

```bash
fe-box css-dist [targetDir]
```
> options：
>
> targetDir 选填，项目路径，默认是执行命令的当前面目录

wxss-dev

```bash
fe-box wxss-dev [targetDir]
```
> options：
>
> targetDir 选填，项目路径，默认是执行命令的当前面目录
