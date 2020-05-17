<template>
  <div>
    <div class>
      <section class="a-container a-flex a-between a-hero">
        <div class="a-flex-half">
          <h1 class="a-title-large a-subfont a-margin-t a-margin-b">PHP Hosting</h1>
          <span class="a-title-light">Cepat, Handal, Penuh dengan Modul PHP yang Anda butuhkan</span>
          <a-list class="a-margin-t-2x" :data="pros" />
        </div>
        <img class="a-flex-half" src="/svg/illustration-php-banner.svg" alt />
      </section>
      <section class="a-container a-flex a-row a-align-end a-evenly a-padding-t a-padding-b">
        <div class="a-flex a-column text-center">
          <embed src="/svg/zendguard-logo.svg" alt />
          <h4 class="a-margin-t-s">PHP Zend Guard Loader</h4>
        </div>
        <div class="a-flex a-column text-center">
          <embed src="/svg/Hosting_composer.svg" alt />
          <h4 class="a-margin-t-s">PHP Composer</h4>
        </div>
        <div class="a-flex a-column text-center">
          <embed src="/svg/Hosting_ioncube.svg" alt />
          <h4 class="a-margin-t-s">PHP ionCube Loader</h4>
        </div>
      </section>
      <section class="a-container a-padding-t-2x a-flex a-align-center a-column a-padding-b">
        <h1 class="a-subfont a-margin-t a-margin-b-s">Paket Hosting Singapura yang Tepat</h1>
        <h2 class="a-font-light">Diskon 40% + Domain dan SSL Gratis untuk Anda</h2>
      </section>
      <section class="a-container a-padding container">
        <div class="card-deck a-card-deck mb-3 text-center">
          <div
            class="card box-shadow"
            :class="item.type == 'Personal' ? 'bold' : ''"
            v-for="(item, index) in pricelist"
            :key="index"
          >
            <div class="a-ribbon-wrap">
              <h3 class="a-ribbon text-white" v-if="item.type == 'Personal'">Best Seller</h3>
            </div>
            <div class="card-header">
              <h2>{{item.type}}</h2>
            </div>
            <div>
              <div
                class="a-padding border-bottom"
                :class="item.type == 'Personal' ? 'card-primary' : ''"
              >
                <h3 class="a-text-through font-weight-light">Rp {{item.diskon}}</h3>
                <h1 class="card-title pricing-card-title a-margin-remove">
                  Rp {{item.price}}
                  <small
                    :class="item.type == 'Personal' ? 'text-white' : 'text-muted'"
                  >/ bln</small>
                </h1>
              </div>
              <div
                class="a-padding-small border-bottom"
                :class="item.type == 'Personal' ? 'card-primary darken' : ''"
              >
                <b>{{item.users}}</b> Pengguna Terdaftar
              </div>
              <ul class="a-list mt-3 mb-4">
                <li>
                  <b>{{item.resources}} RESOURCE POWER</b>
                </li>
                <li>
                  <b>{{item.diskspace}}</b> Disk Space
                </li>
                <li>
                  <b>{{item.bandwidth}}</b> Bandwidth
                </li>
                <li>
                  <b>{{item.database}} Databases</b>
                </li>
                <li>
                  <b>{{item.domain}}</b>
                </li>
                <li>
                  <b>{{item.backup}}</b>
                </li>
                <li>
                  <b>{{item.ssl}}</b>
                </li>
                <li v-if="item.pop3">
                  <b>{{item.pop3}}</b> POP3 Email
                </li>
                <li v-if="item.mailProtection">
                  <b>{{item.mailProtection}}</b> Mail Protection
                </li>
                <li v-if="item.layanan">
                  <b>{{item.layanan}}</b> Layanan Support
                </li>
              </ul>
              <div class="a-padding-small a-flex a-align-center">
                <button
                  type="button"
                  class="btn btn-lg btn-block a-button-rounded"
                  :class="item.type == 'Personal' ? 'btn-primary' : 'btn-outline-primary'"
                >Pilih Sekarang</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        class="a-container a-flex a-align-center a-column a-padding-t-2x a-padding-b-2x a-flex a-align-center a-border-bc"
      >
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
      <section
        class="a-container a-flex a-align-center a-column a-padding-t-2x a-padding-b-2x a-flex a-align-center a-border-bc"
      >
        <h2 class="a-padding-b-2x">Semua Paket Hosting Sudah Termasuk</h2>
        <div class="row">
          <div
            class="col-4 a-flex a-align-center a-column a-margin-b"
            v-for="(item, index) in paket"
            :key="index"
          >
            <embed :src="'/svg/'+item.icon" class="a-thumbnail" />
            <h2 class="a-subfont">{{item.title}}</h2>
            <p class="text-center">{{item.description}}</p>
          </div>
        </div>
      </section>
      <section
        class="a-container a-flex a-align-center a-border-b a-column a-padding-t-2x a-padding-b-2x a-flex a-align-center"
      >
        <h2 class="a-padding-b-2x">Mendukung Penuh Framework Laravel</h2>
        <div class="row a-align-center">
          <div class="col-lg">
            <p>
              Tak perlu menggunakan dedicated server ataupun VPS yang mahal.
              Layanan PHP hosting murah kami mendukung penuh framework favorit Anda
            </p>
            <ul class="a-list a-padding-t-2x">
              <li>
                <i class="fas fa-check-circle a-check" />
                <span>
                  Install Laravel
                  <b>1 klik</b> dengan Softaculous Installer
                </span>
              </li>
              <li>
                <i class="fas fa-check-circle a-check" />
                <span>
                  Mendukung ekstensi
                  <b>PHP MCrypt, phar, mbstring, json</b> dan
                  <b>fileinfo</b>
                </span>
              </li>
              <li>
                <i class="fas fa-check-circle a-check" />
                <span>
                  Tersedia
                  <b>Composer</b> dan
                  <b>SSH</b> untuk menginstall packages pilihan Anda
                </span>
              </li>
              <li class="a-padding-t-2x">
                <small>Nb. Composer dan SSH hanya tersedia pada paket Personal dan Bisnis</small>
              </li>
            </ul>
            <button type="button" class="btn btn-primary a-button-rounded">Pilih Hosting Anda</button>
          </div>
          <div class="col-lg">
            <embed src="/svg/banner_support_laravel_hosting.svg" type />
          </div>
        </div>
      </section>
      <section
        class="a-container a-flex a-align-center a-border-b a-column a-padding-t-2x a-padding-b-2x a-flex a-align-center"
      >
        <h2 class="a-padding-b-2x">Modul Lengkap untuk Menjalankan PHP Anda</h2>
        <div class="row a-flex a-align-center">
          <span
            class="col-3 a-flex a-align-center"
            v-for="(item, index) in modul"
            :key="index"
          >{{item}}</span>
        </div>
        <button
          type="button"
          class="a-margin-t btn btn-outline-secondary a-button-rounded"
        >Selengkapnya</button>
      </section>
      <section
        class="a-container a-flex a-align-center a-border-b a-column a-padding-t-2x a-padding-b-2x a-flex a-align-center"
      >
        <div class="row a-align-center">
          <div class="col-lg">
            <h1 class="font-weight-light">Linux Hosting yang Stabil dengan Teknologi LVE</h1>
            <p class="a-padding-t-2x a-padding-b-2x">
              SuperMicro
              <b>Intel Xeon 24-Cores</b> dengan RAM
              <b>128 GB</b> dan Teknologi
              <b>LVE CloudLinux</b> untuk stabilitas server Anda. Dilengkapi dengan
              <b>SSD</b>
              untuk kecepatan
              <b>MySQL</b> dan caching. Apache load balancer dan auto backup untuk keamanan website PHP Anda.
            </p>
            <button type="button" class="btn btn-primary a-button-rounded">Pilih Hosting Anda</button>
          </div>
          <div class="col-lg">
            <img src="~assets/images/Image_support.png" />
          </div>
        </div>
      </section>
    </div>
    <section class="a-container a-container-share">
      <span>
        <b>Bagikan jika Anda menyukai halaman ini</b>
      </span>
      <ul class="a-list horizontal">
        <li>
          <i class="fab fa-facebook-square" />
          <span>80k</span>
        </li>
        <li>
          <i class="fab fa-twitter-square" />
          <span>450</span>
        </li>
        <li>
          <i class="fab fa-instagram-square" />
          <span>1900</span>
        </li>
      </ul>
    </section>
    <section class="a-container a-container-needhelp">
      <h1>
        Perlu
        <b>Bantuan ?</b> Hubungi Kami
        <b>{{info.phoneNumber}}</b>
      </h1>
      <button type="button" class="btn btn-outline-light">
        <i class="fas fa-comment-alt"></i> Live Chat
      </button>
    </section>
    <section class="a-container a-container-footer">
      <div class="row">
        <div class="col-3 a-margin-b">
          <h3 class="text-muted text-uppercase a-margin-b">Hubungi Kami</h3>
          <ul>
            <li>
              <h4 class="font-weight-light">{{info.phoneNumber}}</h4>
              <h4 class="font-weight-light">Senin - Minggu</h4>
              <h4 class="font-weight-light">24 Jam Nonstop</h4>
            </li>
            <li class="a-margin-t">
              <p>
                Jl. Selokan Mataram Monjali
                Karangjati MT I/304
                Sinduadi, Mlati, Sleman
                Yogyakarta 55284
              </p>
            </li>
          </ul>
        </div>
        <div class="col-3 a-margin-b">
          <h3 class="text-muted text-uppercase a-margin-b">Layanan</h3>
          <ul>
            <li>
              <a href="#" class="a-link-muted">Domain</a>
            </li>
            <li>
              <a href="#" class="a-link-muted">Shared Hosting</a>
            </li>
            <li>
              <a href="#" class="a-link-muted">Cloud VPS Hosting</a>
            </li>
            <li>
              <a href="#" class="a-link-muted">MAnaged VPS Hosting</a>
            </li>
            <li>
              <a href="#" class="a-link-muted">Web Builder</a>
            </li>
            <li>
              <a href="#" class="a-link-muted">Keamanan SSL/HTTPS</a>
            </li>
            <li>
              <a href="#" class="a-link-muted">Jasa Pembuatan Website</a>
            </li>
            <li>
              <a href="#" class="a-link-muted">Program Affiliasi</a>
            </li>
          </ul>
        </div>
        <div class="col-3 a-margin-b">
          <h3 class="text-muted text-uppercase a-margin-b">Service Hosting</h3>
          <ul>
            <li>
              <a href="#" class="a-link-muted">Hosting Murah</a>
            </li>
            <li>
              <a href="#" class="a-link-muted">Hosting Indonesia</a>
            </li>
            <li>
              <a href="#" class="a-link-muted">Hosting Singapura SG</a>
            </li>
            <li>
              <a href="#" class="a-link-muted">Hosting PHP</a>
            </li>
            <li>
              <a href="#" class="a-link-muted">Hosting Wordpress</a>
            </li>
            <li>
              <a href="#" class="a-link-muted">Hosting Laravel</a>
            </li>
          </ul>
        </div>
        <div class="col-3 a-margin-b">
          <h3 class="text-muted text-uppercase a-margin-b">Tutorial</h3>
          <ul>
            <li>
              <a href="#" class="a-link-muted">Knowledgebase</a>
            </li>
            <li>
              <a href="#" class="a-link-muted">Blog</a>
            </li>
            <li>
              <a href="#" class="a-link-muted">Cara Pembayaran</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="row a-margin-t">
        <div class="col-3 a-margin-b">
          <h3 class="text-muted text-uppercase a-margin-b">Tentang Kami</h3>
          <ul>
            <li>
              <a href="#" class="a-link-muted">Tim Niagahoster</a>
            </li>
            <li>
              <a href="#" class="a-link-muted">Karir</a>
            </li>
            <li>
              <a href="#" class="a-link-muted">Events</a>
            </li>
            <li>
              <a href="#" class="a-link-muted">Penawaran & Promo Spesial</a>
            </li>
            <li>
              <a href="#" class="a-link-muted">Kontak Kami</a>
            </li>
          </ul>
        </div>
        <div class="col-3 a-margin-b">
          <h3 class="text-muted text-uppercase a-margin-b">Kenapa Pilih Niagahoster?</h3>
          <ul>
            <li>
              <a href="#" class="a-link-muted">Support Terbaik</a>
            </li>
            <li>
              <a href="#" class="a-link-muted">Garansi Harga Termurah</a>
            </li>
            <li>
              <a href="#" class="a-link-muted">Domain Gratis Selamanya</a>
            </li>
            <li>
              <a href="#" class="a-link-muted">Datacenter Hosting Terbaik</a>
            </li>
            <li>
              <a href="#" class="a-link-muted">Review Pelanggan</a>
            </li>
          </ul>
        </div>
        <div class="col-6 a-margin-b">
          <h3 class="text-muted text-uppercase a-margin-b">Newsletter</h3>
          <div class="a-flex">
            <div class="input-group a-input-group a-margin-r-s">
              <input type="email" class="form-control" placeholder="Enter your email" />
              <span class="input-group-btn">
                <button class="btn btn-primary" type="submit">Subscribe</button>
              </span>
            </div>
            <button type="button" class="a-button-circle a-margin-r-s"><i class="fab fa-facebook-square" /></button>
            <button type="button" class="a-button-circle a-margin-r-s"><i class="fab fa-twitter-square" /></button>
            <button type="button" class="a-button-circle a-margin-r-s"><i class="fab fa-instagram-square" /></button>
          </div>
          <small>Daparkan promo dan konten menarik dari penyedia hosting terbaik Anda.</small>
        </div>
      </div>
      <div class="row a-margin-t">
        <div class="col-12 a-flex a-between">
          <div>
            <small>Copyright @2016 Niagahoster | Hosting Powered by PHP 7, CloudLinux, CloudFlare, BitNinja and DC Biznet Technovillage Jakarta</small>
            <br/>
            <small>Cloud VPS Murah powered by Webuzo Softaculous, Intel SSD and cloud computing technology</small>
          </div>
          <small>Syarat dan Ketentuan | Kebijakan Privasi</small>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import List from "@/components/list.vue";
import { mapGetters } from "vuex";

export default {
  name: "landing",
  components: {
    "a-list": List
  },
  computed: {
    ...mapGetters({
      info: "getInformation"
    })
  },
  async asyncData({ $axios }) {
    const data = $axios.$get("data/pros.json");
    const paket = $axios.$get("data/paket.json");
    const modul = $axios.$get("data/modul.json");
    const price = $axios.$get("data/pricelist.json");

    const promise = await Promise.all([data, paket, modul, price]);

    return {
      pros: promise[0],
      paket: promise[1],
      modul: promise[2],
      pricelist: promise[3]
    };
  }
};
</script>

<style>
</style>
