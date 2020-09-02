<template>
    <div class="lot__rent  rent d-flex">
      <div class="rent__text">
        <span>Rent for</span> <span class="rent__price">{{rent}}$/h</span>
      </div>
      <div class="rent__btn">
        <a href="" >Rent now</a>
      </div>
    </div>
</template>

<script>
    export default {
        name: "RentForm",
      props: {
        rent: {
          type: Number,
          default() {
            return 0
          }
        }
      }
    }
</script>

<style scoped lang="scss">
  .rent {
    margin: 57px 0 0 0;
    background: #F3F4F7;
    border-radius: 16px;
    padding: 16px 32px;
    align-items: center;
    & span {
      font-size: 20px;
      line-height: 140%;
    }
    &__price {
      color: #F84AB3;
    }
    &__text {
      flex-basis: 70%;
    }
    &__btn {
      flex-basis: 28.3%;
      text-align: center;
      background: #4959FF;
      border-radius: 12px;
      padding: 17px 0;
      & a {
        font-size: 16px;
        line-height: 14px;
        color: #FCFCFC;
      }
    }
    @media (max-width: 600px ) {
      &__text {
        flex-basis: 59.4%;
      }
      &__btn {
        flex-basis: 40.6%;
        padding: 14px 0;
      }
    }
  }
</style>
