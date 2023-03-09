<template>
  <div class="como-funciona">
    <div class="carousel">
      <b-carousel
        id="carousel-fade"
        background="#fff"
        class="carousel-header w-100 d-none d-lg-block"
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
      </b-carousel>
      <b-carousel
        id="carousel-fade"
        class="carousel-header d-block d-lg-none"
        fade
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
            <!-- imagem 2 -->
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
      </b-carousel>
    </div>
  </div>
</template>
