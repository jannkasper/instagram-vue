<template>
  <div>
    <div v-if="Object.keys(dataState).length !== 0">
      <InstagramUser :user-data="dataState" />
      <InstagramStories v-if="dataState.hasStories"
                        :username="username"
                        :user-id="dataState.id" />
      <UserPrivate v-if="dataState.isPrivate" />
      <InstagramGrid v-if="dataState.timelineMedia" :mediaArray="dataState.timelineMedia.mediaArray" :use-tab-group="true" />
    </div>
  </div>
</template>

<script>
import { fetchState, fetchExtendState} from "../../util/context";
import InstagramGrid from "@/components/InstagramGrid";
import InstagramUser from "@/components/InstagramUser";
import UserPrivate from "@/components/UserPrivate";
import InstagramStories from "@/components/InstagramStories";

export default {
  name: "User",
  inject: ["$reactive", "$setTriggerLoad"],
  components: {InstagramStories, UserPrivate, InstagramUser, InstagramGrid },
  data() {
    return {
      username: this.$route.params.username,
      dataState: {},
      isFetching: false,
    }
  },
  methods: {
    async getStateData() {
      this.dataState = await fetchState(`/users/${this.username}`);
    },
    async getExtraStateData() {
      await fetchExtendState(this.dataState, `/users/${this.username}/timelineMedia/page`, { userId: this.dataState.id, first: 12, endCursor: this.dataState.timelineMedia.pageInfo.endCursor })
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
