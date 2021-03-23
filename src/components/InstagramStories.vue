<template>
  <Wrapper height="130px" width="100%" margin="0 0 44px 0">
    <ScrollWrapper flex-direction="row"
                   height="100%"
                   width="100%"
                   content-padding="0 20px"
                   overflow-x="scroll"
                   overflow-y="hidden"
                   :hide-scrollbar="true">
      <InstagramStoriesItem v-for="(item, index) in dataState"
                            :key="index"
                            :content="item" />
    </ScrollWrapper>
  </Wrapper>
</template>
<script>
import Wrapper from "@/components/Wrapper";
import ScrollWrapper from "@/components/ScrollWrapper";
import {fetchState} from "../../util/context";
import InstagramStoriesItem from "@/components/InstagramStories-Item";
export default {
  name: "InstagramStories",
  components: {InstagramStoriesItem, ScrollWrapper, Wrapper},
  props: {
    username: String,
    userId: String,
  },
  data() {
    return {
      dataState: [],
    }
  },
  methods: {
    async getStateData() {
      this.dataState = await fetchState(`/users/${this.username}/stories`, { userId: this.userId});
    },
  },
  async mounted() {
    await this.getStateData()
  }
}
</script>