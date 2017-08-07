<template>
  <transition name="fade">
    <div v-show="paperDialogShow" class="dialog-wrapper">
      <div class="m-dialog">
        <div class="header">
          <span>请选择随访模板</span>
          <img class="close" src="../images/ic_close.png" height="20" width="20" @click="hideDetail">
        </div>
        <div class="m-select">
          <select v-model="selectRecordingType">
            <option v-for="(sfRecordingType,index) in sfRecordingTypes" :value="sfRecordingType.code">{{sfRecordingType.title}}</option>
          </select>
          <span class="u-triangle"></span>
        </div>
        <div class="m-content">
          <div class="list-item" v-for="(sfRecording,index) in filterRecordingPapersByType" @click="chooseRecording(sfRecording.id)" :key="sfRecording.id">
            <span>{{sfRecording.name}}</span>
            <img v-show="sfRecording.current" class="item-selected" src="../images/ic_choose.png" height="10" width="14">
          </div>
        </div>
        <div class="m-bottom">
          <a href="javascript:;" class="u-btn btn-ok" @click="fillRecording">确定</a>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  import axios from 'axios'
  import { SURVEY_PAPER_LIST_URL,PATIENT_URL,VIEW_PATIENT_URL} from '../Constants'

  export default{
    props:["paperDialogShow","patientId",'systemId'],
    data(){
     return {
       selectRecordingType:'TZ',
       sfRecordingTypes:[{code:'TZ',title:'体重管理'},{code:'XXG',title:'心血管管理'},{code:'TNB',title:'糖尿病管理'}],
       sfRecordings: [],
       patientId2:''
     }
    },
    mounted(){
      axios({
        method: 'get',
        url:`${SURVEY_PAPER_LIST_URL}?size=0`
      })
        .then(res=>{
          if (res.data.code === 0){
            this.sfRecordings=_.map(res.data.content.list,(item)=>{
              return {
                id:item.id,
                type:item.type,
                name:item.name,
                fileName:item.filename,
                current:false
              }
            });
          }
        });
    },
    computed:{
      filterRecordingPapersByType(){
        const _this=this;
        return _.filter(this.sfRecordings,(item)=>{
          return item.type==_this.selectRecordingType
        })
      }
    },
    methods:{
      chooseRecording(recordingId) {
        const _this=this;
        _.forEach(this.sfRecordings,(item,index)=>{
          var itemClone=_.cloneDeep(item);
          itemClone.current=item.id==recordingId
          _this.sfRecordings.splice(index,1, itemClone)
        })

      },
      fillRecording(){
        const _this = this
        let selectRecording=_.find(this.sfRecordings,(item)=>{
          return item.current;
        });
        axios({
          method: 'get',
          url:`${VIEW_PATIENT_URL}?id=${_this.patientId}`
        }).then(function (res) {
          _this.patientId2 = res.data.content.id
          if(_this.patientId2===""){
            selectRecording &&  _this.$router.push({path: `/${selectRecording.fileName}?patientId=${_this.patientId}&paperId=${selectRecording.id}&paperName=${selectRecording.name}`});
          }else{
            selectRecording &&  _this.$router.push({path: `/${selectRecording.fileName}?patientId=${_this.patientId2}&paperId=${selectRecording.id}&paperName=${selectRecording.name}`});
          }

        })
      },
      hideDetail() {
        this.$emit('closePaperDialog')
      }
    }
  }
</script>

<style rel="stylesheet" lang="scss">
  .dialog-wrapper{
    position:fixed;
    z-index: 100;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background:rgba(0,0,0,0.30);
    transition:all .3s;
  &.fade-enter, &.fade-leave-active{
                   opacity:0;
                   background:rgba(7,17,27,0);
                 }
  .m-dialog{
    position:fixed;
    top:50%;
    left:50%;
    z-index:101;
    width:440px;
    height:560px;
    border-radius:10px;
    background:#fff;
    transform: translateX(-50%) translateY(-50%);
  .header{
    line-height:60px;
    padding:0 20px;
    font-size:18px;
    color:#333;
    border-bottom:1px solid #eaeaea;
  .close{
    float:right;
    margin-top:20px;
    cursor:pointer;
  }
  }
  .m-select{
    position:relative;
    padding:13px 20px;
    select{
      width:398px;
      height:39px;
      padding:0 11px;
      font-size:16px;
      color:#ffb372;
      border:1px solid #e6e6e6;
      border-radius:4px;
      background:#f6f6f6;
      box-sizing:border-box;
      appearance:none;
      -moz-appearance:none;
      -webkit-appearance:none;
    }
    .u-triangle{
      position:absolute;
      right:41px;
      top:29px;
    }
  }
  .m-content{
    width:400px;
    height:330px;
    margin:12px auto;
    font-size:16px;
    color:#333;
    overflow:auto;
    .list-item{
      position:relative;
      margin:0 0 8px 0;
      padding:0 19px;
      line-height:40px;
      &:hover{
         background:#f6f6f6;
       }
      .item-selected{
        position:absolute;
        right:20px;
        top:14px;
      }
    }
  }
  .m-bottom{
    line-height:78px;
    text-align:center;
    border-top:1px solid #eaeaea;
    .btn-ok{
      padding:6px 75px;
    }
  }
  }
  }
</style>
