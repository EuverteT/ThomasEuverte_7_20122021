<template>
  <div id="myModal" class="modal">
    <div class="modal-content">
      <div class="modalLineOne">
        <div>Etes-vous certain de vouloir vous déconnecter?</div>
        <span @click="closeModal" class="close">&times;</span>
      </div>
      <div class="modalLineTwo">
        <button @click="disconnect">OUI</button>
        <button @click="closeModal">NON</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LogoutModale",

  methods: {
    disconnect() {
      if (this.$route.path === "/") {
        localStorage.clear();
        window.location.reload();
      } else localStorage.clear();
      this.$router.push("/");
    },

    closeModal() {
      var modal = document.getElementById("myModal");
      modal.style.display = "none";
    },
  },
};
</script>

<style scoped lang="scss">
@import "./styles/main.scss";


.modal {
  
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
}


.modal-content {
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
  color: black;
  font-weight: bold;
}


.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}

.modalLineOne {
  display: flex;
  justify-content: space-between;
}

.modalLineOne div {
  align-self: center;
}

.modalLineTwo {
  display: flex;
  justify-content: space-around;
}
</style>
