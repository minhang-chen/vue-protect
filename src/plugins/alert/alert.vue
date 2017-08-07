<template>
  <transition name="fade">
    <div :class='{"react-alerts":true,"success":type=="success","error":type=="error","warn":type=="warn"}'>
      <span class="bold">{{getAlertInfo}}</span>
      {{content}}
    </div>
  </transition>

</template>
<script>
  export default {
    props:["type","content"],
    computed:{
      getAlertInfo(){
          let info="";
          switch (this.type)
          {
            case "success":info="成功！";
            case "error":info="失败！";
            case "warn":info="警告！";
          }
          return info;
      }
    },
    mounted(){
      const _this=this;
      setTimeout(()=>{
        _this.$destroy();
        _this.$el.removeNode?_this.$el.removeNode():_this.$el.remove();
      },3000)
    }
  }
</script>
<style rel="stylesheet" style="stylesheet/scss" lang="scss">
  .react-alerts {
    position: fixed;
    top: 0;
    left: 0;
    color: #000;
    left: 50%;
    top: 50%;
    padding: 20px;
    border-radius: 4px;
    transform: translateX(-50%) translateY(-50%);
    .bold{
      font-weight: 500;
    }
    &.success{
      background: #d6e9c6;
    }
    &.error{
      background: #fff2f2;
      color:#333;
      border: 1px solid #ec4d31;
    }
    &.warn{
      background:#faebcc ;
    }
  }
</style>
