<template>
  <div class="v-product-page">
    <router-link to="Catalog">
      <button class="btn_backtocatalog">Назад</button>
    </router-link>
    <div class="product_page">
      <div class="product_page.image">
        <img
          class="product_image"
          v-if="product.image"
          :src="require('../assets/image/' + product.image)"
          alt="img"
        />
      </div>
      <div class="product_info">
        <h5 class="product-item_name">{{ product.name  }}</h5>
        <p class="product-item_price">Цена: {{ product.cost }}р</p>
        <p class="product-item_category">Категория: {{ product.category  }}</p>
        <p class="product-item_value">Осталось: {{ product.value }} штук(а)</p>
        <button class="product-item_button" @click="addToCart(product)">
          <span v-if="!isAdded">Добавить в корзину</span>
          <span v-if="isAdded">Добавлено!</span>
        </button>
      </div>
    </div>
    <div class="about">
      <h3 class="about_title">Описание:</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
        nemo inventore soluta possimus optio veniam aliquam consequatur voluptas
        cumque, nisi totam quas eos voluptates minus reiciendis at ipsa illo
        tempore? Natus accusamus consectetur voluptates unde repellendus soluta
        neque? Molestias, sit facilis cupiditate maxime ex, sequi laboriosam
        molestiae perferendis dolore voluptatum atque veritatis delectus commodi
        minus beatae laudantium placeat amet. Nulla! Odio modi temporibus,
        aperiam doloremque neque repellendus, veniam ut pariatur veritatis eum
        laudantium quia et esse. Iure earum accusantium blanditiis nesciunt
        veniam voluptatem cum, quisquam, mollitia omnis ad pariatur eos? Ab est
        iusto ullam itaque sequi soluta possimus asperiores ut, nobis
        repellendus earum, dicta maxime praesentium placeat animi. Praesentium
        fugiat molestiae, iste quasi nulla ab suscipit sapiente voluptates
        quisquam fugit.
      </p>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "vProductPage",
  data() {
    return {
      isAdded: false,
    }
  },
  computed: {
    ...mapGetters([ "allPets" ]),
    product() {
      let result = {};
      let idFromRouter = Number(this.$route.query.product)
      this.allPets.find(function(item) {
        if(item.id_pets === idFromRouter){
          result = item;
        }
      }); 
      return result;    
    }
  },
  methods: {
    ...mapActions([ "add_To_Cart", "getPetsFromApi" ]),
    addToCart(data) {
      this.isAdded = true;
      if(data) {
        this.add_To_Cart(data);
      }}
  },
  mounted() {
    this.getPetsFromApi()
  },  
};
</script>

<style>
.v-product-page {
  padding-top: 100px;
  width: 80%;
  margin: 0 auto;
  text-align: left;
}
.btn_backtocatalog {
  font-size: 20px;
  padding: 4px 15px;
  border-radius: 20px;
  border: 2px solid lightgreen;
  background-color: #ffffff;
  color: lightgreen;
  position: absolute;
  left: 10%;
  cursor: pointer;
}
.product_page {
  display: flex;
  margin-top: 50px;
}
.product_image {
  padding-top: 50px;
  width: 400px;
  height: 300px;
}
.product_info {
  margin-left: 50px;
} 
.product-item_name {
  margin: 80px 0px 0 0px;
  font-size: 34px;
}
.product-item_price {
  font-size: 24px;
  margin: 20px 0 20px 0x;
}
.product-item_button {
  font-size: 16px;
  padding: 4px 8px;
  border-radius: 20px;
  border: 2px solid #ec780d;
  background-color: #ffffff;
  color: #ec780d;
  cursor: pointer;
}
.product-item_category {
  margin: 0 0 10px 0;
  font-size: 20px;
}
.product-item_value {
  font-size: 20px;
}
.about_title {
  text-align: left;
  margin: 20px 0;
}
.about p {
  text-align: left;
}
</style>