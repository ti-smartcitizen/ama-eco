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
                <svg
                  v-if="modalType.svg === 'actions'"
                  class="mr-4"
                  width="49"
                  height="51"
                  viewBox="0 0 49 51"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M48.3242 0V5.33333C48.3242 31.0053 33.9962 42.6667 16.3242 42.6667H11.2522C11.8176 34.6347 14.3189 29.7733 20.8469 23.9973C24.0576 21.1573 23.7856 19.5173 22.2042 20.4587C11.3136 26.9387 5.90555 35.696 5.66555 49.68L5.65755 50.6667H0.324219C0.324219 47.032 0.633552 43.7333 1.24689 40.7147C0.633552 37.264 0.324219 32.5813 0.324219 26.6667C0.324219 11.9387 12.2629 0 26.9909 0C32.3242 0 37.6576 2.66667 48.3242 0Z"
                    fill="#131E3B"
                  />
                </svg>
                <svg
                  v-if="modalType.svg === 'street'"
                  class="mr-4"
                  width="59"
                  height="53"
                  viewBox="0 0 59 53"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M50.8122 50.3334C50.8122 51.0407 50.5312 51.719 50.0311 52.2191C49.531 52.7192 48.8527 53.0001 48.1455 53.0001H10.8122C10.1049 53.0001 9.42665 52.7192 8.92656 52.2191C8.42646 51.719 8.14551 51.0407 8.14551 50.3334V26.3334H0.145508L27.6842 1.29878C28.1751 0.852053 28.8151 0.604492 29.4788 0.604492C30.1426 0.604492 30.7825 0.852053 31.2735 1.29878L58.8122 26.3334H50.8122V50.3334ZM17.4788 31.6668C17.4788 34.8494 18.7431 37.9016 20.9936 40.1521C23.244 42.4025 26.2962 43.6668 29.4788 43.6668C32.6614 43.6668 35.7137 42.4025 37.9641 40.1521C40.2146 37.9016 41.4788 34.8494 41.4788 31.6668H36.1455C36.1455 33.4349 35.4431 35.1306 34.1929 36.3808C32.9426 37.6311 31.247 38.3334 29.4788 38.3334C27.7107 38.3334 26.015 37.6311 24.7648 36.3808C23.5146 35.1306 22.8122 33.4349 22.8122 31.6668H17.4788Z"
                    fill="#131E3B"
                  />
                </svg>

                <svg
                  v-if="modalType.svg === 'account'"
                  class="mr-4"
                  width="57"
                  height="48"
                  viewBox="0 0 57 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M53.8597 8H35.193C30.9496 8 26.8799 9.68571 23.8793 12.6863C20.8787 15.6869 19.193 19.7565 19.193 24C19.193 28.2435 20.8787 32.3131 23.8793 35.3137C26.8799 38.3143 30.9496 40 35.193 40H53.8597V45.3333C53.8597 46.0406 53.5788 46.7189 53.0787 47.219C52.5786 47.7191 51.9003 48 51.193 48H3.19303C2.48579 48 1.80751 47.7191 1.30742 47.219C0.807319 46.7189 0.526367 46.0406 0.526367 45.3333V2.66667C0.526367 1.95942 0.807319 1.28115 1.30742 0.781048C1.80751 0.280951 2.48579 0 3.19303 0H51.193C51.9003 0 52.5786 0.280951 53.0787 0.781048C53.5788 1.28115 53.8597 1.95942 53.8597 2.66667V8ZM35.193 13.3333H56.5264V34.6667H35.193C32.3641 34.6667 29.6509 33.5429 27.6506 31.5425C25.6502 29.5421 24.5264 26.829 24.5264 24C24.5264 21.171 25.6502 18.4579 27.6506 16.4575C29.6509 14.4571 32.3641 13.3333 35.193 13.3333ZM35.193 21.3333V26.6667H43.193V21.3333H35.193Z"
                    fill="#131E3B"
                  />
                </svg>

                <svg
                  v-if="modalType.svg === 'network'"
                  class="mr-4"
                  width="54"
                  height="47"
                  viewBox="0 0 54 47"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M36.1114 0.167969L44.6741 15H53.8021V20.3333H50.6901L48.6714 44.5546C48.6159 45.221 48.3121 45.8422 47.8202 46.2951C47.3282 46.748 46.6841 46.9996 46.0154 47H8.25542C7.58674 46.9996 6.94261 46.748 6.45067 46.2951C5.95874 45.8422 5.65492 45.221 5.59942 44.5546L3.57808 20.3333H0.46875V15H9.59408L18.1594 0.167969L22.7781 2.83464L15.7541 15H38.5141L31.4928 2.83464L36.1114 0.167969ZM29.8021 25.6666H24.4688V36.3333H29.8021V25.6666ZM19.1354 25.6666H13.8021V36.3333H19.1354V25.6666ZM40.4688 25.6666H35.1354V36.3333H40.4688V25.6666Z"
                    fill="#131E3B"
                  />
                </svg>

                <svg
                  v-if="modalType.svg === 'lead'"
                  class="mr-4"
                  width="44"
                  height="57"
                  viewBox="0 0 44 57"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.6579 35.4985V51.3332H24.9912V35.4985C35.5139 36.8105 43.6579 45.7865 43.6579 56.6665H0.991211C0.991299 51.4702 2.88771 46.4526 6.32455 42.5552C9.76139 38.6578 14.5024 36.1486 19.6579 35.4985ZM22.3245 32.6665C13.4845 32.6665 6.32454 25.5065 6.32454 16.6665C6.32454 7.8265 13.4845 0.666504 22.3245 0.666504C31.1645 0.666504 38.3245 7.8265 38.3245 16.6665C38.3245 25.5065 31.1645 32.6665 22.3245 32.6665Z"
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

<style scoped lang="scss">
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
