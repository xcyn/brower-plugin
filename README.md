## 描述
```
用于浏览器换肤的插件
```
## 关键功能记录
```
1、content_scripts 需要直接注入页面的JS
2、background 一个常驻的页面，它的生命周期是插件中所有类型页面中最长的，它随着浏览器的打开而打开，随着浏览器的关闭而关闭，所以通常把需要一直运行的、启动就运行的、全局的代码放在background里面
3、default_popup 用于菜单的操作洁面
4、permissions 希望chrome赋予你什么浏览器权限
```
## 参考学习地址
```
https://github.com/sxei/chrome-plugin-demo
```