<template>
  <div :class="['container', visible && 'visibility']">
    <div class="triangle_shape" />
    <ScrollWrapper align-items="center"
                   height="362px"
                   width="100%"
                   border="1px solid #dbdbdb"
                   border-radius="6px"
                   background="#fafafa"
                   content-width="100%"
                   content-padding="12px 0 0 0">
      <SearchResultItem v-for="(item, index) in searchResult"
                        v-bind:key="index"
                        v-bind:item="item"/>

    </ScrollWrapper>
  </div>
</template>
<script>
import ScrollWrapper from "@/components/ScrollWrapper";
import SearchResultItem from "@/components/SearchResult-Item";
export default {
  components: {SearchResultItem, ScrollWrapper},
  props: {
    searchResult: Array,
    visible: Boolean,
  }
}
</script>

<style>
.container {
  visibility: hidden;
  z-index: 3;
  background: #fff;
  width: 375px;
  margin-left: -80px;
  margin-top: 12px;
  border-radius: 6px;
  transform: translateY(0);
  transition: opacity 75ms linear,transform 38ms ease-out,-webkit-transform 38ms ease-out;
  filter: drop-shadow(0 0 0.75rem rgba(0,0,0,.0975));
}
.visibility {
  visibility: visible;
}

.triangle_shape {
  position: absolute;
  width: 14px;
  height: 14px;
  top: -6px;
  left: 187.5px;
  transform: rotate(45deg);
  background: #fafafa;
  z-index: 3;
}
</style>