<template>
  <div>
    <Header />
    <div class="login">
      <form @submit.prevent="login" class="login__form">
        <div class="login__form__input">
          <label for="email" class="login__form__input__label">Email</label>
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
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import axios from "axios";

export default {
  name: "Login",
  components: {
    Header,
    Footer,
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
        .post("http://localhost:3000/api/user/login", {
          email: this.email,
          password: this.password,
        })
        .then((res) => {
          localStorage.setItem("userId", res.data.userId);
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("isAdmin", res.data.isAdmin); // faire une méthode isAdminByToken ?
          this.$router.push("/allPosts");
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
  justify-content: center;
  align-items: center;
  margin: 3rem 0 15rem 0; // voir pour une position absolu du footer? également sur toutes les pages.

  @include desktop {
    margin-top: 10rem;
  }

  &__form {
    @include flex-column;
    background-color: #f2f2f2;
    align-items: center;
    width: 85%;
    border: 2px solid #3f3d56;
    border-radius: 5px;
    padding: 1.5rem 0;

    @include desktop {
      width: 50%;
      padding: 3rem 0;
      border: 3px solid #3f3d56;
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
