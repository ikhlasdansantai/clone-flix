<script setup>
import { moviesData } from "../../data.ts";
</script>

<template>
  <section>
    <div class="movies">
      <div class="movies__content flex flex-col gap-16">
        <h1
          class="movies__title text-left text-3xl text-textHeading lg:w-[20ch]"
        >
          Film dan Acara TV Populer Bulan Ini
        </h1>
        <div class="movies__cards grid grid-cols-4 gap-6">
          <div
            class="movies__card flex flex-col gap-2 rounded-md border-2 border-white bg-background-semiDark p-6"
            v-for="(item, index) in moviesData"
          >
            <img :src="item.imgUrl" :alt="item.title" class="object-cover" />
            <h5 class="text-lg text-textHeading">{{ item.title }}</h5>
            <p class="text-sm leading-[2.5] text-textParagraph/75">
              {{ item.description }}
            </p>
            <div class="movie__card__category flex text-textParagraph/75">
              <p>{{ item.categories.join(", ") }}</p>
            </div>
            <div class="movie__card__ratings flex items-center gap-1">
              <figure class="text-[#FFC300]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.15em"
                  height="1.15em"
                  viewBox="0 0 256 256"
                >
                  <path
                    fill="currentColor"
                    d="m234.29 114.85l-45 38.83L203 211.75a16.4 16.4 0 0 1-24.5 17.82L128 198.49l-50.53 31.08A16.4 16.4 0 0 1 53 211.75l13.76-58.07l-45-38.83A16.46 16.46 0 0 1 31.08 86l59-4.76l22.76-55.08a16.36 16.36 0 0 1 30.27 0l22.75 55.08l59 4.76a16.46 16.46 0 0 1 9.37 28.86Z"
                  />
                </svg>
              </figure>

              <p class="text-textParagraph/75">{{ item.rating }}/10 IMDb</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
