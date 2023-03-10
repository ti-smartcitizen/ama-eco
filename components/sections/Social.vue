<template>
  <div class="container-fluid social">
    <div class="row">
      <div class="container">
        <div class="row">
          <div class="col-12 col-lg-6">
            <div class="d-flex justify-content-end align-items-start w-100">
              <div class="text-lg-left">
                <div class="sub-title">
                  {{ $store.state.contentSite.social.intro }}
                </div>
                <div class="mb-3 section-title">
                  {{ $store.state.contentSite.social.title }}
                </div>
                <p class="intro-content">
                  {{ $store.state.contentSite.social.sub_title }}
                </p>
                <p class="intro-content mobile-change">
                  <span class="mr-3">{{
                    $store.state.contentSite.social.redirect
                  }}</span>
                  <a href="https://amafloripa.com.br/" target="_blank">
                    <span class="btn-like">
                      {{ $store.state.contentSite.social.btn }}
                    </span>
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div class="d-none d-lg-flex col-lg-6">
            <div class="cellphone-size">
              <div class="screen">
                <div v-for="post of posts" :key="post.id">
                  <div class="post">
                    <div class="post-header">
                      <img class="post-avatar" :src="post.usuario_foto" />
                      <!-- <img v-else class="post-avatar" src="~/assets/logo.png" /> -->
                      <div>
                        <div class="post-user">{{ post.usuario_nome }}</div>
                        <div class="post-location">
                          {{ post.usuario_estado_sigla }} •
                          {{ post.usuario_cidade_nome }}
                        </div>
                      </div>
                      <div class="post-others">
                        <svg
                          width="16"
                          height="4"
                          viewBox="0 0 16 4"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1.75 0.75C1.0625 0.75 0.5 1.3125 0.5 2C0.5 2.6875 1.0625 3.25 1.75 3.25C2.4375 3.25 3 2.6875 3 2C3 1.3125 2.4375 0.75 1.75 0.75ZM14.25 0.75C13.5625 0.75 13 1.3125 13 2C13 2.6875 13.5625 3.25 14.25 3.25C14.9375 3.25 15.5 2.6875 15.5 2C15.5 1.3125 14.9375 0.75 14.25 0.75ZM8 0.75C7.3125 0.75 6.75 1.3125 6.75 2C6.75 2.6875 7.3125 3.25 8 3.25C8.6875 3.25 9.25 2.6875 9.25 2C9.25 1.3125 8.6875 0.75 8 0.75Z"
                            fill="#131E3B"
                          />
                        </svg>
                      </div>
                    </div>
                    <div class="post-text">
                      {{ post.post_descricao }}
                    </div>
                    <img class="post-content" :src="post.fotos[0].foto_url" />
                    <div class="post-time">
                      {{ formatDate(post.post_data_criacao) }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
      .$get(
        'https://api.social.smartcitizen.tec.br/feed/last-five-institutional-post/4205407'
      )
      .then((res) => {
        this.posts = res
      })
  },
  methods: {
    formatDate(date) {
      const dateNow = new Date()
      const datePost = new Date(date)
      const diff = dateNow.getTime() - datePost.getTime()
      const diffDays = Math.floor(diff / (1000 * 3600 * 24))
      const diffHours = Math.floor(diff / (1000 * 3600))
      const diffMinutes = Math.floor(diff / (1000 * 60))
      if (diffDays > 0) {
        return `${diffDays} ${diffDays === 1 ? 'dia' : 'dias'} atrás`
      } else if (diffHours > 0) {
        return `${diffHours} ${diffHours === 1 ? 'hora' : 'horas'} atrás`
      } else if (diffMinutes > 0) {
        return `${diffMinutes} ${
          diffMinutes === 1 ? 'minuto' : 'minutos'
        } atrás`
      } else {
        return 'agora'
      }
    },
  },
}
</script>


<style scoped lang="scss">
.social {
  padding-top: 104px;
  height: 100vh;
}

.sub-title {
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 20px;
  line-height: 132%;
  color: #2157cc;
  margin-bottom: 12px;
}

.section-title {
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 64px;
  line-height: 100%;
  color: #131e3b;
}

.intro-content {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 185%;
  color: #565e73;
  margin-bottom: 24px;
  max-width: 562px;
}

.btn-like {
  display: inline-block;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 18px;
  line-height: 100%;
  color: #fff;
  cursor: pointer;
  background: #2157cc;
  border-radius: 12px;
  padding: 12px;

  &:hover {
    background: #1a4aa6;
  }
}

.cellphone-size {
  width: 390px;
  height: 643px;
  background: #fff;
  box-shadow: 0 10px 18px rgba(9, 30, 66, 0.15);
  border-radius: 24px;
  position: relative;
  overflow: hidden;
  margin-left: 64px;
}

.screen {
  width: 100%;
  height: 100%;
  background: #fff;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  overflow-y: auto;
  overflow-x: hidden;
}

.post {
  width: fit-content;
  height: fit-content;
  position: relative;
  overflow: hidden;
  border-bottom: 1px solid #dddee3;
  padding: 16px;

  &-header {
    display: flex;
    align-items: center;
    margin-bottom: 24px;
  }

  &-avatar {
    width: 48px;
    height: 48px;
    background: #e5e5e5;
    border-radius: 12px;
    margin-right: 12px;
  }

  &-user {
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.014em;
    color: #131e3b;
  }

  &-location {
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    color: #838998;
  }

  &-others {
    width: 20px;
    height: 20px;
    margin-left: auto;
    color: #131e3b;
  }

  &-text {
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    font-size: 13px;
    line-height: 18px;
    letter-spacing: -0.006em;
    color: #131e3b;
    width: 100%;
    margin-bottom: 24px;
  }

  &-content {
    width: 358px;
    height: 447px;
    background: #e5e5e5;
    border-radius: 16px;
  }

  &-time {
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: #838998;
    margin-top: 8px;
    padding-bottom: 12px;
  }
}

::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #fff;
}

::-webkit-scrollbar-thumb {
  background: #dddee3;
}

::-webkit-scrollbar-thumb:hover {
  background: #b3b3b3;
}

@media (max-width: 992px) {
  .social {
    padding: 32px;
    padding-top: 40px;
    padding-bottom: 40px;
    height: 100%;
  }

  .mobile-change {
    margin-top: 52px;
    font-family: 'Inter', sans-serif !important;
    font-weight: 700 !important;
    font-size: 16px !important;
    line-height: 200% !important;
    text-align: center !important;
    color: #565e73 !important;
  }

  .btn-like {
    width: 100%;
    padding: 18px;
    font-weight: 600;
    font-size: 18px;
    margin-top: 12px;
  }
}
</style>
