<template>
    <div class="rent__card vehicle-card d-flex">
        <img :src="vehicle.image" class="vehicle-card__img" alt="vehicle-img">
      <div class="vehicle-card__text">
        <span class="vehicle-card__title">{{vehicle.name}}</span>
        <p class="vehicle-card__description">{{vehicle.description}}</p>
        <span class="vehicle-card__price">{{vehicle.rent}} $/h</span>
      </div>
    </div>
</template>

<script>
    export default {
        name: "VehicleCard",
        props: {
          vehicle: {
            type: Object,
            default() {
              return {}
            }
          }
        }
    }
</script>

<style scoped lang="scss">
.vehicle-card {
  background: #FCFCFC;
  border-radius: 32px;
  padding: 24px 32px;
  flex-basis: 30.9%;
  margin: 32px 30px 0 0;
  &:nth-child(3n+3) {
   margin: 32px 0 0 0;
  }
  &__img {
    border-radius: 24px;
    max-height: 88px;
    margin: 0 24px 0 0;
  }
  &__text {
    margin: 18px 0 0 0;
  }
  &__title {
    font-size: 16px;
    line-height: 14px;
  }
  &__description {
    font-weight: 300;
    font-size: 12px;
    line-height: 148%;
    color: #677B8F;
    padding: 12px 0 16px 0;
  }
  &__price {
    font-size: 14px;
    line-height: 148%;
    color: #F84AB3;
  }
  @media (max-width: 1200px) {
    margin: 32px 20px 0 0;
    flex-basis: 100%;
    &:nth-child(1n + 1) {
      margin: 32px 0 0 0;
    }
  }
  @media (max-width: 768px) {

  }
}
</style>
