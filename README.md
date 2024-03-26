a library package to detect or check js simple value type in js runtime

## File size

file | size | gzip | brotli
:---- | :---- | :---- | :----
dist/main.cjs | 0.88kb | 0.46kb | 0.38kb
dist/main.js | 0.75kb | 0.41kb | 0.33kb
dist/main.min.cjs | 0.69kb | 0.41kb | 0.34kb
dist/main.min.js | 0.57kb | 0.35kb | 0.30kb
dist/main.umd.cjs | 1.24kb | 0.59kb | 0.49kb
dist/main.umd.min.cjs | 0.82kb | 0.49kb | 0.41kb

~~note: files with 'min' label do not upload.~~

## Background

There has been a requirement that you need to convert the user's text value to the original js value. So, do you want to check the original value of js after conversion?

## Features

- detect or check js simple value type in js runtime

## User installing

- You can import directly via npm cdn
```html
<!-- unpkg.com/:package@:version/:file -->
<!-- unpkg.com/nano-jssv-check@1.0.0/dist/main.js -->
<!-- jsdelivr -->
<!-- unpkg.zhimg.com -->
```

- You can install it via the npm library tool
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
## Product Closed Loop

Small, single function, only do one thing - detect or check js simple value type in js runtime

## Product operation and maintenance

Because the function is simple, it determines its development speed, update speed, problem speed will not be slow

## Product plans

Because the function is simple, the function has been basically completed. In the later stage, small patches will be updated mainly according to the needs of binary packages or other library packages. There will be no major changes in functions. The architecture may change with the update of technology.

## License certificate

You can do anything with it, but please do not violate the laws of your area. I will not accept any responsibility for your actions.


## Concluding remarks

> I am proud to be a programmer, and although I don't leave home, I have the power to change the world (maybe a little big) at my fingertips. Even if it can't be achieved, it's a good goal to strive for. -- from lencx

It is a blank sheet of paper, you have any ideas, you can directly code out, how to compile, how to set the rules, you decide.

