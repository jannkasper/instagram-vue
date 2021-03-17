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
import {fetchState} from "../../../util/context";
import InstagramGrid from "@/components/InstagramGrid";
import InstagramExplore from "@/components/InstagramExplore";
export default {
  name: "Tag",
  components: {InstagramExplore, InstagramGrid },
  data() {
    return {
      locationId: this.$route.params.locationId,
      locationName: this.$route.params.locationName,
      dataState: [],
    }
  },
  methods: {
    async getStateData() {
      this.dataState = await fetchState(`/locations/${this.locationId}/${this.locationName}`);
    },
  },
  async mounted() {
    await this.getStateData()
  }
}
</script>
