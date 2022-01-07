<template>
  <div>
    <Navbar />
    <form @submit.prevent="createPost" class="post">
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
import Navbar from "../components/Navbar.vue";
import axios from "axios";

export default {
  name: "Post",
  components: {
    Navbar,
  },
  data() {
    return {
      title: this.title,
      content: this.content,
      userId: ""
    }
     
  },

  methods: {
    createPost() {

      axios
        .post("http://localhost:3000/api/post", {
          body: {
            title: this.title,
            content: this.content,
            userId: ""
          },
          headers: {
            'Authorization': 'Bearer ' + localStorage.getItem("token"),
            'Content-Type': 'application/json'
          },
        })
        .then((res) => {
          console.log(res);
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

.post {
  @include flex-column;
}
</style>
