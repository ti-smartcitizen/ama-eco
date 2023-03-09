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
  data() {
    return {
      posts: [],
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
