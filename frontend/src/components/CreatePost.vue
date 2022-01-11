<template>
  <div class="createpost">
    <form @submit.prevent="createPost" class="createpost__items">
      <h1>Poster votre article</h1>
      <label> Titre: <input v-model="title" /> </label>
      <br /><br />
      <label> Contenu: </label>
      <br /><br />
      <textarea
        v-model="content"
        placeholder="Que souhaitez vous partager?"
        rows="5"
        cols="50"
      ></textarea>
      <button type="submit">Publier</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "CreatePost",
  components: {},
  data() {
    return {
      title: this.title,
      content: this.content,
      userId: "",
    };
  },

  methods: {
    createPost() {
      const connectedId = JSON.parse(localStorage.getItem("userId"));

      axios
        .post("http://localhost:3000/api/post", {
          body: {
            title: this.title,
            content: this.content,
            userId: connectedId,
          },
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
            "Content-Type": "application/json",
          },
        })
        .then((res) => { console.log("message créé!", res);
          if (this.$route.path === "/allPosts") {
            window.location.reload();
          } else this.$router.push("/allPosts");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./styles/main.scss";

.createpost {

  border: solid 1px;

  @include flex-right-part;
  &__items {
    @include flex-column;
  }
}
</style>
