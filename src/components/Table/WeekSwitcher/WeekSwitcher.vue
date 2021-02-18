<template>
  <div class="grid grid-flow-col justify-center gap-10 mb-5">
    <Button :is-next="false" :change-week="changeWeek" />
    <span class="text-5xl font-medium">
      <span class="stroke">{{ weekStart }} - </span><span>{{ weekEnd }}</span>
    </span>
    <Button :is-next="true" :change-week="changeWeek" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Button from "@/components/Table/WeekSwitcher/Button.vue";
@Component({
  components: { Button }
})
export default class WeekSwitcher extends Vue {
  @Prop() readonly weekStart!: string;
  @Prop() readonly weekEnd!: string;
  @Prop() readonly changeWeek!: Function;
}
</script>

<style scoped>
.stroke {
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke: 1px currentColor;
}
</style>
