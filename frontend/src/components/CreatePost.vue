<template>
  <div class="data__container">
    <form @submit.prevent="createPost" class="createpost__items">
      <label> Titre: <input v-model="title" /> </label>
      <br /><br />
      <label> Contenu: </label>
      <br /><br />
      <textarea
        v-model="content"
        placeholder="Que souhaitez vous partager?"
        rows="5"
        cols="5"
      ></textarea>

      <input type="file" ref="file"  @change="uploadPhoto" />
      <div v-if="imageURL.length > 0">
        <img :src="imageURL" height="300px" width="300px" />
      </div>
      <button class="createpost data__button" type="submit">Publier</button>
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
      image: "",
      imageURL: "",
    };
  },

  methods: {
    uploadPhoto(event) {
      this.image = event.target.files[0];
      console.log("image", this.image);
      this.imageURL = URL.createObjectURL(this.image);
      console.log("imageURL", this.imageURL);
    },

    createPost() {
      const formData = new FormData();

      formData.append("title", this.title);
      formData.append("content", this.content);
      formData.append("attachment", this.image);

    
      axios
        .post("http://localhost:3000/api/post", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        })
        .then((res) => {
          console.log("POST effectué");
          if (this.$route.path === "/allPosts") {
            window.location.reload();
          } else this.$router.push("/allPosts");
          res.status(200).json({ message: "Post effectué" });
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
  &__items {
    @include flex-column;
  }
}
</style>
