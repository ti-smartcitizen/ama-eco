<template>
  <div id="environmental-programs" class="steps container-fluid">
    <div
      class="container h-100 justify-content-center align-items-center d-flex"
    >
      <div
        class="row list-programs pb-3 d-none d-lg-flex text-center text-lg-left"
      >
        <div
          v-for="(item, id) of $store.state.contentSite.home.cards"
          :key="id + 'A'"
          class="col-12 col-lg-4 pb-5 mt-5"
        >
          <div class="d-flex align-items-center">
            <SVGFactory :svg="item.modalSvg" color="#fff" />
            <h2 class="svg-title ml-4" v-html="item.title"></h2>
          </div>

          <p class="mt-4 main-text">{{ item.text }}</p>
          <svg
            class="btn-svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            @click="openModal(item)"
          >
            <rect width="32" height="32" rx="6" fill="white" />
            <path
              d="M15.167 15.167V10.167H16.8337V15.167H21.8337V16.8337H16.8337V21.8337H15.167V16.8337H10.167V15.167H15.167Z"
              fill="#131E3B"
            />
          </svg>
        </div>
      </div>

      <b-carousel
        id="carousel-fade"
        class="carousel-header carousel-cards w-100 h-100 d-flex d-lg-none p-2 p-lg-5 pt-5 pb- justify-content-center align-items-center"
        fade
      >
        <b-carousel-slide
          v-for="(item, id) of $store.state.contentSite.home.cards"
          :key="id + 'B'"
          class="itemSlideStep"
        >
          <template #img>
            <div class="d-flex align-items-center">
              <SVGFactory :svg="item.modalSvg" color="#fff" />
              <h2 class="svg-title ml-4" v-html="item.title"></h2>
            </div>
            <p class="mt-4 main-text">{{ item.text }}</p>
            <br />
            <p class="main-text">{{ item.modalText }}</p>
          </template>
        </b-carousel-slide>
      </b-carousel>
    </div>

    <ProgramModal
      v-if="showModal"
      :modal-type="modalType"
      @close="showModal = false"
    />
  </div>
</template>

<script>
import ProgramModal from '~/components/modals/ProgramModal.vue'
import SVGFactory from '~/components/SVGFactory.vue'

export default {
  components: {
    ProgramModal,
    SVGFactory,
  },
  data() {
    return {
      showModal: false,
      modalType: {
        title: '',
        text: '',
        svg: '',
        img: '',
      },
    }
  },
  methods: {
    openModal(item) {
      this.modalType = {
        title: item.title,
        text: item.modalText,
        svg: item.modalSvg,
        img: item.modalImg,
      }
      this.showModal = true
    },
  },
}
</script>

<style scoped lang="scss">
.list-programs {
  padding-top: 90px;
}

.btn-svg {
  cursor: pointer;
  &:hover {
    opacity: 0.9;
    path {
      fill: #2157cc;
    }
  }
}

.main-text {
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 200%;
  color: #fff;
}

.svg-title {
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 40px;
  line-height: 40px;
  color: #fff;
}
</style>
