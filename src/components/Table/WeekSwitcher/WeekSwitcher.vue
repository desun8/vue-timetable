<template>
  <div class="grid grid-flow-col justify-center gap-10">
    <Button :is-next="false" :change-week="changeWeek" text="< Prev" />
    <span>{{ weekStart }} - {{ weekEnd }}</span>
    <Button :is-next="true" :change-week="changeWeek" text="Next >" />
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
