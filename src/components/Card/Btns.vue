<template>
  <div class="grid grid-flow-col text-center text-sm text-white uppercase">
    <a class="py-4 bg-gray-400" href="#">Подробнее</a>
    <a
      class="py-4 grid grid-flow-col gap-2 justify-center items-center bg-yellow-500"
      href="#"
      >Записаться<svg class="w-4 h-4 fill-current" viewBox="0 0 18 13">
        <path
          d="M11.691.608V.607a.517.517 0 00-.732 0h-.001a.517.517 0 000 .732l4.648 4.648H1.403a.518.518 0 000 1.036h14.203l-4.647 4.647a.518.518 0 00-.045.682v.006l.044.044a.518.518 0 00.733 0l5.531-5.531.001-.001a.517.517 0 000-.73v-.002l-.107.106.107-.106L11.69.608zm5.149 5.897L11.32.985m5.517 5.518l-5.52 5.52"
        /></svg
    ></a>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Btns extends Vue {}
</script>
