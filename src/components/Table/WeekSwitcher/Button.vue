<template>
  <button class="w-12 h-12" @click="handleClick">
    <svg
      class="transition-transform duration-300"
      :class="{ prev: !isNext }"
      viewBox="0 0 31 11"
    >
      <path
        fill-rule="evenodd"
        d="M30.33 5.71a.292.292 0 000-.412L25.933.9a.292.292 0 10-.414.414l3.898 3.897H.292a.293.293 0 000 .585h29.125l-3.898 3.897a.293.293 0 000 .413.292.292 0 00.414 0L30.33 5.71z"
        clip-rule="evenodd"
      />
      <path d="M30.109 5.506L25.72 1.118m4.389 4.384L25.72 9.89" />
    </svg>
  </button>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Week } from "@/components/Table/Table.vue";

@Component
export default class Button extends Vue {
  @Prop() readonly changeWeek!: Function;
  @Prop() readonly isNext!: boolean;

  handleClick() {
    this.changeWeek(this.isNext ? Week.Next : Week.Current);
  }
}
</script>

<style scoped>
button:focus-within {
  outline-width: 0;
}
button:focus-visible {
  outline-width: unset;
}

.prev {
  transform: scaleX(-1);
}

button:hover svg {
  transform: translateX(20px);
}

button:hover svg.prev {
  transform: translateX(-20px) scaleX(-1);
}
</style>
