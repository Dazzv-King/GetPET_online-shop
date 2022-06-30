<template>
  <div class="home">
    <header id="header" class="header">
      <div class="container">
        <div class="main_header">
          <div class="header_left">
            <h3 class="header_text_1">Добро пожаловать в</h3>
            <h1 class="header_text_2">GetPET</h1>
            <h2 class="header_text_3">
              ПРИОБРЕТАЯ ПИТОМЦА ВЫ ТАКЖЕ<br />ПОЛУЧАЕТЕ НАБОР КОРМА НА ДВЕ<br />НЕДЕЛИ!
            </h2>
            <router-link :to="{ name: 'Catalog' }">
              <button class="button_1">ПЕРЕЙТИ В МАГАЗИН</button>
            </router-link>
          </div>
          <div class="header_right">
            <img class="dog" src="../assets/image/img/dog.png" />
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style>
.home {
  padding: 0;
  margin: 0;
  font-family: "Roboto", sans-serif;
  color: 000;
  font-style: 16px;
  text-align: left;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  padding: 0;
  margin: 0;
  /*text-transform: uppercase;*/
}

ul,
li {
  display: block;
}

.main_header {
  display: flex;
  position: relative;
}

.header_text_1 {
  margin-top: 314px;
  font-size: 33px;
  color: #c2c2c2;
}

.header_text_2 {
  font-size: 110px;
  color: #ec780d;
  font-weight: bold;
  margin-left: -10px;
}

.header_text_3 {
  font-size: 20px;
  color: black;
  font-style: oblique;
  font-weight: normal;
}

.dog {
  position: absolute;
  right: 0;
  height: 145.5%;
}

.button_1 {
  font-size: 18px;
  padding: 8px;
  border-radius: 20px;
  margin-top: 39px;
  border: 2px solid #ec780d;
  background-color: #ffffff;
  color: #ec780d;
  cursor: pointer;
}
</style>
