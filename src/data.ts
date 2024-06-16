import Image from "./constants/Images.ts";
import { Service, Movie, Price } from "./types.ts";

export const servicesData: Service[] = [
  {
    id: 1,
    title: "Tonton Langung Di TV",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path fill="currentColor" d="M208 40H48a24 24 0 0 0-24 24v112a24 24 0 0 0 24 24h160a24 24 0 0 0 24-24V64a24 24 0 0 0-24-24m8 136a8 8 0 0 1-8 8H48a8 8 0 0 1-8-8V64a8 8 0 0 1 8-8h160a8 8 0 0 1 8 8Zm-48 48a8 8 0 0 1-8 8H96a8 8 0 0 1 0-16h64a8 8 0 0 1 8 8"/></svg>`,
    description:
      "Tonton di Smart TV, Playstation, Xbox, Chromecast, Apple TV, pemutar Blu-ray, dan banyak lagi",
  },
  {
    id: 2,
    title: "Download untuk offline",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path fill="currentColor" d="M224 72h-16v-8a24 24 0 0 0-24-24H40a24 24 0 0 0-24 24v96a24 24 0 0 0 24 24h112v8a24 24 0 0 0 24 24h48a24 24 0 0 0 24-24V96a24 24 0 0 0-24-24M40 168a8 8 0 0 1-8-8V64a8 8 0 0 1 8-8h144a8 8 0 0 1 8 8v8h-16a24 24 0 0 0-24 24v72Zm192 24a8 8 0 0 1-8 8h-48a8 8 0 0 1-8-8V96a8 8 0 0 1 8-8h48a8 8 0 0 1 8 8Zm-96 16a8 8 0 0 1-8 8H88a8 8 0 0 1 0-16h40a8 8 0 0 1 8 8m80-96a8 8 0 0 1-8 8h-16a8 8 0 0 1 0-16h16a8 8 0 0 1 8 8"/></svg>`,
    description:
      "Simpan dengan mudah agar selalu ada acara TV dan film yang bisa ditonton",
  },
  {
    id: 3,
    title: "Akses Berbagai Perangkat",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path fill="currentColor" d="M224 72h-16v-8a24 24 0 0 0-24-24H40a24 24 0 0 0-24 24v96a24 24 0 0 0 24 24h112v8a24 24 0 0 0 24 24h48a24 24 0 0 0 24-24V96a24 24 0 0 0-24-24M40 168a8 8 0 0 1-8-8V64a8 8 0 0 1 8-8h144a8 8 0 0 1 8 8v8h-16a24 24 0 0 0-24 24v72Zm192 24a8 8 0 0 1-8 8h-48a8 8 0 0 1-8-8V96a8 8 0 0 1 8-8h48a8 8 0 0 1 8 8Zm-96 16a8 8 0 0 1-8 8H88a8 8 0 0 1 0-16h40a8 8 0 0 1 8 8m80-96a8 8 0 0 1-8 8h-16a8 8 0 0 1 0-16h16a8 8 0 0 1 8 8"/></svg>`,
    description:
      "Streaming film dan acara TV tak terbatas di ponsel, tablet, laptop, dan TV-mu",
  },
  {
    id: 4,
    title: "Buat profil untuk anak",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path fill="currentColor" d="M92 140a12 12 0 1 1 12-12a12 12 0 0 1-12 12m72-24a12 12 0 1 0 12 12a12 12 0 0 0-12-12m-12.27 45.23a45 45 0 0 1-47.46 0a8 8 0 0 0-8.54 13.54a61 61 0 0 0 64.54 0a8 8 0 0 0-8.54-13.54M232 128A104 104 0 1 1 128 24a104.11 104.11 0 0 1 104 104m-16 0a88.11 88.11 0 0 0-84.09-87.91C120.32 56.38 120 71.88 120 72a8 8 0 0 0 16 0a8 8 0 0 1 16 0a24 24 0 0 1-48 0c0-.73.13-14.3 8.46-30.63A88 88 0 1 0 216 128"/></svg>`,
    description:
      "Profil anak dilengkapi kontrol orang tua yang dilindungi PIN sehingga kamu bisa membatasi rating usia konten yang bisa ditonton anak ",
  },
];

export const moviesData: Movie[] = [
  {
    title: "Peaky Blinders",
    imgUrl: Image.Pb,
    categories: ["Crime", "Drama"],
    rating: 8.8,
  },
  {
    title: "Sapeihderman",
    imgUrl: Image.Sp,
    categories: ["Action", " Adventure", "Fantasy"],
    rating: 8.8,
  },
  {
    title: "Arcane: Moba Ketawa",
    imgUrl: Image.Ac,
    categories: ["Animation", " Action", "Adventure"],
    rating: 9.2,
  },
  {
    title: "Si Jokahh",
    imgUrl: Image.Jk,
    categories: ["Crime", "Drama", "Thriller"],
    rating: 8.4,
  },
];

export const pricesData: Price[] = [
  {
    title: "Basic",
    price: "120,000",
    benefits: [
      {
        title: "Ponsel, Tablet, Komputer, TV",
        status: true,
      },
      {
        title: "No Ads",
        status: true,
      },
      {
        title: "Batalkan Kapan Saja",
        status: true,
      },
      {
        title: "Kualitas Video Baik",
        status: true,
      },
      {
        title: "Resolusi 480p",
        status: true,
      },
      {
        title: "Resolusi 720p",
        status: false,
      },
      {
        title: "Resolusi 1080p",
        status: false,
      },
      {
        title: "Resolusi 4K+HDR",
        status: false,
      },
    ],
  },
  {
    title: "Standart",
    price: "153,000",
    benefits: [
      {
        title: "Ponsel, Tablet, Komputer, TV",
        status: true,
      },
      {
        title: "No Ads",
        status: true,
      },
      {
        title: "Batalkan Kapan Saja",
        status: true,
      },
      {
        title: "Kualitas Video Baik",
        status: true,
      },
      {
        title: "Resolusi 480p",
        status: true,
      },
      {
        title: "Resolusi 720p",
        status: true,
      },
      {
        title: "Resolusi 1080p",
        status: true,
      },
      {
        title: "Resolusi 4K+HDR",
        status: false,
      },
    ],
  },
  {
    title: "Premium",
    price: "186,000",
    benefits: [
      {
        title: "Ponsel, Tablet, Komputer, TV",
        status: true,
      },
      {
        title: "No Ads",
        status: true,
      },
      {
        title: "Batalkan Kapan Saja",
        status: true,
      },
      {
        title: "Kualitas Video Baik",
        status: true,
      },
      {
        title: "Resolusi 480p",
        status: true,
      },
      {
        title: "Resolusi 720p",
        status: true,
      },
      {
        title: "Resolusi 1080p",
        status: true,
      },
      {
        title: "Resolusi 4K+HDR",
        status: true,
      },
    ],
  },
];
