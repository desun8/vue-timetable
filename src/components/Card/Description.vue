<template>
  <span class="hidden">{{ text }}</span>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Description extends Vue {
  @Prop() readonly text!: string;
}
</script>
