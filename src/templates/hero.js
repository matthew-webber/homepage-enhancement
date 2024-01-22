import { html } from "../node_modules/lit-html/lit-html.js";

export const hero = html`<div
  class="flex flex-col-reverse bg-[#f5f5f5] md:flex-row md:min-h-64 lg:min-h-96"
>
  <!-- Text -->
  <div
    class="flex items-center w-full px-5 py-5 md:px-10 md:py-10 md:w-1/2 lg:items-start lg:justify-end lg:pt-20 lg:pr-11 lg:pb-0 lg:pl-0"
  >
    <h1 class="font-nunito-sans text-musc-blue w-96">
      <span class="block font-black text-4xl">MUSC Health</span>
      <span class="block text-4xl/[40px]">Changing What's Possible</span>
    </h1>
  </div>
  <!-- Image -->
  <div class="w-full bg-[#d5d5d5] md:w-1/2">
    <img
      class="object-cover w-full h-full md:object-none"
      src="./assets/images/hero.png"
      alt="MUSC Health COVID-19 Vaccine Information"
    />
  </div>
</div>`;
