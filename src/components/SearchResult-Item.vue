<template>
  <FlexWrapper flex-direction="column" background="#fafafa">
    <Button :href="determinedHref">
      <FlexWrapper padding="8px 16px">
        <Avatar v-if="item.imageUrl" :src="item.imageUrl" size="44px" border="50%" />
        <ImageIcon v-else :type="'location'" size="44px" border="1px solid rgba(0,0,0,.0975)"/>
        <FlexWrapper flex-direction="column" justify-content="center" flex="1 1 auto" margin="0 0 0 12px">
          <Label :verified="item.isVerified" display="inline">
            {{item.name}}
          </Label>
          <Info>{{item.description}}</Info>
        </FlexWrapper>
      </FlexWrapper>
    </Button>
  </FlexWrapper>
</template>
<script>
import FlexWrapper from "@/components/FlexWrapper";
import Avatar from "@/components/Avatar";
import Label from "@/components/LabelText";
import Info from "@/components/InfoText";
import { numCommaFormatter } from "../../util/formatter";
import Button from "@/components/Button";
import ImageIcon from "@/components/ImageIcon";

export default {
  components: {ImageIcon, Button, Info, Label, Avatar, FlexWrapper},
  props: {
    item: Object
  },
  data() {
    let determinedHref;

    if (this.item.user) {
      determinedHref = `/${this.item.username}`;
    } else if (this.item.hashtag) {
      determinedHref = `/explore/tags/${this.item.name}`;
      this.item.description = numCommaFormatter(this.item.postCount) + " posts";
      this.item.name = "#" + this.item.name;
    } else if (this.item.place) {
      determinedHref = `/explore/locations/${this.item.id}/${this.item.slug}`;
    }
    return {
      determinedHref
    }
  }
}
</script>