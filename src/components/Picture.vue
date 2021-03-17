<template>
  <Wrapper height="inherit" max-width="inherit">
    <component :is="currentComponent" v-bind="currentProperties" />
  </Wrapper>
</template>

<script>
import Wrapper from "@/components/Wrapper";
import Video from "@/components/Video";
import Sidecar from "@/components/Sidecar";
import ImageDefault from "@/components/Image";

export default {
  components: {Image, Wrapper},
  props: {
    isVideo: Boolean,
    isSidecar: Boolean,
    videoUrl: String,
    resourceArray: Array,
    sidecarArray: Array
  },
  computed: {
    currentComponent() {
      if (this.isVideo) {
        return Video
      } else if (this.isSidecar) {
        return Sidecar
      } else {
        return ImageDefault
      }
    },
    currentProperties() {
      if (this.isVideo) {
        return { src: this.videoUrl }
      } else if (this.isSidecar) {
        return { imageArray: this.sidecarArray }
      } else {
        return { src: this.resourceArray[1].src }
      }
    }
  }
}
</script>