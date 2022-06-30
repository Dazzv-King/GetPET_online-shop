<template>
  <div id="app">
    <div class="menu">
      <div class="container">
        <div class="line">
          <router-link to="/">
            <img class="logo" src="./assets/image/img/logo.png" />
          </router-link>
          <ul class="menu_option">
            <li>
              <router-link to="/">
                <a class="toHome" href="#">ГЛАВНАЯ</a>
              </router-link>
            </li>
            <li>
              <router-link to="Catalog">
                <a href="#">ПИТОМЦЫ</a>
              </router-link>
            </li>
            <li>
              <a href="#">КОНТАКТЫ</a>
            </li>
            <li>
              <a href="#">О НАС</a>
            </li>
          </ul>
          <router-link :to="{ name: 'Cart', params: { cart_data: allCart } }">
            <div class="v-catalog_link_to_cart">
              <img class="box" src="./assets/image/img/box.png"
              />
            </div>
          </router-link>
        </div>
      </div>
    </div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
  <!-- Область куда роутер будет отправлять компоненты //router-view-->
  <!-- сохранить состояние при изменение url//keep-alive -->
</template>

<script>
import Home from "./views/home.vue";

export default {
  name: "app",
  components: {
    Home,
  },
};
</script>

<style>
#app {
  align-items: center;
  margin: 0;
  text-align: center;
  font-family:'Times New Roman', Times, serif ;
}
body {
  margin: 0;
}
a {
  text-decoration: none;
}
p {
  font-size: 16px;
  padding: 0px;
  margin-top: 10px;
}
.container {
  width: 85%;
  margin: 0 auto; /*позицирование по центру*/
}

.menu {
  background-color: rgba(224, 224, 224, 60%);
  height: 90px;
  width: 100%;
  position: fixed;
  z-index: 3;
}

.logo {
  height: 100%;
}

.line {
  height: 90px;
  display: flex; /*уровнять по одной линии*/
}

.menu_option {
  display: flex;
  margin: 45px auto 0px; /*центр*/
}
.menu_option li {
  font-size: 20px;
  text-decoration: none; /*убрать подчеркивание*/
}
.menu_option li + li {
  margin-left: 30px;
}

.menu_option a {
  /*обращение к тегу через про-родитель*/
  text-decoration: none;
  color: black;
  font-weight: bold; /*сделать жирным*/
}
.menu_option li:hover {
  text-decoration: underline;
}
/*верх право вниз лево - margin*/
.box {
  margin: 35px 0px;
}

.pets_margin {
  margin: 0px 30px 0px 30px;
}
</style>
