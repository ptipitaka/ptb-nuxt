<template>
  <div :class="side">
    <slot />
  </div>
</template>

<script>
export default {
  props: ['side']  
}
</script>

<style scoped>
  div {
    white-space: pre-line;
    padding-top: 1em;
    padding-bottom: 1em;
    @apply text-left
  }
  div.r {
    white-space: pre-line;
    padding-top: 1em;
    padding-bottom: 1em;
    @apply text-right
  }
  div.c {
    white-space: pre-line;
    padding-top: 1em;
    padding-bottom: 1em;
    @apply text-center
  }
</style>