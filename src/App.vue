<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="60%">
        <PiniaIndex titleA="Product List"  titleB="Shopping Cart"/>
      </el-aside>
      <el-main width="40%"><PiniaLogo /></el-main>
    </el-container>
    <el-footer>
      <div><PiniaBuy /></div>
    </el-footer>
  </div>
</template>

<script setup lang="ts">
import PiniaBuy from './components/PiniaBuy.vue'
import PiniaIndex from './components/PiniaIndex.vue'
import PiniaLogo from './components/PiniaLogo.vue'
</script>


<style scoped>
.common-layout {
  width: 100%;
  height: 100%;
}
</style>
