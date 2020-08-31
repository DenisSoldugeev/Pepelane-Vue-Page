<template>
 <div class="rent__select">
   <span>Rent</span>
   <select name="" id="">
     <option value="value1">whatever</option>
   </select>
 </div>
</template>

<script>
    export default {
        name: "RentSelect"
    }
</script>

<style scoped lang="scss">
.rent {
  &__select {
    font-size: 40px;
    line-height: 120%;
    & select {
      border: none;
      outline: none;
      background-color: transparent;
      color: #4959FF;
      padding: 0 18px 0 0;
    }
  }
  @media (max-width: 768px) {
    &__select {
      font-size: 24px;
    }
  }
}
</style>
