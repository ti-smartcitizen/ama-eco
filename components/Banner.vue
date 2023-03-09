<template>
  <div>
    <div class="d-none d-lg-flex d-xl-flex d-xxl-flex banner-wrapper">
      <img
        class="banner-image"
        :src="require(`~/assets/banner/${loadImage()}.png`)"
        alt=""
      />
      <div class="banner-text">
        <div class="title">
          {{ $store.state.contentSite.home.banner.title }}
        </div>
        <div class="icons">
          <div
            v-for="icon in icons"
            :key="icon.id"
            :class="`icon ${icon.active && 'active'} ${'icon-' + icon.id}`"
            @click="handleActive(icon.id)"
          >
            <img
              :src="require(`~/assets/banner/icons/${icon.src}.svg`)"
              alt=""
            />
          </div>
        </div>
        <div class="description">
          <div v-for="icon in icons" :key="icon.id">
            <div v-if="icon.active">
              {{ loadText(icon.id) }}
              <a target="_blank" :href="icon.link">
                {{ $store.state.contentSite.home.banner.seeMore }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="d-lg-none d-xl-none d-xxl-none banner-wrapper-mobile">
      <img
        class="banner-image"
        :src="require(`~/assets/banner/${loadImage()}.png`)"
        alt=""
      />
      <div class="banner-text">
        <div class="title">
          {{ $store.state.contentSite.home.banner.title }}
        </div>
        <div class="icons">
          <div
            v-for="icon in icons"
            :key="icon.id"
            :class="`icon ${icon.active && 'active'} ${'icon-' + icon.id}`"
            @click="handleActive(icon.id)"
          >
            <img
              :src="require(`~/assets/banner/icons/${icon.src}.svg`)"
              alt=""
            />
          </div>
        </div>
        <div class="description">
          <div v-for="icon in icons" :key="icon.id">
            <div v-if="icon.active">
              {{ loadText(icon.id) }}
              <a target="_blank" :href="icon.link">
                {{ $store.state.contentSite.home.banner.seeMore }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    const icons = [
      {
        link: 'https://www.youtube.com/channel/UCOybdqZCXnBJ-EpmmSdWMiw',
        src: 'youtube',
        id: 'yt',
        active: true,
      },
      {
        link: 'https://www.tiktok.com/@agentesdomeioambiente?is_from_webapp=1&sender_device=pc',
        src: 'tiktok',
        id: 'tk',
        active: false,
      },
      {
        link: 'https://www.facebook.com/agentedomeioambiente',
        src: 'facebook',
        id: 'fb',
        active: false,
      },
      {
        link: 'https://www.instagram.com/agentesdomeioambiente/',
        src: 'instagram',
        id: 'ig',
        active: false,
      },
      {
        link: 'https://www.linkedin.com/company/agentesdomeioambiente',
        src: 'linkedin',
        id: 'ln',
        active: false,
      },
      {
        link: 'https://twitter.com/cidade_ama',
        src: 'twitter',
        id: 'tt',
        active: false,
      },
    ]
    return {
      icons,
    }
  },
  methods: {
    loadText(id) {
      if (id === 'yt')
        return this.$store.state.contentSite.home.banner.ytDescription
      if (id === 'tk')
        return this.$store.state.contentSite.home.banner.tkDescription
      if (id === 'fb')
        return this.$store.state.contentSite.home.banner.fbDescription
      if (id === 'ig')
        return this.$store.state.contentSite.home.banner.igDescription
      if (id === 'ln')
        return this.$store.state.contentSite.home.banner.lnDescription
      if (id === 'tt')
        return this.$store.state.contentSite.home.banner.ttDescription
    },
    loadImage() {
      const icon = this.icons.find((icon) => icon.active)
      return icon.src
    },
    handleActive(id) {
      this.icons.map((item) => {
        if (item.id === id) {
          item.active = true
        } else {
          item.active = false
        }
        return item
      })
    },
  },
}
</script>
<style lang="scss" scoped>
/* stylelint-disable no-descending-specificity */
.banner-wrapper {
  position: relative;
  padding: 56px 86px;
  background: #8acc0d;
  border-radius: 64px;
  min-height: 416px;
  max-width: 1300px;
  margin-top: 60px;
  .banner-image {
    position: absolute;
    bottom: 0;
    left: 0;
  }
  .banner-text {
    margin-left: 500px;
    max-width: 700px;
    .icons {
      margin: 32px 0;
      display: flex;
      gap: 16px;
      .icon {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 64px;
        height: 64px;
        border-radius: 16px;
        cursor: pointer;
      }
      .icon.icon-yt {
        &.active,
        &:hover {
          background: red;
        }
      }
      .icon.icon-tk {
        &.active,
        &:hover {
          background: #fe2c55;
        }
      }
      .icon.icon-fb {
        &.active,
        &:hover {
          background: #1877f2;
        }
      }
      .icon.icon-ig {
        &.active,
        &:hover {
          background: linear-gradient(
            180deg,
            #6f0ff6 0%,
            #ed1682 30.73%,
            #fe5f19 63.02%,
            #ffcb00 100%
          );
        }
      }
      .icon.icon-ln {
        &.active,
        &:hover {
          background: #0a66c2;
        }
      }
      .icon.icon-tt {
        &.active,
        &:hover {
          background: #1d9bf0;
        }
      }
    }
    .title {
      font-family: 'Poppins', sans-serif;
      font-style: normal;
      font-weight: 600;
      font-size: 64px;
      line-height: 100%;
      color: #2157cc;
    }
    .description {
      font-family: 'Inter', sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 32px;
      color: #131e3b;
      a {
        color: #131e3b;
        font-weight: bold;
      }
    }
  }
}

.banner-wrapper-mobile {
  padding: 32px;
  padding-bottom: 0;
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  align-items: center;
  background: #8acc0d;
  border-radius: 32px;
  .banner-image {
    max-width: 262px;
  }
  .banner-text {
    margin-left: 0;
    max-width: 100%;
    .icons {
      margin: 32px 0;
      display: flex;
      gap: 8px;
      .icon {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 48px;
        height: 48px;
        border-radius: 12px;
        cursor: pointer;
        img {
          max-width: 24px;
        }
      }
      .icon.icon-yt {
        &.active,
        &:hover {
          background: red;
        }
      }
      .icon.icon-tk {
        &.active,
        &:hover {
          background: #fe2c55;
        }
      }
      .icon.icon-fb {
        &.active,
        &:hover {
          background: #1877f2;
        }
      }
      .icon.icon-ig {
        &.active,
        &:hover {
          background: linear-gradient(
            180deg,
            #6f0ff6 0%,
            #ed1682 30.73%,
            #fe5f19 63.02%,
            #ffcb00 100%
          );
        }
      }
      .icon.icon-ln {
        &.active,
        &:hover {
          background: #0a66c2;
        }
      }
      .icon.icon-tt {
        &.active,
        &:hover {
          background: #1d9bf0;
        }
      }
    }
    .title {
      font-family: 'Poppins', sans-serif;
      font-style: normal;
      font-weight: 600;
      font-size: 56px;
      line-height: 100%;
      color: #2157cc;
    }
    .description {
      font-family: 'Inter', sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 32px;
      color: #131e3b;
      margin: 24px 0;
      a {
        color: #131e3b;
        font-weight: bold;
      }
    }
  }
}
</style>
