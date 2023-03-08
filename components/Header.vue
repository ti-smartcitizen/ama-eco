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
          <img src="~/assets/hamburguer.jpg" />
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
            <b-nav-item class="baixeAgora" href="/download-ama">{{
              $store.state.contentHeader.downloadNow
            }}</b-nav-item>
            <b-nav-item
              v-show="$store.state.localStorage.languageActive == 1"
              class="flag enUs"
              @click="$store.commit('setlanguageActive', 2)"
              ><img src="@/assets/eua.png" height="20" class="ml-2" alt=""
            /></b-nav-item>
            <b-nav-item
              v-show="$store.state.localStorage.languageActive == 2"
              class="flag ptBr"
              @click="$store.commit('setlanguageActive', 1)"
              ><img src="@/assets/brasil.png" height="20" class="ml-2" alt=""
            /></b-nav-item>
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
