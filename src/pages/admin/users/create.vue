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
                            <span :class="{
                                'text-danger':errors.status_id
                            }">Tình Trạng</span>
                           

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
                        v-model:value="status_id"
                        :class="{
                            'select-danger':errors.status_id
                        }"
                         
                      ></a-select>
                      <div class="w-100"></div>
                      <small class="text-danger" v-if="errors.status_id">{{ errors.status_id[0]}}</small>

                    </div>
                </div>

                <div class="row mb-3">
                    <div class="col-12 col-sm-3 text-start text-sm-end">
                        <label>
                            <span class="text-danger me-1">*
                            </span>
                            <span :class="{
                                'text-danger':errors.username
                            }">Tên Tài Khoản</span>

                        </label>
                    </div>
                    <div class="col-12 col-sm-5">
                        <a-input
                       
                          placeholder="Tên Tài Khoản" 
                          allow-clear
                          v-model:value="username"
                          :class="{
                            'select-danger':errors.username
                        }"
                          />
                          <div class="w-100"></div>
                          <small class="text-danger" v-if="errors.username">{{ errors.username[0]}}</small>
    
                    </div>
                </div>
                

                <div class="row mb-3">
                    <div class="col-12 col-sm-3 text-start text-sm-end">
                        <label>
                            <span class="text-danger me-1">*
                            </span>
                            <span :class="{
                                'text-danger':errors.name
                            }">Họ Và Tên</span>

                        </label>
                    </div>
                    <div class="col-12 col-sm-5">
                        <a-input
                       
                          placeholder="Họ Và Tên" 
                          allow-clear 
                          v-model:value="name"
                          :class="{
                            'select-danger':errors.name
                        }"
                          />
                          <div class="w-100"></div>
                          <small class="text-danger" v-if="errors.name">{{ errors.name[0]}}</small>
    
                    </div>
                </div>
                <div class="row mb-3">
                    <div class="col-12 col-sm-3 text-start text-sm-end">
                        <label>
                            <span class="text-danger me-1">*
                            </span>
                            <span :class="{
                                'text-danger':errors.email
                            }">Email</span>

                        </label>
                    </div>
                    <div class="col-12 col-sm-5">
                        <a-input
                       
                          placeholder="Email" 
                          allow-clear 
                          v-model:value="email"
                          :class="{
                            'select-danger':errors.email
                        }"
                          
                          />
                          <div class="w-100"></div>
                          <small class="text-danger" v-if="errors.email">{{ errors.email[0]}}</small>
    
                    </div>
                </div>
                <div class="row mb-3">
                    <div class="col-12 col-sm-3 text-start text-sm-end">
                        <label>
                            <span class="text-danger me-1">*
                            </span>
                            <span :class="{
                                'text-danger':errors.departments_id
                            }">Phòng Ban</span>

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

                        :class="{
                            'select-danger':errors.departments_id
                        }"
                      ></a-select>
                      <div class="w-100"></div>
                      <small class="text-danger" v-if="errors.departments_id">{{ errors.departments_id[0]}}</small>

                    </div>
                </div>

                <div class="row mb-3">
                    <div class="col-12 col-sm-3 text-start text-sm-end">
                        <label>
                            <span class="text-danger me-1">*
                            </span>
                            <span :class="{
                                'text-danger':errors.password
                            }">Password</span>

                        </label>
                    </div>
                    <div class="col-12 col-sm-5">
                        <a-input-password
                       
                          placeholder="Password" 
                          allow-clear
                          v-model:value="password"
                          :class="{
                            'select-danger':errors.password
                        }"

                           />
                           <div class="w-100"></div>
                           <small class="text-danger" v-if="errors.password">{{ errors.password[0]}}</small>
     
                    </div>
                </div>

                <div class="row mb-3">
                    <div class="col-12 col-sm-3 text-start text-sm-end">
                        <label>
                            <span class="text-danger me-1">*
                            </span>
                            <span :class="{
                                'text-danger':errors.password
                            }">Xác Nhận Password</span>

                        </label>
                    </div>
                    <div class="col-12 col-sm-5">
                        <a-input-password
                       
                          placeholder="Xác Nhận Password" 
                          allow-clear
                          v-model:value="password_confirmation"
                          :class="{
                            'select-danger':errors.password
                        }"
                           />
                           <div class="w-100"></div>
                           <small class="text-danger" v-if="errors.password">{{ errors.password[0]}}</small>
     
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
import { message } from 'ant-design-vue';
import { useRouter } from "vue-router";
import axios from "axios";
import {defineComponent , ref ,reactive ,toRefs} from 'vue';
export default defineComponent({
    components:{
        VerticalAlignTopOutlined, // componet6n antdesign vie
    },
    setup(){
        const store = useMenu(); // toàn bộ store nằm trong store/use-menu dùng để đồng bộ view giữa phone và decktop
        store.onSelectedKeys(['admin.users']);
        const router = useRouter(); // Tao bien luu function useRouter()
        const StoreUser = ()=>{   // hàm lấy dữ liệu form
            axios.post('http://127.0.0.1:8000/api/users',ValueUsers)
            .then((response)=>{
                if(response.status == 200){
                    message.success('User added successfully');
                    router.push('/admin/users');
                }
            }).catch((error)=>{
                console.log(error);
                if(error){
                    errors.value = error.response.data.errors;
                }
                console.log(errors);
            })

        }
        const ValueUsers = reactive({
            username:"",
            name:"",
            email:"",
            password:"",
            password_confirmation:"",
            departments_id:[],
            status_id:[],

        });
        const errors = ref({});
       
        const status_user = ref([]);
        const departments = ref([]);
        const filterOption = (input, option) => {
        return option.label.toLowerCase().indexOf(input.toLowerCase()) >= 0; // search no bug , viết gợi y6s select
};
        const getUserCreate = ()=>{
            axios.get("http://127.0.0.1:8000/api/users/create")
            .then(function (response) {
                // console.log(response.data.users_status.original);
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
            errors,
            StoreUser
        }
    }
   
});
</script>
<style>
.select-danger{
    border:1px solid red;
}

</style>