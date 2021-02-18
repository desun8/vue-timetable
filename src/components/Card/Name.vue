<template>
  <h3 class="text-xl font-semibold leading-none">{{ name }}</h3>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Name extends Vue {
  @Prop() readonly name!: string;
}
</script>
