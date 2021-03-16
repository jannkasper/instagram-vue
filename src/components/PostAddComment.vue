<template>
  <form class="addCommentContainer" method="post">
    <div class="addCommentEmoji">
      <IconBase height="24" width="24"><EmojiIcon/></IconBase>
    </div>
    <textarea class="addCommentInput"
              ref="input"
              placeholder="Add Comment..."
              aria-label="Add Comment..."
              v-on:input="handleChange"
              :style="{ height: textAreaSize }"
    />
    <Button :style="{opacity: isTyping ? '1' : '0.3'}">
      <Info size="14px" color="#0095f6">
        Post
      </Info>
    </Button>
  </form>
</template>

<script>
import IconBase from "@/components/IconBase";
import EmojiIcon from "@/components/icons/EmojiIcon";
import Button from "@/components/Button";
import Info from "@/components/InfoText";
export default {
  name: "AddComment",
  components: {Info, Button, EmojiIcon, IconBase},
  data() {
    return {
      isTyping: false,
      textAreaSize: {
        type: String,
        default: "18px"
      }
    }
  },
  methods: {
    handleChange: function(e) {
      console.log(this.$refs.input.scrollHeight)
      this.isTyping = e.target.value.length > 0;
      this.textAreaSize = this.$refs.input.scrollHeight + "px"
    }
  }
}
</script>
<style>
.addCommentContainer {
  display: flex;
  align-items: center;
  width: 100%;
  max-height: 70px;
  padding: 1rem;
  margin-top: 4px;
  border-top: 1px solid #efefef;
}

.addCommentEmoji {
  padding-right: 16px;
}

.addCommentInput {
  display: flex;
  width: 100%;
  height: 18px;
  max-height: 60px;
  /*margin-right: 15px;*/
  padding: 0;

  border: 0;
  background-color: transparent;

  font-family: inherit;
  font-size: 14px;
  outline: none;
  white-space: normal;
  resize: none;
}

.addCommentInput::-webkit-scrollbar {
  display: none;
}
</style>