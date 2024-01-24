import { html } from '../node_modules/lit-html/lit-html.js';

export const placeholderAdvanceStories = html`
  <div class="lg:flex lg:justify-center">
    <div class="max-w-[1000px] w-full px-5 md:px-10 lg:px-0 lg:mx-12">
      <!-- Container -->
      <div
        class="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-10 lg:grid-cols-3"
      >
        <!-- Card -->
        <div
          class="w-full md:max-w-[312px] items-stretch bg-neutral-100 flex flex-col pb-6"
        >
          <div
            class="items-stretch bg-neutral-300 flex w-full flex-col justify-center"
          >
            <img
              loading="lazy"
              src="https://source.unsplash.com/random/312x175?sig=1"
              class="aspect-[1.78] object-contain object-center w-full overflow-hidden"
            />
          </div>
          <div class="items-stretch flex w-full flex-col mt-6 px-8">
            <div
              class="text-musc-blue text-lg font-bold underline whitespace-nowrap"
            >
              Lung Cancer: The Basics
            </div>
            <div class="text-[#222] text-base whitespace-nowrap">
              December 06, 2023
            </div>
            <div
              class="overflow-hidden text-neutral-800 text-ellipsis text-base mt-5"
            >
              Discover crucial insights on lung cancer: risks, symptoms,
              diagnosis and advanced treatments. Trust Dr. Nichole Tanner at
              MUSC Health for expert care.
            </div>
          </div>
        </div>
        <div
          class="w-full md:max-w-[312px] items-stretch bg-neutral-100 flex flex-col pb-6"
        >
          <div
            class="items-stretch bg-neutral-300 flex w-full flex-col justify-center"
          >
            <img
              loading="lazy"
              src="https://source.unsplash.com/random/312x175?sig=2"
              class="aspect-[1.78] object-contain object-center w-full overflow-hidden"
            />
          </div>
          <div class="items-stretch flex w-full flex-col mt-6 px-8">
            <div
              class="text-musc-blue text-lg font-bold underline whitespace-nowrap"
            >
              Heart Disease in Women
            </div>
            <div class="text-[#222] text-base whitespace-nowrap">
              December 06, 2023
            </div>
            <div
              class="overflow-hidden text-neutral-800 text-ellipsis text-base mt-5"
            >
              MUSC Health interventional cardiologist, Arasi Maran, M.D.,
              dispels myths about women heart disease & shares how women can
              take charge of their heart health.
            </div>
          </div>
        </div>
        <div
          class="w-full md:max-w-[312px] items-stretch bg-neutral-100 flex flex-col pb-6"
        >
          <div
            class="items-stretch bg-neutral-300 flex w-full flex-col justify-center"
          >
            <img
              loading="lazy"
              src="https://source.unsplash.com/random/312x175?sig=3"
              class="aspect-[1.78] object-contain object-center w-full overflow-hidden"
            />
          </div>
          <div class="items-stretch flex w-full flex-col mt-6 px-8">
            <div
              class="text-musc-blue text-lg font-bold underline whitespace-nowrap"
            >
              Lung Cancer: The Basics
            </div>
            <div class="text-[#222] text-base whitespace-nowrap">
              December 06, 2023
            </div>
            <div
              class="overflow-hidden text-neutral-800 text-ellipsis text-base mt-5"
            >
              Discover crucial insights on lung cancer: risks, symptoms,
              diagnosis and advanced treatments. Trust Dr. Nichole Tanner at
              MUSC Health for expert care.
            </div>
          </div>
        </div>
      </div>
      <div class="">
        <div class="flex justify-center mt-10">
          <a
            href="#"
            class="py-3 grow px-5 font-arial font-bold text-center text-white bg-musc-blue rounded-lg hover:bg-[#699FBA] transition ease-in-out duration-150 hover:shadow-md hover:shadow-musc-blue md:grow-0"
          >
            View all Stories
          </a>
        </div>
      </div>
    </div>
  </div>
`;
