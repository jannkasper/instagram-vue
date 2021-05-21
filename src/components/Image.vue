<template>
  <img :src="imageBase64"
       :style="{
    position: position || 'relative',
    display: display || 'flex',
    width: size || 'auto',
    height: size || 'auto',
    maxWidth: 'inherit',
    top: top || 'auto',
    left: left || 'auto',
    border: border || 'none',
    borderRadius: border && borderRadius || '0',
    objectFit: 'cover'
  }">
</template>

<script>
import { fetchImage } from "../../util/image";
export default {
  name: "ImageDefault",
  props: {
    src: String,
    display: {
      type: String,
      default: "block"
    },
    size: {
      type: String,
      default: "inherit"
    },
    position: {
      type: String,
      default: "relative"
    },
    border: {
      type: String,
      default: "none"
    },
    borderRadius: {
      type: String,
      default: "0"
    },
    left: {
      type: String,
      default: "0"
    },
    top: {
      type: String,
      default: "0"
    },
  },
  data() {
    return {
      imageBase64: null,
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
