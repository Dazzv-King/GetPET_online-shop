<template>
  <div class="v-cart">
    <p v-if="!allCart.length" class="emptyCart">В коробке пока пусто...</p>
    <v-cart-item
      v-for="(item, index) in allCart"
      :key="item.id_pets"
      :cart_item_data="item"
      @deleteFromCart="deleteFromCart(index)"
      @decrement="decrement(index)"
      @increment="increment(index)"
    />
    <div v-if="allCart.length" class="Sum">Итого: {{ priceSum }}р</div>
    <div>
      <router-link :to="{ name: 'Catalog' }">
        <button class="v-cart_link_to_catalog">Вернуться в магазин</button>
      </router-link>
    </div>
    <div v-if="allCart.length" class="v-cart_link_to_pay_list">
      <router-link :to="{ name: 'Pay' }">
        <button class="btn_pay">Оформить заказ</button>
      </router-link>
    </div>
  </div>
  <!--index извлекаеться для того чтобы по нему удалить и добавить-->
  <!--связали метод deleteFromCart с новым методом с таким же названием и передали ему индекс объекта, дальше снизу-->
</template>

<script>
import vCartItem from "./v-cart-item.vue";
import { mapActions } from "vuex";
import { mapGetters } from "vuex";

export default {
  name: "v-cart",
  components: {
    vCartItem,
  },
  computed: {
    ...mapGetters(["allCart"]),
    priceSum() {
      let result = [];
      for (let item of this.allCart) {
        result.push(item.cost * item.quantity);
      }
      result = result.reduce(function (sum, el) {
        return sum + el;
      });
      return result;
    },
  },

  methods: {
    ...mapActions([
      "delete_From_Cart",
      "decrement_Cart_Item",
      "increment_Cart_Item",
    ]), //связали с actions дальше все там
    deleteFromCart(index) {
      this.delete_From_Cart(index);
    },
    decrement(index) {
      this.decrement_Cart_Item(index);
    },
    increment(index) {
      this.increment_Cart_Item(index);
    },
  },
};
</script>

<style>
.v-cart {
  padding-top: 100px;
  width: 1200px;
  margin: 0 auto;
}
.emptyCart {
  margin: 200px 0;
  font-size: 24px;
  line-height: 10px;
}
.Sum {
  text-align: end;
  margin: 20px 0;
  font-size: 20px;
}
.v-cart_link_to_catalog {
  display: flex;
  flex-direction: flex-start;
  font-size: 20px;
  padding: 8px;
  border-radius: 20px;
  margin-top: 30px;
  border: 2px solid #ec780d;
  background-color: #ffffff;
  color: #ec780d;
  cursor: pointer;
}
.btn_pay {
  font-size: 20px;
  padding: 8px 15px;
  margin: 100px auto;
  border: 2px solid lightgreen;
  border-radius: 20px;
  background-color: lightgreen;
  color: #ffffff;
  cursor: pointer;
}
</style>