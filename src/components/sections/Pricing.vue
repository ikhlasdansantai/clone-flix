<script setup>
import { pricesData } from "../../data.ts";
</script>

<template>
  <section>
    <div class="pricing">
      <div class="pricing__content flex flex-col gap-16">
        <h2
          class="service__title text-center text-4xl leading-relaxed text-textHeading lg:mx-auto lg:w-[20ch]"
        >
          Pilih Paket yang Cocok Untukmu
        </h2>

        <div
          class="pricing__cards grid grid-cols-3 justify-items-center gap-10"
        >
          <div
            v-bind:class="{
              'pricing__card w-full space-y-8 rounded-2xl p-8': true,
              'via-47% border-2 bg-gradient-to-br from-[#1F2127] from-0% via-[#373A43] to-[#1F2127] to-100%':
                index === 1,
              'bg-background-semiDark': index !== 1,
            }"
            v-for="(item, index) in pricesData"
          >
            <h4 class="text-center text-2xl text-textHeading">
              {{ item.title }}
            </h4>
            <div class="flex items-end justify-center gap-1">
              <h5 class="text-4xl font-semibold text-primary">
                {{ item.price }}
              </h5>
              <p class="text-textParagraph">/bulan</p>
            </div>
            <ul class="space-y-3">
              <li
                class="flex gap-2 text-textParagraph"
                v-for="(benefit, index) in item.benefits"
              >
                <figure v-if="benefit.status" class="w-8 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      fill-rule="evenodd"
                      d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18m-.232-5.36l5-6l-1.536-1.28l-4.3 5.159l-2.225-2.226l-1.414 1.414l3 3l.774.774z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </figure>
                <p
                  v-bind:class="{
                    'text-textParagraph': benefit.status,
                    'text-[#ABACAF]': !benefit.status,
                  }"
                >
                  {{ benefit.title }}
                </p>
              </li>
            </ul>
            <button
              v-bind:class="{
                'bg-gradient-to-br from-[#BC0E19] to-[#DB202C]': index === 1,
                'border bg-transparent': index !== 1,
                'mx-auto block rounded-lg px-6 py-2 text-textHeading': true,
              }"
            >
              Pilih Sekarang
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
