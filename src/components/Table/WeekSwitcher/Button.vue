<template>
  <button @click="handleClick">{{ text }}</button>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Week } from "@/components/Table/Table.vue";

@Component
export default class Button extends Vue {
  @Prop() readonly text!: string;
  @Prop() readonly changeWeek!: Function;
  @Prop() readonly isNext!: boolean;

  handleClick() {
    this.changeWeek(this.isNext ? Week.Next : Week.Current);
  }
}
</script>
