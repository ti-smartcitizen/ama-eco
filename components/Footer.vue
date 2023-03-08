<template>
  <footer id="contato" class="px-3 py-5">
    <div class="container">
      <div class="row">
        <div class="col-12 col-xl-3">
          <img src="~/assets/logo-rodape.png" class="logoFooter" width="234" />
          <p class="my-3">
            {{ $store.state.contentFooter.contact.description }}
          </p>
        </div>
        <div
          class="
            col-12 col-xl-3
            d-flex
            justify-content-xl-center
            align-items-xl-center
          "
        >
          <div class="">
            <h1
              v-for="(item, id) of $store.state.contentHeader.menu"
              :key="id + 'menuRodape'"
            >
              <a :href="item.link">{{ item.desc }}</a>
            </h1>
          </div>
        </div>
        <div class="col-12 col-xl-3">
          <ul class="m-0 p-0 redes">
            <li class="d-inline-block">
              <a href="https://www.facebook.com/agentedomeioambiente"
                ><b-icon icon="facebook" size="1"
              /></a>
            </li>
            <li class="d-inline-block">
              <a href="https://twitter.com/cidade_ama"
                ><b-icon icon="twitter" size="1"
              /></a>
            </li>
            <li class="d-inline-block">
              <a href="https://www.instagram.com/agentesdomeioambiente/"
                ><b-icon icon="instagram" size="1"
              /></a>
            </li>
            <li class="d-inline-block">
              <a href="https://www.linkedin.com/company/agentesdomeioambiente"
                ><b-icon icon="linkedin" size="1"
              /></a>
            </li>
            <li class="d-inline-block">
              <a href="https://www.youtube.com/channel/UCOybdqZCXnBJ-EpmmSdWMiw"
                ><b-icon icon="youtube" size="1"
              /></a>
            </li>
          </ul>
          <ul class="py-2">
            <li class="mb-2">
              <a href="/termos">{{
                $store.state.contentFooter.contact.terms
              }}</a>
            </li>
            <!-- <li class="mb-2">
              <a href="#">{{ $store.state.contentFooter.contact.politics }}</a>
            </li> -->
          </ul>
          <div class="row">
            <div class="col-12 mb-3">
              <a
                href="https://apps.apple.com/br/app/ama-agentes-do-meio-ambiente/id1532303499"
                target="_blank"
                ><img src="~/assets/Appstore.png"
              /></a>
            </div>
            <div class="col-12 mb-3">
              <a
                href="https://play.google.com/store/apps/details?id=br.com.ama.agente_municipal_ambiental"
                target="_blank"
                ><img src="~/assets/Playstore.png"
              /></a>
            </div>
          </div>
        </div>
        <div class="col-12 col-xl-3">
          <h3>
            Smart Citizen Desenvolvimento e Licenciamento de Software Ltda.
          </h3>
          <p class="py-3">
            Rua Bruno Filgueira, 2434 CEP 80.710-530<br />Bigorrilho - Curitiba
            - Paraná - Brasil<br /><a
              href="https://api.whatsapp.com/send?phone=5541987536283&text=Ol%C3%A1%2C%20vim%20atrav%C3%A9s%20do%20site%20do%20cidade%20ama%2C%20voc%C3%AA%20pode%20me%20ajudar%3F"
              target="_blank"
              >+55 41 98753-6283</a
            >
          </p>
          <p>CNPJ: 36.208.711/0001-01</p>
        </div>
      </div>
      <!-- row -->
    </div>
    <!-- <CookieControl locale="pt"> </CookieControl> -->
  </footer>
</template>

<script>
export default {}
</script>
