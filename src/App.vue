<template>
  <div id="app" @information="informationH">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',

  watch:{
    "$route" : 'checkLogin'
  },
  created() {
    this.checkLogin();
  },
  methods:{
    checkLogin(){
      if(this.$route.fullPath!='/login'){
        if(!this.$cookie.get('access_token')){
            this.$router.push({path: '/login'});
        }
      }else{
        if(this.$cookie.get('access_token')){
          this.$router.push({path: '/'});
        }
      }
    },
    informationH:function (res) {
      console.log(res)
    }
  }
}
</script>

<style>
    @import "./css/normalize.css";
    @import "./css/common.css";

    #app,body,html{
      font-family:"Microsoft YaHei";
      height: 100%;
      width: 100%;
      background:#f6f7fb;
    }

</style>
