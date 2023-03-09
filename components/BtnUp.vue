<template>
  <div @click="goToTop" id="btn-up" class="btn-up">
    <button>
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.99968 3.828V16H6.99968V3.828L1.63568 9.192L0.22168 7.778L7.99968 0L15.7777 7.778L14.3637 9.192L8.99968 3.828Z"
          fill="white"
        />
      </svg>
    </button>
  </div>
</template>
<script>
if (process.browser) {
  if (document.getElementById('btn-up')) {
    document.getElementById('btn-up').style.visibility = 'hidden'
    window.onscroll = function () {
      if (window.pageYOffset >= 500) {
        document.getElementById('btn-up').style.visibility = 'visible'
      } else {
        document.getElementById('btn-up').style.visibility = 'hidden'
      }
    }
  }
}
export default {
  methods: {
    goToTop(ev) {
      ev.preventDefault()
      window.scrollTo({ top: 0, behavior: 'smooth' })
    },
  },
}
</script>
<style lang="scss" scoped>
.btn-up {
  z-index: 999;
  position: fixed;
  bottom: 30px;
  right: 30px;
  cursor: pointer;
  button {
    background: #8acc0d;
    width: 40px;
    height: 40px;
    border-radius: 8px;
    border: none;
    box-shadow: none;
  }
}
</style>
