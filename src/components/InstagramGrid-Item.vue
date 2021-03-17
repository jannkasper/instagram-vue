<template>
  <Button :href="`/p/${mediaData.postId}`">
    <Wrapper>
      <ImageDefault :src="mediaData.thumbnailSrc || mediaData.thumbnailArray[1].src"
             size="293px"
             display="inline"
      />
      <FlexWrapper v-if="mediaData.isVideo || mediaData.isSidecar"
                   position="absolute"
                   justifyContent="flex-end"
                   top="0"
                   left="0"
                   right="0"
                   bottom="0"
      >
        <ImageIcon :type="mediaData.isVideo ? 'video' : 'sidecar'"
                   size="32px"
                   justify-content="none"
                   align-items="none"/>
      </FlexWrapper>
      <FlexWrapper
          :hover="true"
          background="rgba(0,0,0,0.3)"
          position="absolute"
          justifyContent="center"
          alignItems="center"
          height="293px"
          width="293px"
          top="0"
          left="0"
      >
        <FlexWrapper padding="15px">
          <IconBase color="white"
                    style="margin-right: 10px">
            <ActivityIconActive/>
          </IconBase>
          <Info size="16px" weight="600" color="#fff">
            {{numFormatter(mediaData.likeCount)}}
          </Info>
        </FlexWrapper>
        <FlexWrapper padding="15px">
          <IconBase view-box="0 0 16 16"
                    transform="scale(-1, 1)"
                    color="white"
                    style="margin-right: 10px">
            <CommentIconActive/>
          </IconBase>
          <Info size="16px" weight="600" color="#fff">
            {{numFormatter(mediaData.commentCount)}}
          </Info>
        </FlexWrapper>

      </FlexWrapper>
    </Wrapper>
  </Button>
</template>
<script>
import Button from "@/components/Button";
import Wrapper from "@/components/Wrapper";
import ImageDefault from "@/components/Image";
import FlexWrapper from "@/components/FlexWrapper";
import IconBase from "@/components/IconBase";
import ActivityIconActive from "@/components/icons/ActivityIconActive";
import Info from "@/components/InfoText";
import { numFormatter } from "../../util/formatter";
import CommentIconActive from "@/components/icons/CommentIconActive";
import ImageIcon from "@/components/ImageIcon";

export default {
  name: "InstagramGridItem",
  components: {
    ImageIcon,
    CommentIconActive,
    Info,
    ActivityIconActive,
    IconBase,
    FlexWrapper,
    ImageDefault,
    Wrapper,
    Button
  },
  props: {
    mediaData: Object
  },
  methods: {
    numFormatter: numFormatter,
  }
}
</script>