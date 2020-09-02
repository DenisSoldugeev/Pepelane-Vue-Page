<template>
 <div class="rent__select">
   <span>Rent</span>
   <select name="" id="">
     <option value="value1">{{option.whatever}}</option>
     <option value="value1">{{option.airship}}</option>
     <option value="value1">{{option.rocket}}</option>
     <option value="value1">{{option.helicopter}}</option>
   </select>
 </div>
</template>

<script>
  export default {
    name: "RentSelect",
    data() {
      return {
        option: {
          whatever: 'whatever',
          airship: 'airship',
          rocket: 'rocket',
          helicopter: 'helicopter'
        }
      }
    },
    methods: {
    }
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
    }
  }
  @media (max-width: 768px) {
    &__select {
      font-size: 24px;
    }
  }
}
</style>
