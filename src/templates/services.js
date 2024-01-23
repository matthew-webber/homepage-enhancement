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
              class="flex justify-between items-center pb-6 border-b-[1px] border-[#699FBA]"
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
              <!-- Right Arrow -->
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
              class="flex justify-between items-center py-6 border-b-[1px] border-[#699FBA]"
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
              <!-- Right Arrow -->
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
              class="flex justify-between items-center py-6 border-b-[1px] border-[#699FBA]"
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
              <!-- Right Arrow -->
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
              class="flex justify-between items-center py-6 border-b-[1px] border-[#699FBA]"
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
              <!-- Right Arrow -->
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
          <!-- Button -->
        </div>
        <div class="flex font-arial mt-10 w-full md:w-auto lg:mt-12">
          <a
            href="#"
            class="grow text-center py-3 px-5 h-full font-bold text-white bg-musc-blue rounded-lg hover:bg-[#699FBA] transition ease-in-out duration-150 hover:shadow-md hover:shadow-musc-blue md:grow-0"
          >
            View all Services
          </a>
        </div>
      </div>
    </div>
  </div>
`;
