<template>
  <div>
    <Header />
    <Navbar />
    <h2>Les derniers utilisateurs inscrits</h2>
    <div class="data">
      <div class="data__container" v-for="user in accounts" :key="user.id">
        <div class="accounts--info--precision">
          Prénom:
          <span class="precision-typo">{{ user.firstName }}</span>
        </div>
        <div class="accounts--info--precision">
          Nom:
          <span class="precision-typo">{{ user.lastName }}</span>
        </div>
        <div class="accounts--info--precision">
          Identifiant:
          <span class="precision-typo">{{ user.id }} </span>
        </div>
        <div class="accounts--title">
          Inscrit depuis le:
          <span class="precision-typo">{{ user.createdAt }} </span>
        </div>
        <div class="accounts--content">
          Email:

          <span class="precision-typo">{{ user.email }} </span>
        </div>
        <button
          v-if="isAdmin === 'true'"
          @click="deleteAccount(user)"
          class="data__button"
        >
          Supprimer le compte
        </button>
        <!-- <button
                @click="getOneAccount(user)"
                class="accounts--info--deletePost"
              >
                Voir le compte
              </button> -->
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Header from "@/components/Header.vue";
import Navbar from "@/components/Navbar.vue";

export default {
  name: "AllAccounts",
  components: {
    Header,
    Navbar,
  },
  data() {
    return {
      accounts: [],
      user: "",
      isAdmin: localStorage.getItem("isAdmin"),
    };
  },

  created() {
    this.getAllAccounts();
  },

  methods: {
    getAllAccounts() {
      axios
        .get("http://localhost:3000/api/user/", {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        })
        .then((res) => {
          console.log("ALLACCOUNTS consultés");

          this.accounts = res.data;
        })
        .catch((error) => console.log(error));
    },

    // getOneAccount(user) {
    //   axios
    //     .get("http://localhost:3000/api/user/" + user.id, {
    //       headers: {
    //         Authorization: "Bearer " + localStorage.getItem("token"),
    //       },
    //     })
    //     .then((response) => {
    //       this.email = response.data.email;
    //       this.firstName = response.data.firstName;
    //       this.lastName = response.data.lastName;
    //       this.userId = response.data.id;
    //       this.$router.push('/user/' + user.id);
    //     })

    //     .catch((error) => {
    //       console.log(error);
    //     });
    // },

    deleteAccount(user) {
      axios
        .delete("http://localhost:3000/api/user/" + user.id, {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        })
        .then((res) => {
          console.log("Compte supprimé");
          if (this.$route.path === "/allAccounts") {
            window.location.reload();
          } else this.$router.push("/allAccounts");
          res.status(200).json({ message: "Post supprimé" });
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

.accounts {
  
  &--info {
    @include flex-column;
    font-weight: bold;
    font-size: 1rem;
    padding: 1rem;
    color: $rouge;

  }
  &--title {
    @include bold-typo;
  }
  &--content {
    @include soft-typo;
  }
}
</style>
