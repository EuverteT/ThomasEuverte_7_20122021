<template>
  <div>
    <Header />
    <Navbar />
    <h2>Poster votre article</h2>
    <div class="data">
      <CreatePost />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Navbar from "../components/Navbar.vue";
import CreatePost from "../components/CreatePost.vue";
import Footer from "@/components/Footer.vue";


export default {
  name: "Post",
  components: {
    Header,
    Navbar,
    CreatePost,
    Footer
  },
};
</script>

<style lang="scss">
@import "./styles/main.scss";


</style>
