import { html } from '../node_modules/lit-html/lit-html.js';

export const services = html`
  <div class="tw-font-nunito-sans tw-w-full lg:tw-flex lg:tw-justify-center">
    <div
      class="tw-max-w-[1000px] tw-py-10 tw-px-5 md:tw-p-10 lg:tw-py-20 lg:tw-px-0 lg:tw-mx-12"
    >
      <div class="tw-w-full tw-bg-white tw-flex tw-flex-col">
        <h2
          class="tw-mb-10 tw-text-[26px]/[28px] md:tw-text-4xl tw-font-bold tw-text-musc-blue md:tw-mb-8"
        >
          Best-in-class Services
        </h2>
        <div class="tw-flex tw-w-full md:tw-gap-10 lg:tw-gap-12">
          <!-- Services -->
          <div class="tw-flex tw-flex-col tw-w-full md:tw-w-1/2">
            <a
              href="#"
              class="tw-flex tw-justify-between tw-items-center tw-pb-6 tw-border-b tw-border-[#699FBA] tw-border-solid"
            >
              <!-- Service Info -->
              <div class="tw-flex tw-flex-col tw-text-musc-blue">
                <h3
                  class="tw-text-lg tw-font-black tw-text-musc-blue lg:tw-font-extrabold lg:tw-text-2xl"
                >
                  Cancer Care
                </h3>
                <p class="tw-text-musc-blue">
                  Hollings ranked High Performing Hospital
                </p>
                <p class="tw-text-musc-blue tw-italic">
                  US News & World Report
                </p>
              </div>
              <!-- Arrow -->
              <div class="tw-pl-5">
                <svg
                  width="15"
                  height="26"
                  viewBox="0 0 15 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 13L0.937501 25.9904L0.937502 0.00961814L15 13Z"
                    fill="#00447C"
                  />
                </svg>
              </div>
            </a>
            <a
              href="#"
              class="tw-flex tw-justify-between tw-items-center tw-py-6 tw-border-b tw-border-[#699FBA] tw-border-solid"
            >
              <!-- Service Info -->
              <div class="tw-flex tw-flex-col">
                <h3
                  class="tw-text-lg tw-font-black tw-text-musc-blue lg:tw-font-extrabold lg:tw-text-2xl"
                >
                  Women's Health
                </h3>
                <p class="tw-text-musc-blue">
                  #19 in the Nation Obstetrics & Gynecology
                </p>
                <p class="tw-text-musc-blue tw-italic">
                  US News & World Report
                </p>
              </div>
              <!-- Arrow -->
              <div class="tw-pl-5">
                <svg
                  width="15"
                  height="26"
                  viewBox="0 0 15 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 13L0.937501 25.9904L0.937502 0.00961814L15 13Z"
                    fill="#00447C"
                  />
                </svg>
              </div>
            </a>
            <a
              href="#"
              class="tw-flex tw-justify-between tw-items-center tw-py-6 tw-border-b tw-border-[#699FBA] tw-border-solid"
            >
              <!-- Service Info -->
              <div class="tw-flex tw-flex-col">
                <h3
                  class="tw-text-lg tw-font-black tw-text-musc-blue lg:tw-font-extrabold lg:tw-text-2xl"
                >
                  Ear, Nose & Throat
                </h3>
                <p class="tw-text-musc-blue">#23 in the Nation</p>
                <p class="tw-text-musc-blue tw-italic">
                  US News & World Report
                </p>
              </div>
              <!-- Arrow -->
              <div class="tw-pl-5">
                <svg
                  width="15"
                  height="26"
                  viewBox="0 0 15 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 13L0.937501 25.9904L0.937502 0.00961814L15 13Z"
                    fill="#00447C"
                  />
                </svg>
              </div>
            </a>
            <a
              href="#"
              class="tw-flex tw-justify-between tw-items-center tw-py-6 tw-border-b tw-border-[#699FBA] tw-border-solid"
            >
              <!-- Service Info -->
              <div class="tw-flex tw-flex-col">
                <h3
                  class="tw-text-lg tw-font-black tw-text-musc-blue lg:tw-font-extrabold lg:tw-text-2xl"
                >
                  Children's Health
                </h3>
                <p class="tw-text-musc-blue">#9 in the Southeast Region</p>
                <p class="tw-text-musc-blue tw-italic">
                  US News & World Report
                </p>
              </div>
              <!-- Arrow -->
              <div class="tw-pl-5">
                <svg
                  width="15"
                  height="26"
                  viewBox="0 0 15 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 13L0.937501 25.9904L0.937502 0.00961814L15 13Z"
                    fill="#00447C"
                  />
                </svg>
              </div>
            </a>
          </div>
          <!-- Image -->
          <div class="tw-w-0 md:tw-w-1/2">
            <img
              class="tw-object-cover tw-w-full md:tw-h-full md:tw-object-cover md:tw-flex lg:tw-object-cover lg:tw-justify-self-center lg:tw-w-auto lg:tw-h-full"
              src="./assets/images/services-hq.jpg"
              alt="MUSC Health COVID-19 Vaccine Information"
            />
          </div>
        </div>
        <button
          class="tw-flex tw-font-arial tw-mt-10 tw-w-full tw-cursor-auto md:tw-w-auto lg:tw-mt-12"
        >
          <a
            href="#"
            class="hover-arrow tw-flex tw-border-b-0 tw-justify-center tw-overflow-hidden tw-grow tw-py-3 tw-px-5 tw-h-full tw-font-bold tw-text-white tw-bg-musc-blue tw-rounded-lg md:tw-grow-0"
          >
            View all Services
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
