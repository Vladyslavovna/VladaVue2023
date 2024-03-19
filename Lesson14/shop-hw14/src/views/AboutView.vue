<template>
  <div>
    <main-master-page>
      <h1>Оберіть продукти</h1>
      <product-list></product-list>
      <router-link :to="{ name: 'product-selector' }">Открыть product-selector</router-link>
      <router-link :to="{ name: 'product-editor' }">Открыть product-editor</router-link>
      <router-view></router-view>
      <template #status>
        <h1>Статус : Відкрито</h1>
      </template>
    </main-master-page>

  </div>
</template>

<script>
import MainMasterPage from "@/masterpages/MainMasterPage.vue";
import ProductList from "@/components/ProductList.vue";
export default {
  name: "AboutView",

  components: {
    MainMasterPage,
    ProductList
  }

}
</script>

<style lang="scss" scoped></style>