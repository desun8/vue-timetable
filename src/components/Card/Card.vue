<template>
  <div>
    <div
      class="grid grid-cols-card gap-x-2"
      :class="{
        'p-5 lg:grid-cols-card-lg lg:gap-x-7 lg:items-center xl:p-7 xl:pr-14': isList
      }"
    >
      <Tag
        class="col-start-1 col-end-2 justify-self-center"
        :class="{
          'lg:col-auto': isList
        }"
        :color="item.color"
        :is-list="isList"
      />
      <Schedule
        class="col-start-2 col-end-3 self-center"
        :class="{
          'lg:col-auto': isList
        }"
        :from="item.time[0]"
        :to="item.time[1]"
        :is-list="isList"
      />
      <Name
        class="col-start-2 col-end-3 mb-7"
        :class="{ 'lg:col-auto lg:mb-0': isList }"
        :name="item.name"
      />
      <TrainerName
        class="col-start-2 col-end-3"
        :class="{ 'lg:col-auto': isList }"
        :name="item.trainer"
      />
    </div>
    <Btns
      class="-mx-px transform translate-y-px rounded-b-md overflow-hidden lg:hidden"
    />
    <Description :text="item.description" />
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Tag from "@/components/Card/Tag.vue";
import Schedule from "@/components/Card/Schedule.vue";
import Name from "@/components/Card/Name.vue";
import Description from "@/components/Card/Description.vue";
import TrainerName from "@/components/Card/TrainerName.vue";
import Btns from "@/components/Card/Btns.vue";
import { DataItem } from "@/data.model";
@Component({
  components: { TrainerName, Description, Name, Schedule, Tag, Btns }
})
export default class Card extends Vue {
  @Prop() readonly item!: DataItem;
  @Prop() readonly type!: "TABLE" | "LIST";

  get isList() {
    return this.type === "LIST";
  }

  get isTable() {
    return this.type === "TABLE";
  }
}
</script>
