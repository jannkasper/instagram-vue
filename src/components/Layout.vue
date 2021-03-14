<template>
  <div>
    <FlexWrapper
        position="fixed"
        justifyContent="center"
        height="54px"
        width="100%"
        background="#fff"
        borderBottom="solid 1px #dbdbdb"
        zIndex="3"
    >
      <Header/>
    </FlexWrapper>
    <FlexWrapper
        flexDirection="column"
        justifyContent="center"
        width="100%"
        maxWidth="975px"
        top="54px"
        margin="0 auto"
        padding="30px 20px 0 20px"
    >
      <slot/>
    </FlexWrapper>
  </div>
</template>

<script>
import FlexWrapper from "@/components/FlexWrapper";
import Header from "@/components/Header";

export default {
  name: "Layout",
  components: {
    Header,
    FlexWrapper
  }
}
</script>
