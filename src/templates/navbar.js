import { html } from '../node_modules/lit-html/lit-html.js'; export const navbar
= html`
<div class="tw-w-full tw-bg-musc-blue">
  <div
    class="tw-flex tw-justify-end tw-items-center tw-max-w-[1000px] tw-mx-auto tw-px-5 tw-py-4 md:tw-px-10 md:tw-py-5 md:tw-gap-5"
  >
    <!-- Desktop nav links -->
    <div
      class="tw-hidden tw-gap-10 tw-font-nunito-sans tw-uppercase tw-text-white tw-text-xs lg:tw-flex"
    >
      <a href="#">
        <span>Careers</span>
      </a>
      <a href="#">
        <span>Giving</span>
      </a>
      <a href="#">
        <span>Schedule an Appointment</span>
      </a>
      <a href="#">
        <span>Visit Other MUSC Sites</span>
      </a>
    </div>
    <!-- Mobile menu icon -->
    <div class="tw-flex lg:tw-hidden">
      <button
        class="tw-p-3 tw-w-auto tw-bg-white tw-border-musc-blue tw-border tw-border-solid tw-rounded-full tw-text-musc-blue"
      >
        <svg
          alt=""
          xmlns="http://www.w3.org/2000/svg"
          class="tw-h-4 tw-w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          class="tw-block tw-align-middle"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h7"
          />
        </svg>
      </button>
    </div>
  </div>
</div>
`;
