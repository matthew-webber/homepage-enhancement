import { html } from '../node_modules/lit-html/lit-html.js';

export const hero = html`
  <div
    class="flex flex-col-reverse bg-[#f5f5f5] md:flex-row md:min-h-64 lg:h-96"
  >
    <!-- Text -->
    <div
      class="flex items-center w-full px-5 py-5 md:px-10 md:py-10 md:w-1/2 lg:items-start lg:justify-end lg:pt-20 lg:pr-11 lg:pb-0 lg:pl-0"
    >
      <h1 class="text-musc-blue w-96">
        <span class="block font-black text-4xl">MUSC Health</span>
        <span class="block text-4xl/[40px]">Changing What's Possible</span>
      </h1>
    </div>
    <!-- Image -->
    <div
      class="w-full bg-[#d4d4d4] md:w-1/2 lg:flex lg:justify-center 2xl:justify-start 2xl:pl-24"
    >
      <!-- Small, Medium Hero -->
      <img
        class="object-cover w-full h-52 md:object-none md:hidden lg:object-cover lg:justify-self-center lg:w-auto"
        src="./assets/images/hero.png"
        alt="MUSC Health COVID-19 Vaccine Information"
      />
      <!-- Large Hero -->
      <img
        class="hidden object-cover w-full h-52 md:object-none md:h-auto md:flex lg:object-cover lg:justify-self-center lg:w-auto lg:h-auto"
        src="./assets/images/hero-lg.png"
        alt="MUSC Health COVID-19 Vaccine Information"
      />
    </div>
  </div>
`;
