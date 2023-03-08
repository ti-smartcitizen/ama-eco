<template>
  <header
    class="d-flex flex-wrap align-items-center justify-content-center justify-content-xl-between h-100 w-100"
  >
    <b-navbar
      toggleable="xl"
      type="light"
      class="w-100 text-center text-xl-left"
    >
      <b-container>
        <b-navbar-brand href="/"
          ><img src="~/assets/LogoAma.png" class="mw-100" />
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse" class="hamburguer">
          <svg
            width="24"
            height="22"
            viewBox="0 0 24 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 0.332031H24V2.9987H0V0.332031ZM0 9.66536H24V12.332H0V9.66536ZM0 18.9987H24V21.6654H0V18.9987Z"
              fill="#131E3B"
            />
          </svg>
        </b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-item
              v-for="(item, id) of $store.state.contentHeader.menu"
              :key="id + 'menu'"
              :href="item.link"
              >{{ item.desc }}</b-nav-item
            >
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item
              v-show="$store.state.localStorage.languageActive == 1"
              class="flag enUs"
              @click="$store.commit('setlanguageActive', 2)"
              ><img src="@/assets/eua.svg" height="20" class="ml-2" alt=""
            /></b-nav-item>
            <b-nav-item
              v-show="$store.state.localStorage.languageActive == 2"
              class="flag ptBr"
              @click="$store.commit('setlanguageActive', 1)"
              ><img src="@/assets/brasil.svg" height="20" class="ml-2" alt=""
            /></b-nav-item>
          </b-navbar-nav>
          <b-navbar-nav class="mt-4 ml-auto d-block d-xl-none">
            <div>
              <a
                class="ml-3"
                target="_blank"
                href="https://www.youtube.com/channel/UCOybdqZCXnBJ-EpmmSdWMiw"
              >
                <img src="../assets/rede-social/youtube.svg" alt="" />
              </a>
              <a
                class="ml-3"
                target="_blank"
                href="https://www.tiktok.com/@agentesdomeioambiente?is_from_webapp=1&sender_device=pc"
              >
                <img src="../assets/rede-social/tiktok.svg" alt="" />
              </a>
              <a
                class="ml-3"
                target="_blank"
                href="https://www.facebook.com/agentedomeioambiente"
              >
                <img src="../assets/rede-social/facebook.svg" alt="" />
              </a>
              <a
                class="ml-3"
                target="_blank"
                href="https://www.instagram.com/agentesdomeioambiente/"
              >
                <img src="../assets/rede-social/instagram.svg" alt="" />
              </a>
              <a
                class="ml-3"
                target="_blank"
                href="https://www.linkedin.com/company/agentesdomeioambiente"
              >
                <img src="../assets/rede-social/linkedin.svg" alt="" />
              </a>
              <a
                class="ml-3"
                href="https://twitter.com/cidade_ama"
                target="_blank"
              >
                <img src="../assets/rede-social/twitter.svg" alt="" />
              </a>
            </div>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
  </header>
</template>

<script>
export default {
  props: {
    slides: {
      type: Boolean,
      default: false,
    },
  },
  async mounted() {
    const userLocale = window.navigator?.languages?.length
      ? navigator.languages[0]
      : navigator.language

    // console.log('Idioma selecionado pelo navegador do usuário:', userLocale)

    if (
      userLocale === 'pt-PT' ||
      userLocale === 'pt-BR' ||
      userLocale === 'pt' ||
      userLocale === 'br'
    ) {
      await this.$store.commit('setlanguageActive', 1)
    } else {
      await this.$store.commit('setlanguageActive', 2)
    }
  },
}
</script>
