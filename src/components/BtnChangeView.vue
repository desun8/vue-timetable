<template>
  <button
    @click="handleClick"
    class="fixed right-10 bottom-10  p-4 border bg-yellow-500 hover:bg-yellow-600"
  >
    {{ type }}
  </button>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { ViewType } from "@/components/Main.vue";

@Component
export default class BtnChangeView extends Vue {
  @Prop() readonly type!: string;
  @Prop() readonly changeType!: Function;

  handleClick() {
    if (this.type === ViewType.List) {
      this.changeType(ViewType.Table);
    } else {
      this.changeType(ViewType.List);
    }
  }
}
</script>
