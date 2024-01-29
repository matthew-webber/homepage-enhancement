import { html } from '../node_modules/lit-html/lit-html.js';

export const dna = html`
  <div
    class="tw-font-nunito-sans tw-flex tw-flex-col lg:tw-h-96 lg:tw-flex-row"
  >
    <!-- NOTE: object flipping horizontally requires reversal of object-position -->
    <img
      class="-tw-scale-x-100 tw-object-left tw-object-cover tw-w-full tw-h-64 md:tw-h-auto md:tw-flex lg:tw-w-1/2"
      src="./assets/images/dna-hq.jpg"
      alt="MUSC Health COVID-19 Vaccine Information"
    />
    <div class="tw-bg-[#f5f5f5] lg:tw-w-1/2">
      <div
        class="tw-px-5 tw-py-10 tw-h-full tw-w-full tw-bg-transparent md:tw-p-10 lg:tw-flex lg:tw-flex-col lg:tw-justify-center lg:tw-w-[500px]"
      >
        <h3
          class="tw-text-[22px]/[28px] tw-mb-3 tw-font-black tw-text-musc-blue md:tw-text-[32px]/[38px] lg:tw-font-extrabold lg:tw-text-4xl"
        >
          In Our DNA SC
        </h3>
        <p class="tw-text-musc-blue">
          In Our DNA SC is a community health research project launched by MUSC.
          The project looks at how your DNA affects your health. It may also
          help improve access to personalized health care and support new
          research discoveries for our community.
        </p>
        <button
          class="tw-flex tw-font-arial tw-w-full tw-mt-5 tw-cursor-auto md:tw-w-auto"
        >
          <a
            href="#"
            class="hover-arrow tw-flex tw-border-b-0 tw-justify-center tw-overflow-hidden tw-grow tw-py-3 tw-px-5 tw-h-full tw-font-bold tw-text-white tw-bg-musc-blue tw-rounded-lg md:tw-grow-0"
          >
            Learn More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2.0"
              stroke="currentColor"
              class="tw-w-0 h-6 tw-duration-150"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H9"
              />
            </svg>
          </a>
        </button>
      </div>
    </div>
  </div>
`;
