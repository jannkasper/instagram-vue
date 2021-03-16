<template>
  <ScrollWrapper white-space="normal" :hide-scrollbar="true" flex="1 1 auto">
    <PostCommentsItem v-if="text"
                 :feed-description="true"
                 :owner="owner"
                 :text="text"
                 :createdAt="createdAt"
    />
    <PostCommentsItem
        v-for="(item, index) in commentsData.commentsArray"
        :key="index"
        :owner="item.owner"
        :text="item.text"
        :createdAt="item.createdAt"
    />
    <FlexWrapper align-items="center" justify-content="center">
      <Button v-if="commentsData && commentsData.pageInfo && commentsData.pageInfo.hasNextPage" :onclick="loadComments">
        <ImageIcon :type="'plus'"/>
      </Button>
    </FlexWrapper>
  </ScrollWrapper>
</template>
<script>
import ScrollWrapper from "@/components/ScrollWrapper";
import PostCommentsItem from "@/components/PostComments-Item";
import Button from "@/components/Button";
import ImageIcon from "@/components/ImageIcon";
import FlexWrapper from "@/components/FlexWrapper";
import {fetchState} from "../../util/context";
export default {
  components: {FlexWrapper, ImageIcon, Button, PostCommentsItem, ScrollWrapper},
  props: {
    commentsData : {
      type: Object,
      required: true,
    },
    owner: Object,
    text: String,
    createdAt: Number,
    shortcode: String,
  },
  methods: {
    loadComments: async function () {
      if (this.commentsData && this.commentsData.pageInfo?.hasNextPage) {
        const data = await fetchState(`/posts/${this.shortcode}/comments`, {shortcode: this.shortcode, first: 12, endCursor: this.commentsData.pageInfo.endCursor});
        this.commentsData = {
          ...this.commentsData,
          commentsArray: this.commentsData.commentsArray.concat(data.commentsArray),
          pageInfo: data.pageInfo
        }
      }
    }
  },
}
</script>