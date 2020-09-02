<template>
  <div class="modal__wrapper" >
    <div class="modal">
      <div class="modal__top d-flex">
        <span class="d-block modal__title">Add new vehicle</span>
        <button @click="offModal"><img src="~assets/image/icons/close.svg" alt=""></button>
      </div>
      <form @submit.prevent="addVehicle" class="modal__form form d-flex" >
        <label for="file-upload" class="input__file">
          <img src="~assets/image/icons/modal.png" alt="">
        </label>
        <input id="file-upload" type="file"/>
        <input type="text"  v-model="name" value="Name">
        <input type="text" v-model="description" value="Description">
        <input type="number" v-model="rent" value="Rent Price">
        <button type="submit" @submit.prevent="addVehicle" @click="offModal">Complete</button>
      </form>
    </div>
  </div>

</template>

<script>
  import {mapMutations} from 'vuex'
    export default {
      name: "AddForm",
      data () {
          return {
              name: '',
              description: '',
              rent: '',
          }
      },
      methods: {
        offModal() {
          this.$emit('offModal')
        },
        ...mapMutations({
          createVehicle: 'vehicles/createVehicle'
        }),
        addVehicle() {
          this.createVehicle({
            id: 5,
            name: this.name,
            type: 'custom',
            description: this.description,
            rent: this.rent,
            specifications_text: "Esse enim ad velit anim esse sunt est nostrud magna id. Ut ullamco est officia eu sint amet est fugiat magna irure ut minim aute duis. Laboris Lorem irure in ut ipsum esse reprehenderit mollit aliquip et. Nulla irure exercitation fugiat mollit. Enim consectetur ea exercitation cupidatat minim non sunt dolore in qui deserunt laboris. Officia cillum sunt enim nostrud ex laboris sit reprehenderit reprehenderit ex. Excepteur qui nostrud officia deserunt tempor.\n\nEiusmod laborum minim amet eiusmod officia cillum aliquip magna sit do veniam labore duis aliquip. Consectetur dolore consequat veniam ea laborum qui exercitation in culpa non ad ullamco elit. Irure in proident ipsum consequat consectetur. Exercitation dolore esse velit in non pariatur eiusmod.",
            team_text: "Cupidatat id do tempor in voluptate cupidatat exercitation culpa duis deserunt irure laboris aliqua sit. Consequat reprehenderit ex nisi tempor esse consequat voluptate veniam ipsum sunt consequat ad reprehenderit. Exercitation incididunt ipsum cupidatat deserunt tempor voluptate eu sunt eu elit est ipsum non. Magna esse fugiat ullamco est elit mollit sit nisi et aliquip. Id officia ut et occaecat tempor elit quis et. Qui fugiat pariatur duis aliquip sit nisi in reprehenderit mollit aliquip dolore pariatur deserunt. Id sint velit veniam quis.",
            term_text: "Consequat in veniam ea quis id dolore eiusmod. Exercitation eiusmod ullamco dolor tempor exercitation deserunt occaecat ea sit excepteur qui commodo. Labore ea eiusmod in amet esse voluptate officia Lorem.\n\nUllamco Lorem eiusmod sunt et cillum proident cillum adipisicing dolore elit nostrud commodo. Ut adipisicing dolore Lorem deserunt velit dolore tempor et fugiat. Deserunt commodo consequat dolore aliquip amet quis esse sint minim est ut magna.\n\nExercitation anim deserunt reprehenderit ut excepteur in cupidatat proident. Sunt ea proident nulla commodo in do eiusmod cillum non. Consectetur excepteur quis laboris mollit fugiat in dolor quis commodo ullamco. Consequat ut eu culpa irure ut. Ex tempor non incididunt veniam enim magna minim velit. Irure enim exercitation reprehenderit culpa incididunt.",
            preview: "https://loremflickr.com/160/160/rocket?random=5f2bb90ad2195fc320b9d96b",
            image: "https://loremflickr.com/900/900/rocket"
          })
        }
      }
    }
</script>

<style scoped lang="scss">

.modal {
  position: fixed;
  right: 0;
  transition: all 0.5s;
  top: 0;
  height: 100%;
  background: #FCFCFC;
  border-bottom-left-radius: 48px;
  border-top-left-radius: 48px;
  padding: 64px 72px;
  z-index: 2;
  min-height: 680px;
  &__top {
    & button {
      border: none;
      outline: none;
      background: #F3F4F7;
      border-radius: 16px;
      padding: 17.04px;
      max-height: 48px;
      cursor: pointer;
    }
  }
  &__title {
    font-size: 40px;
    line-height: 120%;
    margin:  0 0 40px 0;
    flex-basis: 80%;
  }
  &__wrapper:before{
    content: '';
    background: #000;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0.7;
    z-index: 1;
  }
  @media (max-width: 600px) {
    border-bottom-right-radius: 48px;
    border-top-right-radius: 48px;
    position: absolute;
    width: 100%;
    top: unset;
    padding: 28px 16px;
    &__title {
      font-size: 24px;
    }
  }
}
.form {
  flex-direction: column;
  & input {
    font-weight: 300;
    margin:  0 0 24px 0;
    background: #F3F4F7;
    border-radius: 12px;
    border: none;
    outline: none;
    padding: 21px 0 21px 24px;
    &[type="file"] {
      display: none;
    }
    &:last-child {
      margin:  0 0 40px 0;
    }
  }
  & button {
    font-size: 16px;
    line-height: 14px;
    color: #FCFCFC;
    background: #4959FF;
    border-radius: 12px;
    padding: 21px 0;
    cursor: pointer;
    border: none;
    outline: none;
  }
  @media (max-width: 600px) {
    & input {
      padding: 20px 0 20px 24px;
      margin:  0 0 16px 0;
      &:last-child {
        margin:  0 0 24px 0;
      }
    }
  }
}
.input__file {
  background: #F3F4F7;
  border-radius: 16px;
  padding: 150px 204px;
  margin-bottom: 24px;
  & img {
    padding: 15px;
    border-radius: 16px;
    background: #FCFCFC;

  }
  @media (max-width: 600px) {
    padding: 122px 162px;
    & img {

    }
  }
}
</style>
