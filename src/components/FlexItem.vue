<template>
  <div v-bind:style="{
    flex: flex || '0 1 auto',
  }">
    <slot/>
  </div>
</template>

<script>
export default {
  name: "FlexWrapper",
  props: {
    flex: String,
  }
}
</script>
