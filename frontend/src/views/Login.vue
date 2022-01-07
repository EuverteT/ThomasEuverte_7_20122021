<template>
  <div>
    <Navbar />
    <div class="login">
      <form @submit.prevent="login" class="login__form">
        <div class="login__form__input">
          <label for="email" class="login__form__input__label"
            >Email</label
          >
          <input type="email" v-model="email" id="email" name="email" />
        </div>

        <div class="login__form__input">
          <label for="password" class="login__form__input__label"
            >Mot de passe</label
          >
          <input
            type="password"
            v-model="password"
            id="password"
            name="password"
          />
        </div>

        <button class="login__form__button">Valider</button>
      </form>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";

import axios from "axios";

export default {
  name: "Login",
  components: {
    Navbar,
  },
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      axios
        .post("http://localhost:3000/api/auth/login", {
          email: this.email,
          password: this.password,
        })
        .then((res) => {
          localStorage.setItem("userId", res.data.userId);
          localStorage.setItem("firstName", res.data.firstName);
          localStorage.setItem("lastName", res.data.lastName);
          localStorage.setItem("email", res.data.email);
          localStorage.setItem("token", res.data.token);
          this.$router.push("/account");
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


.login {
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

    @include mobile {
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
