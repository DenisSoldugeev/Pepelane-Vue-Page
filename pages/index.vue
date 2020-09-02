<template>
  <div class="rent">
    <AddForm
      v-if="showModal"
      @offModal="offModal"
    />
    <div class="rent__container container">
      <div class="rent__top d-flex">
        <RentSelect />
        <AddNewVehicle
          @onModal="onModal"
        />
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
  import AddForm from "../components/AddForm";
  import {mapActions,mapGetters} from 'vuex';
export default {
  components: {
    RentSelect,
    AddNewVehicle,
    VehicleCard,
    AddForm
  },
  data: () => {
    return {
      showModal: false,
      selectVehicle: []
    }
  },
  computed: {
    ...mapGetters({
      vehicles: 'vehicles/vehicles'
    })
  },
  methods: {
    ...mapActions({
      getVehicles: 'vehicles/getVehicles'
    }),
    onModal() {
      this.showModal = !this.showModal;
    },
    offModal() {
      this.showModal = !this.showModal;
    },
  },
  mounted() {
     this.getVehicles()
  }
}
</script>

<style  lang="scss">

</style>
