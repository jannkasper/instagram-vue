<template>
  <FlexWrapper
      height="60px"
      padding="16px"
      alignItems="center"
      :other="{borderBottom: '1px solid #efefef'}"
  >
    <Avatar :src="owner.userImageUrl" size="32px" border-radius="50%"/>
    <FlexWrapper
        flexDirection="column"
        margin="0 0 0 16px"
    >
      <Button :href="`/${owner.username}`">
        <Label :verified="owner.isVerified" use-hover="true">{{owner.username}}</Label>
      </Button>
      <Info v-if="location">{{location.name}}</Info>
    </FlexWrapper>
    <Wrapper margin="0 0 0 auto">
      <IconBase><MoreIcon/></IconBase>
    </Wrapper>
  </FlexWrapper>
</template>

<script>
import FlexWrapper from "@/components/FlexWrapper";
import Avatar from "@/components/Avatar";
import Wrapper from "@/components/Wrapper";
import IconBase from "@/components/IconBase";
import MoreIcon from "@/components/icons/MoreIcon";
import Label from "@/components/LabelText";
import Info from "@/components/InfoText";
import Button from "@/components/Button";

export default {
  components: {Button, Info, Label, MoreIcon, IconBase, Wrapper, Avatar, FlexWrapper},
  props: {
    owner: Object,
    location: Object
  }
}
</script>