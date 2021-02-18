<template>
  <div class="relative">
    <Header ref="header" :is-open="isOpen" :date-picker="pickerInstance" />

    <Picker ref="picker" :is-open="isOpen" :is-inline="isInline" />
  </div>
</template>

<script lang="ts">
import {
  Component,
  Inject,
  InjectReactive,
  Prop,
  Vue,
  Watch
} from "vue-property-decorator";

import flatpickr from "flatpickr";
import { Russian } from "flatpickr/dist/l10n/ru.js";
import { Instance } from "flatpickr/dist/types/instance";
import "flatpickr/dist/flatpickr.min.css";

import Header from "./Header.vue";
import Picker from "./Picker.vue";
import { DataWeeks } from "@/data.model";

@Component({
  components: {
    Header,
    Picker
  }
})
export default class DatePicker extends Vue {
  @Inject() pSetSelectedDate!: Function;
  @InjectReactive() readonly pIsMobile!: boolean;
  @InjectReactive() readonly pSelectedDate!: Date;

  @Prop() readonly dateRange!: DataWeeks;
  @Prop() readonly isOpen!: boolean;
  @Prop() readonly changeOpen!: (a: boolean) => boolean;

  pickerInstance: Instance | null = null;

  $refs!: {
    header: any;
    picker: any;
  };

  get isInline() {
    return !this.pIsMobile;
  }

  onChange(dates: Array<Date>) {
    const date = dates[0];
    this.pSetSelectedDate && this.pSetSelectedDate(date);
  }

  setupDatepicker() {
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
        minDate: new Date(this.dateRange[0]),
        maxDate: new Date(this.dateRange[1]),
        onChange: this.onChange,
        onOpen: () => {
          this.changeOpen(true);
        },
        onClose: () => {
          this.changeOpen(false);
        }
      };

      this.pickerInstance = flatpickr(pickerInput, pickerOptions);
    }
  }

  @Watch("pIsMobile")
  onPIsMobileChange(val: string, oldVal: string) {
    if (val !== oldVal) {
      if (this.pickerInstance) {
        console.log(`Change viewport to ${val ? "mobile" : "desktop"}`);
        this.pickerInstance.destroy();
        this.setupDatepicker();
      }
    }
  }

  mounted() {
    this.setupDatepicker();
  }
}
</script>

<style src="./flatpickr.css"></style>
