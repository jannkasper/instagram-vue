<template>
  <span :style="{
    display: 'inline',
    fontSize: size,
    lineHeight: height,
    fontWeight: weight,
    color: color,
    textTransform: textTransform,
    maxWidth: '100%',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    // whiteSpace: 'nowrap',
    ...other
  }">
    <slot/>
  </span>
</template>

<script>
export default {
  name: "Info",
  props: {
    size: {
      default: "12px"
    },
    height: {
      default: "18px"
    },
    weight: {
      default: "400"
    },
    color: {
      default: undefined
    },
    textTransform: {
      default: "none"
    },
    other: Object,
  }
}
</script>

<style>
.underlineClass:hover {
  text-decoration: underline;
}
</style>