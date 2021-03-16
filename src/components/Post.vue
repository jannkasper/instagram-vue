<template>
  <Wrapper width="100%"
           maxWidth="614px"
           margin="0 0 60px 0"
           border="1px solid #dbdbdb"
           border-radius="3px"
           background="#fff"
  >
    <Author :owner="post.owner"
            :location="post.location"
    />
    <Picture :resource-array="post.resourceArray"
             :is-video="post.isVideo"
             :is-sidecar="post.isSidecar"
             :sidecar-array="post.sidecarArray"
             :video-url="post.videoUrl"
    />
    <PostActions :likes="post.likes"
                 :viewerHasLiked="post.viewerHasLiked"
                 :viewerHasSaved="post.viewerHasSaved"
    />
    <Comment :feedDescription="true"
             :owner="post.owner"
             :text="post.description"
    />
    <FlexWrapper margin="0 0 0 1rem">
      <Button :href="`/p/${post.shortcode}`">
        <Info size="14px"
              height="22px"
              color="#9a9a9a"
        >
          View all {{numCommaFormatter(post.commentsData.count)}} comments
        </Info>
      </Button>
    </FlexWrapper>
    <Comment v-for="(item, index) in post.commentsData.commentsArray"
             :key="index"
             :owner="item.owner"
             :text="item.text"
    />
    <Wrapper margin="0 0 0 1rem">
      <Info size="10px"
            height="22px"
            color="#9a9a9a"
      >
        {{dateFormatter(post.createdAt)}}
      </Info>
    </Wrapper>
    <AddComment/>
  </Wrapper>
</template>

<script>
import Wrapper from "@/components/Wrapper";
import Author from "@/components/Author";
import Picture from "@/components/Picture";
import Info from "@/components/InfoText";
import { dateFormatter, numCommaFormatter } from "../../util/formatter";
import FlexWrapper from "@/components/FlexWrapper";
import Button from "@/components/Button";
import Comment from "@/components/PostComment";
import AddComment from "@/components/PostAddComment";
import PostActions from "@/components/PostActions";

export default {
  name: "Post",
  components: {
    PostActions,
    AddComment,
    Comment,
    Button,
    FlexWrapper,
    Info,
    Picture,
    Author,
    Wrapper
  },
  props: {
    post: Object,
  },
  methods: {
    dateFormatter: dateFormatter,
    numCommaFormatter: numCommaFormatter,
  },

  mounted() {
    // console.log(this.post)
  }
}
</script>