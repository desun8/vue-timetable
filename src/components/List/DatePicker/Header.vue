<template>
  <div
    class="date-picker__header  grid grid-flow-col"
    :class="{ 'bg-black text-white': isOpen }"
  >
    <BtnChangeDate type="prev" :date-picker="datePicker" />
    <PickerInput ref="pickerInput" />
    <BtnChangeDate type="next" :date-picker="datePicker" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import BtnChangeDate from "./BtnChangeDate.vue";
import { Instance } from "flatpickr/dist/types/instance";
import PickerInput from "@/components/List/DatePicker/PickerInput.vue";

@Component({
  components: { PickerInput, BtnChangeDate }
})
export default class Header extends Vue {
  @Prop() readonly isOpen!: boolean;
  @Prop({ default: undefined }) readonly datePicker: Instance | undefined;
}
</script>

<style scoped></style>
