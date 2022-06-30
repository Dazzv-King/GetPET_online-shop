import Vue from 'vue'
import { createStore } from 'vuex'

export default createStore({
  actions: {
    //получили данные от указанного хоста
    async getPetsFromApi(ctx) {
//       const res = await fetch('http://localhost:8081/api/pets')
//       const pets = res.json()
      const pets = [{"id_pets":0,"image":"1.jpg","name":"Karamelka","cost":30000,"category":"cat","value":1},{"id_pets":1,"image":"2.jpg","name":"Tikhon","cost":25000,"category":"cat","value":1},{"id_pets":2,"image":"3.jpg","name":"Barsik","cost":29000,"category":"cat","value":1},{"id_pets":3,"image":"4.jpg","name":"Angela","cost":40000,"category":"cat","value":1},{"id_pets":4,"image":"5.jpg","name":"Sheyna","cost":37000,"category":"cat","value":1},{"id_pets":5,"image":"6.jpg","name":"Shayna","cost":27000,"category":"cat","value":1},{"id_pets":6,"image":"7.jpg","name":"Max","cost":22000,"category":"dog","value":1},{"id_pets":7,"image":"8.jpg","name":"Alfred","cost":42000,"category":"dog","value":1},{"id_pets":8,"image":"9.jpg","name":"Jony","cost":40000,"category":"dog","value":1},{"id_pets":9,"image":"10.jpg","name":"Grey","cost":25000,"category":"dog","value":1},{"id_pets":10,"image":"11.jpg","name":"Корм для собак","cost":1000,"category":"Корм","value":10},{"id_pets":11,"image":"12.jpg","name":"Корм для собак","cost":1200,"category":"Корм","value":8},{"id_pets":12,"image":"13.jpg","name":"Корм для кошек","cost":1000,"category":"Корм","value":7},{"id_pets":13,"image":"13.jpg","name":"Корм для кошек","cost":1300,"category":"Корм","value":5}];
      ctx.commit('updatePets', pets)
      //c commit передали эти пол.данные к mutations
    },
    async add_To_Cart({ commit }, pet) {
      commit('set_Cart', pet) //создали экшен добавление в корзину и передали к mutations ''set_Cart // все изменения происходят там
    },
    async delete_From_Cart({ commit }, index) {
      commit('delete_from_cart', index) //тоже самое сверху только в этом случае mutations  получают индекс объекта 
    },
    decrement_Cart_Item({ commit }, index) {
      commit("decrement", index)
    },
    increment_Cart_Item({ commit }, index) {
      commit("increment", index)
    }


  },
  
  mutations: {
    updatePets(state, pets) {
      state.pets = pets; //здесь обращается к state/состояние и обновляет все состояние
    },
    set_Cart(state, pet) {
      //проверка товара по артиклу на его наличие в корзине
      // также создаеться кол-во/quantity 
      let isProductExcist = false;
      state.cart.map(function (item) {
        if (item.id_pets === pet.id_pets) { //чтобы проверить наличие товара в корзине проверяуться артикул выбранного товара с артиклом товаров в корзине
          isProductExcist = true;
          if (item.quantity <= item.value - 1) {
            item.quantity++ //если он уже в корзине то добавляться только кол-во
          }
        }
      })
      isProductExcist || state.cart.push({ ...pet, quantity: 1 }) //если товара нету в корзине то добавляться объект и просвоится кол-во 1
    },
    delete_from_cart(state, index) {
      state.cart.splice(index, 1) //удаление по индексу
    },
    decrement(state, index) {
      if (state.cart[index].quantity > 1) {
        state.cart[index].quantity--
      }
    },
    increment(state, index) {
      if (state.cart[index].quantity <= state.cart[index].value - 1)
        state.cart[index].quantity++
    }

  },

  state: {
    pets: [],
    cart: []
  },

  getters: {
    allPets(state) {
      return state.pets; //создаеться геттер и подключаться к состояние потом можно будет с их помощью получить данные быстро и просто
    },
    allCart(state) {
      return state.cart;
    },
  }
})

