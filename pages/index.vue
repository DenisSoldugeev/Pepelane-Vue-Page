<template>
  <div class="rent">
    <div class="rent__container container">
      <div class="rent__top d-flex">
        <RentSelect />
        <AddNewVehicle />
      </div>
      <div class="rent__cards vehicle-cards d-flex">
        <VehicleCard
          v-for="(item, index) in 24"
          v-bind:key="item.index"
        />
      </div>
    </div>
  </div>
</template>

<script>
  import RentSelect from "../components/RentViews/RentSelect";
  import AddNewVehicle from "../components/RentViews/AddNewVehicle";
  import VehicleCard from "../components/RentViews/VehicleCard";
export default {
  components: {
    RentSelect,
    AddNewVehicle,
    VehicleCard
  }
}
</script>

<style lang="scss">

</style>
