const vm = new Vue({
  el:"#app",
  data:{
    books:[
      {
        id:1,
        name:"java编程思想",
        date:"2001-2",
        price:65.50,
        count:1
      },
      {
        id:2,
        name:"SSM整合开发",
        date:"2020-5",
        price:35.50,
        count:1
      },
      {
        id:3,
        name:"GO语言编程",
        date:"2011-4",
        price:37.20,
        count:1
      },
      {
        id:4,
        name:"Vue.js基础",
        date:"2021-5",
        price:48.80,
        count:1
      },
    ]
  },
  methods:{
    getFinalPrice(price){
      return "¥" + price.toFixed(2)
    },
    increment(index){
      this.books[index].count++
    },
    decrement(index){
      this.books[index].count--
    },
    removeBooks(index){
      this.books.splice(index,1)
    }
  },
  computed:{
    totalPrice(){
      let finalPrice = 0
      for (let i = 0;i<this.books.length;i++) {
         finalPrice += this.books[i].price * this.books[i].count
      }
      return finalPrice
    }
  },
  filters: {
    showPrice(price){
      return "¥" + price.toFixed(2)
    }
  }



})
