<template>
  <button
    @click="handleClick"
    class="fixed right-10 bottom-10 flex justify-center items-center w-14 h-14 rounded-full bg-gray-800 shadow-md transition-colors  hover:bg-yellow-600"
    :aria-label="`Переключить вид на ${label}`"
    :title="`Переключить вид на ${label}`"
  >
    <svg
      v-if="type === 'LIST'"
      width="24"
      height="24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M2 3a1 1 0 011-1h7a1 1 0 011 1v7a1 1 0 01-1 1H3a1 1 0 01-1-1V3zm2 1v5h5V4H4zM13 3a1 1 0 011-1h7a1 1 0 011 1v7a1 1 0 01-1 1h-7a1 1 0 01-1-1V3zm2 1v5h5V4h-5zM13 14a1 1 0 011-1h7a1 1 0 011 1v7a1 1 0 01-1 1h-7a1 1 0 01-1-1v-7zm2 1v5h5v-5h-5zM2 14a1 1 0 011-1h7a1 1 0 011 1v7a1 1 0 01-1 1H3a1 1 0 01-1-1v-7zm2 1v5h5v-5H4z"
        fill="#fff"
      />
    </svg>

    <svg
      v-if="type === 'TABLE'"
      width="24"
      height="24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21 7H8c-.6 0-1-.4-1-1s.4-1 1-1h13c.6 0 1 .4 1 1s-.4 1-1 1zM21 13H8c-.6 0-1-.4-1-1s.4-1 1-1h13c.6 0 1 .4 1 1s-.4 1-1 1zM21 19H8c-.6 0-1-.4-1-1s.4-1 1-1h13c.6 0 1 .4 1 1s-.4 1-1 1zM3 7h-.2c-.1 0-.1 0-.2-.1-.1 0-.1-.1-.2-.1s-.1-.1-.1-.1c-.1-.1-.2-.2-.2-.3C2 6.3 2 6.1 2 6c0-.1 0-.3.1-.4.1-.1.1-.2.2-.3.3-.3.7-.4 1.1-.2.1.1.2.1.3.2.2.2.3.4.3.7 0 .3-.1.5-.3.7-.2.2-.4.3-.7.3zM3 13c-.3 0-.5-.1-.7-.3-.2-.2-.3-.4-.3-.7v-.2c0-.1 0-.1.1-.2 0-.1.1-.1.1-.2s.1-.1.1-.1c.1-.1.2-.2.3-.2.4-.2.8-.1 1.1.2l.1.1c0 .1.1.1.1.2s0 .1.1.2v.2c0 .3-.1.5-.3.7-.2.2-.4.3-.7.3zM3 19c-.3 0-.5-.1-.7-.3-.2-.2-.3-.4-.3-.7 0-.1 0-.3.1-.4.1-.1.1-.2.2-.3.4-.4 1-.4 1.4 0 .2.2.3.4.3.7 0 .3-.1.5-.3.7-.2.2-.4.3-.7.3z"
        fill="#fff"
      />
    </svg>
  </button>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { ViewType } from "@/App.vue";

@Component
export default class BtnChangeView extends Vue {
  @Prop() readonly type!: string;
  @Prop() readonly changeType!: Function;

  get label() {
    let text;

    if (this.type === "LIST") {
      text = "таблицу";
    } else {
      text = "список";
    }

    return text;
  }

  handleClick() {
    if (this.type === ViewType.List) {
      this.changeType(ViewType.Table);
    } else {
      this.changeType(ViewType.List);
    }
  }
}
</script>
