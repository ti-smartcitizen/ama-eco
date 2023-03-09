<!-- eslint-disable vue/no-v-html -->
<template>
  <div>
    <div>
      <Header :slides="true" />
    </div>
    <main>
      <div
        id="who-we-are"
        class="container-fluid programas col-xxl-8 py-2 py-lg-0"
      >
        <div class="row flex-lg-row align-items-stretch h-100">
          <div
            class="col-12 col-lg-6 py-lg-5 programasAmbientais d-flex align-items-center justify-content-center"
          >
            <img
              src="~/assets/programas-ambientais.jpg"
              class="d-block mx-auto my-auto w-75 mw-100"
              loading="lazy"
            />
          </div>
          <div
            class="col-12 col-lg-6 olaPrograma align-items-start justify-content-center align-items-lg-center d-flex"
          >
            <div class="p-3 p-lg-5 text-center text-lg-left">
              <h1 class="display-5 fw-bold lh-1 mb-4">
                {{ $store.state.contentSite.home.about.title }}
              </h1>
              <p
                class="lead py-lg-4"
                v-html="$store.state.contentSite.home.about.desc"
              ></p>
            </div>
          </div>
        </div>
      </div>
      <div id="environmental-programs" class="steps container-fluid">
        <div
          class="container h-100 justify-content-center align-items-center d-flex"
        >
          <div class="row pt-5 pb-3 d-none d-lg-flex text-center text-lg-left">
            <div
              v-for="(item, id) of $store.state.contentSite.home.cards"
              :key="id + 'A'"
              class="col-12 col-lg-4 pb-5"
            >
              <img
                :src="require(`~/assets/${item.img}`)"
                alt=""
                class="mb-3"
                height="70"
              />
              <h2 v-html="item.title"></h2>
              <p>{{ item.text }}</p>
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
      </div>
      <div id="our-app">
        <HowWorks />
      </div>

      <div class="container-fluid tarefasODS">
        <div class="row h-100">
          <div class="container">
            <div
              class="row justify-content-center align-items-lg-center h-100 bgVerde"
            >
              <div class="d-none d-lg-flex col col-lg-7"></div>
              <div class="col-12 col-lg-5">
                <h1 class="mb-3 mb-lg-5 mx-auto pl-4">
                  {{ $store.state.contentSite.home.jobs_ods.title }}
                </h1>
                <h3 class="w-100 w-lg-75 mb-3 mb-lg-5 mx-auto">
                  {{ $store.state.contentSite.home.jobs_ods.sub_title }}
                </h3>
                <p class="w-100 w-lg-75 mb-3 mx-auto">
                  {{ $store.state.contentSite.home.jobs_ods.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="banner d-lg-flex d-xxl-flex justify-content-center px-2 px-lg-5 px-xxl-5 py-5"
      >
        <Banner />
      </div>
    </main>
    <Footer />
  </div>
</template>

<script>
import HowWorks from '../components/sections/HowWork.vue'
import Banner from '../components/Banner.vue'
export default {
  components: {
    HowWorks,
    Banner,
  },
  data() {
    return {
      posts: [],
      pins: [],
      markerOptions: {
        url: require('~/assets/pin_mapa.png'),
        size: { width: 45, height: 54, f: 'px', b: 'px' },
        scaledSize: { width: 45, height: 54, f: 'px', b: 'px' },
      },
    }
  },
  beforeMount() {
    this.$axios
      .$get('https://blog.cidadeama.com.br/wp-json/wp/v2/posts')
      .then((res) => {
        this.posts.push({
          ...res[0],
          categoria: null,
          thumb: null,
        })
        this.posts.push({
          ...res[1],
          categoria: null,
          thumb: null,
        })
        this.getCategoriaPost(res[0].categories[0], 0)
        this.getThumbPost(res[0].featured_media, 0)
        this.getCategoriaPost(res[1].categories[0], 1)
        this.getThumbPost(res[1].featured_media, 1)
      })
  },
  mounted() {
    this.getPins()
  },
  methods: {
    async getCategoriaPost(id, key) {
      await this.$axios
        .get('https://blog.cidadeama.com.br/wp-json/wp/v2/categories/' + id)
        .then((resposta) => {
          this.posts[key].categoria = resposta.data.name
        })
    },
    async getThumbPost(id, key) {
      await this.$axios
        .get('https://blog.cidadeama.com.br/wp-json/wp/v2/media/' + id)
        .then((resposta) => {
          this.posts[key].thumb = resposta.data.source_url
        })
    },
    async getPins(id, key) {
      await this.$axios
        .get('https://api.ama.smartcitizen.tec.br/cidade/centro')
        .then((resposta) => {
          this.pins = resposta.data
        })
    },
    dataAtualFormatada(valor) {
      const data = new Date(valor)
      const dia = data.getDate().toString()
      const diaF = dia.length === 1 ? '0' + dia : dia
      const mes = (data.getMonth() + 1).toString() // +1 pois no getMonth Janeiro começa com zero.
      const mesF = mes.length === 1 ? '0' + mes : mes
      const anoF = data.getFullYear()
      return diaF + '/' + mesF + '/' + anoF
    },
  },
}
</script>
