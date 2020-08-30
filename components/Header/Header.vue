<template>
<div class="header">
  <div class="header__container container d-flex">
   <div class="header__column header__column_l">
     <Logo />
     <span class="d-block air_sharing">World's first affordable air sharing</span>
   </div>
    <div class="header__column header__column_b">
      <NightMod />
      <div class="d-flex">
        <Msg />
        <Notification />
      </div>
      <User/>
    </div>
  </div>
</div>
</template>

<script>
  import Logo from "./Logo";
  import NightMod from "./NightMod";
  import Msg from "./Msg";
  import Notification from "./Notification";
  import User from "./User";
  export default {
        name: "Header",
        components: {
          Logo,
          NightMod,
          Msg,
          Notification,
          User
        }
    }
</script>

<style scoped>

</style>
