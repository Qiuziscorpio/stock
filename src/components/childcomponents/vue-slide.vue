<template>
    <div class="slider"
    @touchmove="swipeMove"
    @touchstart="swipeStart"
    @touchend="swipeEnd"
    @mousedown="swipeStart"
    @mouseup="swipeEnd"
    @mousemove="swipeMove"
    >
        <slot></slot>
    </div>
</template>

<script>
export default {
  props: ['slide', 'pages'],
  mounted () {
    this.$on('slideTo', (num) => {
      this.turnTo(num)
    })
    this.$on('slideNext', () => {
      this.next()
    })
    this.$on('slidePre', () => {
      this.pre()
    })
  },
  methods: {
    swipeUp (move) {
      this.$emit('swipeUp', move)
    },
    swipeDown (move) {
      this.$emit('swipeDown', move)
    },
    reset () {
      let slideTmp = this.pages
      for (let page in slideTmp) {
        page.current = 0
        this.styleCompute(page)
      }
    },
    checkState () {
      this.slide.init.canNext = true
      this.slide.init.canPre = true
      let len = this.pages.length
      if (this.pages[len - 2].origin + this.pages[len - 2].current === -100) {
        this.slide.init.canNext = false
      }
      if (this.pages[1].origin + this.pages[1].current === 100) {
        this.slide.init.canPre = false
      }
    },
    swipeStart (e) {
      if (e.type === 'touchstart') {
        if (e.touches.length > 1) {
          this.slide.init.tracking = false
          return
        } else {
       
          this.slide.init.tracking = true
          this.slide.init.start.t = new Date().getTime()
          this.slide.init.start.x = e.targetTouches[0].clientX
          this.slide.init.start.y = e.targetTouches[0].clientY
        }
      } else {
        this.slide.init.tracking = true
        this.slide.init.start.t = new Date().getTime()
        this.slide.init.start.x = e.clientX
        this.slide.init.start.y = e.clientY
      }
    },
    swipeMove (e) {
      if (this.slide.init.tracking) {
        if (e.type === 'touchmove') {
          e.preventDefault()
          this.slide.init.end.x = e.targetTouches[0].clientX
          this.slide.init.end.y = e.targetTouches[0].clientY
        } else {
          e.preventDefault()
          this.slide.init.end.x = e.clientX
          this.slide.init.end.y = e.clientY
        }
      }
    },
    swipeEnd (e) {
      this.slide.init.tracking = false
      let now = new Date().getTime()
      let deltaTime = now - this.slide.init.start.t
      let deltaX = this.slide.init.end.x - this.slide.init.start.x
      let deltaY = this.slide.init.end.y - this.slide.init.start.y
      if (deltaTime > this.slide.init.thresholdTime) {
        return
      } else {
        if ((deltaX > this.slide.init.thresholdDistance) && (Math.abs(deltaY) < this.slide.init.thresholdDistance)) {
          this.pre()
        } else if ((-deltaX > this.slide.init.thresholdDistance) && (Math.abs(deltaY) < this.slide.init.thresholdDistance)) {
          this.next()
        } else if ((deltaY > this.slide.init.thresholdDistance) && (Math.abs(deltaX) < this.slide.init.thresholdDistance)) {
          this.swipeDown(Math.abs(deltaY))
        } else if ((-deltaY > this.slide.init.thresholdDistance) && (Math.abs(deltaX) < this.slide.init.thresholdDistance)) {
          this.swipeUp(Math.abs(deltaY))
        } else {
        }
      }
    },
    pre () {
      if (!this.slide.init.canPre) return
      for (let page in this.pages) {
        this.currentCompute(this.pages[page], false)
      }
      this.slide.init.currentPage--
      this.checkState()
    },
    next () {
      if (!this.slide.init.canNext) return
      for (let page in this.pages) {
        this.currentCompute(this.pages[page], true)
      }
      this.slide.init.currentPage++
      this.checkState()
    },
    turnTo (num) {
      let index = Math.ceil(num) - 1
      let len = this.pages.length
      let step = 0
      if (index > this.pages.length - 1) {
        return false
      }
      this.slide.init.currentPage = Math.ceil(num)
      for (let i = 0; i < len; i++) {
        if (this.pages[i].current + this.pages[i].origin === 0) {
          step = index - i
          break
        }
      }
      for (let page in this.pages) {
        page.current = page.current - step * 100
        this.styleCompute(page)
      }
      this.checkState()
    },
    currentCompute (obj, next) {
      if (next) {
        obj.current = obj.current - 100
      } else {
        obj.current = obj.current + 100
      }
      this.styleCompute(obj)
    },
    styleCompute (obj) {
    	console.log(obj.style)
     // obj.style['transform'] = `translateX(${obj.origin + obj.current}%)`
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.slider {
    position: relative;
    height: 8rem;
    top: 0;
    left: 0;
    color: #000;
    overflow: hidden;
}
.slider-item {
    position: absolute;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: 0.4s ease-in-out transform, opacity;
    -webkit-transition: 0.4s ease-in-out transform, opacity;
    -webkit-transition-duration: 0.4s;
    -webkit-transition-timing-function: ease-in-out;
}
</style>

