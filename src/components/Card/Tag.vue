<template>
  <div class="icon-tag  w-4 h-4" :style="'background: ' + color"></div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Tag extends Vue {
  @Prop() readonly color!: string;
}
</script>
