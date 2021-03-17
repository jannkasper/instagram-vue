<template>
  <FlexWrapper align-items="center"
               margin="0 30px"
               height="6vh"
               :other="{borderTop: '1px solid #262626'}"
  >
    <IconBase size="12">
      <component :is="currentComponent"/>
    </IconBase>
    <Label color="#262626"
           text-transform="uppercase"
           :additional-style="{ letterSpacing: 1, marginLeft: '6px' }"
    >
      {{title}}
    </Label>

  </FlexWrapper>
</template>
<script>
import FlexWrapper from "@/components/FlexWrapper";
import Label from "@/components/LabelText";
import PostsIcon from "@/components/icons/PostsIcon";
import TaggedIcon from "@/components/icons/TaggedIcon";
import IconBase from "@/components/IconBase";

export default {
  components: {IconBase, Label, FlexWrapper},
  props: {
    title: String,
  },
  computed: {
    currentComponent: function () {
      switch (this.title) {
        case 'Posts':
          return PostsIcon;
        case 'Tagged':
          return TaggedIcon;
        default:
          return null;
      }
    }
  },
}
</script>