<template>
  <div>
    <Header />
    <Navbar />
    <h2>Informations du compte</h2>
    <div class="data">
      <div class="data__container">
        <section>
          <div class="account__Message">
            <p>
              Prénom: <span class="precision-typo">{{ firstName }}</span>
            </p>
          </div>
          <div class="account__Message">
            <p>
              Nom: <span class="precision-typo"> {{ lastName }} </span>
            </p>
          </div>
          <div class="account__Message">
            <p>
              Email: <span class="precision-typo"> {{ email }} </span>
            </p>
          </div>
          <div class="account__Message">
            <p>
              Identifiant utilisateur:
              <span class="precision-typo"> {{ id }} </span>
            </p>
          </div>
          <div v-if="isAdmin === 'false'" class="account__Message">
            <p>Vous n'ếtes pas administrateur du site.</p>
            <p>
              Vous pouvez le contacter par mail à l'adresse
              <span class="precision-typo">admin@admin.fr</span>
            </p>
          </div>
          <button @click="deleteMyAccount()" class="data__button">
            Supprimer mon compte
          </button>
        </section>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Navbar from "../components/Navbar.vue";
import Footer from "@/components/Footer.vue";

import axios from "axios";

export default {
  name: "Account",
  components: {
    Header,
    Navbar,
    Footer,
  },
  data() {
    return {
      isAdmin: localStorage.getItem("isAdmin"),
      firstName: "",
      lastName: "",
      email: "",
      id: localStorage.getItem("userId"),
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

    deleteMyAccount() {
      const userId = localStorage.getItem("userId");

      axios
        .delete("http://localhost:3000/api/user/" + userId, {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        })
        .then((res) => {
          console.log("compte supprimé");
          localStorage.clear();
          alert("Compte supprimé");
          this.$router.push("/");

          return res.status(200).json({ message: "Compte supprimé" });
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
  background-color: #f2f2f2;
  border: 3px solid;
  border-radius: 10px;
  margin: 1rem 0;
  padding: 1rem;
  width: 80%;

  @include tablet {
    width: 50%;
  }

  &__Message {
    background-color: #f2f2f2;
    border: 1px solid;
    margin: 1rem 0;
  }

  
}
</style>
