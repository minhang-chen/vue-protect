<template>
	<div>
		<header-public></header-public>
		<div class="m-wrapper">
			<div class="title">
				<div>个人信息</div>
				<div class="list">
          <router-link to="/" class="back">返回</router-link>
					<a href="javascript:;" class="list-item">我的患者</a>><a href="javascript:;" class="list-item">个人信息</a>
				</div>
			</div>
			<div class="m-table">
				<ul>
					<li>
						<div class="u-title">姓名</div>
						<input class="u-input" type="text" name="name" placeholder="请输入全名" @focus="addClass('name')" :class="{selected:selected=='name',error:this.errors.has('name')}" v-model="name" v-validate="'required'" >
            <img class="icon-choose" src="../../images/ic_Wipeoff.png" height="18" width="18" @click="clearContent('name')" v-if="selected=='name'">
					</li>
          <li>
            <div class="u-title">性别</div>
            <select class="u-select"  name="gender"  @focus="addClass('gender')" :class="{selected:selected=='gender',error:this.errors.has('gender')}" v-model="gender" v-validate="'required'"  >
              <option value="">请选择性别</option>
              <option value="m">男</option>
              <option value="f">女</option>
            </select>
            <img class="icon-choose" src="../../images/ic_Wipeoff.png" height="18" width="18" @click="clearContent('gender')" v-if="selected=='gender'">
          </li>
					<li>
						<div class="u-title">年龄</div>
						<input class="u-input" type="text" name="age" placeholder="请输入年龄" @focus="addClass('age')" :class="{selected:selected=='age',error:this.errors.has('age')}" @change="ageErr()" v-model="age" v-validate="{rules:{required:true,regex:/^[0-9]*[1-9][0-9]*$/}}" >
            <img class="icon-choose" src="../../images/ic_Wipeoff.png" height="18" width="18" @click="clearContent('age')" v-if="selected=='age'">
            <div v-if="errorMessage2" class="error-message"><img src="../../images/ic_cha.png" height="14" width="14" class="error-img"/><span class="error-word">年龄不能超过180岁</span></div>
					</li>
					<li>
						<div class="u-title">ID号</div>
						<input class="u-input" type="text" name="systemId" placeholder="请输入ID号" @focus="addClass('systemId')" :class="{selected:selected=='systemId',error:this.errors.has('systemId')}"  v-model="systemId" v-validate="'required'" >
						<img class="icon-choose" src="../../images/ic_Wipeoff.png" height="18" width="18" @click="clearContent('systemId')" v-if="selected=='systemId'">
            <div v-if="errorMessage" class="error-message"><img src="../../images/ic_cha.png" height="14" width="14" class="error-img"/><span class="error-word">ID号重复</span></div>
					</li>
					<li>
						<div class="u-title">体检号</div>
						<input class="u-input" type="text" name="examId" placeholder="请输入体检号" @focus="addClass('examId')" :class="{selected:selected=='examId',error:this.errors.has('examId')}" v-model="examId" v-validate="'required'" >
            <img class="icon-choose" src="../../images/ic_Wipeoff.png" height="18" width="18" @click="clearContent('examId')" v-if="selected=='examId'">
					</li>
					<li>
						<div class="u-title">手机号</div>
						<input class="u-input" type="text" name="phone" placeholder="请输入手机号" @focus="addClass('phone')" :class="{selected:selected=='phone',error:this.errors.has('phone')}"  v-model="phone" v-validate="{rules:{regex:/^1([3|8][0-9]\d{8}|5[0-3|5-9]\d{8})$/}}" >
						<img class="ic-Wipeoff" src="../../images/ic_Wipeoff.png" height="18" width="18" @click="clearContent('phone')" v-if="selected=='phone'">
            <div v-if="this.errors.has('phone')" class="error-message"><img src="../../images/ic_cha.png" height="14" width="14" class="error-img"/><span class="error-word">手机号格式错误</span></div>
					</li>
					<li>
						<div class="u-title">微信号</div>
						<input class="u-input" type="text" name="wechat" placeholder="请输入微信号"  @focus="addClass('wechat')" :class="{selected:selected=='wechat'}" v-model="wechat">
            <img class="icon-choose" src="../../images/ic_Wipeoff.png" height="18" width="18" @click="clearContent('wechat')" v-if="selected=='wechat'">
					</li>
					<li>
						<div class="u-title">电子邮箱</div>
						<input class="u-input" type="text" name="email" placeholder="请输入邮箱"  @focus="addClass('email')" :class="{selected:selected=='email',error:this.errors.has('email')}"  v-model="email"  v-validate="'email'" >
            <img class="icon-choose" src="../../images/ic_Wipeoff.png" height="18" width="18" @click="clearContent('email')" v-if="selected=='email'">
            <div v-if="this.errors.has('email')" class="error-message"><img src="../../images/ic_cha.png" height="14" width="14" class="error-img"/><span class="error-word">电子邮箱格式错误</span></div>
					</li>
				</ul>
				<div class="m-bottom">
					<a href="javascript:;" class="btn-white save" @click="addPatient">保存</a>
					<a href="javascript:;" class="u-btn filling" @click="showPaperDialog">继续填写随访表</a>
				</div>
			</div>
		</div>
    <choose-paper :paperDialogShow='paperDialogShow' :patientId="id" :systemId="systemId" @closePaperDialog="hidePaperDialog" ></choose-paper>
	</div>

	</div>
</template>

<script>
	import header from '../../components/header/header.vue'
  import choosePaper from '../../components/choosePaper.vue'
  import axios from 'axios'
  import {
	  ADD_PATIENT_URL,
    VIEW_PATIENT_URL,
    MODIFY_PATIENT_URL,
    SURVEY_PAPER_LIST_URL,
    PATIENT_URL
	} from '../../Constants'

	export default{
		data () {
			return {
			  id:'',
        patientId:'',
        name:'',
        age:'',
        systemId:'',
        examId:'',
        phone:'',
        wechat:'',
        email:'',
				selected: '',
        gender:'',
        sex:'',
        paperDialogShow: false,
        errorMessage:false,
        errorMessage2:false,
        oSelect:''
			}
		},
		components: {
			'header-public': header,
      'choose-paper':choosePaper
		},
    mounted(){
		  if(this.$route.query.id){
        var systemId=this.$route.query.id;
        const _this = this
        axios({
          method: 'get',
          url:`${VIEW_PATIENT_URL}?id=${systemId}`
        })
          .then(res=>{
            if (res.data.code === 0){
              let content=res.data.content;
              _this.id=content.id;
              _this.name=content.name;
              _this.age=content.age;
              _this.systemId=content.systemId;
              _this.examId=content.examId;
              _this.phone=content.phone;
              _this.wechat=content.wechat;
              _this.email=content.email;
              _this.gender = content.gender;
              _this.oSelect=document.querySelector('.u-select')
              if(content.gender === 'm'){
                _this.oSelect.value= content.gender
              }else{
                _this.oSelect.value=  content.gender
              }

            }
          });

      }

    },
		methods: {
          ageErr(){
            if(this.age<='180'){
              this.errorMessage2 = false
            }else{
              this.errorMessage2 = true
            }
          },
	        addClass(field) {
              this.selected=field;
	        },
	        clearContent(field) {
            this[field]='';
	        },
          submitPatient(successFunc){
            this.$validator.validateAll();
            if(!this.errors.any()){
              let json={
                name:this.name,
                age:this.age,
                systemId:this.systemId,
                examId:this.examId,
                phone:this.phone,
                wechat:this.wechat,
                email:this.email,
                gender:this.gender
              };
              if(this.id){
                json=_.assignIn(json,{id:this.id});
              }
              const _this=this;
              axios({
                method: 'post',
                url: this.id?MODIFY_PATIENT_URL:ADD_PATIENT_URL,
                data: json
              }).then(function(res) {
                _this.id = res.data.content.id;
                if (res.data.code === 0) {
                  successFunc(res,_this);
                  _this.errorMessage = false;
                }
                if(res.data.code === -1104 || res.data.code === -1105){
                  _this.errorMessage = true;
                }
              })
            }
          },
          addPatient(){
            this.submitPatient((res,_this)=>{_this.$router.push({path: '/'})});
          },
	        showPaperDialog() {
            this.submitPatient((res,_this)=>{_this.paperDialogShow = true});
          },
          hidePaperDialog(){
            this.paperDialogShow = false;
          }
	    }
	}
</script>

<style rel="stylesheet" lang="scss">
	.m-wrapper{
		.title{
			.list{
				margin-top:6px;
				font-size:14px;
				.back{
					color:#ffb372;
				}
			}
		}
		.m-table{
			height: 563px;
			margin-top: 19px;
			ul{
				min-height:100%;
				font-size:0;
				li{
					position:relative;
					display:inline-block;
					margin-top:56px;
					margin-right:80px;
					.u-title{
						font-size:16px;
						color:#2b2b2b;
					}
          .u-select{
            width: 202px;
            height: 41px;
            padding: 0 11px;
            color: #999;
            font-size: 16px;
            border: 1px solid #e6e6e6;
            border-radius: 4px;
            background: #f6f6f6;
            box-sizing: border-box;
            margin-top: 10px;
            appearance:none;
            &.selected{
              background:#ffffff;
              border:1px solid #e6e6e6;
              box-shadow:0 4px 16px 0 rgba(0,0,0,0.20);
              border-radius:4px;

            }
          }
					.u-input{
						margin-top:10px;
						&.selected{
							background:#ffffff;
							border:1px solid #e6e6e6;
							box-shadow:0 4px 16px 0 rgba(0,0,0,0.20);
							border-radius:4px;

						}
					}
          .error-message{
            position:absolute;
            width: 202px;
            height: 35px;
            padding: 0 20px;
            top:70px;
            left:0px;
            font-size:14px;
            color:#333;
            border:1px solid #ec4d31;
            border-radius: 4px;
            background: #fff2f2;
            line-height: 29px;
            box-sizing: border-box;
            .error-img,.error-word{
              display: inline-block;
              vertical-align: middle;
              margin-right: 5px;
            }
          }
					.icon-choose{
						position:absolute;
						top:40px;
						right:9px;
					}
					.ic-Wipeoff{
						position:absolute;
						top:40px;
						right:9px;
						cursor:pointer;
					}
				}
			}
			.m-bottom{
				text-align: right;
				width:calc( 100% -  80px );
				line-height:87px;
				margin:-87px auto 0 auto;
				border-top:1px solid #eaeaea;
				.save{
					margin-right:20px;
					padding:6px 74px;
				}
				.filling{
					padding:6px 30px;
				}
			}
		}

	}

  .error{
    border-color: #ec4d31 !important;
  }
</style>
