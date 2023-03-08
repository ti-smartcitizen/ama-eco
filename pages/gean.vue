<!-- eslint-disable vue/no-v-html -->
<template>
  <div>
    <div>
      <Header />
      <Hero />
    </div>
    <main>
      <Intro />
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
      <div
        id="our-app"
        class="como-funciona container-fluid py-5 align-items-center d-flex"
      >
        <div class="container">
          <div class="text-center">
            <div class="row">
              <div class="col-12">
                <h1>{{ $store.state.contentSite.home.about_app.title }}</h1>
              </div>
            </div>
            <div class="row p-0 py-lg-5">
              <div class="col-12 mb-5 mb-lg-0 col-lg-4 align-items-stretch">
                <div
                  class="icon d-flex justify-content-center align-items-end align-items-lg-center"
                >
                  <img
                    src="~/assets/crie-sua-conta-ama.jpg"
                    class="mb-2"
                    height="175"
                  />
                </div>
                <h2
                  class="d-flex justify-content-center align-items-center mt-2 mt-lg-0"
                >
                  <p
                    v-html="
                      $store.state.contentSite.home.about_app.create_account
                    "
                  ></p>
                </h2>
                <p class="w-75 m-auto">
                  {{ $store.state.contentSite.home.about_app.free_download }}
                </p>
              </div>
              <div
                class="col-12 mb-5 mb-lg-0 col-lg-4 justify-content-center align-items-stretch"
              >
                <div
                  class="icon d-flex justify-content-center align-items-end align-items-lg-center"
                >
                  <img
                    src="~/assets/participe-das-nossas-pesquisas-e-tarefas.jpg"
                    class="mb-2"
                    height="175"
                  />
                </div>
                <h2
                  class="d-flex justify-content-center align-items-center mt-2 mt-lg-0"
                >
                  <p>
                    <span>{{
                      $store.state.contentSite.home.about_app.join_search
                    }}</span>
                  </p>
                </h2>
                <p class="w-75 m-auto">
                  {{ $store.state.contentSite.home.about_app.remunerated_job }}
                </p>
              </div>
              <div
                class="col-12 col-lg-4 mb-0 mb-lg-0 justify-content-center align-items-stretch"
              >
                <div
                  class="icon d-flex justify-content-center align-items-end align-items-lg-center"
                >
                  <img src="~/assets/deu-cash.jpg" class="mb-2" height="175" />
                </div>
                <h2
                  class="d-flex justify-content-center align-items-center mt-2 mt-lg-0"
                >
                  <p
                    v-html="$store.state.contentSite.home.about_app.get_cash"
                  ></p>
                </h2>
                <p class="w-75 m-auto">
                  {{ $store.state.contentSite.home.about_app.acumulate_points }}
                </p>
              </div>
            </div>
            <div class="row mt-4">
              <div class="col-12">
                <a href="/download-ama">{{
                  $store.state.contentSite.home.about_app.download_now
                }}</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!--<div class="container-fluid">
        <div class="row">
          <iframe
            width="100%"
            height="890"
            class="video"
            src="https://www.youtube.com/embed/vbpHlbU6NYQ"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
       container fluid -->

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

      <div id="blog" class="container blog pt-5">
        <div class="row mb-5">
          <div class="col-12 py-3 text-center">
            <h1 class="mx-5">{{ $store.state.contentSite.home.blog.title }}</h1>
          </div>
        </div>
        <!-- row -->
        <div
          v-for="(item, id) of posts"
          :key="id"
          class="row mb-0 mx-0 mx-lg-5"
        >
          <div class="col-12 blogpost">
            <div class="thumbnail">
              <img :src="item.thumb" class="d-block img-fluid" loading="lazy" />
            </div>
            <div class="card p-3 border-0">
              <div class="card-body">
                <p class="card-text">
                  {{ dataAtualFormatada(item.date) }} |
                  <span class="categoria">{{ item.categoria }}</span>
                </p>
                <h2>
                  <a :href="item.link" target="_blank">{{
                    item.title.rendered
                  }}</a>
                </h2>
                <p v-html="item.excerpt.rendered"></p>
                <a :href="item.link" target="_blank"
                  >{{ $store.state.contentSite.home.blog.read_more }}
                  <b-icon icon="arrow-right" size="1"
                /></a>
              </div>
            </div>
          </div>
        </div>
        <!--row-->
      </div>
      <!-- container -->
      <div class="container">
        <div class="row">
          <div class="col-12 my-2 my-lg-0 text-center">
            <a
              href="https://blog.cidadeama.com.br/"
              target="_blank"
              class="veja_mais_posts mx-auto"
              >{{ $store.state.contentSite.home.blog.most_posts }}</a
            >
          </div>
        </div>
        <hr />
      </div>
      <!-- container -->
      <div id="where-we-are" class="container ondeestamos my-5 text-center">
        <div class="row">
          <div class="col-12 mb-1">
            <h3>{{ $store.state.contentSite.home.localization.title }}</h3>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <h1 v-html="$store.state.contentSite.home.localization.sub_title" />
          </div>
        </div>
      </div>
      <div class="container-fluid">
        <div class="row">
          <GmapMap
            :center="{ lat: -25.43432, lng: -49.2638 }"
            :zoom="7"
            map-type-id="roadmap"
            style="width: 100%; height: 550px"
            :options="{
              zoomControl: false,
              mapTypeControl: false,
              scaleControl: false,
              streetViewControl: false,
              rotateControl: true,
              fullscreenControl: false,
              disableDefaultUi: true,
            }"
          >
            <GmapMarker
              v-for="(i, idx) in pins"
              :key="'PIN' + idx"
              :ref="`marker${idx}`"
              :position="{
                lat: Number(i.lat),
                lng: Number(i.lng),
              }"
              :clickable="false"
              :draggable="false"
              :icon="markerOptions"
            />
            <!-- <GmapCustomMarker
              v-for="(i, idx) in pins"
              :key="'PIN' + idx"
              ref="Cidades"
              class="markerGoogle Cidades"
              :draggable="false"
              :marker="{ lat: i.cidade_lat, lng: i.cidade_lng }"
            >
              <img src="~/assets/pin_mapa.png" height="30" />
            </GmapCustomMarker> -->
          </GmapMap>
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script>
import Hero from '~/components/sections/Hero.vue'
import Intro from '~/components/sections/Intro.vue'

export default {
  components: {
    Hero,
    Intro,
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
