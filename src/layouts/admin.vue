<template>
    <TheHeader/>
    <div class="container-fuild">
      <div class="row">
        <div class="col-sm-3">
            SLIDEBAR
        </div>
        <div class="col-sm-9">
            <router-view></router-view>

        </div>
      </div>
    </div>
</template>
<script>
import TheHeader from '../components/TheHeader.vue'
export default {
    components:{
        TheHeader

    }
}
</script>