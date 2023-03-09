<template>
  <div>
    <div id="blog" class="container blog pt-5">
      <div class="row mb-5">
        <div class="col-12 py-3 text-center">
          <h1 class="mx-5">{{ $store.state.contentSite.home.blog.title }}</h1>
        </div>
      </div>
      <div v-for="(item, id) of posts" :key="id" class="row mb-0 mx-0 mx-lg-5">
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
    </div>
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
    </div>
  </div>
</template>

<script>
export default {
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

<style scoped lang="scss">
.test {
  color: red;
}
</style>
