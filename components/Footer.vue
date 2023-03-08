<template>
  <footer id="contato" class="px-3 py-5">
    <div class="container">
      <div class="row">
        <div class="descricao col-12 col-xl-3">
          <div class="d-flex justify-content-center">
            <img
              src="~/assets/logo-rodape.png"
              class="logoFooter"
              width="234"
            />
          </div>
          <p class="d-flex justify-content-center text-center my-4">
            {{ $store.state.contentFooter.contact.description }}
          </p>
        </div>
        <div class="col-12 col-xl-3 d-none d-xl-flex justify-content-center">
          <div class="links">
            <h1
              v-for="(item, id) of $store.state.contentHeader.menu"
              :key="id + 'menuRodape'"
            >
              <a :href="item.link">{{ item.desc }}</a>
            </h1>
          </div>
        </div>
        <div class="redes justify-content-center col-12 col-xl-3">
          <div class="d-none d-xl-flex justify-content-center social">
            <a
              target="_blank"
              href="https://www.youtube.com/channel/UCOybdqZCXnBJ-EpmmSdWMiw"
              class="ml-3"
            >
              <img src="../assets/rede-social/youtube-green.svg" alt="" />
            </a>
            <a
              class="ml-3"
              target="_blank"
              href="https://www.tiktok.com/@agentesdomeioambiente?is_from_webapp=1&sender_device=pc"
            >
              <img src="../assets/rede-social/tiktok-green.svg" alt="" />
            </a>
            <a
              class="ml-3"
              target="_blank"
              href="https://www.facebook.com/agentedomeioambiente"
            >
              <img src="../assets/rede-social/facebook-green.svg" alt="" />
            </a>
            <a
              class="ml-3"
              target="_blank"
              href="https://www.instagram.com/agentesdomeioambiente/"
            >
              <img src="../assets/rede-social/instagram-green.svg" alt="" />
            </a>
            <a
              class="ml-3"
              target="_blank"
              href="https://www.linkedin.com/company/agentesdomeioambiente"
            >
              <img src="../assets/rede-social/linkedin-green.svg" alt="" />
            </a>
            <a
              class="ml-3"
              href="https://twitter.com/cidade_ama"
              target="_blank"
            >
              <img src="../assets/rede-social/twitter-green.svg" alt="" />
            </a>
          </div>
          <div class="mt-3 d-flex justify-content-center">
            <div class="mb-3 mr-3">
              <a
                href="https://apps.apple.com/br/app/ama-agentes-do-meio-ambiente/id1532303499"
                target="_blank"
                ><img src="~/assets/Appstore.png"
              /></a>
            </div>
            <div class="mb-3">
              <a
                href="https://play.google.com/store/apps/details?id=br.com.ama.agente_municipal_ambiental"
                target="_blank"
                ><img src="~/assets/Playstore.png"
              /></a>
            </div>
          </div>
        </div>
        <div class="endereco col-12 col-xl-3">
          <div class="mb-2 d-flex justify-content-center">
            <img
              class="mb-4"
              src="../assets/rede-social/smart-logo.svg"
              alt=""
            />
          </div>
          <p class="d-flex justify-content-center py-3">
            Rua Bruno Filgueira, 2434 CEP 80.710-530<br />Bigorrilho - Curitiba
            - Paraná - Brasil<br />
          </p>
          <div
            class="d-flex flex-column justify-content-center align-items-center"
          >
            <a
              href="https://api.whatsapp.com/send?phone=5541987536283&text=Ol%C3%A1%2C%20vim%20atrav%C3%A9s%20do%20site%20do%20cidade%20ama%2C%20voc%C3%AA%20pode%20me%20ajudar%3F"
              target="_blank"
              >+55 41 98753-6283</a
            >
            <p>CNPJ: 36.208.711/0001-01</p>
          </div>
        </div>
        <div
          class="termos d-flex align-items-center justify-content-center col-12"
        >
          <div class="mb-2 mt-2">
            <a href="/termos">{{ $store.state.contentFooter.contact.terms }}</a>
          </div>
        </div>
      </div>
      <!-- row -->
    </div>
    <hr class="mb-2" style="border-color: #dddee3" />
    <div class="d-flex justify-content-center mt-4" style="color: #7a9ae0">
      © 2022 AMA - Agentes do meio Ambiente. Todos os direitos reservados.
    </div>
    <!-- <CookieControl locale="pt"> </CookieControl> -->
  </footer>
</template>

<script>
export default {}
</script>
