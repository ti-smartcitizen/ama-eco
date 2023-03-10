<template>
  <div class="como-funciona">
    <div class="d-flex justify-content-center mt-5 mb-5 px-3">
      <div>
        <p class="mini-title">
          {{ $store.state.contentSite.home.about_app.mini_title }}
        </p>
        <h1 class="title">
          {{ $store.state.contentSite.home.about_app.title }}
        </h1>
      </div>
    </div>
    <div class="carousel pb-5">
      <b-carousel
        id="carousel-fade"
        background="#fff"
        class="carousel-header w-100 d-none d-lg-block mb-3"
        fade
        indicators
      >
        <b-carousel-slide>
          <template #img>
            <!-- imagem 1 -->
            <img
              v-if="$store.state.localStorage.languageActive == 1"
              src="../../assets/como-funciona/imagem1.png"
              alt=""
            />
            <img
              v-if="$store.state.localStorage.languageActive == 2"
              src="../../assets/como-funciona/en-imagem1.png"
              alt=""
            />
          </template>
        </b-carousel-slide>
        <b-carousel-slide>
          <template #img>
            <img
              v-if="$store.state.localStorage.languageActive == 1"
              src="../../assets/como-funciona/imagem2.png"
              alt=""
            />
            <img
              v-if="$store.state.localStorage.languageActive == 2"
              src="../../assets/como-funciona/en-imagem2.png"
              alt=""
            />
          </template>
        </b-carousel-slide>
        <b-carousel-slide>
          <template #img>
            <img
              v-if="$store.state.localStorage.languageActive == 1"
              src="../../assets/como-funciona/imagem3.png"
              alt=""
            />
            <img
              v-if="$store.state.localStorage.languageActive == 2"
              src="../../assets/como-funciona/en-imagem3.png"
              alt=""
            />
          </template>
        </b-carousel-slide>
        <b-carousel-slide>
          <template #img>
            <img
              v-if="$store.state.localStorage.languageActive == 1"
              src="../../assets/como-funciona/imagem4.png"
              alt=""
            />
            <img
              v-if="$store.state.localStorage.languageActive == 2"
              src="../../assets/como-funciona/en-imagem4.png"
              alt=""
            />
          </template>
        </b-carousel-slide>
        <b-carousel-slide>
          <template #img>
            <img
              v-if="$store.state.localStorage.languageActive == 1"
              src="../../assets/como-funciona/imagem5.png"
              alt=""
            />
            <img
              v-if="$store.state.localStorage.languageActive == 2"
              src="../../assets/como-funciona/en-imagem5.png"
              alt=""
            />
          </template>
        </b-carousel-slide>
        <b-carousel-slide>
          <template #img>
            <img
              v-if="$store.state.localStorage.languageActive == 1"
              src="../../assets/como-funciona/imagem6.png"
              alt=""
            />
            <img
              v-if="$store.state.localStorage.languageActive == 2"
              src="../../assets/como-funciona/en-imagem6.png"
              alt=""
            />
          </template>
        </b-carousel-slide>
      </b-carousel>
      <b-carousel
        id="carousel-fade"
        class="carousel-header d-block d-lg-none"
        fade
        indicators
      >
        <b-carousel-slide>
          <template #img>
            <!-- imagem 1 -->
            <img
              v-if="$store.state.localStorage.languageActive == 1"
              src="../../assets/como-funciona/imagem1.png"
              alt=""
            />
            <img
              v-if="$store.state.localStorage.languageActive == 2"
              src="../../assets/como-funciona/en-imagem1.png"
              alt=""
            />
          </template>
        </b-carousel-slide>
        <b-carousel-slide>
          <template #img>
            <img
              v-if="$store.state.localStorage.languageActive == 1"
              src="../../assets/como-funciona/imagem2.png"
              alt=""
            />
            <img
              v-if="$store.state.localStorage.languageActive == 2"
              src="../../assets/como-funciona/en-imagem2.png"
              alt=""
            />
          </template>
        </b-carousel-slide>
        <b-carousel-slide>
          <template #img>
            <img
              v-if="$store.state.localStorage.languageActive == 1"
              src="../../assets/como-funciona/imagem3.png"
              alt=""
            />
            <img
              v-if="$store.state.localStorage.languageActive == 2"
              src="../../assets/como-funciona/en-imagem3.png"
              alt=""
            />
          </template>
        </b-carousel-slide>
        <b-carousel-slide>
          <template #img>
            <img
              v-if="$store.state.localStorage.languageActive == 1"
              src="../../assets/como-funciona/imagem4.png"
              alt=""
            />
            <img
              v-if="$store.state.localStorage.languageActive == 2"
              src="../../assets/como-funciona/en-imagem4.png"
              alt=""
            />
          </template>
        </b-carousel-slide>
        <b-carousel-slide>
          <template #img>
            <img
              v-if="$store.state.localStorage.languageActive == 1"
              src="../../assets/como-funciona/imagem5.png"
              alt=""
            />
            <img
              v-if="$store.state.localStorage.languageActive == 2"
              src="../../assets/como-funciona/en-imagem5.png"
              alt=""
            />
          </template>
        </b-carousel-slide>
        <b-carousel-slide>
          <template #img>
            <img
              v-if="$store.state.localStorage.languageActive == 1"
              src="../../assets/como-funciona/imagem6.png"
              alt=""
            />
            <img
              v-if="$store.state.localStorage.languageActive == 2"
              src="../../assets/como-funciona/en-imagem6.png"
              alt=""
            />
          </template>
        </b-carousel-slide>
      </b-carousel>
    </div>
  </div>
</template>
