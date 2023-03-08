<template>
  <div>
    <Header />
    <main class="contato">
      <div class="container-fluid">
        <div class="row">
          <img src="~/assets/contact-slide.jpg" class="w-100" alt="" />
        </div>
      </div>
      <div class="container">
        <div class="row py-4">
          <div class="col-12">
            <h1>{{ $store.state.contentSite.contact.title }}</h1>
          </div>
        </div>
        <div class="row">
          <div class="col-12 col-lg-5">
            <p class="subtitle">
              {{ $store.state.contentSite.contact.sub_title }}
            </p>
            <p>SmartCitizen</p>
            <p>
              Rua Bruno Filgueira, 2434<br />CEP 80.710-530<br />Bigorrilho -
              Curitiba - PR
            </p>
            <p>
              <img
                src="~/assets/whatsapp-icon.png"
                height="24"
                class="mr-1"
              /><a href="https://api.whatsapp.com/send?phone=5541987536283"
                >+55 41 98753-6283</a
              >
            </p>
          </div>
          <div class="col-12 col-lg-7">
            <div class="borderRight">
              <h5>{{ $store.state.contentSite.contact.contact_us }}</h5>
              <label for="name"
                >{{ $store.state.contentSite.contact.name
                }}<span v-if="error.name" class="error">{{
                  $store.state.contentSite.contact.errors.name
                }}</span></label
              >
              <input
                v-model="name"
                type="text"
                name="name"
                placeholder="João da silva"
                :disabled="disabled"
              />

              <label for="phone"
                >{{ $store.state.contentSite.contact.phone
                }}<span v-if="error.phone" class="error">{{
                  $store.state.contentSite.contact.errors.phone
                }}</span></label
              >
              <input
                v-model="phone"
                v-mask="'+## (##) #####-####'"
                placeholder="+55 (99) 99999-9999"
                type="text"
                name="phone"
                :disabled="disabled"
              />

              <label for="mail"
                >{{ $store.state.contentSite.contact.mail
                }}<span v-if="error.mail" class="error">{{
                  $store.state.contentSite.contact.errors.mail
                }}</span></label
              >
              <input
                v-model="mail"
                type="text"
                name="mail"
                placeholder="email@example.com"
                :disabled="disabled"
              />
              <label for="subject"
                >{{ $store.state.contentSite.contact.subject
                }}<span v-if="error.subject" class="error">{{
                  $store.state.contentSite.contact.errors.subject
                }}</span></label
              >
              <b-form-select
                v-model="subject"
                :options="$store.state.contentSite.contact.subjects_list"
                required
                type="text"
                name="subject"
                :disabled="disabled"
              />

              <label for="message"
                >{{ $store.state.contentSite.contact.message
                }}<span v-if="error.message" class="error">{{
                  $store.state.contentSite.contact.errors.message
                }}</span></label
              >
              <textarea
                id="message"
                v-model="message"
                name="message"
                cols="30"
                rows="10"
                :disabled="disabled"
              ></textarea>
            </div>
            <div class="d-flex">
              <p v-if="msgResponse">
                {{ $store.state.contentSite.contact.msgResponse }}
              </p>

              <button class="ml-auto" :disabled="disabled" @click="send">
                {{ $store.state.contentSite.contact.send }}
                <span v-if="loading">
                  <img
                    src="~/assets/loading.gif"
                    height="16"
                    width="16"
                    alt=""
                  />
                </span>
              </button>
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
      disabled: false,
      name: null,
      phone: null,
      mail: null,
      subject: null,
      message: null,
      msg: {
        email: '',
      },
      error: {
        name: false,
        phone: false,
        mail: false,
        subject: false,
        message: false,
      },
      loading: false,
      msgResponse: false,
    }
  },
  methods: {
    formValid() {
      if (!this.name) {
        this.error.name = true
      } else {
        this.error.name = false
      }
      if (!this.phone) {
        this.error.phone = true
      } else {
        this.error.phone = false
      }
      if (!this.mail) {
        this.error.mail = true
      } else {
        this.error.mail = false
      }
      if (!this.subject) {
        this.error.subject = true
      } else {
        this.error.subject = false
      }
      if (!this.message) {
        this.error.message = true
      } else {
        this.error.message = false
      }
      if (
        !this.name |
        !this.phone |
        !this.mail |
        !this.subject |
        !this.message
      ) {
        return false
      }
      return true
    },
    async send() {
      if (this.formValid()) {
        const obj = {
          contato_nome: this.name,
          contato_telefone: this.phone,
          contato_email: this.mail,
          contato_assunto:
            this.$store.state.contentSite.contact.subjects_list[this.subject]
              .text,
          contato_mensagem: this.message,
        }

        this.loading = true
        await this.$axios
          .post('https://api.ama.smartcitizen.tec.br/contato', obj)
          .then((resposta) => {
            this.msgResponse = resposta
            this.loading = false
            this.disabled = true
          })
          .catch((resposta) => {
            this.msgResponse = resposta
            this.loading = false
            this.disabled = false
          })
      }
    },
  },
}
</script>
