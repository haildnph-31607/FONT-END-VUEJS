<template>
    DDaya la trang quan li user
</template>
<script>
import {useMenu} from "../../../stores/use-menu.js";
export default {
    setup(){
        const store = useMenu();
        store.onSelectedKeys(['admin.users']);

        const getUser = ()=>{
            axios.get('http://127.0.0.1:8000/api/users')
               .then(function (response) {
    // handle success
                 console.log(response);
              })
           .catch(function (error) {
    // handle error
          console.log(error);
         });    
        
        };
        getUser();
     }
}
</script>