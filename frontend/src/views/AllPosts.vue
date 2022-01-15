<template>
  <div>
    <Header />
    <div class="all-special">
      <LeftNavbar />
      <div class="all-right-part">
        <CreatePost />
        <div class="account">
          <div class="all">
            <section>
              <div class="all__title">
                <h2>Les derniers articles publiés</h2>
              </div>

              <div class="all__article" v-for="post in posts" :key="post.id">
                <div class="all__article--container">
                  <div class="all__article--container--precision">
                    Article numéro: {{ post.id }} Posté par:
                    {{ post.userId }} Le:
                    {{ post.createdAt }}
                  </div>

                  <button
                    v-if="isAdmin === 'true'"
                    @click="showModal = !showModal"
                    class="all__article--container--deletePost"
                  >
                    Supprimer
                  </button>
                  <div v-show="showModal" class="modal" id="modal">
                    <div class="modal-content">
                      <div class="modalLineOne">
                        Etes-vous certain de vouloir supprimer cet article?
                      </div>
                      <div class="modalLineTwo">
                        <button id="yesAnswer" @click="deletePost(post)">
                          OUI
                        </button>
                        <button id="noAnswer" @click="closeModal()">NON</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="all__article--title">{{ post.title }}</div>
                <div class="all__article--content">
                  {{ post.content }}
                </div>
                <!-- @click="showComment = !showComment"
                <button
                  
                  @click="getAllComments(post)"
                  class="show-comment"
                >
                  Voir les commentaires
                </button>          
                <div v-show="showComment" class="comment">
                  Affichage?
                </div> -->
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import LeftNavbar from "@/components/LeftNavbar.vue";
import CreatePost from "../components/CreatePost.vue";

import axios from "axios";

export default {
  name: "AllPosts",
  components: {
    Header,
    CreatePost,
    LeftNavbar,
  },
  data() {
    return {
      posts: [],
      post: "",
      isAdmin: localStorage.getItem("isAdmin"),
      showModal: false,
      id: "",
      //showComment: false,
      //comments: [],
    };
  },

  created() {
    this.getAllPosts();
    //this.getAllComments();
  },

  methods: {
    closeModal() {
      var modal = document.getElementById("modal");
      modal.style.display = "none";
    },

    // getAllComments(post) {
    //   const userId = localStorage.getItem("userId");
    //   console.log("userId", userId);
    //   console.log("post", post.id);

    //   axios
    //     .get("http://localhost:3000/api/comment/", +post.id, {
    //       headers: {
    //         Authorization: "Bearer " + localStorage.getItem("token"),
    //       },
    //       body: {
    //         userId: userId,
    //       },
    //     })
    //     .then((res) => {
    //       console.log("COMMENTS consultés");
    //       this.comments = res.data;
    //     })

    //     .catch((error) => {
    //       console.log(error);
    //     });
    // },

    getAllPosts() {
      axios
        .get("http://localhost:3000/api/post/", {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        })
        .then((res) => {
          console.log("ALLPOSTS consultés");
          this.posts = res.data;
        })

        .catch((error) => {
          console.log(error);
        });
    },

    deletePost(post) {
      //Mettre en place la vérif propriétaire
      axios
        .delete("http://localhost:3000/api/post/" + post.id, {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        })
        .then((res) => {
          console.log("Post supprimé");
          if (this.$route.path === "/allPosts") {
            window.location.reload();
          } else this.$router.push("/allPosts");
          res.status(200).json({ message: "Post supprimé" });
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style lang="scss">
@import "./styles/main.scss";


h1 {
  @include mobile {
    display: none;
  }
}


.all-special {
  display: flex;
  justify-content: space-between;
  @include tablet {
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
    margin: 1rem 5rem 1rem 0;
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

.modal {
  //display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
}

.modal-content {
  background-color: #fefefe;
  margin: 15% auto; /* 15% from the top and centered */
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
  color: black;
  font-weight: bold;
}

.modalLineOne {
  display: flex;
  justify-content: space-between;
}

.modalLineOne {
  align-self: center;
}

.modalLineTwo {
  display: flex;
  justify-content: space-around;
}

</style>
