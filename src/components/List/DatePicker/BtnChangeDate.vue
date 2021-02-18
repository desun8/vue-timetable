<template>
  <button
    class="btn flex items-center justify-center py-5 px-1 border-0 border-l-2 transform disabled:opacity-30 lg:w-16 lg:h-16 lg:border-l"
    :class="{
      'rotate-180': !isNext,
      'lg:border-transparent lg:shadow-border-hack': isNext
    }"
    @click="handleClick"
    :aria-label="label"
    :disabled="!allowClick"
  >
    <svg
      class="btn__icon  fill-current"
      viewBox="0 0 30 55"
      xmlns="http://www.w3.org/2000/svg"
      fill-rule="evenodd"
      clip-rule="evenodd"
      stroke-linejoin="round"
      stroke-miterlimit="2"
      width="14"
      height="14"
    >
      <path
        d="M3.413.575A1.978 1.978 0 002.061.041 1.989 1.989 0 00.082 2.02c0 .502.191.986.534 1.353L24.283 27.04.515 50.814c-.331.364-.515.84-.515 1.332 0 1.086.893 1.979 1.979 1.979.494 0 .969-.184 1.334-.517l24.636-24.636c.48-.479 1.218-1.029 1.218-1.827a1.98 1.98 0 00-.58-1.399l-.106-.103L3.413.575z"
      />
    </svg>
  </button>
</template>

<script lang="ts">
import {
  Component,
  Inject,
  InjectReactive,
  Prop,
  Vue
} from "vue-property-decorator";
import { Instance } from "flatpickr/dist/types/instance";

@Component
export default class BtnChangeDate extends Vue {
  @Inject() readonly pSetSelectedDate!: Function;
  @InjectReactive() readonly pIsMobile!: boolean;
  @InjectReactive() readonly pSelectedDate!: Date;

  @Prop({ default: "" }) readonly type!: string;
  @Prop({ default: undefined }) readonly datePicker: Instance | undefined;

  get isNext() {
    return this.type === "next";
  }

  get label() {
    if (this.pIsMobile) {
      return this.isNext ? "следующий день" : "предыдущий день";
    }

    return this.isNext ? "следующий месяц" : "предыдущий месяц";
  }

  get allowClick() {
    const currDate = this.pSelectedDate;
    const minDate = this.datePicker?.config.minDate;
    const maxDate = this.datePicker?.config.maxDate;

    if (minDate && maxDate) {
      if (this.isNext) {
        return currDate < maxDate;
      } else {
        return currDate > minDate;
      }
    }

    return true;
  }

  handleClick(): void {
    if (
      this.pIsMobile &&
      this.pSelectedDate &&
      this.pSetSelectedDate &&
      this.datePicker &&
      this.allowClick
    ) {
      const pSelectedDate = this.pSelectedDate;

      let newDate: number;

      if (this.pIsMobile) {
        newDate = this.isNext
          ? pSelectedDate.getDate() + 1
          : pSelectedDate.getDate() - 1;

        this.pSetSelectedDate(pSelectedDate.setDate(newDate));
      } else {
        newDate = this.isNext
          ? pSelectedDate.getMonth() + 1
          : pSelectedDate.getMonth() - 1;

        this.pSetSelectedDate(pSelectedDate.setMonth(newDate));
      }

      this.datePicker.setDate(pSelectedDate);
    }
  }
}
</script>
