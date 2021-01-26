<template>
  <div>
    <Tag :color="item.color" />
    <Schedule :from="item.time[0]" :to="item.time[1]" />
    <Name :name="item.name" />
    <Description :text="item.description" />
    <TrainerName :name="item.trainer" />
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { DataItem } from "@/fetchData";
import Tag from "@/components/Card/Tag.vue";
import Schedule from "@/components/Card/Schedule.vue";
import Name from "@/components/Card/Name.vue";
import Description from "@/components/Card/Description.vue";
import TrainerName from "@/components/Card/TrainerName.vue";
@Component({
  components: { TrainerName, Description, Name, Schedule, Tag }
})
export default class Card extends Vue {
  @Prop() readonly item!: DataItem;
}
</script>
