<template>
  <div class="a-container">
    <section class="a-flex a-between a-hero">
      <div class="a-flex-half">
        <h1 class="a-title-large a-subfont a-margin-t a-margin-b">PHP Hosting</h1>
        <span class="a-title-light">Cepat, Handal, Penuh dengan Modul PHP yang Anda butuhkan</span>
        <a-list class="a-margin-t-2x" :data="pros" />
      </div>
      <img class="a-flex-half" src="/svg/illustration-php-banner.svg" alt />
    </section>
    <section class="a-flex a-row a-align-center a-evenly a-padding-t a-padding-b">
      <div class="a-flex a-column">
        <embed src="/svg/zendguard-logo.svg" alt />
        <span>PHP Zend Guard Loader</span>
      </div>
      <div class="a-flex a-column">
        <embed src="/svg/Hosting_composer.svg" alt />
        <span>PHP Composer</span>
      </div>
      <div class="a-flex a-column">
        <embed src="/svg/Hosting_ioncube.svg" alt />
        <span>PHP ionCube Loader</span>
      </div>
    </section>
    <section class="a-padding-t-2x a-flex a-align-center a-column a-padding-b">
      <h1 class="a-subfont a-margin-t a-margin-b-s">Paket Hosting Singapura yang Tepat</h1>
      <h2 class="a-font-light">Diskon 40% + Domain dan SSL Gratis untuk Anda</h2>
    </section>
    <section class="a-padding">Price Here</section>
    <section class="a-flex a-align-center a-column a-padding-t-2x a-padding-b-2x a-flex a-align-center a-border-bc">
      <h2>Powerfull dengan limit PHP yang Besar</h2>
      <div class="a-flex-grid a-between a-padding">
        <ul class="a-list a-list-bordered a-flex-grid-item a-flex-1">
          <li>
            <i class="fas fa-check-circle a-check" />
            <span>max execution time 300s</span>
          </li>
          <li>
            <i class="fas fa-check-circle a-check" />
            <span>max execution time 300s</span>
          </li>
          <li>
            <i class="fas fa-check-circle a-check" />
            <span>php memory limit 1024mb</span>
          </li>
        </ul>
        <ul class="a-list a-list-bordered a-flex-grid-item a-flex-1">
          <li>
            <i class="fas fa-check-circle a-check" />
            <span>post max size 128 MB</span>
          </li>
          <li>
            <i class="fas fa-check-circle a-check" />
            <span>upload max filesize 128 MB</span>
          </li>
          <li>
            <i class="fas fa-check-circle a-check" />
            <span>max input vars 2500</span>
          </li>
        </ul>
      </div>
    </section>
    <section class="a-flex a-align-center a-column a-padding-t-2x a-padding-b-2x a-flex a-align-center a-border-bc">
      <h2 class="a-padding-b-2x">Semua Paket Hosting Sudah Termasuk</h2>
      <div class="row">
        <div class="col-4 a-flex a-align-center a-column a-margin-b" v-for="(item, index) in paket" :key="index">
          <embed :src="'/svg/'+item.icon"  class="a-thumbnail"/>
          <h2 class="a-subfont">{{item.title}}</h2>
          <p class="text-center">{{item.description}}</p>
        </div>
      </div>
    </section>
    <section class="a-flex a-align-center a-border-b a-column a-padding-t-2x a-padding-b-2x a-flex a-align-center ">
      <h2 class="a-padding-b-2x">Mendukung Penuh Framework Laravel</h2>
      <div class="row a-align-center">
        <div class="col-lg">
          <p>Tak perlu menggunakan dedicated server ataupun VPS yang mahal.
            Layanan PHP hosting murah kami mendukung penuh framework favorit Anda
          </p>
          <ul class="a-list a-padding-t-2x">
            <li>
              <i class="fas fa-check-circle a-check" />
              <span>Install Laravel <b>1 klik</b> dengan Softaculous Installer</span>
            </li>
            <li>
              <i class="fas fa-check-circle a-check" />
              <span>Mendukung ekstensi <b>PHP MCrypt, phar, mbstring, json</b> dan <b>fileinfo</b></span>
            </li>
            <li>
              <i class="fas fa-check-circle a-check" />
              <span>Tersedia <b>Composer</b> dan <b>SSH</b> untuk menginstall packages pilihan Anda</span>
            </li>
            <li class="a-padding-t-2x">
              <small>Nb. Composer dan SSH hanya tersedia pada paket Personal dan Bisnis</small>
            </li>
          </ul>
          <button>Pilih Hosting Anda</button>
        </div>
        <div class="col-lg">
          <embed src="/svg/banner_support_laravel_hosting.svg" type="">
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import List from "@/components/list.vue";
export default {
  name: "landing",
  components: {
    "a-list": List
  },
  async asyncData({ $axios }) {
    const data = $axios.$get("data/pros.json");
    const paket = $axios.$get("data/paket.json");

    const promise = await Promise.all([data, paket]);

    return {
      pros: promise[0],
      paket: promise[1]
    };
  }
};
</script>

<style>
</style>
