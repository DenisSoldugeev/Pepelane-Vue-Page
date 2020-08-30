<template>
  <div class="header__night_mode night-mode d-flex">
    <img src="~assets/image/icons/night-mode.svg" alt="">
    <span>Night mod</span>
  </div>
</template>

<script>
    export default {
        name: "NightMod"
    }
</script>

<style lang="scss">
  .night-mode {
    cursor: pointer;
    font-size: 16px;
    line-height: 152%;
    align-items: center;
    & img {
      margin: 0 18px 0 0;
    }
    @media (max-width: 600px) {
      & img {
        margin: 0 0 0 0;
      }

    }
  }
</style>
