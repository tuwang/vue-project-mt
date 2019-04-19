<template>
  <transition 
    enter-active-class="animated fadeInLeft">
  
    <router-view></router-view>

  </transition>
  
</template>

<script>

export default {
  name: 'app',
}
</script>

<style lang="less">
@import './styles/base.less';
</style>
