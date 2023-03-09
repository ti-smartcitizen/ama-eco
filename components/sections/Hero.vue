<template>
  <div>
    <b-carousel
      id="carousel-fade"
      background="#fff"
      class="carousel-header w-100 d-none d-lg-block"
      fade
      indicators
    >
      <b-carousel-slide
        v-for="(item, id) of $store.state.contentHeader.carousel"
        :key="id + 'carousel'"
        :img-src="require(`~/assets/${item}`)"
      ></b-carousel-slide>
    </b-carousel>
    <b-carousel
      id="carousel-fade"
      class="carousel-header d-block d-lg-none"
      fade
      indicators
    >
      <b-carousel-slide
        v-for="(item, id) of $store.state.contentHeader.carousel_mobile"
        :key="id + 'carousel_mobile'"
        :img-src="require(`~/assets/${item}`)"
      ></b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {}
</script>

