const ipc = require('electron').ipcRenderer

new Vue({
  el: 'body',
  data() {
    const remainTime = JSON.parse(localStorage.getItem('stand:user')).restTime * 60 * 1000
    return {
      remainTime
    }
  },
  ready() {
    this.startTimer()
  },
  methods: {
    closeWindow() {
      ipc.send('close popup')
    },
    startTimer() {
      this.timer = setInterval(() => {
        this.remainTime -= 1000
        if (this.remainTime <= 0) {
          clearInterval(this.timer)
        }
      }, 1000)
    }
  },
  filters: {
    formatTimer(val) {
      val = val / 1000
      if (val > 60) {
        return `${parseInt(val / 60)} minutes ${val % 60} seconds`
      }
      return `${val} seconds`
    }
  }
})