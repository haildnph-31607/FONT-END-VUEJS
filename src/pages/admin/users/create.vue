<template>
 <form @submit.prevent="StoreUser()">
    <a-card title="Tạo Mới Tài Khoản" style="width:100%">
        <div class="row">
            <div class="col-12 col-sm-4">
               <div class="row">
                <div class="col-12 d-flex justify-content-center mb-3">
                    <a-avatar shape="square" :size="200">
                        <template #icon>
                            <img src="../../../assets/user.png"/>
                        </template>
                      </a-avatar>
                </div>
                <div class="col-12 d-flex justify-content-center ">
                    <a-button type="primary">
                        <VerticalAlignTopOutlined />
                        <span>Chọn ảnh</span>
                    </a-button>
                </div>
               </div>
            </div>
            <div class="col-12 col-sm-8">
                <div class="row mb-3">
                    <div class="col-12 col-sm-3 text-start text-sm-end">
                        <label>
                            <span class="text-danger me-1">*
                            </span>
                            <span>Tình Trạng</span>

                        </label>
                    </div>
                    <div class="col-12 col-sm-5">
                        <a-select
                      
                        show-search
                        placeholder="Tình Trạng"
                        style="width: 100%"
                        :options="status_user"
                        allow-clear
                        :filter-option="filterOption"
                        v-model:value="users_status"
                      
                      ></a-select>
                    </div>
                </div>

                <div class="row mb-3">
                    <div class="col-12 col-sm-3 text-start text-sm-end">
                        <label>
                            <span class="text-danger me-1">*
                            </span>
                            <span>Tên Tài Khoản</span>

                        </label>
                    </div>
                    <div class="col-12 col-sm-5">
                        <a-input
                       
                          placeholder="Tên Tài Khoản" 
                          allow-clear
                          v-model:value="username"
                          />
                    </div>
                </div>
                

                <div class="row mb-3">
                    <div class="col-12 col-sm-3 text-start text-sm-end">
                        <label>
                            <span class="text-danger me-1">*
                            </span>
                            <span>Họ Và Tên</span>

                        </label>
                    </div>
                    <div class="col-12 col-sm-5">
                        <a-input
                       
                          placeholder="Họ Và Tên" 
                          allow-clear 
                          v-model:value="name"
                          />
                    </div>
                </div>
                <div class="row mb-3">
                    <div class="col-12 col-sm-3 text-start text-sm-end">
                        <label>
                            <span class="text-danger me-1">*
                            </span>
                            <span>Email</span>

                        </label>
                    </div>
                    <div class="col-12 col-sm-5">
                        <a-input
                       
                          placeholder="Email" 
                          allow-clear 
                          v-model:value="email"

                          
                          />
                    </div>
                </div>
                <div class="row mb-3">
                    <div class="col-12 col-sm-3 text-start text-sm-end">
                        <label>
                            <span class="text-danger me-1">*
                            </span>
                            <span>Phòng Ban</span>

                        </label>
                    </div>
                    <div class="col-12 col-sm-5">
                        <a-select
                      
                        show-search
                        placeholder="Phòng Ban"
                        style="width: 100%"
                        :options="departments"
                        allow-clear
                        :filter-option="filterOption"
                        v-model:value="departments_id"

                      
                      ></a-select>
                    </div>
                </div>

                <div class="row mb-3">
                    <div class="col-12 col-sm-3 text-start text-sm-end">
                        <label>
                            <span class="text-danger me-1">*
                            </span>
                            <span>Password</span>

                        </label>
                    </div>
                    <div class="col-12 col-sm-5">
                        <a-input-password
                       
                          placeholder="Password" 
                          allow-clear
                          v-model:value="password"

                           />
                    </div>
                </div>

                <div class="row mb-3">
                    <div class="col-12 col-sm-3 text-start text-sm-end">
                        <label>
                            <span class="text-danger me-1">*
                            </span>
                            <span>Xác Nhận Password</span>

                        </label>
                    </div>
                    <div class="col-12 col-sm-5">
                        <a-input-password
                       
                          placeholder="Xác Nhận Password" 
                          allow-clear
                          v-model:value="password_confirmation"

                           />
                    </div>
                </div>
            </div>    `
        </div>
        <div class="row">
            <div class="col-12 d-grid d-sm-flex justify-content-sm-end mx-auto">
                <a-button class="me-0 me-sm-2 mb-3 mb-sm-0">
                    <router-link to="/admin/users">
                        <span>Huỷ</span>
                    </router-link>
                </a-button>

                <a-button type="primary" html-type="submit">
                    <span>Lưu</span>
                </a-button>
            </div>
        </div>
    </a-card>
 </form>
</template>
<script>
import {useMenu} from "../../../stores/use-menu.js";// kho chưuas store
import {   

    VerticalAlignTopOutlined
} from '@ant-design/icons-vue';
import axios from "axios";
import {defineComponent , ref ,reactive ,toRefs} from 'vue';
export default defineComponent({
    components:{
        VerticalAlignTopOutlined, // componet6n antdesign vie
    },
    setup(){
        const store = useMenu(); // toàn bộ store nằm trong store/use-menu dùng để đồng bộ view giữa phone và decktop
        store.onSelectedKeys(['admin.users']);
        const StoreUser = ()=>{   // hàm lấy dữ liệu form
            axios.post('http://127.0.0.1:8000/api/users',ValueUsers)
            .then((response)=>{
                console.log(response);
            }).catch((error)=>{
                console.log(error);
            })

        }
        const ValueUsers = reactive({
            username:"",
            name:"",
            email:"",
            password:"",
            password_confirmation:"",
            departments_id:[],
            users_status:[],

        })
        const status_user = ref([]);
        const departments = ref([]);
        const filterOption = (input, option) => {
        return option.label.toLowerCase().indexOf(input.toLowerCase()) >= 0; // search no bug , viết gợi y6s select
};
        const getUserCreate = ()=>{
            axios.get("http://127.0.0.1:8000/api/users/create")
            .then(function (response) {
                console.log(response.data.users_status.original);
                 departments.value = response.data.departments.original;
                 status_user.value = response.data.users_status.original;

              })
           .catch(function (error) {
    // handle error
          console.log(error);
         });
        }
        getUserCreate();
        return {
            departments,
            status_user,
            ...toRefs(ValueUsers),
            filterOption,
            StoreUser
        }
    }
   
});
</script>