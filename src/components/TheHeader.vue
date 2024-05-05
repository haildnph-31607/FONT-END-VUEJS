<template>
    <div class="container-fuild">
        <div class="row text-while " style="background-color:#0c713d;padding:1rem;">

         <div class="col-1 d-flex d-sm-none align-items-center justify-content-center">

            <span @click="showDrawer();">X</span>

         </div>
       <div class="col-10 col-sm-9 d-flex  align-items-center justify-content-center justify-content-sm-start">
  <img src="../assets/logo.png" alt="logo" height="32" width="34" class="ms-3 me-3">
  <span class="d-none d-sm-flex">QUẢN TRỊ</span>
       </div>

       <div class="col-sm-3 d-none d-sm-flex align-items-center justify-content-sm-end">
        ADMIN
       </div>


         <div class="col-1 d-flex d-sm-none align-items-center justify-content-center">

            <span @click="showDrawerUser()">X</span>

         </div>

        </div>

    </div>
    <a-drawer
    v-model:open="open"
   
    style="color: red"
    title="DANH MUC"
    placement="left"
   
  >
    <p>Some contents...</p>
    <p>Some contents...</p>
    <p>Some contents...</p>
  </a-drawer>

  <a-drawer
  v-model:open="open_user"
 
  style="color: red"
  title="ADMIN"
  placement="right"
 
>
  <p>Some contents...</p>
  <p>Some contents...</p>
  <p>Some contents...</p>
</a-drawer>


</template>
<script setup>
import { ref } from 'vue';
const open = ref(false);
const open_user = ref(false);
const afterOpenChange = bool => {
  console.log('open', bool);
};
const showDrawer = () => {
  open.value = true;
};
const showDrawerUser = () => {
  open_user.value = true;
};
</script>