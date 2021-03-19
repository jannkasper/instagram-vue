<template>
  <Wrapper
      ref="input"
      height="28px"
      width="215px"
      min-width="125px"
  >
    <Input
        :handle-change="handleChange"
        :handle-focus="handleFocus"
        height="100%"
        width="100%"
        border="solid 1px #dbdbdb"
        borderRadius="3px"
        backgroundColor="#fafafa"
        padding="3px 10px 3px 26px">
      <Wrapper position="absolute" width="14px" height="14px" left="6px" top="20%">
        <IconBase color="#8e8e8e" view-box="0 0 28 28" ><SearchIcon/></IconBase>
      </Wrapper>
    </Input>
    <SearchResult :search-result="searchResult"
                  :visible="Boolean( onFocus && searchValue && searchResult.length > 0)" />
  </Wrapper>
</template>

<script>

import Wrapper from "@/components/Wrapper";
import Input from "@/components/Input";
import IconBase from "@/components/IconBase";
import SearchIcon from "@/components/icons/SearchIcon";
import {fetchState} from "../../util/context";
import SearchResult from "@/components/SearchResult";

export default {
  components: {
    SearchResult,
    SearchIcon,
    IconBase,
    Wrapper,
    Input
  },
  data() {
    return {
      searchValue: '',
      searchResult: [],
      onFocus: false,
    }
  },
  methods: {
    handleChange: async function (searchValue) {
      this.searchValue = searchValue;
      if (searchValue.length > 2) {
        this.searchResult = await fetchState(`/search/${searchValue}`);
      }
    },
    handleFocus: function (value) {
      console.log(value)
      this.onFocus = value
    },
    handleClickOutside: function(event) {
      console.log(this.$refs.input.$el);
      console.log(event)
      // if (this.$refs.input.current && !this.$refs.input.current.contains(event.target)) {
      //   this.onFocus = false;
      // }
    }
  },
  // mounted() {
  //   this.$refs.input.$el.addEventListener('mousedown', this.handleClickOutside);
  // },
  // destroyed() {
  //   this.$refs.input.$el.removeEventListener('mousedown', this.handleClickOutside);
  // },
}
</script>

<style>

</style>