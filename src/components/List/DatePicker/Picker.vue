<template>
  <div
    class="date-picker__inner w-full bg-white z-50"
    :class="{
      'animate-fade-in-down': isOpen,
      'relative opacity-100': isInline,
      'absolute top-full left-0 pt-4 opacity-0': !isInline
    }"
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
