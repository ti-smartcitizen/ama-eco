<template>
  <transition name="modal">
    <div class="modal-mask" @click="$emit('close')">
      <div class="modal-wrapper">
        <div class="modal-container" @click.stop="">
          <div class="row pt-4 pb-4 pr-2">
            <div class="col-4 position-relative">
              <img
                :src="require(`~/assets/modals/${modalType.img}`)"
                alt=""
                :class="computedImgStyle"
              />
            </div>
            <div class="col-8 position-relative">
              <svg
                class="close-icon"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                @click="$emit('close')"
              >
                <path
                  d="M8.999 7.11465L15.599 0.514648L17.4843 2.39998L10.8843 8.99998L17.4843 15.6L15.599 17.4853L8.999 10.8853L2.39901 17.4853L0.513672 15.6L7.11367 8.99998L0.513672 2.39998L2.39901 0.514648L8.999 7.11465Z"
                  fill="#131E3B"
                />
              </svg>

              <div class="d-flex align-items-center">
                <SVGFactory :svg="modalType.svg" color="#131E3B" />
                <div class="title ml-4">{{ modalType.title }}</div>
              </div>
              <div class="subtitle">
                {{ modalType.text }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import SVGFactory from '~/components/SVGFactory.vue'

export default {
  name: 'ProgramModal',
  components: {
    SVGFactory,
  },
  props: {
    modalType: {
      type: Object,
      required: true,
    },
  },
  computed: {
    computedImgStyle() {
      if (
        this.modalType.img === 'modal-1.png' ||
        this.modalType.img === 'modal-5.png'
      ) {
        return 'main-img-1'
      } else if (
        this.modalType.img === 'modal-2.png' ||
        this.modalType.img === 'modal-4.png' ||
        this.modalType.img === 'modal-6.png'
      ) {
        return 'main-img-2'
      } else {
        return 'main-img-3'
      }
    },
  },
}
</script>

<style scoped lang="scss">
.main-img-1 {
  position: absolute;
  top: -265px;
  left: -190px;
  height: 840px;
}

.main-img-2 {
  position: absolute;
  top: -265px;
  left: -62px;
  height: 840px;
}

.main-img-3 {
  position: absolute;
  top: -265px;
  left: -162px;
  height: 840px;
}

.title {
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 64px;
  line-height: 100%;
  color: #131e3b;
}

.subtitle {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 200%;
  color: #565e73;
  margin-top: 12px;
}

.close-icon {
  position: absolute;
  top: -20px;
  right: 4px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
}

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 883px;
  margin: 0.1px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 24px;
  transition: all 0.5s ease;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
