import { defineStore } from 'pinia';
import {getProducts} from '../api/shop'
import type { Product } from '../api/shop'

export const useShopStore = defineStore('shop', {
  state: () => {
    return {
      allProduct: [] as Product[]
    }
  },
  getters: {},
  actions: {
    async loadAllProducts() {
      const ret = await getProducts()
      this.allProduct = ret  
    },
    async deleteProduct(productId: number) {
      const val = this.allProduct.find(item => item.id === productId)
      if(val && val.inventory > 0) {
        val.inventory--
      }
      return  
    },
    async addProduct(productId: number) {
      const val = this.allProduct.find((val) => val.id === productId)
      if (val) {
        val.inventory++
      }
    }
  }
})