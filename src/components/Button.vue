<template>
  <RouterLink v-if="href" class="link" :to="href">
    <slot/>
  </RouterLink>
  <button v-else
          :class="['button', primary ? 'primary' : '']"
          v-on:click="onclick">
    <slot/>
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    href: String,
    onclick: {
      type: Function,
      default: () => {}
    },
    primary: Boolean,
  },
}
</script>

<style>
.button {
  background: transparent;
  box-shadow: 0 0 0 transparent;
  border: 0 solid transparent;
  text-shadow: 0 0 0 transparent;
}

.button {
  cursor: pointer;
}

.button:active {
  outline: none;
  border: none;
}

.button:focus {
  outline: 0;
}

.link, .link:hover, .link:focus, .link:active {
  text-decoration: none;
  color: inherit;
  cursor: pointer;
}

.primary {
  height: 100%;
  background-color: #0095f6;
  border: none;
  color: #fff;
  border-radius: 4px;

  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
}

.secondary {
  font-size: 14px;
  color: #0095f6;
  background-color: transparent;
}

.transparent {
  opacity: 0.3;
}
</style>