<template>
  <header
    class="d-flex flex-wrap align-items-center justify-content-center justify-content-xl-between h-100 w-100"
  >
    <b-navbar
      toggleable="xl"
      type="light"
      class="w-100 text-center text-xl-left p-2"
    >
      <b-container class="custom-container">
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
              class="mr-3 mobile-menu"
              :href="item.link"
              ><span class="mobile-menu">{{ item.desc }}</span></b-nav-item
            >
          </b-navbar-nav>

          <b-navbar-nav class="ml-auto mobile-flags">
            <b-nav-item
              class="custom-flag"
              :class="$store.state.localStorage.languageActive == 1 && 'active'"
              @click="$store.commit('setlanguageActive', 2)"
              ><img src="@/assets/eua.svg" height="20" alt=""
            /></b-nav-item>
            <b-nav-item
              class="custom-flag"
              :class="$store.state.localStorage.languageActive == 2 && 'active'"
              @click="$store.commit('setlanguageActive', 1)"
              ><img src="@/assets/brasil.svg" height="20" alt=""
            /></b-nav-item>
          </b-navbar-nav>

          <b-navbar-nav class="mt-4 ml-auto d-block d-xl-none mobile-bottom">
            <div>
              <a
                class="ml-3 mobile-icon"
                target="_blank"
                href="https://www.youtube.com/channel/UCOybdqZCXnBJ-EpmmSdWMiw"
              >
                <img src="../assets/rede-social/youtube.svg" alt="" />
              </a>
              <a
                class="ml-3 mobile-icon"
                target="_blank"
                href="https://www.tiktok.com/@agentesdomeioambiente?is_from_webapp=1&sender_device=pc"
              >
                <img src="../assets/rede-social/tiktok.svg" alt="" />
              </a>
              <a
                class="ml-3 mobile-icon"
                target="_blank"
                href="https://www.facebook.com/agentedomeioambiente"
              >
                <img src="../assets/rede-social/facebook.svg" alt="" />
              </a>
              <a
                class="ml-3 mobile-icon"
                target="_blank"
                href="https://www.instagram.com/agentesdomeioambiente/"
              >
                <img src="../assets/rede-social/instagram.svg" alt="" />
              </a>
              <a
                class="ml-3 mobile-icon"
                target="_blank"
                href="https://www.linkedin.com/company/agentesdomeioambiente"
              >
                <img src="../assets/rede-social/linkedin.svg" alt="" />
              </a>
              <a
                class="ml-3 mobile-icon"
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
    const btn = document.querySelector('.navbar-toggler')

    const userLocale = window.navigator?.languages?.length
      ? navigator.languages[0]
      : navigator.language

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

    btn.addEventListener('click', () => {
      if (btn.classList.contains('collapsed')) {
        btn.innerHTML = `
         <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.99998 7.11367L15.6 0.513672L17.4853 2.39901L10.8853 8.999L17.4853 15.599L15.6 17.4843L8.99998 10.8843L2.39998 17.4843L0.514648 15.599L7.11465 8.999L0.514648 2.39901L2.39998 0.513672L8.99998 7.11367Z" fill="#131E3B"/>
          </svg>
        `
      } else {
        btn.innerHTML = `
          <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0.332031H24V2.9987H0V0.332031ZM0 9.66536H24V12.332H0V9.66536ZM0 18.9987H24V21.6654H0V18.9987Z" fill="#131E3B"/>
          </svg>
        `
      }
    })
  },
  beforeDestroy() {
    const btn = document.querySelector('.navbar-toggler')
    btn.removeEventListener('click', () => {})
  },
}
</script>

<style scoped lang="scss">
.active {
  opacity: 0.4;
}

.custom-container {
  max-width: 100% !important;
  padding-right: 32px;
  padding-left: 32px;
}

.custom-flag {
  margin-right: 0;
  margin-left: 0;
}

.mobile-icon {
  &:hover {
    opacity: 0.4;
  }
}

@media (max-width: 991px) {
  .custom-container {
    padding: 0;
  }

  .mobile-menu {
    font-family: 'Poppins', sans-serif !important;
    font-weight: 400 !important;
    font-size: 32px !important;
    line-height: 24px !important;
    letter-spacing: -0.011em !important;
    color: #565e73 !important;
    margin-top: 18px !important;
  }

  .mobile-bottom {
    padding-bottom: 24px !important;
  }

  .mobile-flags {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 34px;
  }
}

.animate__animated {
  animation-duration: 1s;
  animation-fill-mode: both;
}

.animate__fadeIn {
  animation-name: spin;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
