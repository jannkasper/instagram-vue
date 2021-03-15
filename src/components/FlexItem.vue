<template>
  <div v-bind:style="{
    flex: flex || '0 1 auto',
    ...other
  }">
    <slot/>
  </div>
</template>

<script>
export default {
  name: "FlexItem",
  props: {
    flex: String,
    other: Object
  }
}
</script>
