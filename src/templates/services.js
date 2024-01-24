import { html } from '../node_modules/lit-html/lit-html.js';

export const services = html`
  <div class="w-full lg:flex lg:justify-center">
    <div class="max-w-5xl py-10 px-5 md:p-10 lg:py-20 lg:px-0 lg:mx-12">
      <div class="w-full bg-white flex flex-col">
        <h2
          class="mb-10 text-[26px]/[28px] md:text-4xl font-bold text-musc-blue md:mb-8"
        >
          Best-in-class Services
        </h2>
        <div class="flex w-full md:gap-10 lg:gap-12">
          <!-- Services -->
          <div class="flex flex-col w-full md:w-1/2">
            <a
              href="#"
              class="flex justify-between items-center pb-6 border-b border-[#699FBA]"
            >
              <!-- Service Info -->
              <div class="flex flex-col text-musc-blue">
                <h3
                  class="text-lg font-black text-musc-blue lg:font-extrabold lg:text-2xl"
                >
                  Cancer Care
                </h3>
                <p class="text-musc-blue">
                  Hollings ranked High Performing Hospital
                </p>
                <p class="text-musc-blue italic">US News & World Report</p>
              </div>
              <!-- Arrow -->
              <div class="pl-5">
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
              class="flex justify-between items-center py-6 border-b border-[#699FBA]"
            >
              <!-- Service Info -->
              <div class="flex flex-col">
                <h3
                  class="text-lg font-black text-musc-blue lg:font-extrabold lg:text-2xl"
                >
                  Women's Health
                </h3>
                <p class="text-musc-blue">
                  #19 in the Nation Obstetrics & Gynecology
                </p>
                <p class="text-musc-blue italic">US News & World Report</p>
              </div>
              <!-- Arrow -->
              <div class="pl-5">
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
              class="flex justify-between items-center py-6 border-b border-[#699FBA]"
            >
              <!-- Service Info -->
              <div class="flex flex-col">
                <h3
                  class="text-lg font-black text-musc-blue lg:font-extrabold lg:text-2xl"
                >
                  Ear, Nose & Throat
                </h3>
                <p class="text-musc-blue">#23 in the Nation</p>
                <p class="text-musc-blue italic">US News & World Report</p>
              </div>
              <!-- Arrow -->
              <div class="pl-5">
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
              class="flex justify-between items-center py-6 border-b border-[#699FBA]"
            >
              <!-- Service Info -->
              <div class="flex flex-col">
                <h3
                  class="text-lg font-black text-musc-blue lg:font-extrabold lg:text-2xl"
                >
                  Children's Health
                </h3>
                <p class="text-musc-blue">#9 in the Southeast Region</p>
                <p class="text-musc-blue italic">US News & World Report</p>
              </div>
              <!-- Arrow -->
              <div class="pl-5">
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
          <div class="w-0 md:w-1/2">
            <img
              class="object-cover w-full md:h-full md:object-cover md:flex lg:object-cover lg:justify-self-center lg:w-auto lg:h-full"
              src="./assets/images/services-hq.jpg"
              alt="MUSC Health COVID-19 Vaccine Information"
            />
          </div>
        </div>
        <button class="flex font-arial mt-10 w-full md:w-auto lg:mt-12">
          <a
            href="#"
            class="hover-arrow flex overflow-hidden gap-2 grow text-center py-3 px-5 h-full font-bold text-white bg-musc-blue rounded-lg md:grow-0"
          >
            View all Services
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
          </a>
        </button>
      </div>
    </div>
  </div>
`;
