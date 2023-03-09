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
                class="main-img"
                width="70"
              />
            </div>
            <div class="col-8">
              <div class="d-flex align-items-center">
                <svg
                  v-if="modalType.svg === 'feed'"
                  class="mr-4"
                  width="49"
                  height="54"
                  viewBox="0 0 49 54"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M48.1357 18.9997V50.981C48.1382 51.3312 48.0717 51.6785 47.9399 52.0029C47.8082 52.3274 47.6138 52.6228 47.3679 52.8721C47.122 53.1215 46.8294 53.32 46.5068 53.4562C46.1842 53.5925 45.8379 53.6639 45.4877 53.6663H2.78374C2.08191 53.6663 1.40879 53.3877 0.912266 52.8917C0.415746 52.3957 0.136449 51.7228 0.135742 51.021V2.97834C0.135742 1.54634 1.32774 0.333008 2.79708 0.333008H29.4691V16.333C29.4691 17.0403 29.75 17.7185 30.2501 18.2186C30.7502 18.7187 31.4285 18.9997 32.1357 18.9997H48.1357ZM48.1357 13.6663H34.8024V0.341008L48.1357 13.6663ZM13.4691 13.6663V18.9997H21.4691V13.6663H13.4691ZM13.4691 24.333V29.6663H34.8024V24.333H13.4691ZM13.4691 34.9997V40.333H34.8024V34.9997H13.4691Z"
                    fill="#131E3B"
                  />
                </svg>
                <div class="title">{{ modalType.title }}</div>
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
export default {
  name: 'ProgramModal',
  props: {
    modalType: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped>
.main-img {
  position: absolute;
  top: -265px;
  left: -200px;
  width: 498px;
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
  transition: all 0.3s ease;
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
