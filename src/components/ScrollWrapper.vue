<template>
  <FlexWrapper :flex-direction="flexDirection"
               :flex="flex"
               :align-items="alignItems"
               :height="height"
               :width="width"
               :border="border"
               :border-radius="borderRadius"
               :background="background"
               :other="{outline: 0, overflow: 'hidden'}"
  >
    <div :class="hideScrollbar && 'hideScrollbar'"
         :style="{
            margin: contentMargin,
            padding: contentPadding,
            width: contentWidth,
            height: contentHeight,
            overflowX: overflowX,
            overflowY: overflowY,
            whiteSpace: whiteSpace,
         }"
    >
      <slot/>
    </div>
  </FlexWrapper>
</template>
<script>
import FlexWrapper from "@/components/FlexWrapper";
export default {
  name: "ScrollWrapper",
  components: {FlexWrapper},
  props: {
    flexDirection: {
      type: String,
      default: "column"
    },
    flex: {
      type: String,
      default: "0 1 auto",
    },
    alignItems: String,
    height: String,
    width: String,
    border: String,
    borderRadius: String,
    background: String,
    contentMargin: {
      type: String,
      default: "0"
    },
    contentPadding: {
      type: String,
      default: "0"
    },
    contentWidth: {
      type: String,
      default: "auto"
    },
    contentHeight: {
      type: String,
      default: "auto"
    },
    overflowX: {
      type: String,
      default: "hidden"
    },
    overflowY: {
      type: String,
      default: "scroll"
    },
    whiteSpace: {
      type: String,
      default: "nowrap"
    },
    hideScrollbar: {
      type: Boolean,
      default: false
    },
  }
}
</script>

<style>
.hideScrollbar::-webkit-scrollbar {
  display: none;
}
</style>