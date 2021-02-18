<template>
  <svg
    viewBox="0 0 13 42"
    class="w-2 h-6"
    :class="{ 'lg:w-3 lg:h-10': isList }"
  >
    <path
      :fill="color"
      fill-rule="evenodd"
      d="M6.601 10.399a3.9 3.9 0 10-.202 0h.202zm1.2 2.47a6.5 6.5 0 10-2.6 0v15.86a6.5 6.5 0 102.6 0V12.87z"
      clip-rule="evenodd"
    />
  </svg>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Tag extends Vue {
  @Prop() readonly color!: string;
  @Prop() readonly isList!: boolean;
}
</script>
