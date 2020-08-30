<template>
    <div class="header__user user d-flex">
      <span class="user__name">Bessie Cooper</span>
      <div class="user__avatar avatar">
        <img src="~assets/image/header/user-avatar.png" alt="user-avatar" class="avatar-img">
      </div>
    </div>
</template>

<script>
    export default {
        name: "User"
    }
</script>

<style scoped lang="scss">
.user {
  cursor: pointer;
  font-weight: 500;
  font-size: 16px;
  line-height: 152%;
  align-items: center;
  &__avatar {
    margin: 0 0 0 15px;
  }
  @media (max-width: 1200px) {
    &__name {
      display: none;
    }
  }
  @media (max-width: 600px) {
    margin: 0 0 0 0;
    &__avatar {
      max-width: 32px;
    }
  }
}
.avatar-img {
  border-radius: 50%;
}
</style>
