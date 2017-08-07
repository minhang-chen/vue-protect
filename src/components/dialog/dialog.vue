<template>
  <transition name="fade">
    <div v-if="paperDialogShow" class="m-dialog-wrapper">
      <div class="m-dialog">
        <img class="close" src="../../images/ic_close.png" height="20" width="20" @click="close"/>
        <div class="text">确认返回放弃编辑吗？</div>
        <div class="m-bottom">
          <a href="javascript:;" class="u-btn btn-determine" @click="determine">确定</a>
          <a href="javascript:;" class="u-btn btn-save" @click="save()">保存</a>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    props: ["paperDialogShow"],
    data(){
      return{
        num:''
      }
    },
    methods:{
      determine(){
        this.num=true;
        this.$emit('determine',this.num);
      },
      save(){
        this.num=false;
        this.$emit('determine',this.num);
      },
      close(){
        this.$emit('close');
      }
    }
  }
</script>

<style rel="stylesheet" lang="scss">
  .m-dialog-wrapper {
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.30);
    transition: all .3s;
    &.fade-enter, &.fade-leave-active{
      opacity:0;
      background:rgba(7,17,27,0);
    }
    .m-dialog {
      position: fixed;
      top: 50%;
      left: 50%;
      z-index: 101;
      width: 300px;
      height: 200px;
      border-radius: 10px;
      background: #fff;
      transform: translateX(-50%) translateY(-50%);
      text-align: center;
      .close{
        position: absolute;
        right: 10px;
        top: 10px;
        cursor: pointer;
      }
      .text{
        margin-top: 50px;
      }
      .m-bottom{
        width:100%;
        position: absolute;
        bottom: 45px;
        .btn-determine,.btn-save{
          padding: 3px 35px;
          margin: 0 10px;
        }
      }

    }
  }
</style>
