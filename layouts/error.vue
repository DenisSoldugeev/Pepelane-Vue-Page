<template>
    <div class="container error">
      <h1>An error has occurred</h1>
      <span class="d-block">Please refresh the page</span>
      <div class="link">
        <NuxtLink to="/" tag="a">Reload page</NuxtLink>
      </div>
    </div>
</template>

<script>
    export default {
        name: "error"
    }
</script>

<style scoped lang="scss">
  .error {
    min-height: 100vh;
    background: #F3F4F7;
    border-radius: 48px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1 {
      font-size: 40px;
      line-height: 120%;
    }
    span {
      font-weight: 300;
      font-size: 14px;
      line-height: 146%;
      color: #677B8F;
      margin: 25px 0 40px 0;
    }
    .link {
      padding: 17px 32px;
      background: #4959FF;
      border-radius: 12px;
      & a {
        font-size: 16px;
        line-height: 14px;
        color: #FCFCFC;
      }
    }
  }

</style>
