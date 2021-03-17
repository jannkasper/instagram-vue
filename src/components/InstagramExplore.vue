<template>
  <FlexWrapper align-items="center"
               margin="0 0 44px 0"
  >
    <Wrapper width="170px" height="170px">
      <ImageDefault :src="imageUrl"
                    position="absolute"
                    size="152px"
                    top="9px"
                    left="9px"
                    border="1px solid rgba(0,0,0,.0975)"
                    borderRadius="50%"
      />
    </Wrapper>
    <Wrapper margin="0 0 0 50px">
      <Label size="28px" height="32px" weight="300" color="#262626">
        {{name}}
      </Label>
      <Wrapper v-if="isTag" margin="10px 0 28px 0">
        <Info size="16px" color="#262626"><b>{{numCommaFormatter(postCount)}}</b> posts</Info>
      </Wrapper>
      <Button v-if="isTag" class="buttonFollow" >Follow</Button>
    </Wrapper>

  </FlexWrapper>
</template>
<script>
import FlexWrapper from "@/components/FlexWrapper";
import Wrapper from "@/components/Wrapper";
import ImageDefault from "@/components/Image";
import Label from "@/components/LabelText";
import Info from "@/components/InfoText";
import { numCommaFormatter } from "../../util/formatter";
import Button from "@/components/Button";

export default {
  components: {Button, Info, Label, ImageDefault, Wrapper, FlexWrapper},
  props: {
    isTag: Boolean,
    postCount: Number,
    name: String,
    imageUrl: String,
  },
  methods: {
    numCommaFormatter: numCommaFormatter
  }
}
</script>

<style>
.buttonFollow {
  width: 100%;
  padding: 5px 9px;
  background-color: #0095f6;

  border: none;
  color: #fff;
  border-radius: 4px;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
}
</style>