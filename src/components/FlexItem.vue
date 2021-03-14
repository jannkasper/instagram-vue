<template>
  <div v-bind:style="{
    flex: flex || '0 1 auto',
  }">
    <slot/>
  </div>
</template>

<script>
export default {
  name: "FlexItem",
  props: {
    flex: String,
  }
}
</script>
