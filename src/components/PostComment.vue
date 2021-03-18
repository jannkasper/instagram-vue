<template>
  <FlexWrapper margin="4px 1rem 4px 1rem">
    <FlexItem flex="1 1 auto" :other="{display: 'inline'}"  >
      <Button :href="`/${owner.username}`">
        <Label :use-hover="true">
          {{owner.username}}
        </Label>
      </Button>
<!--      <Info size="14px" height="18px">{{ modifiedText }}</Info>-->
      <component v-for="(item,index) in hashtagFormatter(modifiedText)"
                 :key="index"
                 :style="{ fontSize: '14px', lineHeight: '18px', ...item.style}"
                 :is="item.currentComponent"
                 v-bind="item.currentProperties">
        {{item.text}}
      </component>
      <Button v-if="!showMore" :onclick="handleShowMore">
        <Info size="14px" color="#9a9a9a">
          more
        </Info>
      </Button>
    </FlexItem>
    <div v-if="!feedDescription">
      <IconBase height="12" width="12"><LikeIcon/></IconBase>
    </div>

  </FlexWrapper>
</template>

<script>
import FlexWrapper from "@/components/FlexWrapper";
import FlexItem from "@/components/FlexItem";
import Button from "@/components/Button";
import Label from "@/components/LabelText";
import { hashtagFormatter } from "../../util/formatter";
import Info from "@/components/InfoText";
import IconBase from "@/components/IconBase";
import LikeIcon from "@/components/icons/LikeIcon";

export default {
  components: {LikeIcon, IconBase, Info, Label, Button, FlexItem, FlexWrapper},
  props: {
    owner: {
      default: {}
    },
    text: {
      type: String,
      default: ''
    },
    feedDescription: {
      type: Boolean,
      default: false
    },
    createdAt: Date
  },
  data() {
    return {
      showMore: this.text.length > 120 ? false : true,
      modifiedText: this.text.length > 120 ? this.text.slice(0, this.text.lastIndexOf(" ",120)) + "..." : this.text
    }
  },
  methods: {
    hashtagFormatter: hashtagFormatter,
    handleShowMore: function() {
      this.showMore = true;
      this.modifiedText = this.text
    }
  },
}
</script>