<script setup>
import { servicesData } from "../../data.ts";
</script>

<template>
  <section>
    <div class="service">
      <div class="service__content flex flex-col gap-16">
        <h2
          class="service__title text-center text-4xl leading-relaxed text-textHeading lg:mx-auto lg:w-[20ch]"
        >
          Layanan Terbaik yang Tidak Mengecewakan
        </h2>

        <div class="service__cards grid grid-cols-4 gap-10">
          <div
            class="service__card flex flex-col gap-3 rounded-md bg-background-semiDark p-4 pb-0"
            v-for="(item, index) in servicesData"
          >
            <figure class="text-white">
              <svg v-bind:innerHTML="item.icon" class="block h-14 w-14"></svg>
            </figure>
            <h5 class="text-lg text-textHeading">{{ item.title }}</h5>
            <p class="text-sm leading-[2.5] text-textParagraph/75">
              {{ item.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
