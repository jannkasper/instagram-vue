<template>
  <div :class="useHover && 'underlineClass'"
       :style="{
    display: display,
    fontSize: size,
    lineHeight: height,
    fontWeight: weight,
    color: color,
    textTransform: textTransform,
    textAlign: textAlign,
    ...additionalStyle
  }">
    <slot/>
    &nbsp;
    <IconBase
        v-show="verified"
        :width="iconSize || size"
        :height="iconSize || size"
    >
      <VerifiedIcon/>
    </IconBase>
  </div>
</template>

<script>
import IconBase from "@/components/IconBase";
import VerifiedIcon from "@/components/icons/VerifiedIcon";
export default {
  name: "Label",
  components: {VerifiedIcon, IconBase},
  props: {
    size: {
      default: "14px"
    },
    height: {
      default: "18px"
    },
    weight: {
      default: "600"
    },
    verified: {
      default: false
    },
    iconSize: {
      default: undefined
    },
    color: {
      default: undefined
    },
    display: {
      default: "inherit"
    },
    useHover: {
      default: false
    },
    textTransform: {
      default: "none"
    },
    textAlign: {
      default: "none"
    },
    additionalStyle: {
      default: null
    },
  }
}
</script>

<style>
.underlineClass:hover {
  text-decoration: underline;
}
</style>