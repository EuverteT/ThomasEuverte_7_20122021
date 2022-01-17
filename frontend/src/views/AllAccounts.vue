<template>
  <div>
    <Header />
    <div class="all-special">
      <LeftNavbar />
      <div class="all-right-part">
        <h2>Les derniers utilisateurs inscrits</h2>

        <div v-for="user in accounts" :key="user.id">
          <div class="all__article">
            <div class="all__article--container">
              Identifiant: {{ user.id }} Prénom: {{ user.firstName }} Nom:
              {{ user.lastName }}
            </div>
            <div class="all__article--title">
              Inscrit depuis le:
              {{ user.createdAt }}
            </div>
            <div class="all__article--content">Email: {{ user.email }}</div>
            <button
              v-if="isAdmin === 'true'"
              @click="deleteAccount(user)"
              class="all__article--container--deletePost"
            >
              Supprimer le compte
            </button>
            <!-- <button
                @click="getOneAccount(user)"
                class="all__article--container--deletePost"
              >
                Voir le compte
              </button> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Header from "@/components/Header.vue";
import LeftNavbar from "@/components/LeftNavbar.vue";

export default {
  name: "AllAccounts",
  components: {
    Header,
    LeftNavbar,
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
        .then(() => {
          console.log("compte supprimé");
          window.location.reload();
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

 
</style>
