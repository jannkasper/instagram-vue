<template>
  <Wrapper
      width="100%"
      maxWidth="614px"
      margin="0 0 60px 0"
      border="1px solid #dbdbdb"
      border-radius="3px"
      background="#fff"
  >
    <Author
        :owner="post.owner"
        :location="post.location"
    />
    <Picture
        :resource-array="post.resourceArray"
        :is-video="post.isVideo"
        :is-sidecar="post.isSidecar"
        :sidecar-array="post.sidecarArray"
        :video-url="post.videoUrl"
    />
  </Wrapper>
</template>

<script>
import Wrapper from "@/components/Wrapper";
import Author from "@/components/Author";
import Picture from "@/components/Picture";
export default {
  name: "Post",
  components: {
    Picture,
    Author,
    Wrapper
  },
  props: {
    post: Object,
  }
}
</script>