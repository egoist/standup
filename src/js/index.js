const ipc = require('electron').ipcRenderer

new Vue({
  el: 'body',
  data() {
    const defaultUserData = {
      workTime: 40,
      restTime: 10,
    }
    return {
      user: JSON.parse(localStorage.getItem('stand:user')) || defaultUserData,
      remainTime: null,
      paused: false
    }
  },
  ready() {
    this.startTimer()
    ipc.on('restart timer', this.startTimer.bind(this))
  },
  methods: {
    openFullWindow() {
      ipc.send('create popup')
    },
    handleConfirm() {
      const data = JSON.stringify(this.user)
      localStorage.setItem('stand:user', data)
      this.startTimer()
    },
    handleReset() {
      this.user = {
        workTime: 40,
        restTime: 10
      }
      const data = JSON.stringify(this.user)
      localStorage.setItem('stand:user', data)
    },
    handlePause() {
      this.paused = !this.paused
    },
    startTimer() {
      console.log('start')
      clearInterval(this.timer)
      this.remainTime = this.user.workTime * 60 * 1000
      this.timer = setInterval(() => {
        if (this.paused) {
          return
        }
        this.remainTime -= 1000
        if (this.remainTime <= 0) {
          clearInterval(this.timer)
          this.remainTime = null
          ipc.send('create popup')
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