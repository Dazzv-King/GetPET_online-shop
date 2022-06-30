<template>
  <div class="v-catalog">
    <div class="v-catalog_list">
      <v-catalog-item
        v-for="pets in allPets"
        :key="pets.id_pets"
        v-bind:pets_data="pets"
        @addToCart="addToCart"
        @openPetsPage="openPetsPage"
      />
    </div>
  </div>
</template>

<script>
import VCatalogItem from "./v-catalog-item.vue"; //импортировали доч-элемент и подключили в components
import { mapGetters } from "vuex";
import { mapActions } from "vuex"; //импортировали с библиотеки vuex чтобы связать actions & getters с методами или получить данные

export default {
  name: "v-catalog",
  components: { VCatalogItem },
  computed: {
    ...mapGetters(["allPets", "allCart"]), //с помощью геттера получили данные, цикл фор берет от геттера данные и разделяет на отдельные объекты
  },
  mounted() {
    this.$store.dispatch("getPetsFromApi"); //согласно док-вью-экс dispatch для взаймодеёствие с экшеном
  },
  methods: {
    ...mapActions(["add_To_Cart"]),
    //здесь метод который мы сверху указали связываеться с экшеном// подробнее про него в store
    addToCart(data) {
      this.add_To_Cart(data);
    },
    openPetsPage(id_pets) {
      this.$router.push({name: "vProductPage", query: { "product" : id_pets } });
      // console.log(id_pets)

    },
  },
};
</script>

<style>
.v-catalog_list {
  display: flex;
  flex-wrap: wrap;
  /* justify-content: space-around; */
  align-items: center;
  padding-top: 100px;
  width: 1200px;
  margin: 0 auto;
}
.menu {
  width: 100%;
}
</style>