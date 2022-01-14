<template>
  <div>
    <Header />
    <div class="all-special">
      <LeftNavbar />
      <div class="all-right-part">
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
              Supprimer
            </button>
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

    deleteAccount(user) {
      console.log("user.id venu du front", user.id);
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

.all-special {
  display: flex;
  justify-content: space-between;
  @include mobile {
  flex-direction: column;
  }
}

.all-right-part {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-self: center;
  text-align: center;
  width: 80%;
}

.all {
  &__article {
    background-color: #f2f2f2;
    border: 3px solid;
    border-radius: 10px;
    margin:1rem 5rem 1rem 0;
    padding: 1rem;


    &--container {
      @include flex-global;
      background-color: $hard-grey;
      font-weight: bold;
      font-size: 1rem;
      padding: 1rem;
      color: $rouge;

      &--deletePost {
        background-color: $soft-grey;
        padding: 1rem;
        color: black;
        text-align: right;
      }
    }
    &--title {
      background-color: $mid-grey;
      font-weight: bold;
      font-size: 1rem;
      padding: 1rem;
      color: $vert;
    }
    &--content {
      background-color: $soft-grey;
      font-weight: bold;
      padding: 1rem;
      font-size: 1rem;
    }
  }
}





</style>
