<template>
  <FlexWrapper justify-content="center" margin="0 0 48px 0">
    <Wrapper height="598px" max-width="598px">
      <Picture :resource-array="post.resourceArray"
               :is-video="post.isVideo"
               :video-url="post.videoUrl"
               :is-sidecar="post.isSidecar"
               :sidecar-array="post.sidecarArray"
      />
    </Wrapper>
    <FlexWrapper flex-direction="column"
                 width="335px"
                 height="598px"
                 border="1px solid #efefef"
                 background="white"
    >
      <Author :owner="post.owner"
              :location="post.location"
      />
      <PostComments :shortcode="post.shortcode"
                    :comments-data="post.commentsData"
                    :owner="post.owner"
                    :text="post.description"
                    :created-at="post.createdAt"
      />
      <PostActions :likes="post.likes"
                   :created-at="post.createdAt"
      />
      <AddComment />
    </FlexWrapper>

  </FlexWrapper>
</template>

<script>
import FlexWrapper from "@/components/FlexWrapper";
import Wrapper from "@/components/Wrapper";
import Picture from "@/components/Picture";
import Author from "@/components/Author";
import PostActions from "@/components/PostActions";
import AddComment from "@/components/PostAddComment";
import PostComments from "@/components/PostComments";
export default {
  name: "InstagramPost",
  components: {PostComments, AddComment, PostActions, Author, Picture, Wrapper, FlexWrapper},
  props: {
    post: {
      type: Object
    }
  }
}
</script>