<template>
  <div
    id="app"
    class="px-4 lg:px-16 lg:overflow-hidden lg:max-h-screen lg:h-screen"
  >
    <Header />

    <transition name="fade">
      <Views
        v-if="data"
        :type="viewType"
        :items="data.items"
        :weeks="data.weeks"
      />
    </transition>

    <BtnChangeView
      v-if="!isMobile"
      :type="viewType"
      :change-type="changeType"
    />
  </div>
</template>

<script lang="ts">
import {
  Component,
  Provide,
  ProvideReactive,
  Vue,
  Watch
} from "vue-property-decorator";
import { isSmallScreen, mediaQueryEvent } from "@/utils/mediaQueryEvent";
import { Data } from "@/data.model";
import fetchData from "@/fetchData";
import Header from "@/components/Header.vue";
import ListView from "@/components/List/List.vue";
import TableView from "@/components/Table/Table.vue";
import BtnChangeView from "@/components/BtnChangeView.vue";
import Views from "@/components/Views.vue";

export enum ViewType {
  List = "LIST",
  Table = "TABLE"
}

export const TODAY = new Date("2020-09-18");

@Component({
  components: {
    Views,
    Header,
    BtnChangeView,
    ListView,
    TableView
  }
})
export default class App extends Vue {
  isMobile = isSmallScreen;
  selectedDate: Date = TODAY;
  viewType = this.isMobile ? ViewType.List : ViewType.Table;
  data: Data | null = null;

  @Provide() pSetSelectedDate = this.setSelectedDate;
  @ProvideReactive() pIsMobile = this.isMobile;
  @ProvideReactive() pSelectedDate = this.selectedDate;

  changeType(value: ViewType) {
    this.viewType = value;
  }

  setSelectedDate(date: Date): void {
    this.selectedDate = new Date(date);
    this.pSelectedDate = this.selectedDate;
  }

  setIsMobile(value: boolean) {
    this.isMobile = value;
    this.pIsMobile = this.isMobile;
  }

  async getData() {
    this.data = await fetchData();
  }

  @Watch("isMobile")
  onIsMobileChange(val: string, oldVal: string) {
    if (val !== oldVal && val) {
      this.changeType(ViewType.List);
    }
  }

  created() {
    this.getData();
  }

  mounted() {
    mediaQueryEvent(
      () => this.setIsMobile(true),
      () => this.setIsMobile(false)
    );
  }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
