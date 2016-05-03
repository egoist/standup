# Stand Up

This menubar app **forces** (really! force!) you to stand up in a specific time, 40 minutes by default.

It works fine now, but we still need to improve its UI 😅

![preview](http://ww4.sinaimg.cn/large/a15b4afegw1f3icrpmxm9j20e30cpjsa.jpg)

-

As soon as it has a stable and elegant UI we will distribute the `dmg` and `exe` version for you to download. Currently, you can download the [prebuilt version](http://7d9o3i.com1.z0.glb.clouddn.com/standup/latest.zip).

## Build

```bash
$ npm install -g electron-packager
$ cd standup
$ npm install
# build for your platform
$ electron-packager ...
# build for all platforms
$ npm run build:all
```

## License

[EGOIST](https://github.com/egoist)