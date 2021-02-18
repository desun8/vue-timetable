<template>
  <div class="picker  relative">
    <input
      id="picker"
      class="picker__input  relative w-full h-full bg-transparent text-transparent z-10"
      ref="pickerElm"
      readonly
      :disabled="!pIsMobile"
    />
    <label
      for="picker"
      class="picker__label  absolute top-0 left-0 w-full h-full flex justify-center items-center bg-transparent"
    >
      <span class="picker__value  lg:capitalize">{{ formatDate }}</span>
      <svg
        class="w-6 h-6 ml-4 fill-current"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 15 15"
        width="15"
        height="15"
      >
        <path
          d="M13.75 1.406h-2.03V.47a.468.468 0 10-.938 0v.937H7.97V.47a.469.469 0 10-.938 0v.937H4.22V.47a.469.469 0 10-.938 0v.937h-2.03A1.25 1.25 0 000 2.656V13.75C0 14.44.56 15 1.25 15h12.5c.69 0 1.25-.56 1.25-1.25V2.656c0-.69-.56-1.25-1.25-1.25zm.313 12.344c0 .172-.14.313-.313.313H1.25a.313.313 0 01-.313-.313V2.656c0-.172.14-.312.313-.312h2.031v.937a.469.469 0 10.938 0v-.937H7.03v.937a.469.469 0 10.938 0v-.937h2.812v.937a.468.468 0 10.938 0v-.937h2.031c.172 0 .313.14.313.312V13.75z"
        />
        <path
          d="M5.156 5.625H3.281v1.406h1.875V5.625zm0 2.344H3.281v1.406h1.875V7.969zm0 2.344H3.281v1.406h1.875v-1.406zm3.282 0H6.562v1.406h1.875v-1.406zm0-2.344H6.562v1.406h1.875V7.969zm0-2.344H6.562v1.406h1.875V5.625zm3.281 4.688H9.844v1.406h1.875v-1.406zm0-2.344H9.844v1.406h1.875V7.969zm0-2.344H9.844v1.406h1.875V5.625z"
        />
      </svg>
    </label>
  </div>
</template>

<script lang="ts">
import { Component, InjectReactive, Vue } from "vue-property-decorator";
import { dateFormat } from "@/utils/setFormatDate";

@Component
export default class PickerInput extends Vue {
  @InjectReactive() readonly pIsMobile!: boolean;
  @InjectReactive() readonly pSelectedDate!: Date;

  today = new Date();

  get formatDate() {
    if (!this.pIsMobile) {
      return dateFormat.MMMM_YYYY(this.pSelectedDate);
    }

    const isToday =
      dateFormat.YYYY_MM_DD(this.pSelectedDate) ===
      dateFormat.YYYY_MM_DD(this.today);

    if (isToday) return "Сегодня";

    return dateFormat.D_DDDD(this.pSelectedDate);
  }
}
</script>
