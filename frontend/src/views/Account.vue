<template>
  <div>
    <Navbar />

    <div class="account">
      <div class="options">
        <router-link class="navbar__container--link" to="/logoutModale"
          >Modifier mon compte</router-link
        >
        <router-link class="navbar__container--link" to="/logoutModale"
          >Supprimer mon compte</router-link
        >
        <router-link class="navbar__container--link" to="/post"
          >Poster un article</router-link
        >
      </div>
      <div class="welcome">
        <section v-if= "isAdmin === 'true'" >
          <div class="welcome__Message">
            <h1>Bienvenue Administrateur,</h1>
          </div>
          <div class="welcome__Message">
            <h3>Supprimer un compte</h3>
          </div>
          <div class="welcome__Message">
            <h3>Supprimer un post</h3>
          </div>
          <div class="welcome__Message">
            <h3>Supprimer tous les posts d'un compte</h3>
          </div>
        </section>
        <section v-else>
          <div class="welcome__Message">
            <h2>Bienvenue {{ firstName }} {{ lastName }},</h2>
          </div>
          <div class="welcome__Message">
            <h3>Votre profil</h3>
          </div>
          <div class="welcome__Message">
            <h3>Prénom: {{ firstName }}</h3>
          </div>
          <div class="welcome__Message">
            <h3>Nom: {{ lastName }}</h3>
          </div>
          <div class="welcome__Message">
            <h3>Email: {{ email }}</h3>
          </div>
          <div class="welcome__Message">
            <h3>Numéro d'inscription: {{ userId }}</h3>
          </div>
          <div class="welcome__Message">
            <h3>Vous n'ếtes pas administrateur du site.</h3>
          </div>
        </section>
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
      isAdmin: localStorage.getItem("isAdmin")
            
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
        .then((user) => console.log(user))
        .catch((error) => { console.log(error); });
    },
  },
};
</script>

<style scoped lang="scss">
@import "./styles/main.scss";

.account {
  display: flex;
  justify-content: space-between;
}

.welcome {
  @include flex-column;
  width: 75%;

  &__Message {
    background-color: #f2f2f2;
    border: 1px solid;
    margin: 1rem 0;
  }
}

.options {
  background-color: #f2f2f2;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
</style>
