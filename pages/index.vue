<template>
  <div class="rent">
    <div class="rent__container container">
      <div class="rent__top d-flex">
        <RentSelect />
        <AddNewVehicle />
      </div>
      <div class="rent__cards vehicle-cards d-flex">
        <VehicleCard
          v-for="vehicle in vehicles"
          :key="vehicle.id"
          :vehicle="vehicle"
        />
      </div>
    </div>
  </div>
</template>

<script>
  import RentSelect from "../components/RentViews/RentSelect";
  import AddNewVehicle from "../components/RentViews/AddNewVehicle";
  import VehicleCard from "../components/RentViews/VehicleCard";
  import {mapActions,mapGetters} from 'vuex';
export default {
  components: {
    RentSelect,
    AddNewVehicle,
    VehicleCard
  },
  computed: {
    ...mapGetters({
      vehicles: 'vehicles/vehicles'
    })
  },
  methods: {
    ...mapActions({
      getVehicles: 'vehicles/getVehicles'
    })
  },
  mounted() {
     this.getVehicles()
  }
}
</script>

<style lang="scss">

</style>
