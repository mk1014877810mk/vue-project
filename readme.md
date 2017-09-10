﻿

#### $refs
* 在元素上声明ref="xxx"
    - 1:在原生dom元素上声明，通过$refs.xxx获取的就是原生的DOM对象
    - 2:在组件对象上声明，获取的就是vue的组件对象,由此就能获取到组件对象的函数和属性

#### 组件内的钩子
```javascript
 beforeRouteEnter (to, from, next) {
    在渲染该组件的对应路由被 confirm 前调用
    不！能！获取组件实例 `this`
    因为当钩子执行前，组件实例还没被创建
  },
  beforeRouteUpdate (to, from, next) {
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
  },
  beforeRouteLeave (to, from, next) {
    导航离开该组件的对应路由时调用
    可以访问组件实例 `this`
  }

```