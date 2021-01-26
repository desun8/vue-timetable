<template>
  <div id="list-view">
    <h2 class="text-xl text-center">Список</h2>
    <div class="grid">
      <DatePicker />

      <ul class="list-items">
        <li v-for="item in filteredItems" :key="item.id">
          <Card :item="item" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, InjectReactive, Prop, Vue } from "vue-property-decorator";
import { DataItem } from "@/fetchData";
import DatePicker from "@/components/List/DatePicker/DatePicker.vue";
import Card from "@/components/Card/Card.vue";
import { dateFormat } from "@/utils/setFormatDate";

@Component({
  components: {
    DatePicker,
    Card
  }
})
export default class ListView extends Vue {
  @InjectReactive() readonly pSelectedDate!: Date;

  @Prop() readonly items!: DataItem[];

  get filteredItems(): DataItem[] {
    const date = dateFormat.YYYY_MM_DD(this.pSelectedDate);
    return this.items.filter(
      item => dateFormat.YYYY_MM_DD(new Date(item.date)) === date
    );
  }

  mounted() {
    console.log(this.items);
  }
}
</script>

<style scoped></style>
