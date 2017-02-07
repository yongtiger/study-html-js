# Example #2

百度webuploader结合fengyuanchen/cropper（最新版v.3.0.0）

(百度webuploader的crop-avatar：https://github.com/fex-team/webuploader/tree/master/examples/cropper)

示例中的fengyuanchen/cropper版本为v.0.3.2，而与v3.0.0结合后出错！

分析原因之一：v3.0.0是replace，而v0.3.2是setImgSrc

```js
// $image.cropper("setImgSrc", src);
$image.cropper("replace", src);///替换为v3.0.0的replace
```

分析原因之二：两个版本upload.js中的data数据不同！
(具体参考代码注释)

```js
file._cropData = {

    ///[fengyuanchen/cropper(v.3.0.0)]改正百度webuploader之crop-avatar
    // x: data.x1,
    // y: data.y1,
    x: data.x,
    y: data.y,

    width: data.width,
    height: data.height,
    scale: data.scale
};
...
srcWrap( src, function( src ) {
    
    ///[fengyuanchen/cropper(v.3.0.0)]改正百度webuploader之crop-avatar，替换为v3.0.0的replace
    // $image.cropper("setImgSrc", src);
    $image.cropper("replace", src);
    
});
```
