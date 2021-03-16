<template>
  <div v-if="dataState">
    <InstagramPost :post="dataState"/>
  </div>
</template>

<script>
import {fetchState} from "../../util/context";
import InstagramPost from "@/components/InstagramPost";
export default {
  name: "Post",
  components: {InstagramPost  },
  data() {
    return {
      shortcode: this.$route.params.shortcode,
      dataState: [],
    }
  },
  methods: {
    async getStateData() {
      this.dataState = await fetchState(`/posts/${this.shortcode}`);
    },
  },
  async mounted() {
    await this.getStateData()
  }
}
</script>
