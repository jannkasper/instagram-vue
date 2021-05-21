<template>
  <fragment>
    <video
        autoPlay
        loop
        :muted="isMuted"
        style="{
        object-fit: cover;
        max-width: inherit;
        height: inherit;
        left: 0;
        top: 0;
        }">
      <source :src="imageBase64" type="video/mp4" />
    </video>
    <div class="muteIcon" v-on:click="handleClick">
      <IconBase color="#ffffff" height=12 width=12 >
        <component :is="currentComponent"/>
      </IconBase>
    </div>
  </fragment>
</template>

<script>
import { Fragment } from "vue-fragment"
import IconBase from "@/components/IconBase";
import Sound from "@/components/icons/SoundIcon";
import Muted from "@/components/icons/MutedIcon";
import {fetchImage} from "../../util/image";

export default {
  name: "Video",
  components: {IconBase, Fragment },
  props: {
    src: String
  },
  data() {
    return { isMuted: true, imageBase64: null  }
  },
  methods: {
    handleClick: function (e) {
      e.preventDefault();
      this.isMuted = !this.isMuted;
    },
    async getImageBase64() {
      return await fetchImage(this.src);
    },
  },
  computed: {
    currentComponent: function () {
      return this.isMuted ? Muted : Sound;
    },
  },
   async created() {
    this.imageBase64 = await fetchImage(this.src);
  }
}
</script>

<style>
.muteIcon {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  right: 0;
  bottom: 0;
  height: 28px;
  width: 28px;
  margin: 0 16px 16px 0;
  background-color: #262626;
  border-radius: 50%;
  cursor: pointer;
}
</style>
