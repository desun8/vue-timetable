<template>
  <div id="table-view">
    <WeekSwitcher
      :week-start="weekStart"
      :week-end="weekEnd"
      :change-week="setActiveWeek"
    />

    <div class="table-v">
      <div class="table__header">
        <div class="table__row  grid grid-cols-7 gap">
          <div
            class="table__col"
            v-for="day in weekDays[activeWeek]"
            :key="day.date"
          >
            <div
              class="table__cell table__cell--day  py-2 text-xl border-b border-black capitalize text-center"
              :class="{ 'bg-gray-800 text-white': day.date === today }"
            >
              {{ day.day }}
            </div>
          </div>
        </div>
      </div>

      <Simplebar style="height: calc(100vh - 200px); overflow-x: hidden;">
        <div class="body  grid grid-cols-7 pt-7 pb-10 gap">
          <div
            class="col  grid gap content-start"
            v-for="day in weekDays[activeWeek]"
            :key="day.date"
          >
            <div
              class="cell  px-3 py-5 border transition duration-300 hover:border-black hover:shadow-xl"
              v-for="(item, index) in items"
              :key="index"
              v-show="item.date === day.date"
            >
              <Card :item="item" type="TABLE" />
            </div>
          </div>
        </div>
      </Simplebar>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

import Simplebar from "simplebar-vue";

import { dateFormat } from "@/utils/setFormatDate";
import WeekSwitcher from "@/components/Table/WeekSwitcher/WeekSwitcher.vue";
import Card from "@/components/Card/Card.vue";
import { TODAY } from "@/App.vue";
import { DataItem, DataWeeks } from "@/data.model";

export enum Week {
  Current,
  Next
}

const DAYS = [
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
  "Воскресенье"
];

const getDate = (date: string): number => {
  const match = date.match(/[0-9]+$/);

  if (match === null) {
    console.error("Ошибка! Невозможно получить дату начала недели");
    return 0;
  }

  return +match[0];
};

@Component({
  components: {
    Simplebar,
    WeekSwitcher,
    Card
  }
})
export default class TableView extends Vue {
  @Prop() readonly items!: DataItem[];
  @Prop() readonly weeks!: DataWeeks;

  activeWeek = Week.Current;
  today = dateFormat.YYYY_MM_DD_2(TODAY);

  get weekDays() {
    const startDate = this.weeks[0];
    const dayDate = getDate(startDate);
    const tempDate = new Date(startDate);

    const getDays = (isNextWeek = false) =>
      DAYS.map((day, index) => {
        const date = tempDate;
        let newDate = dayDate + index;

        if (isNextWeek) {
          newDate += 7;
        }

        date.setDate(newDate);

        return {
          name: day,
          date: dateFormat.YYYY_MM_DD_2(date),
          day: dateFormat.D_DDDD(date)
        };
      });

    return [
      getDays(), // current
      getDays(true) // next
    ];
  }

  get weekStart() {
    return this.weekDays[this.activeWeek][0].date
      .split("-")
      .reverse()
      .join(".");
  }

  get weekEnd() {
    const lastIndex = this.weekDays[this.activeWeek].length - 1;
    return this.weekDays[this.activeWeek][lastIndex].date
      .split("-")
      .reverse()
      .join(".");
  }

  setActiveWeek(value: Week) {
    this.activeWeek = value;
  }
}
</script>

<style scoped>
.gap {
  @apply gap-2 2xl:gap-5;
}
</style>

<style>
#table-view .simplebar-track.simplebar-vertical {
  display: none;
}
</style>
