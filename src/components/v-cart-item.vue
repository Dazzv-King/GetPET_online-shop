<template>
  <div class="v-cart-item">
    <img
      v-bind:src="require('../assets/image/' + cart_item_data.image)"
      alt="img"
    />
    <div class="cart-item-data_info">
      <h3>{{ cart_item_data.name }}</h3>
      <p>{{ cart_item_data.cost }}р</p>
    </div>
    <div class="cart-item-data_quantity">
      <p>Осталось:</p>
      {{ cart_item_data.value }}
    </div>
    <div class="cart-item-data_quantity">
      <p>Кол-во:</p>
      <span @click="decrementItem">-</span>
      {{ cart_item_data.quantity }}
      <span @click="incrementItem">+</span>
    </div>
    <button class="deleteFromCart" @click="deleteFromCart">Удалить</button>
  </div>
  <!--в кнопке сделали событие клик и связали с методом-->
</template>

<script>
export default {
  name: "vCartItem",
  props: {
    cart_item_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    deleteFromCart() {
      this.$emit("deleteFromCart"); //с эмит отправили метод к родителю cart.vue и там работали с ним
    },
    decrementItem() {
      this.$emit("decrement");
    },
    incrementItem() {
      this.$emit("increment");
    },
  },
};
</script>

<style>
.v-cart-item {
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  align-items: center;
  padding: 10px 30px;
  border: 2px solid #fff;
  box-shadow: 0px 0px 4px 0px rgb(207, 205, 205);
}
.v-cart-item img {
  height: 100px;
  width: 150px;
}
.cart-item-data_quantity {
  width: 80px;
}
.cart-item-data_quantity span {
  cursor: pointer;
  border: 2px solid #000;
  padding: 0px 7px;
  border-radius: 5px;
  /* width: 100px;
  height: 100px; */
}
.cart-item-data_info {
  width: 200px;
}
.deleteFromCart {
  font-size: 16px;
  padding: 8px 12px;
  border-radius: 20px;
  border: 2px solid #ec780d;
  background-color: #ffffff;
  color: #ec780d;
  cursor: pointer;
}
</style>