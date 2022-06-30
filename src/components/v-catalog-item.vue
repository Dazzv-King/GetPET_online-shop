<template>
  <div class="v-catalog-item">
    <div class="item_body" v-on:click="openPetsPage()">
      <img
          v-bind:src="require('../assets/image/' + pets_data.image)"
          alt="img"
        />
      <h3 class="catalog-item_name">{{ pets_data.name }}</h3>
    </div>
    <p class="catalog-item_price">{{ pets_data.cost }}р</p>
    <button class="catalog-item_button" @click="addToCart">
      <span v-if="!isAdded">Добавить в корзину</span>
      <span v-if="isAdded">Добавлено!</span>
    </button>
    <!-- сделали кнопку и сделали событые клик и связали с методом "добавитьвкорзину", снизу объявлен -->
    <!-- <button @click="deletefromCatalog">delete</button> -->
  </div>
</template>

<script>
export default {
  name: "v-catalog-item",
  props: {
    //данные полученные от родителя
    pets_data: {
      type: Object,
      default() {
        //всегда после получение данные от родителя надо вернуть дефjлтное состояние
        return {};
      },
    },
  },
  data() {
    return {
      isAdded: false,
    }
  },
  methods: {
    addToCart() {
      this.$emit("addToCart", this.pets_data); //передали pets_deta родителю и указали как он будет называться там
      // emit для передачи данных родителю
      this.isAdded = true;
    },
    openPetsPage() {
      this.$emit("openPetsPage", this.pets_data.id_pets);
    },
    // deletefromCatalog() { //удаление по id
    //   const res = fetch(
    //     "http://localhost:8081/api/pets/delete/" + this.pets_data.id_pets
    //   );
    //   console.log(this.pets_data.name, "- удалено из бд");
    // },
  },
};
</script>

<style>
.v-catalog-item {
  width: calc(1/4*100% - (1 - 1/4)*32px);
  box-shadow: 0 0 8px 0 rgb(189, 189, 189);
  padding: 30px 0;
  border-radius: 6px;
  margin: 10px;
}
.item_body {
  cursor: pointer;
}
.v-catalog-item img {
  width: 200px;
  height: 150px;
}

.catalog-item_button {
  font-size: 16px;
  padding: 4px 8px;
  border-radius: 20px;
  border: 2px solid #ec780d;
  background-color: #ffffff;
  color: #ec780d;
  cursor: pointer;
}

/* .v-pets-info {
  width: 400px;
  position: absolute;
  right: 50%;
  left: 50%;
} */
</style>