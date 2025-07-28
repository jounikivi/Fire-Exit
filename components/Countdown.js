// You can write more code here

/* START OF COMPILED CODE */

class Countdown {
  constructor(gameObject) {
    gameObject['__Countdown'] = this

    /** @type {Phaser.GameObjects.Text} */
    this.gameObject = gameObject

    /* START-USER-CTR-CODE */
    // Write your code here.

    /** @type {Phaser.Time.TimerEvent} */
    this.timerEvent

    const scene = this.gameObject.scene

    // each time the scene is updated, call the `update` method
    scene.events.on(Phaser.Scenes.Events.UPDATE, this.update, this)

    /* END-USER-CTR-CODE */
  }

  /** @returns {Countdown} */
  static getComponent(gameObject) {
    return gameObject['__Countdown']
  }

  /* START-USER-CODE */

  // Write your code here.

  start(callback, duration = 5000) {
    this.scene = this.gameObject.scene

    this.duration = duration

    // 1️⃣ stop in case one is already running
    this.stop()

    // 2️⃣ create a TimerEvent with given duration
    this.timerEvent = this.scene.time.addEvent({
      delay: duration,
      callback: () => {
        this.gameObject.text = '0' // 👈 set to 0 since time is up
        this.stop()

        // 3️⃣ execute callback when finished
        if (callback) {
          callback()
        }
      },
    })
  }

  stop() {
    if (this.timerEvent) {
      this.timerEvent.destroy()
      this.timerEvent = undefined
    }
  }

  update() {
    if (!this.timerEvent || this.duration <= 0) {
      return
    }

    // 1️⃣ get the elapsed time
    const elapsed = this.timerEvent.getElapsed()

    // 2️⃣ subtract from total duration
    const remaining = this.duration - elapsed

    // 3️⃣ convert from milliseconds to seconds
    const seconds = remaining / 1000

    // 4️⃣ change label to show new value
    this.gameObject.text = seconds.toFixed(0)
  }

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
