<template>
  <section>
    <div class="cta">
      <div class="cta__content relative space-y-10 rounded-2xl bg-ascent p-8">
        <figure
          class="absolute -right-3 -top-3 rounded-full border-4 border-black bg-[#5F7ADB] p-2 text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.5em"
            height="1.5em"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m22 2l-7 20l-4-9l-9-4Zm0 0L11 13"
            />
          </svg>
        </figure>
        <h2
          class="cta__title text-center font-montserrat text-2xl font-semibold leading-relaxed text-background-semiDark lg:mx-auto lg:w-[45ch]"
        >
          Berlangganan Untuk Mendapatkan Informasi Terbaru dan Menjadi Anggota
          Kami
        </h2>
        <div class="forms flex items-stretch justify-center gap-3">
          <input
            type="email"
            placeholder="Enter Your email"
            class="w-60 rounded-lg px-4"
          />
          <button
            class="rounded-lg bg-gradient-to-br from-[#BC0E19] to-[#DB202C] px-6 py-2 text-textHeading"
          >
            Berlangganan
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
