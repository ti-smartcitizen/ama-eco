<!-- eslint-disable vue/no-v-html -->
<template>
  <div>
    <div>
      <Header />
      <Hero />
    </div>
    <main>
      <Intro id="about" />
      <Programs id="platform" />
      <HowWork id="how-it-works" />
      <ODS />
      <Social id="social-network" />
      <div
        class="banner d-lg-flex d-xxl-flex justify-content-center px-2 px-lg-5 px-xxl-5 pb-4"
      >
        <Banner />
      </div>
      <Blog id="blog" />
    </main>
    <Footer />
    <BtnUp />
  </div>
</template>

<script>
import Hero from '~/components/sections/Hero.vue'
import Intro from '~/components/sections/Intro.vue'
import Programs from '~/components/sections/Programs.vue'
import HowWork from '~/components/sections/HowWork.vue'
import ODS from '~/components/sections/ODS.vue'
import Social from '~/components/sections/Social.vue'
import Blog from '~/components/sections/Blog.vue'
import BtnUp from '~/components/BtnUp.vue'

export default {
  components: {
    Hero,
    Intro,
    Programs,
    ODS,
    HowWork,
    Social,
    Blog,
    BtnUp,
  },
}
</script>
