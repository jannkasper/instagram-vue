<template>
  <div v-bind:style="{
    position: position || 'relative',
    display: display || 'block',
    margin: margin || '0',
    padding: padding || '0',
    width: width || 'auto',
    height: height || 'auto',
    maxWidth: maxWidth || 'none',
    minWidth: minWidth || 'none',
    top: top || 'auto',
    bottom: bottom || 'auto',
    left: left || 'auto',
    right: right || 'auto',
    border: border || 'none',
    borderRadius: border && borderRadius || '0',
    background: background || 'none',
    zIndex: zIndex || 0,
    transform: transform,
  }">
    <slot/>
  </div>
</template>

<script>
export default {
  name: "Wrapper",
  props: {
    position: String,
    display: String,
    margin: String,
    padding: String,
    top: String,
    bottom: String,
    left: String,
    right: String,
    width: String,
    height: String,
    maxWidth: String,
    minWidth: String,
    border: String,
    borderRadius: String,
    background: String,
    zIndex: String,
    transform: String,
  }
}
</script>

