<template>
  <div class="v-main-wrapper">
    <v-catalog />
    <v-card />
  </div>
</template>
<script>
import vCatalog from "./v-catalog";
import vCard from "./v-card";
export default {
  components: {
    vCatalog,
    vCard,
  },
};
</script>
<style>
.v-main-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 900px;
  flex-direction: column;
  margin: 0 auto;
}
</style>
