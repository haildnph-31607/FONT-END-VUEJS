<template>
    <a-card title="Tài Khoản Người Dùng" style="width: 100%">
        <div class="row">
            <div class="col-12">
                <a-table :dataSource="user" :columns="columns" :scroll="{ x: 576 }">  <!-- dataSourece là chứa dataa , colum để setup table -->
                    <template #bodyCell="{ column, index ,record}">  <!-- sửa table theo ý -->
                        <template v-if="column.key === 'index'">  <!-- data index để tự sắp xếp -->
                           <span>{{ index+1 }}</span>
                        </template>
                        <template v-if="column.key === 'users_status'">
                            <span v-if="record.status_id === 1" class="text-primary">{{ record.users_status  }}</span>  <!-- Hiển thị màu status -->
                            <span v-if="record.status_id === 2" class="text-danger">{{ record.users_status  }}</span>

                         </template>
                    </template>

                </a-table>
            

            </div>  
        </div>
    </a-card>
</template>
<script>
import {useMenu} from "../../../stores/use-menu.js";// kho chưuas store
import { defineComponent , ref } from "vue";
export default defineComponent({
    
    setup(){
        const store = useMenu(); // toàn bộ store nằm trong store/use-menu dùng để đồng bộ view giữa phone và decktop
        store.onSelectedKeys(['admin.users']);
        const user = ref([]); // data được gắn vào thẻ này để return lại
        const columns =[
            {
                title:"#",// tên cột
                dataIndex:'index',// data
                key:"index" // key sử dụng trên AntDesign
            },
            {
                title:"Avatar",
                dataIndex:'avatar',
                key:"avatar"
            },
            {
                title:"Tài Khoản",
                dataIndex:'username',
                key:"username"
            },
            {
                title:"Tên",
                dataIndex:'name',
                key:"name"
            },
           
            {
                title:"Phòng Ban",
                dataIndex:'departments',
                key:"departments",
                responsive: ['sm'],// reponsive cho cột phòng ban nếu là phone thì kh hiển thị
            },
            {
                title:"Vai Trò",
                dataIndex:'',
                key:""
            },
            {
                title:"Tình Trạng",
                dataIndex:'users_status',
                key:"users_status"
            },
            {
                title:"Công Cụ",
                fixed: "right",
                key:""
            },
        ]
        const getUser = ()=>{
            axios.get('http://127.0.0.1:8000/api/users')
               .then(function (response) {
                console.log(response.data.data);
                 user.value = response.data.data;
              })
           .catch(function (error) {
    // handle error
          console.log(error);
         });    
        
        };
        getUser();
        return {
            user,
            columns
        }
     }
});
</script>