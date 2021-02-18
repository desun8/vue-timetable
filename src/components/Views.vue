<template>
  <div v-if="items">
    <transition name="fade-down">
      <List v-if="type === 'LIST'" :items="items" :weeks="weeks" key="list" />
      <Table
        v-if="type === 'TABLE'"
        :items="items"
        :weeks="weeks"
        key="table"
      />
    </transition>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import List from "@/components/List/List.vue";
import Table from "@/components/Table/Table.vue";
import { DataItems, DataWeeks } from "@/data.model";
import { ViewType } from "@/App.vue";

@Component({
  components: {
    List,
    Table
  }
})
export default class Views extends Vue {
  @Prop() readonly type!: ViewType;
  @Prop() readonly weeks!: DataWeeks;
  @Prop({ default: null }) readonly items!: DataItems | null;
}
</script>

<style scoped>
.fade-down-enter-active,
.fade-down-leave-active {
  transition-property: transform, opacity;
  transition-duration: 0.5s;
}

.fade-down-enter,
.fade-down-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
