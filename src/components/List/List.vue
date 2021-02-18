<template>
  <div id="list-view" class="grid  lg:grid-cols-list  lg:gap-14">
    <DatePicker
      :date-range="weeks"
      :is-open="isOpenCalendar"
      :change-open="changeCalendarVisibility"
      class="mb-5 lg:self-start"
    />

    <ListBody
      v-if="pIsMobile"
      :date="selectedDate"
      :is-hidden="isOpenCalendar"
      :items="filteredItems"
    />

    <Simplebar
      v-else
      class="lg:pr-14"
      style="height: calc(100vh - 100px); overflow-x: hidden;"
      data-simplebar-auto-hide="false"
    >
      <ListBody
        :date="selectedDate"
        :is-hidden="isOpenCalendar"
        :items="filteredItems"
      />
    </Simplebar>
  </div>
</template>

<script lang="ts">
import { Component, InjectReactive, Prop, Vue } from "vue-property-decorator";

import Simplebar from "simplebar-vue";
import "simplebar/dist/simplebar.min.css";

import { dateFormat } from "@/utils/setFormatDate";
import DatePicker from "@/components/List/DatePicker/DatePicker.vue";
import ListBody from "@/components/List/ListBody.vue";
import { DataItem, DataWeeks } from "@/data.model";

@Component({
  components: {
    Simplebar,
    DatePicker,
    ListBody
  }
})
export default class ListView extends Vue {
  @InjectReactive() readonly pIsMobile!: boolean;
  @InjectReactive() readonly pSelectedDate!: Date;

  @Prop() readonly items!: DataItem[];
  @Prop() readonly weeks!: DataWeeks;

  isOpenCalendar = false;

  get filteredItems(): DataItem[] {
    const date = dateFormat.YYYY_MM_DD(this.pSelectedDate);
    return this.items.filter(
      item => dateFormat.YYYY_MM_DD(new Date(item.date)) === date
    );
  }

  get selectedDate() {
    return dateFormat.D_DDDD(this.pSelectedDate);
  }

  changeCalendarVisibility(value: boolean) {
    this.isOpenCalendar = value;
  }
}
</script>

<style>
#list-view .simplebar-track.simplebar-vertical {
  top: 50%;
  width: 1px;
  height: 60%;
  transform: translateY(-50%);
  background-color: #000;
}

#list-view .simplebar-scrollbar.simplebar-visible:before {
  top: 0 !important;
  bottom: 0 !important;
  left: 0;
  right: 0;
  background-color: #fff;
  border-radius: 0;
  opacity: 1;
}
</style>
