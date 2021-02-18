<template>
  <div class="text-xs font-light" :class="{ 'lg:text-xl': isList }">
    <span>{{ from }}</span>
    <br v-if="isList" class="hidden lg:block" />
    <span :class="{ 'lg:hidden': isList }"> - </span>
    <span :class="{ 'lg:opacity-50': isList }">{{ to }}</span>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Tag extends Vue {
  @Prop() readonly from!: string;
  @Prop() readonly to!: string;
  @Prop() readonly isList!: boolean;
}
</script>
