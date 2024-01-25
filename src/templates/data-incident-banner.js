import { html } from '../node_modules/lit-html/lit-html.js';

export const dataIncidentBanner = html`
  <div
    id="data-incident-banner"
    aria-hidden="false"
    class="tw-font-nunito-sans"
  >
    <div>
      <div class="tw-w-full tw-flex tw-justify-center tw-bg-[#D1E4FC]">
        <div
          class="tw-items-center tw-text-musc-blue tw-mx-5 tw-py-4 tw-max-w-[1000px] md:tw-flex md:tw-mx-10 md:tw-py-5 md:tw-gap-5 md:tw-justify-center"
          role="alert"
        >
          <span class="tw-block tw-leading-4 tw-text-sm tw-grow">
            <strong class="tw-font-bold">Notice of Data Incident:</strong>
            We are providing notice of recent incidents that may affect the
            privacy of some personal and/or medical information collected from
            MUSC Health locations.
          </span>
          <!-- Buttons wrapper -->
          <div
            class="tw-flex tw-h-11 tw-justify-end tw-items-center tw-w-full tw-mt-4 tw-gap-4 md:tw-mt-0 md:tw-flex-shrink-0 md:tw-w-auto"
          >
            <!-- Learn More button -->
            <button
              class="tw-grow tw-py-2 tw-bg-white tw-border-musc-blue tw-border tw-border-solid tw-rounded-lg tw-text-musc-blue hover:tw-text-white hover:tw-bg-musc-blue tw-transition tw-duration-300 tw-ease-in-out md:tw-grow-0 md:tw-w-auto md:tw-px-6"
            >
              <a href="#">
                <span>Learn More</span>
              </a>
            </button>
            <!-- Dismiss button -->
            <button
              id="dismiss-data-incident-banner"
              class="tw-p-3 tw-w-auto tw-bg-white tw-border-musc-blue tw-border tw-border-solid tw-rounded-full tw-text-musc-blue"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="tw-h-4 tw-w-4"
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
  <script>
    const addDismissListener = () => {
      const dataIncidentBanner = document.querySelector(
        '#data-incident-banner'
      );
      const dataIncidentBannerDismissButton = document.querySelector(
        '#dismiss-data-incident-banner'
      );

      dataIncidentBannerDismissButton.addEventListener('click', () => {
        dataIncidentBanner.attributes['aria-hidden'].value = 'true';
      });
    };

    const showAndMoveToTop = () => {
      const dataIncidentBanner = document.querySelector(
        '#data-incident-banner'
      );
      document.body.insertAdjacentElement('afterbegin', dataIncidentBanner);
      dataIncidentBanner.style.display = 'grid';
      window.scrollTo({
        top: 0,
        behavior: 'instant',
      });
    };

    if (document.readyState === 'complete') {
      addDismissListener();
      showAndMoveToTop();
    } else {
      window.addEventListener('load', () => {
        addDismissListener();
        showAndMoveToTop();
      });
    }
  </script>
`;
