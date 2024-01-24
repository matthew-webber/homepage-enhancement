import { html } from '../node_modules/lit-html/lit-html.js';

export const dataIncidentBanner = html`
  <div id="data-incident-banner" aria-hidden="false">
    <div>
      <div class="w-full flex justify-center bg-[#D1E4FC]">
        <div
          class="items-center font-nunito-sans text-musc-blue mx-5 py-4 max-w-5xl md:flex md:mx-10 md:py-5 md:gap-5 md:justify-center"
          role="alert"
        >
          <span class="block leading-4 text-sm grow">
            <strong class="font-bold">Notice of Data Incident:</strong>
            We are providing notice of recent incidents that may affect the
            privacy of some personal and/or medical information collected from
            MUSC Health locations.
          </span>
          <!-- Buttons wrapper -->
          <div
            class="flex h-11 justify-end items-center w-full mt-4 gap-4 md:mt-0 md:flex-shrink-0 md:w-auto"
          >
            <!-- Learn More button -->
            <button
              class="grow py-2 bg-white border-musc-blue border rounded-lg text-musc-blue hover:text-white hover:bg-musc-blue transition duration-300 ease-in-out md:grow-0 md:w-auto md:px-6"
            >
              <a href="#">
                <span>Learn More</span>
              </a>
            </button>
            <!-- Circle-shaped X button to dismiss banner -->
            <button
              id="dismiss-data-incident-banner"
              class="p-3 w-auto bg-white border-musc-blue border rounded-full text-musc-blue"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
`;
