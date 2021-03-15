<template>
  <img :src="src"
       :style="{
    width: size,
    height: size,
    border: border,
    borderRadius, borderRadius
  }"
  />
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      default: require("../static/images/avatar.jpg")
    },
    size: {
      type: String,
      default: "22px"
    },
    border: {
      type: String,
      default: "none"
    },
    borderRadius: {
      type: String,
      default: "50%"
    }
  }
}
</script>