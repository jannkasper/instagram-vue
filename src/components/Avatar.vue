<template>
  <img :src="imageBase64"
       :style="{
    width: size,
    height: size,
    border: border,
    borderRadius, borderRadius
  }"
  />
</template>

<script>
import {fetchImage} from "../../util/image";

export default {
  props: {
    src: {
      type: String,
    },
    size: {
      type: String,
      default: "22px"
    },
    border: {
      type: String,
      default: "1px #dbdbdb solid"
    },
    borderRadius: {
      type: String,
      default: "50%"
    }
  },
  data() {
    return {
      imageBase64: require("../static/images/avatar.jpg"),
    }
  },
  methods: {
    async getImageBase64() {
      this.imageBase64 = await fetchImage(this.src);
    },
  },
  async mounted() {
    this.getImageBase64()
  }
}
</script>
