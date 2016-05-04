'use strict'
const menubar = require('menubar')
const BrowserWindow = require('electron').BrowserWindow
const ipc = require('electron').ipcMain

const isDev = process.env.NODE_ENV === 'development'

const mb = menubar({
  dir: __dirname,
  icon: __dirname + '/images/icon.png',
  width: 300
})


mb.on('ready', function ready () {
  console.log('app is ready')
  let popup

  ipc.on('create popup', () => {
    popup = new BrowserWindow({ fullscreen: true, show: false })
    popup.on('closed', function() {
      popup = null
      mb.window.webContents.send('restart timer')
    })

    popup.loadURL(`file://${__dirname}/popup.html`)
    popup.show()     
  })

  ipc.on('close popup', () => {
    popup.close()
  })
})

mb.on('after-create-window', function () {
  if (isDev) {
    mb.window.openDevTools()
  }
})