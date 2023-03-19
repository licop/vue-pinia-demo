<template>
<div>
  <h2>{{ titleA }}</h2>
  <el-table
    style="width: 100%; text-align: center"
    table-layout="auto"
    :data="shopStore.allProduct"
  >
    <el-table-column prop="goodsName" label="GoodsName" width="200" />
    <el-table-column prop="price" label="Price" width="150" />
    <el-table-column prop="inventory" label="Inventory" width="150" />
    <el-table-column fixed="right" label="Action" width="120">
      <template #default="scope">
        <el-button
          type="info"
          text
          bg
          :disabled="!scope.row.inventory"
          @click="carsStore.addProduct(scope.row)"
        >
          +
        </el-button>
      </template>
    </el-table-column>
  </el-table>
  <h2>{{ titleB }}</h2>
  <el-table
    style="width: 100%"
    table-layout="auto"
    :data="carsStore.shopCars"
  >
    <el-table-column prop="goodsName" label="GoodsName" width="200" />
    <el-table-column prop="price" label="Price" width="150" />
    <el-table-column prop="shopCount" label="Quantity" width="150" />
    <el-table-column fixed="right" label="Action" width="120">
      <template #default="scope">
        <el-button
          type="info"
          text
          bg
          @click="carsStore.reduceProduct(scope.row)"
        >
          -
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</div>
</template>

<script setup lang="ts">
import { useShopStore } from '@/stores/products';
import { useCarsStore }  from '@/stores/cars'

defineProps<{
  titleA: string;
  titleB: string;  
}>()

const shopStore = useShopStore()
const carsStore = useCarsStore()

shopStore.loadAllProducts()
</script>


<style scoped>
::v-deep .el-table__inner-wrapper::before {
  width: auto;
}
::v-deep .el-table__empty-block {
  width: auto !important;
}
</style>
