<template>
  <svg xmlns="http://www.w3.org/2000/svg"
       :color="color"
       :width="size || width"
       :height="size || height"
       :viewBox="viewBox"
       :aria-labelledby="iconName"
       role="presentation"
  >
    <title :id="iconName" lang="en">{{iconName}} icon</title>
    <g :fill="iconColor">
      <slot />
    </g>
  </svg>
</template>

<script>
export default {
  props: {
    iconName: {
      type: String,
      default: 'box'
    },
    color: {
      type: String,
      default: '#262626'
    },
    viewBox: {
      type: String,
      default: "0 0 48 48"
    },
    width: {
      type: [Number, String],
      default: 22
    },
    height: {
      type: [Number, String],
      default: 22
    },
    size: {
      type: [Number, String],
      default: undefined
    },
    iconColor: {
      type: String,
      default: 'currentColor'
    }
  }
}
</script>

<style scoped>
svg {
  display: inline-block;
  vertical-align: baseline;
  margin-bottom: -2px; /* yes, I'm that particular about formatting */
}
</style>