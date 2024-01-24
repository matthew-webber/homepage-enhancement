import { html } from '../node_modules/lit-html/lit-html.js';

export const dna = html`
  <div class="flex flex-col lg:h-96 lg:flex-row">
    <!-- NOTE: object flipping horizontally requires reversal of object-position -->
    <img
      class="-scale-x-100 object-left object-cover w-full h-64 md:h-auto md:flex lg:w-1/2"
      src="./assets/images/dna-hq.jpg"
      alt="MUSC Health COVID-19 Vaccine Information"
    />
    <div class="bg-[#f5f5f5] lg:w-1/2">
      <div
        class="px-5 py-10 h-full w-full bg-transparent md:p-10 lg:flex lg:flex-col lg:justify-center lg:w-[500px]"
      >
        <h3
          class="text-[22px]/[28px] mb-3 font-black text-musc-blue md:text-[32px]/[38px] lg:font-extrabold lg:text-4xl"
        >
          In Our DNA SC
        </h3>
        <p class="text-musc-blue">
          In Our DNA SC is a community health research project launched by MUSC.
          The project looks at how your DNA affects your health. It may also
          help improve access to personalized health care and support new
          research discoveries for our community.
        </p>
        <!-- Button -->
        <button class="flex mt-5">
          <a
            href="#"
            class="hover-arrow py-3 grow px-5 font-arial font-bold text-center text-white bg-musc-blue rounded-lg md:grow-0"
          >
            Learn More
          </a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="flex-shrink-0 w-0 h-6 transition-all duration-150 ease-in-out"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
`;
