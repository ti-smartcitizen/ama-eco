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
          class="col-12 col-lg-4 pb-5"
        >
          <div class="d-flex">
            <img
              :src="require(`~/assets/${item.img}`)"
              alt=""
              class="mb-3 mr-2"
              width="70"
            />
            <h2 v-html="item.title"></h2>
          </div>

          <p>{{ item.text }}</p>
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
        class="carousel-header carousel-cards w-100 h-100 d-flex d-lg-none p-2 p-lg-5 justify-content-center align-items-center"
        fade
        indicators
      >
        <b-carousel-slide
          v-for="(item, id) of $store.state.contentSite.home.cards"
          :key="id + 'B'"
          class="itemSlideStep"
        >
          <template #img>
            <img
              :src="require(`~/assets/${item.img}`)"
              alt=""
              class="mb-4 mb-lg-3"
              height="80"
            />
            <h2 class="mb-4 mb-lg-0" v-html="item.title"></h2>
            <p>{{ item.text }}</p>
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

export default {
  components: {
    ProgramModal,
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
      console.log(item)
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
  padding-top: 80px;
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
</style>
