<!-- eslint-disable vue/no-v-html -->
<template>
  <div>
    <div>
      <Header />
      <Hero />
    </div>
    <main>
      <Intro />
      <Programs />
      <HowWork />
      <ODS />
      <Social />
      <Blog />
    </main>
    <Footer />
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

export default {
  components: {
    Hero,
    Intro,
    Programs,
    ODS,
    HowWork,
    Social,
    Blog,
  },
}
</script>
