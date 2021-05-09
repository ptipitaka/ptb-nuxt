<template>
  <div :class="level">
    <slot />
  </div>
</template>

<script>
export default {
  props: ['level']  
}
</script>

<style scoped>
  div p {
    padding-left: 10%;
    padding-top: 0px;
    text-indent: 10%;
    padding-bottom: 4px;
  }
  div.l1 p {
    padding-left: 20%;
    padding-top: 0px;
    text-indent: 10%;
    padding-bottom: 4px;
  }
</style>