<template>
  <div class="date-picker  relative">
    <Header ref="header" :is-open="isOpen" :date-picker="pickerInstance" />

    <Picker ref="picker" :is-open="isOpen" :is-inline="isInline" />
  </div>
</template>

<script lang="ts">
import { Component, Inject, InjectReactive, Vue } from "vue-property-decorator";

import flatpickr from "flatpickr";
import { Russian } from "flatpickr/dist/l10n/ru.js";
import { Instance } from "flatpickr/dist/types/instance";
import "flatpickr/dist/flatpickr.min.css";
import { dateFormat } from "@/utils/setFormatDate.ts";

import Header from "./Header.vue";
import Picker from "./Picker.vue";

@Component({
  components: {
    Header,
    Picker
  }
})
export default class DatePicker extends Vue {
  @Inject() readonly pIsMobile!: boolean;
  @Inject() pSetSelectedDate!: Function;
  @InjectReactive() readonly pSelectedDate!: Date;

  pickerInstance: Instance | null = null;
  isOpen = false;

  $refs!: {
    header: any;
    picker: any;
  };

  get isInline() {
    return !this.pIsMobile;
  }

  onChange(dates: Array<Date>) {
    const date = dates[0];
    console.log("selected date ", dateFormat.YYYY_MM_DD(date));

    this.pSetSelectedDate && this.pSetSelectedDate(date);
    console.log("selectedDate ", dateFormat.YYYY_MM_DD(this.pSelectedDate));

    console.log(this.pickerInstance);
  }

  mounted() {
    const pickerInput: HTMLInputElement = this.$refs.header.$refs.pickerInput
      .$refs.pickerElm;
    const pickerElement: HTMLElement = this.$refs.picker.$refs.datepicker;

    if (pickerInput && pickerElement) {
      const pickerOptions = {
        dateFormat: "j l",
        locale: Russian,
        animate: false,
        disableMobile: true,
        defaultDate: this.pSelectedDate,
        inline: this.isInline,
        appendTo: pickerElement,
        onChange: this.onChange,
        onOpen: () => {
          this.isOpen = true;
        },
        onClose: () => {
          this.isOpen = false;
        }
      };

      this.pickerInstance = flatpickr(pickerInput, pickerOptions);
    }

    // this.handleResize();
    // window.addEventListener('resize', this.handleResize);
  }
}
</script>

<style src="./flatpickr.scss" lang="scss"></style>
