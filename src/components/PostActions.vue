<template>
  <Wrapper padding="6px 0 0 0"
           :other="{borderTop: '1px solid #efefef'}"
  >
    <FlexWrapper flex-wrap="wrap" padding="0 0.5rem 0 0.5rem">
      <Button style="margin: 0.1rem">
        <IconBase size="24"><ActivityIcon/></IconBase>
      </Button>
      <Button style="margin: 0.1rem">
        <IconBase size="24"><CommentIcon/></IconBase>
      </Button>
      <Button style="margin: 0.1rem">
        <IconBase size="24"><MessageIcon/></IconBase>
      </Button>
      <Button style="margin: 0.1rem; margin-left: auto">
        <IconBase size="24"><SaveIcon/></IconBase>
      </Button>
    </FlexWrapper>
    <div style="margin: 0.5rem 1rem 0 1rem">
      <Label v-if="likes">{{numCommaFormatter(likes.count)}} likes</Label>
      <Info v-if="createdAt"
            size="10px"
            color="#8e8e8e"
      >
        {{dateFormatter(createdAt)}}
      </Info>
    </div>
  </Wrapper>
</template>
<script>
import Wrapper from "@/components/Wrapper";
import Label from "@/components/LabelText";
import { numCommaFormatter, dateFormatter } from "../../util/formatter";
import Info from "@/components/InfoText";
import FlexWrapper from "@/components/FlexWrapper";
import IconBase from "@/components/IconBase";
import ActivityIcon from "@/components/icons/ActivityIcon";
import CommentIcon from "@/components/icons/CommentIcon";
import MessageIcon from "@/components/icons/MessageIcon";
import SaveIcon from "@/components/icons/SaveIcon";
import Button from "@/components/Button";

export default {
  name: "PostActions",
  components: {Button, SaveIcon, MessageIcon, CommentIcon, ActivityIcon, IconBase, FlexWrapper, Info, Label, Wrapper},
  props: {
    likes: Object,
    createdAt: Number,
  },
  methods: {
    numCommaFormatter: numCommaFormatter,
    dateFormatter: dateFormatter,
  }
}
</script>