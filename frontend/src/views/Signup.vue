<template>
  <div>
    <Header />
    <div class="signup">
      <form @submit.prevent="signup" class="signup__form">
        <div class="signup__form__input">
          <label for="firstName" class="signup__form__input__label"
            >Prénom</label
          >
          <input
            type="text"
            v-model="firstName"
            id="firstName"
            name="firstName"
          />
        </div>

        <div class="signup__form__input">
          <label for="lastName" class="signup__form__input__label">Nom</label>
          <input type="text" v-model="lastName" id="lastName" name="lastName" />
        </div>

        <div class="signup__form__input">
          <label for="email" class="signup__form__input__label">Email</label>
          <input type="email" v-model="email" id="email" name="email" />
        </div>

        <div class="signup__form__input">
          <label for="password" class="signup__form__input__label"
            >Mot de passe</label
          >
          <input
            type="password"
            v-model="password"
            id="password"
            name="password"
          />
        </div>

        <button class="signup__form__button">Valider</button>
      </form>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";

import axios from "axios";

export default {
  name: "Signup",
  components: {
    Header,
  },
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    };
  },
  methods: {
    signup() {
      axios
        .post("http://localhost:3000/api/user/signup", {
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          password: this.password,
        })
        .then(() => {
          this.$router.push("/login");
        })
        .catch((error) => {
          console.log(error);

          
        });
    },
  },
};
</script>

<style scoped lang="scss">
@import "./styles/main.scss";

.signup {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

  &__form {
    @include flex-column;
    background-color: #f2f2f2;
    align-items: center;
    width: 50%;
    border: 3px solid #3f3d56;
    border-radius: 5px;
    padding: 3rem 0;

    @include tablet {
      width: 85%;
    }

    &__input {
      display: flex;
      flex-direction: column;
      margin-bottom: 2rem;
      width: 70%;
      &__label {
        text-align: start;
        font-weight: bold;
        margin-bottom: 0.5rem;
      }
    }
    &__button {
      border: 1px solid $hard-grey;
      border-radius: 5px;
      font-weight: bold;
      padding: 0.9rem;
      &:hover,
      &:focus {
        border: 1px solid $hard-grey;
        background-color: $rouge;
        cursor: pointer;
      }
    }
  }
}
</style>
