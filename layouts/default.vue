<template>
  <div>
    <div class="a-flex a-between a-topbar a-container">
      <div class="a-topbar-info">
        <span class="a-ribbon-tag"><i class="fas fa-tag" /></span>
        <span class="info">{{info.latestInfo[0]}}</span>
      </div>
      <ul class="a-topbar-cs a-list horizontal a-menu">
        <li>
          <i class="fas fa-phone-alt a-padding-r-s" />
          <span>{{info.phoneNumber}}</span>
        </li>
        <li>
          <i class="fas fa-comment-alt a-padding-r-s" />
          <span>Live Chat</span>
        </li>
        <li>
          <i class="fas fa-user-circle a-padding-r-s" />
          <span>Member Area</span>
        </li>
      </ul>
    </div>
    <div class="a-nav a-container a-flex a-between a-align-center">
      <img class="a-nav-logo" src="~assets/images/NiagaHoster.png" alt="logo" />
      <ul class="a-list horizontal a-menu">
        <li>Hosting</li>
        <li>Domain</li>
        <li>Server</li>
        <li>Website</li>
        <li>Afiliasi</li>
        <li>Promo</li>
        <li>Pembayaran</li>
        <li>Review</li>
        <li>Kontak</li>
        <li>Blog</li>
      </ul>
    </div>
    <nuxt />
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      info: "getInformation"
    })
  }
};
</script>

<style>
</style>
