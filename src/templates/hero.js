import { html } from '../node_modules/lit-html/lit-html.js'; export const hero =
html`
<div
  class="tw-leading-6 tw-font-nunito-sans tw-flex tw-flex-col-reverse tw-bg-[#f5f5f5] md:tw-flex-row md:tw-min-h-64 lg:tw-h-96"
>
  <!-- Text -->
  <div
    class="tw-flex tw-items-center tw-w-full tw-p-5 md:tw-pr-12 md:tw-pl-10 md:tw-w-1/2 lg:tw-items-start lg:tw-justify-end lg:tw-pt-[88px] lg:tw-pr-12 lg:tw-pb-0 lg:tw-pl-0"
  >
    <h1 class="tw-text-musc-blue tw-w-full md:tw-w-96">
      <span
        class="tw-block tw-text-[26px]/[28px] tw-font-black md:tw-text-[32px]/[38px] lg:tw-text-4xl"
      >
        MUSC Health
      </span>
      <span
        class="tw-block tw-text-3xl md:tw-text-[36px]/[38px] lg:tw-text-[40px]/[44px]"
      >
        Changing What&rsquo;s Possible
      </span>
    </h1>
  </div>
  <!-- Image -->
  <div class="tw-max-w-[900px] md:tw-w-1/2">
    <!-- Hero -->
    <img
      class="tw-object-cover tw-w-full tw-h-52 md:tw-h-full lg:tw-object-cover"
      src="/-/media/7F58B5164E9145D6B37009F3AF52ED8A.ashx"
      alt=""
    />
  </div>
</div>
`;
