<template>
  <FlexWrapper
      alignItems="center"
      maxWidth="975px"
      width="100%"
      height="100%"
      padding="0 20px 0 20px"
  >

    <FlexItem flex="1 9999 0">
      <Button href="/">
        <img class="logo" src="../static/images/logo.png" />
      </Button>
    </FlexItem>

    <FlexItem>
      <InstagramSearch/>
    </FlexItem>

    <FlexItem flex="1 0 0">
      <FlexWrapper justify-content="flex-end">
        <Wrapper margin="0 11px">
          <IconBase><HomeIcon/></IconBase>
        </Wrapper>
        <Wrapper margin="0 11px">
          <IconBase><MessageIcon/></IconBase>
        </Wrapper>
        <Wrapper margin="0 10px">
          <IconBase><ExploreIcon/></IconBase>
        </Wrapper>
        <Wrapper margin="0 11px">
          <IconBase><ActivityIcon/></IconBase>
        </Wrapper>
        <Wrapper margin="0 11px">
          <Avatar/>
        </Wrapper>
      </FlexWrapper>
    </FlexItem>

  </FlexWrapper>
</template>

<script>
import Wrapper from "@/components/Wrapper";
import FlexWrapper from "@/components/FlexWrapper";
import FlexItem from "@/components/FlexItem";
import IconBase from "@/components/IconBase";
import HomeIcon from "./icons/HomeIconActive";
import MessageIcon from "./icons/MessageIcon";
import ExploreIcon from "./icons/ExploreIcon";
import ActivityIcon from "./icons/ActivityIcon";
import Avatar from "@/components/Avatar";
import InstagramSearch from "@/components/InstagramSearch";
import Button from "@/components/Button";

export default {
  name: "Header",
  components: {
    Button,
    InstagramSearch,
    Wrapper,
    FlexWrapper,
    FlexItem,
    IconBase,
    HomeIcon,
    MessageIcon,
    ExploreIcon,
    ActivityIcon,
    Avatar
  }
}
</script>

<style>
.logo {
  margin-top: 10px;
  width: 103px;
  height: 29px;
}
</style>
