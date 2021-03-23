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
import {fetchExtendState, fetchState} from "../../../util/context";
import InstagramGrid from "@/components/InstagramGrid";
import InstagramExplore from "@/components/InstagramExplore";
export default {
  name: "Tag",
  inject: ["$reactive", "$setTriggerLoad"],
  components: {InstagramExplore, InstagramGrid },
  data() {
    return {
      tagName: this.$route.params.tagName,
      dataState: [],
      isFetching: false,
    }
  },
  methods: {
    async getStateData() {
      this.dataState = await fetchState(`/tags/${this.tagName}`);
    },
    async getExtraStateData() {
      await fetchExtendState(this.dataState, `/tags/${this.tagName}/page`,
          { tagName: this.tagName, first: 12, endCursor: this.dataState.timelineMedia.pageInfo.endCursor })
    }
  },
  watch: {
    $reactive: {
      handler: async function (newValue) {
        if (newValue.triggerLoad && !this.isFetching && this.dataState) {
          this.isFetching = true;
          await this.getExtraStateData()
          this.isFetching = false;
        }
      },
      deep: true,
    },
  },
  async mounted() {
    await this.getStateData()
  }
}
</script>
