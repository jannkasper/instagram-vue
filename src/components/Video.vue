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
      <source :src="src" type="video/mp4" />
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

export default {
  name: "Video",
  components: {IconBase, Fragment },
  props: {
    src: String
  },
  data() {
    return { isMuted: true}
  },
  methods: {
    handleClick: function (e) {
      e.preventDefault();
      this.isMuted = !this.isMuted;
    }
  },
  computed: {
    currentComponent: function () {
      return this.isMuted ? Muted : Sound;
    }
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