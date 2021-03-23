<template>
  <div>
    <InstagramExplore :is-tag="false"
                      :image-url="dataState.locationImageUrl"
                      :name="`#${dataState.locationName}`"
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
  name: "Location",
  inject: ["$reactive", "$setTriggerLoad"],
  components: {InstagramExplore, InstagramGrid },
  data() {
    return {
      locationId: this.$route.params.locationId,
      locationName: this.$route.params.locationName,
      dataState: [],
      isFetching: false,
    }
  },
  methods: {
    async getStateData() {
      this.dataState = await fetchState(`/locations/${this.locationId}/${this.locationName}`);
    },
    async getExtraStateData() {
      await fetchExtendState(this.dataState, `/locations/${this.locationId}/${this.locationName}/page`,
          { locationId: this.locationId, first: 12, endCursor: this.dataState.timelineMedia.pageInfo.endCursor })
    },
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
