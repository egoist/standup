# Stand Up

This menubar app **forces** (really! force!) you to stand up in every 40 minutes.

**But I already have an Apple Watch**, you can put off the notification sent by your watch, that never works as expected.

**But I use [stand](https://getstandapp.com/)**, I do! But same problem as above, I always ignore those notifications and keep sitting on my chair.

**Use Stand-Up!**, You will be impressed by the way it forces you to stand up.

It works fine now, but we still need to improve its UI 😅

![preview](http://ww4.sinaimg.cn/large/a15b4afegw1f3icrpmxm9j20e30cpjsa.jpg)

-

As soon as it has a stable and elegant UI we will distribute the `dmg` and `exe` version for you to download. Currently, you can download the [prebuilt version](http://7d9o3i.com1.z0.glb.clouddn.com/standup/latest.zip).

## Build

```bash
$ npm install -g electron-packager
$ cd standup/src && npm install
$ cd .. && npm install
# build for your platform
$ electron-packager ...
# build for all platforms
$ npm run build:all
```

## License

MIT &copy; [EGOIST](https://github.com/egoist)