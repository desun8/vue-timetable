<template>
  <span class="font-light">{{ name }}</span>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class TrainerName extends Vue {
  @Prop() readonly name!: string;
}
</script>
