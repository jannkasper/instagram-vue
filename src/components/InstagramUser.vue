<template>
  <FlexWrapper margin="0 0 44px 0">
    <FlexItem flex="1 0 0" :other="{margin: '0 30px 0 0'}">
      <Wrapper height="170px"
               width="170px"
               padding="4px"
               margin="auto"
      >
        <ImageDefault :src="userData.userImageUrl"
                      size="170px"
                      border="5px solid white"
                      borderRadius="50%"/>
      </Wrapper>
    </FlexItem>
    <FlexWrapper flex-direction="column" flex="2 0 30px">
      <FlexWrapper margin="0 0 20px 0">
        <Label :verified="userData.isVerified"
               size="28px"
               height="32px"
               weight="300"
               color="#262626"
               icon-size="20px">
          {{userData.username}}
        </Label>
        <Wrapper margin="0 0 0 20px">
          <Button :primary="true" :style="{padding: '0 24px'}">Follow</Button>
        </Wrapper>
        <Wrapper margin="0 0 0 10px">
          <Button :primary="true" :style="{padding: '0 14px'}"><div class="triangleShape"/></Button>
        </Wrapper>
        <Wrapper margin="auto 20px">
          <IconBase size="24"><MoreIcon /></IconBase>
        </Wrapper>
      </FlexWrapper>

      <FlexWrapper margin="0 0 20px 0">
        <Wrapper margin="0 40px 0 0">
          <Info size="16px" color="#262626">
            <b>{{numCommaFormatter(userData.postCount)}}</b> posts
          </Info>
        </Wrapper>
        <Wrapper margin="0 40px 0 0">
          <Info size="16px" color="#262626">
            <b>{{numFormatter(userData.followersCount)}}</b> followers
          </Info>
        </Wrapper>
        <Wrapper margin="0 40px 0 0">
          <Info size="16px" color="#262626">
            <b>{{numFormatter(userData.followingsCount)}}</b> following
          </Info>
        </Wrapper>
      </FlexWrapper>

      <FlexWrapper flex-direction="column">
        <Info size="16px" height="24px" weight="600">{{userData.name}}</Info>
        <Info size="16px" height="26px">{{userData.bio}}</Info>
        <Button v-if="userData.bioUrl"
                :href="userData.bioUrl">
          <Info size="16px" height="26px" weight="600" color="#00376b">{{urlFormatter(userData.bioUrlName)}}</Info>
        </Button>
        <Wrapper v-if="userData.mutualFollow && userData.mutualFollow.usernameArray && userData.mutualFollow.usernameArray.length"
                 margin="14px 0 0 0"
                 :other="{ fontSize: '12px', lineHeight: '14px', color: '#8e8e8e'}">
<!--          TODO mutualFollow -->
        </Wrapper>
      </FlexWrapper>

    </FlexWrapper>
  </FlexWrapper>
</template>
<script>
import FlexWrapper from "@/components/FlexWrapper";
import FlexItem from "@/components/FlexItem";
import Wrapper from "@/components/Wrapper";
import ImageDefault from "@/components/Image";
import Label from "@/components/LabelText";
import Button from "@/components/Button";
import IconBase from "@/components/IconBase";
import MoreIcon from "@/components/icons/MoreIcon";
import Info from "@/components/InfoText";
import { numCommaFormatter, numFormatter, urlFormatter } from "../../util/formatter";

export default {
  components: {Info, MoreIcon, IconBase, Button, Label, ImageDefault, Wrapper, FlexItem, FlexWrapper},
  props: {
    userData: Object,
  },
  methods: {
    numCommaFormatter: numCommaFormatter,
    numFormatter: numFormatter,
    urlFormatter: urlFormatter,
  }
}
</script>

<style>
.triangleShape {
  display: inherit;
  width: 0;
  height: 0;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 6px solid #fff;
}
</style>