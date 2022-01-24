<template>
  <div>
    <Header />
    <Navbar />
    <div class="notOnMobile">
      <div class="notOnMobile__title"><h2>Poster votre article</h2></div>
      <div class="notOnMobile__createPost"><CreatePost /></div>
    </div>
    <h2>Les derniers articles publiés</h2>

    <section class="data">
      <div class="data__container" v-for="post in posts" :key="post.id">
        <div class="posts--info">
          <div class="posts--info--precision">
            Article numéro:
            <span class="precision-typo">{{ post.id }} </span>
          </div>
          <div class="posts--info--precision">
            Posté par:
            <span class="precision-typo">{{ post.userId }}</span>

            Le:
            <span class="precision-typo">{{ post.createdAt }} </span>
          </div>
        </div>
        <div class="posts--title">{{ post.title }}</div>
        <div class="posts--content">{{ post.content }}</div>
        <button
          v-if="isAdmin === 'true' || post.userId == userId"
          @click="deletePost(post)"
          class="data__button"
        >
          Supprimer
        </button>
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
</template>

<script>
import Header from "@/components/Header.vue";
import Navbar from "@/components/Navbar.vue";
import CreatePost from "../components/CreatePost.vue";

import axios from "axios";

export default {
  name: "AllPosts",
  components: {
    Header,
    CreatePost,
    Navbar,
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

.notOnMobile {
  display: none;

  @include desktop {
    display: flex;
    flex-direction: column;

    &__createPost {
      display: flex;
      justify-content: center;
    }
  }
}

.posts {
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

.precision-typo {
  @include bold-typo;
  padding: 0;
  color: black;
}
</style>
