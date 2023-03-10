<template>
  <div>
    <div class="container blog pt-5">
      <div class="row mb-5">
        <div class="col-12 py-3 text-center">
          <div class="mx-5 blog-title">
            {{ $store.state.contentSite.home.blog.title }}
          </div>
        </div>
      </div>
      <div class="posts-container">
        <div v-for="(item, id) of posts" :key="id">
          <div class="blogpost">
            <img
              :src="item.thumb"
              class="d-block img-fluid blog-thumb"
              loading="lazy"
            />

            <div class="p-2 pb-1 pt-0">
              <div class="card-body">
                <div class="card-date mb-1">
                  {{ dataAtualFormatada(item.date) }}
                </div>
                <div class="card-category mb-3">{{ item.categoria }}</div>
                <div class="card-title mb-3">
                  <a :href="item.link" target="_blank">{{
                    item.title.rendered
                  }}</a>
                </div>
                <div class="d-flex">
                  <div
                    class="card-content"
                    v-html="
                      item.excerpt.rendered.length > 90
                        ? item.excerpt.rendered.substring(0, 90) + '...'
                        : item.excerpt.rendered
                    "
                  ></div>

                  <div
                    class="d-flex justify-content-right align-items-end mb-3 ml-1"
                  >
                    <a :href="item.link" target="_blank"
                      ><svg
                        width="34"
                        height="34"
                        viewBox="0 0 34 34"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17.9766 16.9996L13.8516 12.8746L15.0299 11.6963L20.3332 16.9996L15.0299 22.303L13.8516 21.1246L17.9766 16.9996Z"
                          fill="#131E3B"
                        />
                        <rect
                          x="1"
                          y="1"
                          width="32"
                          height="32"
                          rx="6"
                          stroke="#DDDEE3"
                          stroke-width="2"
                          stroke-linecap="round"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-12 text-center mt-3 mb-5">
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
        res.forEach((item, index) => {
          if (index < 6) {
            this.posts.push({
              ...res[index],
              categoria: null,
              thumb: null,
            })
            this.getCategoriaPost(res[index].categories[0], index)
            this.getThumbPost(res[index].featured_media, index)
          }
        })
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
.blog-title {
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 64px;
  line-height: 100%;
  text-align: center;
  color: #131e3b;
}

.posts-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  padding: 0 170px;
}

.blogpost {
  margin: 24px;
  border: 1px solid #eaeaea;
  filter: drop-shadow(0 18px 28px rgba(9, 30, 66, 0.15));
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 18px 28px rgba(9, 30, 66, 0.15);
  width: 300px;
}

.blog-thumb {
  width: 100%;
  max-height: 224px;
}

.card-date {
  font-family: 'Roboto', monospace;
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
  color: #565e73;
}

.card-category {
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 13px;
  line-height: 16px;
  color: #ff6b00;
}

.card-title {
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: #131e3b;

  a {
    color: #131e3b;
    text-decoration: none;

    &:hover {
      color: #ff6b00;
    }
  }
}

.card-content {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #565e73;
}

@media (max-width: 1400px) {
  .posts-container {
    padding: 0 50px;
    justify-content: center;
  }
}

@media (max-width: 991px) {
  .posts-container {
    padding: 0 50px;
    justify-content: center;
  }

  .blogpost {
    width: 320px;
  }
}
</style>
