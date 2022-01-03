<template>
  <div>
    <Navbar />
    <div class="account">
      <div class="welcome">
        <div class="welcome__Message">
          <h2>Bienvenue {{ firstName }} {{ lastName }},</h2>
        </div>
        <div class="welcome__Message">
          <h3>
            Vous êtes le {{ userId }}ième utilisateur de notre nouveau réseau
            social! Merci à vous et bonne navigation.
          </h3>
        </div>
      </div>
      <div class="options">
        <div class="modifyAccount">Modifier mon compte</div>
        <div class="deleteAccount">Supprimer mon compte</div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

import axios from "axios";

export default {
  name: "Account",
  components: {
    Navbar,
  },
  data() {
    return {
      userId: localStorage.getItem("userId"),
      firstName: localStorage.getItem("firstName"),
      lastName: localStorage.getItem("lastName"),
      email: localStorage.getItem("email"),
    };
  },

  created() {
    this.getAccount();
  },
  methods: {
    getAccount() {
      const id = localStorage.getItem("userId");

      axios
        .get("http://localhost:3000/api/auth/" + id, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        })
        .then((user) => (this.user = user.data))
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped lang="scss">
@import "./styles/variables";
@import "./styles/mixins";

.welcome {
  @include flex-column;
  width: 50%;
  &__Message {
    width: 50%;
    text-align: start;
    margin: 0.5rem 0;
    background-color: #f2f2f2;
  }
}

.options {
  width: 50%;
  background-color: #f2f2f2;
}

.account {
  display: flex;
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
