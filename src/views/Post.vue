<template>
  <div v-if="dataState">
    <InstagramPost :post="dataState"/>
    <InstagramGrid :media-array="extraDataState.mediaArray" :title="`More posts from ${dataState.owner.username}`" />
  </div>
</template>

<script>
import {fetchState} from "../../util/context";
import InstagramPost from "@/components/InstagramPost";
import InstagramGrid from "@/components/InstagramGrid";
export default {
  name: "Post",
  components: {InstagramGrid, InstagramPost  },
  data() {
    return {
      shortcode: this.$route.params.shortcode,
      dataState: null,
      extraDataState: null,
    }
  },
  methods: {
    async getStateData() {
      this.dataState = await fetchState(`/posts/${this.shortcode}`);
      if (this.dataState) {
        this.extraDataState = await fetchState(`/posts/${this.shortcode}/more`, { userId: this.dataState.owner.id, first: 12, after: undefined });
      }
    },
  },
  async mounted() {
    await this.getStateData()
  }
}
</script>
