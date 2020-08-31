<template>
<div class="rent__add add d-flex">
    <span>Add new</span>
    <button><img src="~assets/image/icons/add-icon.svg" alt="add-icon"></button>
</div>
</template>

<script>
    export default {
        name: "AddNewVehicle"
    }
</script>

<style scoped lang="scss">
.add {
 & span {
    font-size: 20px;
    line-height: 140%;
    color: #4959FF;
  }
 & button {
   border: none;
    margin: 0 0 0 20px;
    padding: 17px;
    background: #4959FF;
    border-radius: 16px;
    outline: none;
    cursor: pointer;
  }
  @media (max-width: 768px) {
   & span {
     font-size: 16px;
   }
   & button {
     padding: 10px;
     border-radius: 8px;
     margin: 0 0 0 12px;
   }
  }
}
</style>
