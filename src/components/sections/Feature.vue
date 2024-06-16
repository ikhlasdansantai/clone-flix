<script setup>
import Images from "../../constants/Images.ts";
</script>

<template>
  <section>
    <div class="feature grid grid-cols-2 items-center gap-20">
      <div class="feature__content order-2">
        <h2
          class="feature__title text-4xl leading-relaxed text-textHeading lg:ml-auto lg:w-[24ch]"
        >
          Tonton Film, Acara TV Tak Terbatas, dan Lebih Banyak Lagi
        </h2>
      </div>
      <figure class="featture__image">
        <img :src="Images.Tv" alt="Tv Image" />
      </figure>
    </div>
  </section>
</template>
