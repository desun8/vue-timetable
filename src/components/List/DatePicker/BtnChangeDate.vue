<template>
  <button
    class="btn flex items-center justify-center p-1 border transform"
    :class="{ 'rotate-180': !isNext }"
    @click="handleClick"
    :aria-label="label"
  >
    <svg
      class="btn__icon"
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
import { dateFormat } from "@/utils/setFormatDate";

@Component
export default class BtnChangeDate extends Vue {
  @Inject() readonly pIsMobile!: boolean;
  @Inject() readonly pSetSelectedDate!: Function;
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

  handleClick(): void {
    if (
      this.pIsMobile &&
      this.pSelectedDate &&
      this.pSetSelectedDate &&
      this.datePicker
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

      console.log(
        "selectedDate ",
        dateFormat.YYYY_MM_DD(pSelectedDate as Date)
      );
    }
  }
}
</script>

<!--<style scoped lang="scss">-->
<!--@use "~@/assets/styles/custom-media.scss";-->

<!--.btn {-->
<!--  &#45;&#45;bdrs: 5px;-->

<!--  display: flex;-->
<!--  justify-content: center;-->
<!--  align-items: center;-->

<!--  background-color: var(&#45;&#45;bg-color);-->
<!--  border: var(&#45;&#45;bd-width, 1px) solid var(&#45;&#45;bd-color, #dadada);-->

<!--  transition: background-color var(&#45;&#45;trs-dur);-->

<!--  //noinspection CssInvalidMediaFeature-->
<!--  @media screen and (&#45;&#45;desktop) {-->
<!--    &#45;&#45;bdrs: 0;-->
<!--  }-->
<!--}-->

<!--.btn&#45;&#45;next {-->
<!--  border-top-right-radius: var(&#45;&#45;bdrs);-->
<!--  border-bottom-right-radius: var(&#45;&#45;bdrs);-->
<!--}-->

<!--.btn&#45;&#45;prev {-->
<!--  border-top-left-radius: var(&#45;&#45;bdrs);-->
<!--  border-bottom-left-radius: var(&#45;&#45;bdrs);-->
<!--}-->

<!--.btn__icon {-->
<!--  &#45;&#45;size: 1.4rem;-->

<!--  width: var(&#45;&#45;size);-->
<!--  height: var(&#45;&#45;size);-->

<!--  fill: currentColor;-->

<!--  //noinspection CssInvalidMediaFeature-->
<!--  @media screen and (&#45;&#45;tablet) {-->
<!--    &#45;&#45;size: calc(1.4rem * var(&#45;&#45;mod, 1.5));-->
<!--  }-->

<!--  //noinspection CssInvalidMediaFeature-->
<!--  @media screen and (&#45;&#45;desktop) {-->
<!--    &#45;&#45;size: 1.4rem;-->
<!--  }-->
<!--}-->

<!--.btn&#45;&#45;prev .btn__icon {-->
<!--  transform: scaleX(-1);-->
<!--}-->
<!--</style>-->
