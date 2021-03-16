<template>
  <div>
    <Post
        v-for="(item, index) in dataState"
        v-bind:post="item"
        v-bind:index="index"
        v-bind:key="item.shortcode"
    />
  </div>
</template>

<script>
import {fetchState} from "../../util/context";
import Post from "@/components/Post";
export default {
  name: "Home",
  components: { Post },
  data() {
    return {
      dataState: [],
    }
  },
  methods: {
    async getStateData() {
      const test = await fetchState("/posts");
      // debugger;
      this.dataState = test.postArray;
    },
  },
  async mounted() {
    await this.getStateData()
  }
}
</script>
