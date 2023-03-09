<template>
  <footer id="contato" class="px-3 py-5">
    <div class="container">
      <div class="row">
        <div class="descricao col-12 col-xl-3">
          <div class="ama-logo">
            <img
              src="~/assets/logo-rodape.png"
              class="logoFooter"
              width="234"
            />
          </div>
          <p
            class="d-flex justify-content-center text-left my-4 footer-description"
          >
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
              class="ml-3 social-icon"
            >
              <svg
                width="28"
                height="22"
                viewBox="0 0 28 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M26.864 3.66416C27.4733 6.04016 27.4733 11.0002 27.4733 11.0002C27.4733 11.0002 27.4733 15.9602 26.864 18.3362C26.5253 19.6495 25.5346 20.6828 24.28 21.0322C22.0013 21.6668 14.14 21.6668 14.14 21.6668C14.14 21.6668 6.28264 21.6668 3.99997 21.0322C2.73997 20.6775 1.75064 19.6455 1.41597 18.3362C0.806641 15.9602 0.806641 11.0002 0.806641 11.0002C0.806641 11.0002 0.806641 6.04016 1.41597 3.66416C1.75464 2.35083 2.74531 1.3175 3.99997 0.968162C6.28264 0.333496 14.14 0.333496 14.14 0.333496C14.14 0.333496 22.0013 0.333496 24.28 0.968162C25.54 1.32283 26.5293 2.35483 26.864 3.66416ZM11.4733 15.6668L19.4733 11.0002L11.4733 6.3335V15.6668Z"
                  fill="#8ACC0D"
                />
              </svg>
            </a>
            <a
              class="ml-3 social-icon"
              target="_blank"
              href="https://www.tiktok.com/@agentesdomeioambiente?is_from_webapp=1&sender_device=pc"
            >
              <img src="../assets/rede-social/tiktok-green.svg" alt="" />
            </a>
            <a
              class="ml-3 social-icon"
              target="_blank"
              href="https://www.facebook.com/agentedomeioambiente"
            >
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.6756 24V14.712H19.7863L20.2516 11.1013H16.6756V8.79733C16.6756 7.752 16.9663 7.03867 18.465 7.03867H20.377V3.80933C19.4514 3.71113 18.5211 3.6635 17.5903 3.66667C14.8343 3.66667 12.9476 5.34933 12.9476 8.44V11.1013H9.83031V14.712H12.9476V24H1.47298C1.11936 24 0.780221 23.8595 0.530173 23.6095C0.280124 23.3594 0.139648 23.0203 0.139648 22.6667V1.33333C0.139648 0.979711 0.280124 0.640573 0.530173 0.390524C0.780221 0.140476 1.11936 0 1.47298 0H22.8063C23.1599 0 23.4991 0.140476 23.7491 0.390524C23.9992 0.640573 24.1396 0.979711 24.1396 1.33333V22.6667C24.1396 23.0203 23.9992 23.3594 23.7491 23.6095C23.4991 23.8595 23.1599 24 22.8063 24H16.6756Z"
                  fill="#8ACC0D"
                />
              </svg>
            </a>
            <a
              class="ml-3 social-icon"
              target="_blank"
              href="https://www.instagram.com/agentesdomeioambiente/"
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.14 0.666504C17.7626 0.666504 18.2146 0.679837 19.636 0.746504C21.056 0.813171 22.0226 1.03584 22.8733 1.3665C23.7533 1.70517 24.4946 2.16384 25.236 2.90384C25.914 3.57037 26.4386 4.37662 26.7733 5.2665C27.1026 6.11584 27.3266 7.08384 27.3933 8.50384C27.456 9.92517 27.4733 10.3772 27.4733 13.9998C27.4733 17.6225 27.46 18.0745 27.3933 19.4958C27.3266 20.9158 27.1026 21.8825 26.7733 22.7332C26.4395 23.6235 25.9148 24.43 25.236 25.0958C24.5693 25.7736 23.7631 26.2982 22.8733 26.6332C22.024 26.9625 21.056 27.1865 19.636 27.2532C18.2146 27.3158 17.7626 27.3332 14.14 27.3332C10.5173 27.3332 10.0653 27.3198 8.64397 27.2532C7.22397 27.1865 6.25731 26.9625 5.40664 26.6332C4.51641 26.2991 3.71001 25.7744 3.04397 25.0958C2.36585 24.4294 1.84122 23.6231 1.50664 22.7332C1.17597 21.8838 0.953307 20.9158 0.886641 19.4958C0.823974 18.0745 0.806641 17.6225 0.806641 13.9998C0.806641 10.3772 0.819974 9.92517 0.886641 8.50384C0.953307 7.0825 1.17597 6.11717 1.50664 5.2665C1.84029 4.37608 2.36505 3.5696 3.04397 2.90384C3.7102 2.22548 4.51655 1.70081 5.40664 1.3665C6.25731 1.03584 7.22264 0.813171 8.64397 0.746504C10.0653 0.683837 10.5173 0.666504 14.14 0.666504ZM14.14 7.33317C12.3719 7.33317 10.6762 8.03555 9.42593 9.28579C8.17569 10.536 7.47331 12.2317 7.47331 13.9998C7.47331 15.7679 8.17569 17.4636 9.42593 18.7139C10.6762 19.9641 12.3719 20.6665 14.14 20.6665C15.9081 20.6665 17.6038 19.9641 18.854 18.7139C20.1043 17.4636 20.8066 15.7679 20.8066 13.9998C20.8066 12.2317 20.1043 10.536 18.854 9.28579C17.6038 8.03555 15.9081 7.33317 14.14 7.33317ZM22.8066 6.99984C22.8066 6.55781 22.631 6.13389 22.3185 5.82133C22.0059 5.50877 21.582 5.33317 21.14 5.33317C20.6979 5.33317 20.274 5.50877 19.9615 5.82133C19.6489 6.13389 19.4733 6.55781 19.4733 6.99984C19.4733 7.44186 19.6489 7.86579 19.9615 8.17835C20.274 8.49091 20.6979 8.6665 21.14 8.6665C21.582 8.6665 22.0059 8.49091 22.3185 8.17835C22.631 7.86579 22.8066 7.44186 22.8066 6.99984ZM14.14 9.99984C15.2008 9.99984 16.2183 10.4213 16.9684 11.1714C17.7185 11.9216 18.14 12.939 18.14 13.9998C18.14 15.0607 17.7185 16.0781 16.9684 16.8283C16.2183 17.5784 15.2008 17.9998 14.14 17.9998C13.0791 17.9998 12.0617 17.5784 11.3115 16.8283C10.5614 16.0781 10.14 15.0607 10.14 13.9998C10.14 12.939 10.5614 11.9216 11.3115 11.1714C12.0617 10.4213 13.0791 9.99984 14.14 9.99984Z"
                  fill="#8ACC0D"
                />
              </svg>
            </a>
            <a
              class="ml-3 social-icon"
              target="_blank"
              href="https://www.linkedin.com/company/agentesdomeioambiente"
            >
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.5863 20.452H17.033V14.8827C17.033 13.5547 17.0063 11.8453 15.1796 11.8453C13.3276 11.8453 13.045 13.2907 13.045 14.7853V20.452H9.49031V9H12.9036V10.56H12.9503C13.4276 9.66133 14.5876 8.71067 16.321 8.71067C19.921 8.71067 20.5877 11.0813 20.5877 14.1653V20.452H20.5863ZM5.47698 7.43333C5.20572 7.43368 4.93706 7.38049 4.6864 7.27681C4.43574 7.17312 4.20801 7.02099 4.01626 6.82911C3.82451 6.63724 3.67252 6.40941 3.569 6.15868C3.46547 5.90795 3.41246 5.63926 3.41298 5.368C3.41325 4.95978 3.53455 4.5608 3.76157 4.22153C3.98858 3.88225 4.31111 3.61791 4.68836 3.46194C5.0656 3.30596 5.48063 3.26536 5.88096 3.34525C6.28128 3.42515 6.64892 3.62197 6.93739 3.91081C7.22586 4.19965 7.4222 4.56755 7.50158 4.96798C7.58096 5.3684 7.53982 5.78338 7.38336 6.16042C7.2269 6.53747 6.96214 6.85965 6.62257 7.08623C6.283 7.3128 5.88387 7.4336 5.47565 7.43333H5.47698ZM7.25832 20.452H3.69431V9H7.25965V20.452H7.25832ZM22.3663 0H1.91165C0.930315 0 0.139648 0.773333 0.139648 1.72933V22.2707C0.139648 23.2267 0.931648 24 1.91032 24H22.361C23.3396 24 24.1396 23.2267 24.1396 22.2707V1.72933C24.1396 0.773333 23.3396 0 22.361 0H22.365H22.3663Z"
                  fill="#8ACC0D"
                />
              </svg>
            </a>
            <a
              class="ml-3 social-icon"
              href="https://twitter.com/cidade_ama"
              target="_blank"
            >
              <svg
                width="28"
                height="24"
                viewBox="0 0 28 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M27.6891 3.54124C26.6711 3.99149 25.5917 4.2872 24.4864 4.41857C25.6514 3.72181 26.5233 2.62525 26.9397 1.33324C25.8464 1.9839 24.6477 2.4399 23.3984 2.68657C22.5592 1.78867 21.4469 1.19319 20.2343 0.992682C19.0218 0.792177 17.777 0.99789 16.6934 1.57784C15.6098 2.15779 14.7482 3.07948 14.2425 4.19963C13.7368 5.31977 13.6154 6.57561 13.8971 7.7719C11.6799 7.66077 9.51083 7.0846 7.53077 6.08079C5.55071 5.07698 3.80389 3.66797 2.40372 1.94524C1.90811 2.7965 1.64766 3.7642 1.64905 4.74924C1.64905 6.68257 2.63305 8.39057 4.12905 9.39057C3.24373 9.3627 2.3779 9.12361 1.60372 8.69324V8.76257C1.60399 10.0502 2.04954 11.2981 2.86485 12.2946C3.68015 13.2912 4.81503 13.9752 6.07705 14.2306C5.2552 14.4533 4.39346 14.4861 3.55705 14.3266C3.91287 15.4349 4.60639 16.4042 5.54051 17.0987C6.47462 17.7933 7.60256 18.1783 8.76639 18.1999C7.60969 19.1083 6.28529 19.7799 4.86889 20.1761C3.4525 20.5724 1.97189 20.6856 0.511719 20.5092C3.06065 22.1485 6.02785 23.0187 9.05838 23.0159C19.3157 23.0159 24.9251 14.5186 24.9251 7.14924C24.9251 6.90924 24.9184 6.66657 24.9077 6.42924C25.9995 5.64013 26.9419 4.66259 27.6904 3.54257L27.6891 3.54124Z"
                  fill="#8ACC0D"
                />
              </svg>
            </a>
          </div>
          <div class="loja d-flex justify-content-center">
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
          <div class="mb-2 logo-container">
            <img
              class="mb-4"
              src="../assets/rede-social/smart-logo.svg"
              alt=""
            />
          </div>
          <div class="info py-5">
            <div>
              <p class="address">
                Rua Bruno Filgueira, 2434 CEP 80.710-530<br />Bigorrilho -
                Curitiba - Paraná - Brasil
              </p>
              <a
                href="https://api.whatsapp.com/send?phone=5541987536283&text=Ol%C3%A1%2C%20vim%20atrav%C3%A9s%20do%20site%20do%20cidade%20ama%2C%20voc%C3%AA%20pode%20me%20ajudar%3F"
                target="_blank"
                class="address mb-3"
                >+55 41 98753-6283</a
              >
              <p class="address">CNPJ: 36.208.711/0001-01</p>
            </div>
          </div>
        </div>
        <div
          class="termos d-flex align-items-center justify-content-center col-12"
        >
          <div class="mb-2 mt-2">
            <a href="/termos" class="links-terms">{{
              $store.state.contentFooter.contact.terms
            }}</a>
          </div>
        </div>
      </div>
    </div>
    <hr class="mb-2 mr-5 ml-5" style="border-color: #dddee3; opacity: 0.2" />
    <div class="d-flex justify-content-center mt-4 rights">
      © 2022 AMA - Agentes do meio Ambiente. Todos os direitos reservados.
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
.rights {
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 132%;
  text-align: center;
  color: #fff;
  opacity: 0.4;
}

.links-terms {
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 132%;
  text-align: center;
  text-decoration-line: underline;
  color: #fff;

  &:hover {
    color: #fff;
    text-decoration: none;
  }
}

.footer-description {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 156%;
  color: #fff;
}

.address {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 156%;
  color: #fff;
}

.logo-container {
  display: flex;
  justify-content: flex-start;
}

.social-icon {
  &:hover {
    opacity: 0.5;
  }
}

@media (max-width: 991px) {
  .logo-container {
    justify-content: center;
  }
}
</style>
