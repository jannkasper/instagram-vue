<template>
  <span>
    <slot />
  </span>
</template>

<script>
export default {
  name: 'ScrollProvider',
  data() {
    return {
      reactive: {
        triggerLoad: false
      }
    }
  },
  methods: {
    setTriggerLoad: function (value) {
      this.reactive.triggerLoad = value;
    },
    handleScroll: function (event) {
      event.preventDefault();
      const currentHeight = window.pageYOffset + document.documentElement.clientHeight;
      // console.log(currentHeight)
      const maxHeight = Math.max(
          document.body.scrollHeight,
          document.body.offsetHeight,
          document.documentElement.clientHeight,
          document.documentElement.scrollHeight,
          document.documentElement.offsetHeight );
      if (currentHeight > maxHeight - 800) {
        this.setTriggerLoad(true);
      } else {
        this.setTriggerLoad(false);
      }
    }
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll, false);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  provide() {
    return {
      $reactive: this.reactive,
      $setTriggerLoad: this.setTriggerLoad,
    }
  }
}
</script>