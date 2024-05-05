import { defineStore } from 'pinia';
import { storeToRefs} from 'pinia';

export const useMenu = defineStore('menuId', {
 
  state: () => ({
      selectedKeys:[],
      openKeys:[],

  }),
  actions:{
   onSelectedKeys(data){
    this.selectedKeys=data;
   },
   onOpenKeys(data){
    this.openKeys = data;
   }
  },


})