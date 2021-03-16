<template>
  <div v-bind:style="{
    position: position || 'relative',
    display: 'flex',
    justifyContent: justifyContent || 'flex-start',
    flexDirection: flexDirection || 'row',
    flexWrap: flexWrap || 'nowrap',
    flex: flex || '0 1 auto',
    alignItems: alignItems || 'stretch',
    margin: margin || '0',
    padding: padding || '0',
    width: width || 'auto',
    height: height || 'auto',
    top: top || 'auto',
    left: left || 'auto',
    right: right || 'auto',
    bottom: bottom || 'auto',
    maxWidth: maxWidth || 'none',
    minWidth: minWidth || 'none',
    border: border || 'none',
    borderBottom: borderBottom || 'none',
    borderRadius: border && borderRadius || '0',
    background: background || 'none',
    zIndex: zIndex || 0,
    ...other
  }">
    <slot/>
  </div>
</template>

<script>
export default {
  name: "FlexWrapper",
  props: {
    position: String,
    justifyContent: String,
    flexDirection: String,
    flexWrap: String,
    flex: String,
    alignItems: String,
    margin: String,
    padding: String,
    width: String,
    height: String,
    top: String,
    left: String,
    right: String,
    bottom: String,
    maxWidth: String,
    minWidth: String,
    border: String,
    borderRadius: String,
    background: String,
    borderBottom: String,
    zIndex: String,
    other: Object
  }
}
</script>

<!--<style lang="css">-->
<!--.FlexWrapper {-->
<!--  position: fixed;-->
<!--  display: flex;-->
<!--  justify-content: center;-->
<!--  height: 54px;-->
<!--  width: 100%;-->
<!--  background: #fff;-->
<!--  border-bottom: solid 1px #dbdbdb;-->
<!--  z-index: 3;-->

<!--}-->
<!--</style>-->
