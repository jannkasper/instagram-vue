<template>
  <Wrapper
      height="28px"
      width="215px"
      min-width="125px"
  >
    <Input
        height="100%"
        width="100%"
        border="solid 1px #dbdbdb"
        borderRadius="3px"
        backgroundColor="#fafafa"
        padding="3px 10px 3px 26px">
      <Wrapper position="absolute" width="14px" height="14px" left="6px" top="10%">
        <IconBase color="#8e8e8e" view-box="0 0 22 22" ><SearchIcon/></IconBase>
      </Wrapper>
    </Input>
  </Wrapper>
</template>

<script>

import Wrapper from "@/components/Wrapper";
import Input from "@/components/Input";
import IconBase from "@/components/IconBase";
import SearchIcon from "@/components/icons/SearchIcon";

export default {
  components: {
    SearchIcon,
    IconBase,
    Wrapper,
    Input
  }
}
</script>

<style>

</style>