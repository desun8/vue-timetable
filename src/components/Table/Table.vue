<template>
  <div id="table-view">
    <h2 class="text-xl text-center">Таблица</h2>

    <WeekSwitcher :week-start="weekStart" :week-end="weekEnd" :change-week="setActiveWeek" />

    <div class="table-v">
      <div class="table__header">
        <div class="table__row  grid grid-cols-7">
          <div
            class="table__col"
            v-for="day in weekDays[activeWeek]"
            :key="day.date"
          >
            <div class="table__cell table__cell--day">
              {{ day.day }}
            </div>
          </div>
        </div>
      </div>

      <div class="body  grid grid-cols-7">
        <div class="col" v-for="day in weekDays[activeWeek]" :key="day.date">
          <div
            class="cell  p-2 border-2 border-blue-200"
            v-for="(item, index) in items"
            :key="index"
            v-show="item.date === day.date"
          >
            {{ item.name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { DataItem, DataWeeks } from "@/fetchData";
import { dateFormat } from "@/utils/setFormatDate";
import WeekSwitcher from "@/components/Table/WeekSwitcher/WeekSwitcher.vue";

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
  components: { WeekSwitcher }
})
export default class TableView extends Vue {
  @Prop() readonly items!: DataItem[];
  @Prop() readonly weeks!: DataWeeks;

  activeWeek = Week.Current;

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
    return this.weekDays[this.activeWeek][0].date;
  }

  get weekEnd() {
    const lastIndex = this.weekDays[this.activeWeek].length - 1;
    return this.weekDays[this.activeWeek][lastIndex].date;
  }

  setActiveWeek(value: Week) {
    this.activeWeek = value;
  }

  mounted() {
    console.log(this.weekDays);
  }
}
</script>

<style scoped></style>
