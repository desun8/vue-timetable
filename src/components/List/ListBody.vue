<template>
  <div>
    <span
      class="hidden sticky top-0 pb-12 text-5xl font-bold bg-white z-10 lg:block"
      >{{ date }}</span
    >
    <ul :class="{ hidden: isHidden }">
      <li
        v-for="item in items"
        :key="item.id"
        class="mb-5 border border-b-0 border-black rounded-md shadow-lg transition lg:mb-7 lg:rounded-none lg:border-b lg:border-gray-300 lg:shadow-none lg:transform lg:duration-500 hover:translate-x-10 hover:shadow-xl"
      >
        <Card :item="item" type="LIST" />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { DataItem } from "@/data.model";
import Card from "@/components/Card/Card.vue";

@Component({
  components: { Card }
})
export default class ListBody extends Vue {
  @Prop() readonly date!: string;
  @Prop() readonly isHidden!: boolean;
  @Prop() readonly items!: DataItem[];
}
</script>
