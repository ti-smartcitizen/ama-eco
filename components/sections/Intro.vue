<template>
  <div class="container-fluid programas programs col-xxl-8">
    <div class="row flex-lg-row align-items-stretch h-100">
      <div class="col-12 col-lg-6 order-2 order-lg-1 img-container">
        <img
          src="~/assets/intro/intro.png"
          class="d-block intro-img mw-100"
          loading="lazy"
        />
      </div>
      <div
        class="col-12 col-lg-6 order-1 order-lg-2 text-container align-items-lg-center"
      >
        <div class="text-lg-left">
          <div
            class="sub-title"
            v-html="$store.state.contentSite.home.about.sub"
          ></div>
          <div
            class="mb-3 section-title"
            v-html="$store.state.contentSite.home.about.title"
          ></div>
          <p
            class="intro-content"
            v-html="$store.state.contentSite.home.about.desc1"
          ></p>
          <p
            class="intro-content"
            v-html="$store.state.contentSite.home.about.desc2"
          ></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script></script>

<style scoped lang="scss">
.img-container {
  display: flex;
  justify-content: flex-end;
  position: relative;
  background: #fff;

  .intro-img {
    width: 72%;
    right: 0;
    top: 17%;
    position: absolute;
  }
}

.text-container {
  display: flex;
  justify-content: flex-start;
  background: #fff;
  padding-left: 64px;

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
  }
}

@media (max-width: 1450px) {
  .programs {
    height: 110vh !important;
    margin-top: 24px !important;
    margin-bottom: 0 !important;
  }

  .sub-title {
    font-size: 16px !important;
  }

  .section-title {
    font-size: 42px !important;
  }

  .intro-content {
    font-size: 16px !important;
    margin-bottom: 16px !important;
  }
}

@media (max-width: 991.98px) {
  .programs {
    height: 100% !important;
    margin-top: 0 !important;
    margin-bottom: 0 !important;
  }

  .img-container {
    justify-content: center;

    .intro-img {
      position: relative;
      top: 20px;
      width: 88%;
    }
  }

  .sub-title {
    font-size: 20px !important;
  }

  .section-title {
    font-size: 64px !important;
  }

  .intro-content {
    font-size: 18px !important;
  }

  .text-container {
    padding: 32px;
    padding-top: 94px;
    padding-bottom: 0;
  }
}
</style>
