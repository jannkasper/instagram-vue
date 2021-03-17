<template>
  <Wrapper>
    <TabGroup v-if="useTabGroup" />
    <Label v-else color="#8e8e8e"
           :additional-style="{ marginBottom: '20px' }">
      {{title}}
    </Label>

    <FlexWrapper v-if="mediaArray"
                 flex-direction="column"
                 justify-content="center">
      <FlexWrapper v-for="(chunk, index) in chunked"
                   :key="index"
                   justify-content="space-between"
                   margin="0 0 28px 0">
        <InstagramGridItem
            v-for="(item, index2) in chunk"
            :mediaData="item"
            :key="index2"
        />
      </FlexWrapper>
    </FlexWrapper>
    <EmptyGallery v-else />
  </Wrapper>
</template>

<script>
import Wrapper from "@/components/Wrapper";
import FlexWrapper from "@/components/FlexWrapper";
import InstagramGridItem from "@/components/InstagramGrid-Item";
import EmptyGallery from "@/components/EmptyGallery";
import TabGroup from "@/components/TabGroup";
import Label from "@/components/LabelText";
export default {
  name: "InstagramGrid",
  components: {
    Label,
    TabGroup,
    EmptyGallery,
    FlexWrapper,
    Wrapper,
    InstagramGridItem
  },
  props: {
    mediaArray: Array,
    title: String,
    useTabGroup: Boolean,
  },
  computed: {
    chunked () {
      return this.chunk(this.mediaArray, 3)
    },
  },
  methods: {
    chunk: function (arr, len) {
      const chunks = []
      let i = 0
      const n = arr.length

      while (i < n) {
        chunks.push(arr.slice(i, i += len))
      }
      return chunks
}
  }

}
</script>