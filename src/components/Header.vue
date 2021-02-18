<template>
  <header class="flex justify-center mb-10 pt-4 lg:pt-10">
    <Logo />
  </header>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Logo from "@/components/Logo.vue";

@Component({ components: { Logo } })
export default class Header extends Vue {}
</script>
