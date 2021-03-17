<template>
  <div>
    <InstagramExplore :is-tag="true"
                      :image-url="dataState.tagImageUrl"
                      :name="`#${dataState.tagName}`"
                      :post-count="dataState.postCount" />
    <InstagramGrid :mediaArray="dataState.topMedia.mediaArray" title="Top posts" />
    <InstagramGrid :mediaArray="dataState.timelineMedia.mediaArray" title="Most recent" />
  </div>
</template>

<script>
import {fetchState} from "../../../util/context";
import InstagramGrid from "@/components/InstagramGrid";
import InstagramExplore from "@/components/InstagramExplore";
export default {
  name: "Tag",
  components: {InstagramExplore, InstagramGrid },
  data() {
    return {
      tagName: this.$route.params.tagName,
      dataState: [],
    }
  },
  methods: {
    async getStateData() {
      this.dataState = await fetchState(`/tags/${this.tagName}`);
    },
  },
  async mounted() {
    await this.getStateData()
  }
}
</script>
