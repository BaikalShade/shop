<template>
  <div class="v-catalog-item">
    <img class="v-catalog-item__image"
         :src="require('../assets/images/' + product_data.image)"
         alt="img"
    />
    <p>{{ product_data.name }}</p>
    <p>Price: {{ product_data.price }} Р.</p>
    <button class="btn" @click="sendDataToParent">Add to cart</button>
  </div>
</template>

<script>
export default {
  name: "v-catalog-item",
  props: {
    product_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {
    imageSrc() {
      return `./assets/images/${this.product_data.image}`; // productData.image должно содержать имя файла, например '1.jpg'
    },
  },
  methods: {
    sendDataToParent() {
      this.$emit("sendDataToParent", this.product_data.article);
    },
  },
};
</script>

<style scoped>
.v-catalog-item {
  flex-basis: 10%;
  box-shadow: 0 0 8px 0;
  padding: 20px;
  margin-bottom: 20px;
  margin-left: 20px;
  min-width: 250px;
  margin-top: 30px;
}
.btn {
  margin-top: 20px;
}
.v-catalog-item__image {
  width: 100px;
}
</style>
