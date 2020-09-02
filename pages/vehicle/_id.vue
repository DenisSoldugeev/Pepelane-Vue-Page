<template>
    <div class="vehicle__lot lot">
      <div class="container lot__container d-flex">
        <img :src="vehicleItem.image" class="lot__img" alt="vehicle__lot-img">
        <div class="lot__info">
          <h3 class="lot__name">{{vehicleItem.name}}</h3>
          <tabs>
            <tab name="Specifications" selected="true">
              <p class="tab__text">{{vehicleItem.specifications_text}}</p>
              <div class="tab__features features">
                <span class="features__title">Features:</span>
                <div class="features__col d-flex">
                  <img src="~assets/image/vehicle/icon2.png" class="img_champion" alt="">
                  <div class="features__col--description">
                    <span>A challenge for a true champion</span>
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                  </div>
                </div>
                <div class="features__col d-flex">
                  <img src="~assets/image/vehicle/icon1.png" class="img_pilot" alt="">
                  <div class="features__col--description">
                    <span>Pilot's sweaty hands</span>
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                  </div>
                </div>
              </div>
            </tab>
            <tab name="Team">
              <p class="tab__text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
              <div class="tab__specialists specialists">
                <span class="specialists__title d-block">Qualified specialists</span>
                <div class="specialists-col d-flex">
                  <div class="specialist__col">
                    <img src="~assets/image/vehicle/spec1.jpg" alt="spec">
                    <span class="specialist__name d-block">Marvin McKinney</span>
                    <span class="specialist__rang d-block">Pilot assistant</span>
                  </div>
                  <div class="specialist__col">
                    <img src="~assets/image/vehicle/spec2.jpg" alt="spec">
                    <span class="specialist__name d-block">Savannah Nguyen</span>
                    <span class="specialist__rang d-block">Mechanic</span>
                  </div>
                  <div class="specialist__col">
                    <img src="~assets/image/vehicle/spec3.jpg" alt="spec">
                    <span class="specialist__name d-block">Courtney Henry</span>
                    <span class="specialist__rang d-block">Stewardess</span>
                  </div>
                </div>
              </div>
              <p class="tab__text">{{vehicleItem.specifications_text}}</p>
             </tab>
            <tab name="Rent terms">
              <span class="tab__text d-block">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</span>
              <p class="tab__text">{{vehicleItem.term_text}}</p>
              <div class="conditions">
                <span class="d-block conditions__title">Additional conditions:</span>
                <ul>
                  <li>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</li>
                  <li>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</li>
                  <li>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</li>
                </ul>
              </div>
            </tab>
          </tabs>
          <RentForm
            :rent="vehicleItem.rent"
          />
        </div>
      </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
import Tabs from "../../components/Tabs";
import Tab from "../../components/Tab";
import RentForm from "../../components/RentForm";
export default {
  validate({params}) {
    return /^[a-zA-Z0-9]+$/.test(params.id)
  },
  components: {
    Tabs,
    Tab,
    RentForm
  },
  computed: {
    ...mapGetters({
      vehicle: 'vehicles/vehicle'
    }),
    vehicleItem() {
      return this.vehicle(this.$route.params.id)
    }
  }
}

</script>

<style lang="scss">
  .lot {
    &__container {
      align-items: center;
    }
    &__img {
      border-radius: 24px;
      flex-basis: 49%;
      max-height: 700px;
    }
    &__info {
      flex-basis: 49%;
      margin: 0 0 0 65px;
    }
    &__name {
      font-size: 40px;
      line-height: 120%;
      margin:  0 0 32px 0;
    }
    &__tabs {
      & ul {
        display: flex;
        & li {
          margin-right: 32px;
          &:last-child {
            margin-right: 0;
          }
          & a {
            font-size: 16px;
            line-height: 14px;
            color: #677B8F;
          }
          &.is-active-tabs a {
            color: #4959FF;
          }
        }
      }
    }
  }
  .tab {
    &__text {
      font-weight: 300;
      font-size: 14px;
      line-height: 146%;
      color: #677B8F;
      margin: 32px 0;
    }
  }
  .features {
    &__title {
      font-size: 24px;
      line-height: 21px;
      margin: 0 0 32px 0;
      display: block;
    }
    &__col {
      align-items: center;
      margin: 0 0 16px 0;
      &:last-child {
        margin: 0 0 0 0;
      }
      & .img_champion {
        padding: 36px 25.33px;
        background: #F3F4F7;
        border-radius: 16px;
      }
      & .img_pilot{
        padding: 34.67px 29.42px;
        background: #F3F4F7;
        border-radius: 16px;
      }
      &--description {
        margin: 0 0 0 24px;
        & span {
         font-size: 16px;
         line-height: 152%;
          margin-bottom: 8px;
          display: block;
       }
       & p {
         font-size: 14px;
         line-height: 146%;
         color: #677B8F
       }
      }
    }
  }
  .specialists {
    &__title {
      font-size: 24px;
      line-height: 21px;
      margin: 0 0 32px 0;
    }
  }
  .specialist {
    &__col {
      margin: 0 25px 0 0;
      &:last-child {
        margin: 0 0 0 0;
      }
      & img {
        border-radius: 16px;
      }
    }
    &__name {
      margin: 16px 0 8px 0;
    }
    &__rang {
      font-weight: 300;
      font-size: 12px;
      line-height: 148%;
      color: #677B8F;

    }
  }
  .conditions {
    &__title {
      font-size: 16px;
      line-height: 152%;
      margin: 0 0 24px 0;
    }
    & ul {
      & li {
        font-weight: 300;
        font-size: 14px;
        line-height: 146%;
        color: #677B8F;
        margin:  0 0 16px 0;
        padding: 0 0 0 20px;
        position: relative;
        &:last-child {
          margin: 0 0 0 0;
        }
        &:after {
          content: '';
          position: absolute;
          left: 0;
          top: 8px;
          width: 4px;
          height: 4px;
          background: #F84AB3;
          border-radius: 50%;
        }
      }
    }
  }
  @media (max-width: 1200px ) {
    .lot {
      &__container {
        flex-direction: column;
      }
      &__info {
        margin: 22px 0 0 0;
      }
      &__name {
        font-size: 24px;
      }
    }
  }
</style>
