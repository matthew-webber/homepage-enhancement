import { html } from '../node_modules/lit-html/lit-html.js';

export const hero = html`
  <div
    class="font-nunito-sans flex flex-col-reverse bg-[#f5f5f5] md:flex-row md:min-h-64 lg:h-96"
  >
    <!-- Text -->
    <div
      class="flex items-center w-full p-5 md:pr-12 md:pl-10 md:w-1/2 lg:items-start lg:justify-end lg:pt-[88px] lg:pr-12 lg:pb-0 lg:pl-0"
    >
      <h1 class="text-musc-blue w-full md:w-96">
        <span
          class="block text-[26px]/[28px] font-black md:text-[32px]/[38px] lg:text-4xl"
        >
          MUSC Health
        </span>
        <span
          class="block text-3xl md:text-[36px]/[38px] lg:text-[40px]/[44px]"
        >
          Changing What's Possible
        </span>
      </h1>
    </div>
    <!-- Image -->
    <div class="max-w-[900px] md:w-1/2">
      <!-- Hero -->
      <img
        class="object-cover w-full h-52 md:h-full lg:object-cover"
        src="./assets/images/hero-hq.jpg"
        alt="MUSC Health COVID-19 Vaccine Information"
      />
    </div>
  </div>
`;
