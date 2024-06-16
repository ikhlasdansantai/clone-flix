<script setup>
import Image from "../../constants/Images.ts";
</script>

<template>
  <footer class="mx-auto mt-40 max-w-7xl space-y-16 pb-8">
    <section class="footer__top grid grid-cols-4 justify-items-center gap-3">
      <div class="footer-1 col-end-2 w-full">
        <figure>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="8em"
            height="3em"
            viewBox="0 0 512 138"
          >
            <path
              fill="#db202c"
              d="M340.657 0v100.203q18.54.861 36.98 2.09v21.245a1822 1822 0 0 0-58.542-2.959V0zM512 .012l-28.077 65.094l28.07 72.438l-.031.013a1789 1789 0 0 0-24.576-3.323l-15.763-40.656l-15.913 36.882a1816 1816 0 0 0-22.662-2.36l27.371-63.43L435.352.013h23.325l14.035 36.184L488.318.012zM245.093 119.526V.011h60.19v21.436h-38.628v27.78h29.227v21.245h-29.227v49.05zM164.58 21.448V.01h66.69v21.437h-22.565v98.66c-7.197.19-14.386.412-21.56.683V21.448zM90.868 126.966V.014h59.89v21.435h-38.331v29.036c8.806-.113 21.327-.24 29.117-.222V71.51c-9.751-.12-20.758.134-29.117.217v32.164a1848 1848 0 0 1 38.331-2.62v21.247a1816 1816 0 0 0-59.89 4.45M48.571 77.854L48.57.01h21.562v128.96q-11.823 1.216-23.603 2.584L21.56 59.824v74.802q-10.8 1.406-21.56 2.936V.012h20.491zm346.854 46.965V.012h21.563V126.6c-7.179-.64-14.364-1.23-21.563-1.78"
            />
          </svg>
        </figure>
        <p class="text-textParagraph/70">
          Layanan streaming tanpa iklan dan harga bulanan yang murah
        </p>
      </div>
      <div
        class="footer__2 col-start-2 col-end-4 grid w-full grid-cols-3 gap-2"
      >
        <div class="footer__data__1 space-y-6">
          <h6 class="text-textHeading">Perusahaan</h6>
          <ul class="space-y-3 text-textParagraph/70">
            <li>Tentang Kami</li>
            <li>Hubungi Kami</li>
            <li>Karir</li>
            <li>Blog</li>
            <li>Investors Relations</li>
          </ul>
        </div>
        <div class="footer__data__2 space-y-6">
          <h6 class="text-textHeading">Dapatkan Bantuan</h6>
          <ul class="space-y-3 text-textParagraph/70">
            <li>FAQ</li>
            <li>Pusat Bantuan</li>
            <li>Akun</li>
          </ul>
        </div>
        <div class="footer__data__3 space-y-6">
          <h6 class="text-textHeading">Lainnya</h6>
          <ul class="space-y-3 text-textParagraph/70">
            <li>Tukar Kartu Hadiah</li>
            <li>Netflix Originals</li>
            <li>Media Center</li>
          </ul>
        </div>
      </div>
      <div class="footer-3 col-start-4 w-full space-y-8">
        <h6 class="text-textHeading">Dapatkan Aplikasi Kami</h6>
        <div class="app__downloads flex gap-4">
          <figure class="w-24">
            <img :src="Image.GooglePlay" alt="Google Play" class="w-full" />
          </figure>
          <figure class="w-24">
            <img :src="Image.AppStore" alt="App Store" class="w-full" />
          </figure>
        </div>
        <div class="social__media flex items-center gap-8">
          <figure class="w-6 text-white">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4z"
              />
            </svg>
          </figure>
          <figure class="w-10 rounded-full bg-primary p-2 text-white">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <g
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path
                  d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"
                />
              </g>
            </svg>
          </figure>
          <figure class="w-6 text-white">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M8 2H1l8.26 11.015L1.45 22H4.1l6.388-7.349L16 22h7l-8.608-11.478L21.8 2h-2.65l-5.986 6.886zm9 18L5 4h2l12 16z"
              />
            </svg>
          </figure>
        </div>
      </div>
    </section>

    <section class="footer__bottom flex items-center justify-between">
      <p class="text-textParagraph/70">
        © 2022 Hak Cipta Terpelihara oleh Netflix Indonesia
      </p>
      <div class="flex gap-3 text-textParagraph/70">
        <p>Persyaratan Layanan</p>
        <p>Kebijakan Privasi</p>
      </div>
    </section>
  </footer>
</template>
