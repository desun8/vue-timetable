<template>
  <div id="main" class="p-8">
    <header>
      <h1 class="text-center text-2xl">Расписание занятий.</h1>
    </header>

    <div v-if="data">
      <ListView v-if="viewType === 'LIST'" :items="data.items" />
      <TableView v-if="viewType === 'TABLE'" :items="data.items" :weeks="data.weeks" />
    </div>

    <BtnChangeView :type="viewType" :change-type="changeType" />
  </div>
</template>
<script lang="ts">
import {
  Component,
  Provide,
  ProvideReactive,
  Vue
} from "vue-property-decorator";
import ListView from "@/components/List/List.vue";
import TableView from "@/components/Table/Table.vue";
import { isSmallScreen, mediaQueryEvent } from "@/utils/mediaQueryEvent";
import fetchData, { Data } from "@/fetchData";
import BtnChangeView from "@/components/BtnChangeView.vue";

export enum ViewType {
  List = "LIST",
  Table = "TABLE"
}

@Component({
  components: {
    BtnChangeView,
    ListView,
    TableView
  }
})
export default class Main extends Vue {
  isMobile = isSmallScreen;
  selectedDate: Date = new Date("2019-09-18");
  viewType = ViewType.Table;
  data: Data | null = null;

  @Provide() pIsMobile = this.isMobile;
  @Provide() pSetSelectedDate = this.setSelectedDate;
  // TODO: Оставить только pSelectedDate, удалить selectedDate
  @ProvideReactive() pSelectedDate = this.selectedDate;

  changeType(value: ViewType) {
    this.viewType = value;
  }

  setSelectedDate(date: Date): void {
    this.selectedDate = new Date(date);
    this.pSelectedDate = new Date(date);
  }

  async getData() {
    this.data = await fetchData();
  }

  created() {
    console.log("component created");
    this.getData();
  }

  mounted() {
    mediaQueryEvent(
      () => (this.isMobile = true),
      () => (this.isMobile = false)
    );
  }
}
</script>
