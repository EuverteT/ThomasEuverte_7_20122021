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
                    Article numéro: {{ post.id }}
                  </div>
                  <div class="all__article--container--precision">
                    Posté par: {{ post.userId }}
                  </div>
                  <div>
                    Le:
                    {{ post.createdAt }}
                  </div>

                  <button
                    v-if="isAdmin === 'true' || post.userId == userId"
                    @click="deletePost(post)"
                    class="all__article--container--deletePost"
                  >
                    Supprimer
                  </button>
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
      id: "",
      userId: localStorage.getItem("userId"),
      //showComment: false,
      //comments: [],
    };
  },

  created() {
    this.getAllPosts();
    //this.getAllComments();
  },

  methods: {
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
    margin: 1rem 5rem 1rem 0;
    padding: 1rem;

    &--container {
      @include flex-column;
      font-weight: bold;
      font-size: 1rem;
      padding: 1rem;
      color: $rouge;

      &--deletePost {
        background-color: $soft-grey;
        max-width: 100px;
        padding: 1rem;
        color: black;
        @include shadow;
      }
    }
    &--title {
      @include bold-typo
    }
    &--content {
      @include soft-typo
    }
  }
}
</style>
