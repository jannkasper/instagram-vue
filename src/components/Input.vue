<template>
  <fragment>
    <input
        @focusin="() => handleFocus(true)"
        @focusout="() => handleFocus(false)"
        v-on:input="event => handleChange(event.target.value)"
        :placeholder="placeholder"
        :style="{
          position: position,
          display: display,
          margin: margin || '0',
          padding: padding || '0',
          width: width,
          height: height,
          border: border,
          borderRadius: border && borderRadius,
          color: color,
          backgroundColor: backgroundColor
        }"
    />
    <slot/>
  </fragment>
</template>

<script>
import { Fragment } from "vue-fragment"

export default {
  components: {
    Fragment
  },
  props: {
    handleChange: Function,
    handleFocus: Function,
    value: String,
    placeholder: {
      type: String,
      default: "Search"
    },
    position: {
      type: String,
      default: "relative"
    },
    display: {
      type: String,
      default: "block"
    },
    border: {
      type: String,
      default: "none"
    },
    borderRadius: {
      type: String,
      default: "0"
    },
    margin: {
      type: String,
      default: "0"
    },
    padding: {
      type: String,
      default: "0"
    },
    width: {
      type: String,
      default: "auto"
    },
    height: {
      type: String,
      default: "auto"
    },
    color: {
      type: String,
      default: "#262626"
    },
    backgroundColor: {
      type: String,
      default: "transparent"
    },
    outline: {
      type: String,
      default: "o"
    },
  }
}
</script>