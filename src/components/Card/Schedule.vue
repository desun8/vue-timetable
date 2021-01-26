<template>
  <div>{{ from }} - {{ to }}</div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Tag extends Vue {
  @Prop() readonly from!: string;
  @Prop() readonly to!: string;
}
</script>
