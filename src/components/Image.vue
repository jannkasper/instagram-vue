<template>
  <img :src="src"
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
export default {
  name: "Image",
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
      type: Number,
      default: 0
    },
    left: {
      type: Number,
      default: 0
    },
    top: {
      type: Number,
      default: 0
    },
  }
}
</script>