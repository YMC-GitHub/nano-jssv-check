一个类库包，用于在 js 运行时中 判断/校验 js 原生值类型

## 文件大小

file | size | gzip | brotli
:---- | :---- | :---- | :----
dist/main.cjs | 0.88kb | 0.46kb | 0.38kb
dist/main.js | 0.75kb | 0.41kb | 0.33kb
dist/main.min.cjs | 0.69kb | 0.41kb | 0.34kb
dist/main.min.js | 0.57kb | 0.35kb | 0.30kb
dist/main.umd.cjs | 1.24kb | 0.59kb | 0.49kb
dist/main.umd.min.cjs | 0.82kb | 0.49kb | 0.41kb

~~备注： 带有 min 标志的文件未上传~~

## 项目背景

曾经完成过这样的一个需求：需要从将用户的文本值转换为 js 原始值。那么， 转换后的 js 原始值 要不要校验 ？

## 当前功能

- 在 js 中 判断/校验 js 原生值类型

## 用户安装

- 您可以通过npm cdn 直接引入
```html
<!-- unpkg.com/:package@:version/:file -->
<!-- unpkg.com/nano-jssv-check@1.0.0/dist/main.js -->
<!-- jsdelivr -->
<!-- unpkg.zhimg.com -->
```

- 您可以通过类库安装工具安装
```bash
npm i nano-jssv-check
```

```bash
yarn add nano-jssv-check
```

```bash
pnpm add nano-jssv-check
```

```ts
import {jssvcheck} from 'nano-jssv-check'
jssvcheck(true, "boolean")

import {StrvParse as strvparse} from 'nano-strv-parse'
const strvparsesafe = (value:any,type:string,desc?:any) => {let result=strvparse(value,type);if(!jssvcheck(result,type)){throw new Error(desc?desc:`expect ${result} to type ${type}`)};return result}
```

## 产品闭环

很小，功能单一，只做一件事—— 在 js 中 判断/校验 js 原生值类型

## 产品运维

因为功能简单，决定了它的开发速度，更新速度，问题速度不会很慢

## 产品计划

因为功能单一，功能已经基本完成，后期主要根据命令包或其他类库包的需要，更新小补丁，不会有功能大改的情况出现，架构可能会随着技术的更新而有变化

## 许可证书

您可以使用它做任何事，但是请不要违发您所在地区法律。我不会为您的行为承担任何责任。

## 结束语

> 身为一名程序员我很自豪，虽然足不出户，指尖却有着可以改变世界 (可能有点大了) 自己的力量。即使不能实现，将其作为努力的目标也不错。———— 摘自 lencx

它就是一张白纸，您有什么设想，可以直接编码出来，怎么编，规则怎么定，有您决定。