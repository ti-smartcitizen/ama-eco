<!-- eslint-disable vue/no-v-html -->
<template>
  <div>
    <Header />
    <main class="termos">
      <div class="container-fluid py-5">
        <div class="container">
          <div class="row text-justify">
            <div class="col-12">
              <div class="term_Text" v-html="term.contrato_texto"></div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>
<script>
export default {
  data() {
    return {
      term: {
        contrato_texto: '',
      },
    }
  },
  async beforeMount() {
    await this.getTerms()
  },
  mounted() {},
  methods: {
    async getTerms() {
      await this.$axios
        .get('https://api.amanet.smartcitizen.tec.br/v1/contrato/vigente')
        .then((resposta) => {
          console.log(resposta.data)
          this.term = resposta.data
        })
    },
  },
}
</script>
