<template>
  <FlexWrapper padding="12px 24px 12px 16px">
    <Avatar :src="owner.userImageUrl" size="32px" />
    <FlexItem flex="1 1 auto"
              :other="{marginLeft: '18px', wordBreak: 'break-word', paddingRight: '5px'}"
    >
      <Button :href="`/${owner.username}`" style="display: inline">
        <Label :verified="owner.isVerified"
               use-hover="true"
        >
          {{owner.username}}
        </Label>
      </Button>
      <Info size="14px" height="18px">{{ text }}</Info>
      <Wrapper margin="16px 0 4px 0">
        <Info color="#8e8e8e">{{timeFormatter(createdAt)}}</Info>
        <Fragment v-if="!feedDescription">
          <Button v-if="likes > 0">
            <Info weight="600" color="#8e8e8e">{{likes}} like</Info>
          </Button>
          <Button>
            <Info weight="600" color="#8e8e8e">Reply</Info>
          </Button>
        </Fragment>
      </Wrapper>
    </FlexItem>
    <div v-if="!feedDescription">
      <IconBase size="12"><LikeIcon/></IconBase>
    </div>
  </FlexWrapper>
</template>
<script>
import FlexWrapper from "@/components/FlexWrapper";
import Avatar from "@/components/Avatar";
import FlexItem from "@/components/FlexItem";
import Button from "@/components/Button";
import Label from "@/components/LabelText";
import Info from "@/components/InfoText";
import Wrapper from "@/components/Wrapper";
import { Fragment } from "vue-fragment";
import { timeFormatter } from "../../util/formatter";
import IconBase from "@/components/IconBase";
import LikeIcon from "@/components/icons/LikeIcon";

export default {
  name: "PostCommentsItem",
  components: {LikeIcon, IconBase, Wrapper, Info, Label, Button, FlexItem, Avatar, FlexWrapper, Fragment},
  props: {
    feedDescription: {
      type: Boolean,
      default: false
    },
    owner: {
      default: {}
    },
    text: {
      type: String,
      default: ''
    },
    createdAt: Number,
    likes: Number,
  },
  methods: {
    timeFormatter: timeFormatter,
  }
}
</script>