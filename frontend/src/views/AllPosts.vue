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
                <h2>Les derniers posts</h2>
              </div>

              <div
                class="all__article"
                v-for="post in posts"
                :key="post.id"
              >
                <div class="all__article--container">
                  <div class="all__article--container--precision">
                    Article numéro: {{ post.id }} Posté par:
                    {{ post.userId }} Le:
                    {{ post.createdAt }}
                  </div>
                  <button
                    v-if="isAdmin === 'true'"
                    @click="deletePost(post)"
                    class="all__article--container--deletePost"
                  >
                    Supprimer
                  </button>
                </div>
                <div class="all__article--title">{{ post.title }}</div>
                <div class="all__article--content">{{ post.content }}</div>
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
    };
  },

  created() {
    this.getAllPosts();
  },

  methods: {
    getAllPosts() {
      axios
        .get("http://localhost:3000/api/post/", {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        })
        .then((res) => (this.posts = res.data))
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
}

.all-right-part {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.all {
  &__article {
    background-color: #f2f2f2;
    border: 1px solid;
    margin: 1rem 0;
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
