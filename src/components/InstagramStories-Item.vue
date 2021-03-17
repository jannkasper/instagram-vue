<template>
  <Wrapper display="inline-block"
           width="125px"
           padding="10px 15px">
    <Wrapper
        margin="4px auto 8px auto"
        padding="1px"
        height="87px"
        width="87px"
    >
      <ImageDefault :src="content.thumbnailSrc"
                    size="100%"
                    border="3px solid white"
                    borderRadius="50%" />
    </Wrapper>
    <Wrapper width="100%">
      <Label size="14px"
             height="14px"
             text-align="center"
             :additional-style="{ textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden'}" >
        {{content.title}}
      </Label>
    </Wrapper>
  </Wrapper>
</template>
<script>
import Wrapper from "@/components/Wrapper";
import ImageDefault from "@/components/Image";
import Label from "@/components/LabelText";
export default {
  components: {Label, ImageDefault, Wrapper},
  props: {
    content: Object,
  }
}
</script>