<template>
  <fragment>
    <div class="position left"
         v-on:click="handlePreviousSlide"
         v-show="currentSlide > 0"
    >
      <ImageIcon :type="'previous'" icon-size="30px"/>
    </div>
    <div class="position right"
         v-on:click="handleNextSlide"
         v-show="currentSlide < imageArray.length - 1"
    >
      <ImageIcon :type="'next'" icon-size="30px"/>
    </div>
    <ImageDefault :src="imageArray[currentSlide].resourceArray[1].src" />
  </fragment>
</template>

<script>
import { Fragment } from 'vue-fragment'
import ImageIcon from "@/components/ImageIcon";
import ImageDefault from "@/components/Image";
export default {
  name: "Sidecar",
  components: {  Fragment, ImageDefault, ImageIcon },
  data() {
    return { currentSlide: 0 }
  },
  props: {
    imageArray: Array
  },
  methods: {
    handleNextSlide: function () {
      this.currentSlide = this.currentSlide + 1;
      console.log("NEXT")
    },
    handlePreviousSlide: function () {
      this.currentSlide = this.currentSlide - 1;
      console.log("previous")
    }
  }
}
</script>
<style>
.left {
  left: 0
}

.right {
  right: 0
}

.position {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  padding: 16px 8px;
  z-index: 1;
  cursor: pointer;
}
</style>