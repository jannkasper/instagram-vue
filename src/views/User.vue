<template>
  <div>
    <InstagramUser :user-data="dataState" />
    <UserPrivate v-if="dataState.isPrivate" />
    <InstagramGrid v-else :mediaArray="dataState.timelineMedia.mediaArray" :use-tab-group="true" />
  </div>
</template>

<script>
import {fetchState} from "../../util/context";
import InstagramGrid from "@/components/InstagramGrid";
import InstagramUser from "@/components/InstagramUser";
import UserPrivate from "@/components/UserPrivate";
export default {
  name: "User",
  components: {UserPrivate, InstagramUser, InstagramGrid },
  data() {
    return {
      username: this.$route.params.username,
      dataState: [],
    }
  },
  methods: {
    async getStateData() {
      this.dataState = await fetchState(`/users/${this.username}`);
    },
  },
  async mounted() {
    await this.getStateData()
  }
}
</script>
