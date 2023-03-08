<!-- eslint-disable vue/no-v-html -->
<template>
  <div>
    <Header />
    <main class="download">
      <div class="container-fluid bgdownload py-5">
        <div class="container">
          <div class="row">
            <div class="col-12 text-center">
              <h1 v-html="$store.state.contentSite.download.title"></h1>
            </div>
          </div>
          <div class="row text-center">
            <div class="col-md-12">
              <div class="box">
                <img src="~/assets/app-ama.png" class="mw-100" alt="" />
                <h2>{{ $store.state.contentSite.download.app_ama }}</h2>
                <p v-html="$store.state.contentSite.download.app_ama_desc"></p>
                <div class="row">
                  <div class="col-6 mb-3 text-right">
                    <a
                      href="https://apps.apple.com/br/app/ama-agentes-do-meio-ambiente/id1532303499"
                      target="_blank"
                      ><img src="~/assets/Appstore.png"
                    /></a>
                  </div>
                  <div class="col-6 mb-3 text-left">
                    <a
                      href="https://play.google.com/store/apps/details?id=br.com.ama.agente_municipal_ambiental"
                      target="_blank"
                      ><img src="~/assets/Playstore.png"
                    /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>
