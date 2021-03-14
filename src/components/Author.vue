<template>
  <FlexWrapper
      height="60px"
      padding="16px"
      alignItems="center"
      border-bottom="1px solid #efefef"
  >
    <Avatar :src="owner.userImageUrl" size="32px" />
    <FlexWrapper
        flexDirection="column"
        margin="0 0 0 16px"
    >

    </FlexWrapper>
  </FlexWrapper>
</template>

<script>
import FlexWrapper from "@/components/FlexWrapper";
import Avatar from "@/components/Avatar";

export default {
  components: {Avatar, FlexWrapper},
  props: {
    owner: Object,
    location: Object
  }
}
</script>