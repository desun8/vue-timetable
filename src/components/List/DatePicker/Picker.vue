<template>
  <div
    class="date-picker__inner  absolute top-full left-0 w-full pt-4 bg-white opacity-0 z-50"
    :class="{ 'animate-fade-in-down': isOpen, 'opacity-1': isInline }"
    ref="datepickerWrap"
    aria-hidden="true"
  >
    <div class="date-picker__elm-wrapper  relative" ref="datepicker"></div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Picker extends Vue {
  @Prop() readonly isOpen!: boolean;
  @Prop() readonly isInline!: boolean;
}
</script>
