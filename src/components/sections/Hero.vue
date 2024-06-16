<script setup>
import Images from "../../constants/Images.ts";
</script>

<template>
  <section>
    <div class="hero grid grid-cols-2 items-center gap-28">
      <div class="hero__content flex flex-col items-start gap-4">
        <h1 class="hero__title text-6xl leading-normal text-textHeading">
          Nikmati Tontonan Dimana Saja, dan Kapan Saja
        </h1>
        <p class="text-textParagraph/75 leading-relaxed">
          Tonton apa saja secara online dari komputer pribadi atau di perangkat
          yang terhubung ke Internet dan mendukung aplikasi Netflix, dan gunakan
          download untuk menonton saat kamu di perjalanan dan tidak punya
          koneksi Internet.
        </p>
        <button
          class="rounded-lg bg-gradient-to-br from-[#BC0E19] to-[#DB202C] px-6 py-2 text-textHeading"
        >
          Daftar Sekarang
        </button>
      </div>
      <figure class="hero__image">
        <img :src="Images.Hero" alt="Hero Image" />
      </figure>
    </div>
  </section>
</template>
