<template>
  <div>
    <Header />

    <div class="account">
      <LeftNavbar />
      <div class="welcome">
        <section v-if="isAdmin === 'true'">
          <div class="welcome__Message">
            <h1>Bienvenue Administrateur,</h1>
          </div>
          <div class="welcome__Message">
            <p>Sélectionner une action sur la barre de gauche.</p>
          </div>
        </section>
        <section>
            <h1>Informations du compte</h1>
          <div v-if="isAdmin === 'false'" class="welcome__Message">
            <h2 >Bienvenue <span class="userInfo"> {{firstName }} </span> <span class="userInfo"> {{lastName }} </span>,</h2>
          </div>
          
          <div class="welcome__Message">
            <p>Prénom: <span class="userInfo"> {{firstName }} </span></p>
          </div>
          <div class="welcome__Message">
            <p>Nom: <span class="userInfo"> {{lastName }} </span></p>
          </div>
          <div class="welcome__Message">
            <p>Email: <span class="userInfo"> {{email }} </span></p>
          </div>
          <div class="welcome__Message">
            <p>Identifiant utilisateur: <span class="userInfo"> {{ userId }} </span></p>
          </div>
          <div v-if="isAdmin === 'false'" class="welcome__Message">
            <p>Vous n'ếtes pas administrateur du site.</p>
            <p>Vous pouvez le contacter par mail à l'adresse <span class="userInfo">admin@admin.fr</span></p>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import LeftNavbar from "../components/LeftNavbar.vue";
import axios from "axios";

export default {
  name: "Account",
  components: {
    Header,
    LeftNavbar,
  },
  data() {
    return {
      userId: localStorage.getItem("userId"), // si possible supprimer le stockage dans le local storage
      isAdmin: localStorage.getItem("isAdmin"),
      firstName: "",
      lastName: "",
      email: "",
    };
  },

  created() {
    this.getAccount();
  },
  methods: {
    getAccount() {
      const id = localStorage.getItem("userId");
      axios
        .get("http://localhost:3000/api/user/" + id, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        })
        .then((response) => {
          
          this.email = response.data.email;
          this.firstName = response.data.firstName;
          this.lastName = response.data.lastName;
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

.account {
  @include flex-global;
}

.welcome {
  @include flex-right-part;

  &__Message {
    background-color: #f2f2f2;
    border: 1px solid;
    margin: 1rem 0;
  }
}

.userInfo {
  font-weight: bold;
}

</style>
