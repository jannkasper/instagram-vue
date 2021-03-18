<template>
  <FlexWrapper justify-content="center"
               align-items="center"
               :other="{ borderTop: '1px solid #dbdbdb' }"
  >
    <Tab title="Posts" :isSelected="selected == 'Posts'" :handleSelect="handleSelect"/>
    <Tab title="Tagged" :isSelected="selected == 'Tagged'" :handleSelect="handleSelect"/>
  </FlexWrapper>
</template>
<script>
import FlexWrapper from "@/components/FlexWrapper";
import Tab from "@/components/Tab";
export default {
  components: {Tab, FlexWrapper},
  data() {
    return {
      selected: "Posts"
    }
  },
  methods: {
    handleSelect: function (selected) {
      this.selected = selected;
    }
  }
}
</script>