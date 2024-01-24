import { html } from '../node_modules/lit-html/lit-html.js';

export const navbar = html`
  <div class="w-full bg-musc-blue">
    <div
      class="flex justify-end items-center max-w-5xl mx-auto px-5 py-4 md:px-10 md:py-5 md:gap-5"
    >
      <!-- Right-side navbar links -->
      <div
        class="hidden gap-10 font-nunito-sans uppercase text-white text-xs lg:flex"
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
      <!-- Menu Icon for md and smaller -->
      <div class="flex lg:hidden">
        <button
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
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
`;
