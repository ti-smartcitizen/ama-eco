<template>
  <div class="container-fluid tarefasODS">
    <div class="row h-100">
      <div class="container">
        <div
          class="row justify-content-center align-items-lg-center h-100 bgVerde"
        >
          <div class="d-none d-lg-flex col col-lg-6">A</div>
          <div class="col-12 col-lg-6">
            <h1 class="mb-3 mb-lg-5 mx-auto">
              {{ $store.state.contentSite.home.jobs_ods.title }}
            </h1>
            <h3 class="w-100 w-lg-75 mb-3 mb-lg-5 mx-auto">
              {{ $store.state.contentSite.home.jobs_ods.sub_title }}
            </h3>
            <p class="w-100 w-lg-75 mb-3 mx-auto">
              {{ $store.state.contentSite.home.jobs_ods.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>
