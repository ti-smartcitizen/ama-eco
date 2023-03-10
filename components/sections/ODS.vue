<template>
  <div class="container-fluid tarefasODS">
    <div class="row h-100">
      <div class="container">
        <div
          class="row justify-content-center align-items-lg-center h-100 bgVerde"
        >
          <div class="d-lg-flex col-12 col-lg-6">
            <img class="img-fluid" src="~/assets/ods/ods-phone.png" alt="" />
          </div>
          <div class="col-12 col-lg-6">
            <div class="ods-title mt-4">
              {{ $store.state.contentSite.home.jobs_ods.title }}
            </div>
            <div class="ods-subtitle">
              {{ $store.state.contentSite.home.jobs_ods.subtitle }}
            </div>
            <div class="ods-text">
              {{ $store.state.contentSite.home.jobs_ods.description1 }}
            </div>
            <div class="ods-text">
              {{ $store.state.contentSite.home.jobs_ods.description2 }}
            </div>
            <div class="ods-text">
              {{ $store.state.contentSite.home.jobs_ods.description3 }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.ods-title {
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 64px;
  line-height: 100%;
  color: #fff;
  margin-bottom: 24px;
}

.ods-text {
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 32px;
  color: #fff;
  max-width: 526px;
  margin-bottom: 24px;
}

.ods-subtitle {
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 20px;
  line-height: 132%;
  color: #fff;
  max-width: 526px;
  margin-bottom: 32px;
}

@media (max-width: 991px) {
  .tarefasODS {
    padding: 32px;
    padding-top: 64px;
    padding-bottom: 120px;
  }
}
</style>
