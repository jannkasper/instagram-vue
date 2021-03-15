<template>
  <FlexWrapper margin="4px 1rem 4px 1rem">
    <FlexItem flex="1 1 auto" :other="{display: 'inline'}"  >
      <Button :href="`/${owner.username}`">
        <Label :use-hover="true">
          {{owner.username}}
        </Label>
      </Button>
      <Info size="14px" height="18px">{{shortText}}</Info>
    </FlexItem>

  </FlexWrapper>
</template>

<script>
import FlexWrapper from "@/components/FlexWrapper";
import FlexItem from "@/components/FlexItem";
import Button from "@/components/Button";
import Label from "@/components/LabelText";
import { hashtagFormatter } from "../../util/formatter";
import Info from "@/components/InfoText";

export default {
  components: {Info, Label, Button, FlexItem, FlexWrapper},
  props: {
    owner: Object,
    text: String,
    feedDescription: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      showMore: false,
      shortText: this.text.slice(0, this.text.lastIndexOf(" ",120))
    }
  },
  methods: {
    result: hashtagFormatter
  },
  mounted() {
    const test = hashtagFormatter(this.shortText);
    return test
  }
}
</script>