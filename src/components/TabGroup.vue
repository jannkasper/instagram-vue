<template>
  <FlexWrapper justify-content="center"
               align-items="center"
               :other="{ borderTop: '1px solid #dbdbdb' }"
  >
    <Tab title="Posts"/>
    <Tab title="Tagged"/>
  </FlexWrapper>
</template>
<script>
import FlexWrapper from "@/components/FlexWrapper";
import Tab from "@/components/Tab";
export default {
  components: {Tab, FlexWrapper}
}
</script>