# vue-page-stack

**This is the version of Vue3.0, Vue2.0 please click [this link](https://github.com/hezhongfeng/vue-page-stack/tree/v1.5.0)**

[![npm version](https://badge.fury.io/js/vue-page-stack.svg)](https://badge.fury.io/js/vue-page-stack)

English | [简体中文](./README.zh-cn.md)

---

A Vue3 SPA navigation manager,cache the UI in the SPA like a native application, rather than destroy it.

<div align="center">
  <img src="https://gitee.com/hezf/assets/raw/master/202306021131512.gif">
</div>

## Example

[preview](http://vue-page-stack-example.vercel.app/)

[demo code](https://github.com/hezhongfeng/vue-page-stack-example)

## Features

- 🐉 Extend on vue-router, original navigation logic remains the same
- ⚽ `push` or `forward` renders the page and the newly rendered page is stored in Stack
- 🏆 `back` or `go(negative)` when the previous pages are not re-rendered, but read from the Stack, and these pages retain the previous content state, such as form content, scrollbar scroll position, etc.
- 🏈 `back` or `go(negative)` removes the unused pages from the Stack
- 🎓`replace` will update the current page in the Stack
- 🎉 The activated hook function is triggered when going back to the previous page
- 🚀 Support for browser backward and forward events
- 🐰 Provides routing direction changes and can add different animations when going forward and backward

## The difference between VuePageStack and KeepAlive

- 🌱 VuePageStack does not provide `include`, `exclude` and `max` parameters, because VuePageStack wants to achieve a complete page stack management, only in order in and out
- 🪁 KeepAlive will keep caching the page after it has been cached, and VuePageStack will help destroy the extra pages based on the page stack hierarchy
- 🧬 KeepAlive enters (not returns) the same route page and continues to reuse the previously cached page, while VuePageStack re-renders the page

## Installation and use

### Installation

```js
pnpm install vue-page-stack
```

### use

```js
import { createApp } from 'vue';
import VuePageStack from 'vue-page-stack';

const app = createApp(App);

// vue-router is necessary
app.use(VuePageStack, { router });
```

```js
// App.vue
<template>
  <router-view v-slot="{ Component }">
    <vue-page-stack>
      <component :is="Component" :key="$route.fullPath"></component>
    </vue-page-stack>
  </router-view>
</template>
```

## API

### install

use `Vue.use` to install `vue-page-stack`

```js
app.use(VuePageStack, options);
// example
app.use(VuePageStack, { router });
```

Options description：

| Attribute | Description         | Type   | Accepted Values     | Default        |
| --------- | ------------------- | ------ | ------------------- | -------------- |
| router    | vue-router instance | Object | vue-router instance | -              |
| name      | VuePageStack name   | String | 'VuePageStack'      | 'VuePageStack' |
| keyName   | stack-key name      | String | 'stack-key'         | 'stack-key'    |

you can customize VuePageStack's name and keyName

```js
app.use(VuePageStack, { router, name: 'VuePageStack', keyName: 'stack-key' });
```

### forward or backward

If you want to make some animate entering or leaving, `vue-page-stack` offers `stack-key-dir` to judge forward or backward.

```js
// App.vue
watch(route, to => {
  if (to.params['stack-key-dir'] === 'forward') {
    console.log('forward');
  } else {
    console.log('back');
  }
});
```

[example](https://github.com/hezhongfeng/vue-page-stack-example/blob/master/src/App.vue)

## Notes

### keyName

Why is the parameter `keyName` added to the route? To support the browser's backward and forward events，this is important in webApp or wechat.

### Changelog

Details changes for each release are documented in the [release notes](https://github.com/hezhongfeng/vue-page-stack/releases).

### Principle

Getting the current page instance refers to the `keep-alive` section of `Vue`.

## Thanks

The plug-in draws on both [vue-navigation](https://github.com/zack24q/vue-navigation) and [vue-nav](https://github.com/nearspears/vue-nav)，Thank you very much for their inspiration.

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<table>
  <tr>
    <td align="center"><a href="http://hezf.online"><img src="https://avatars2.githubusercontent.com/u/12163050?v=4" width="100px;" alt="hezf"/><br /><sub><b>hezf</b></sub></a><br /><a href="#design-hezhongfeng" title="Design">🎨</a></td>
    <td align="center"><a href="https://github.com/woshilina"><img src="https://avatars0.githubusercontent.com/u/28744945?v=4" width="100px;" alt="李娜"/><br /><sub><b>李娜</b></sub></a><br /><a href="https://github.com/hezhongfeng/vue-page-stack/commits?author=woshilina" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/yuxiaolei1989"><img src="https://avatars0.githubusercontent.com/u/7732447?v=4" width="100px;" alt="余小磊"/><br /><sub><b>余小磊</b></sub></a><br /><a href="https://github.com/hezhongfeng/vue-page-stack/commits?author=yuxiaolei1989" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/yellowbeee"><img src="https://avatars0.githubusercontent.com/u/16685984?v=4" width="100px;" alt="yellowbeee"/><br /><sub><b>yellowbeee</b></sub></a><br /><a href="https://github.com/hezhongfeng/vue-page-stack/commits?author=yellowbeee" title="Code">💻</a></td>
  </tr>
</table>
