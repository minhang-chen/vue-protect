<template>
	<div class="g-wrapper">
		<div class="m-left">
			<img src="../../images/img_login_back.png" height="490" width="284">
		</div>
		<div class="m-right">
			<div class="logo">
				<img src="../../images/logo.png" height="41" width="93">
			</div>
			<div class="title">
				<span class="CN">登录</span>
				<span class="EN">Login</span>
			</div>
			<div class="m-email">
				<div class="icon-wrapper">
					<img src="../../images/ic_Envelope.png" height="20" width="20" >
				</div>
				<input class="email login-input"  type="text" name="email" placeholder="请输入邮箱" v-validate="'required|email'" :class="{error:this.errors.has('email')}"  v-model="email" >
			</div>
			<div class="m-password">
				<div class="icon-wrapper">
					<img src="../../images/ic_Lock.png" height="20" width="20">
				</div>
				<input class="password login-input" type="password"   name="password" placeholder="请输入密码" v-validate="'required'" :class="{error:this.errors.has('password')}"  v-model="password" >
			</div>
	      <div class="login-info" v-if="loginError">
	        {{loginErrorText}}
	      </div>
			<div class="btn-wrapper">
				<a href="javascript:;" class="u-btn btn-login" @click="login" @keyup.13="login">登录</a>
			</div>
		</div>
	</div>
</template>

<script>
	import axios from 'axios'
	import md5 from 'js-md5'
  import {LOGIN_URL} from '../../Constants'


	export default {
		data () {
			return {
				email: '',
				password: '',
		        loginError:false,
		        loginErrorText:'',
			}
		},
		methods: {
			login() {
		        const _this = this
		        this.$validator.validateAll();
		        if(!this.errors.any()){
		          axios({
		            method: 'post',
		            url: LOGIN_URL,
		            data: {
		              email: this.email,
		              password: md5(this.password)
		            }
		          }).then(function(res) {
		            if (res.data.code === 1000) {
		              _this.$cookie.set('access_token', res.data.content, 1);
		              _this.$router.push({path: '/'})
		              _this.password=''
		              _this.loginError=false;
		              _this.loginErrorText='';
		            }
		            if (res.data.code === -1001) {
		              _this.loginError=true;
		              _this.loginErrorText='账号或密码错误';
		            }
		          })
		        }

			}
		}
	}
</script>

<style rel="stylesheet" style="stylesheet/scss" lang="scss">
	.g-wrapper{
		position:fixed;
		top: 50%;
		left:50%;
		width: 726px;
		height:490px;
		background:#fff;
		box-shadow: 0 2px 10px 0;
		border-radius: 6px;
		over-flow:hidden;
		transform: translateX(-50%) translateY(-50%);
		.m-left{
			display:inline-block;
		}
		.m-right{
			position:relative;
			display:inline-block;
			vertical-align:top;
			width:340px;
			margin-left:50px;
			font-size:0;
			.logo{
				padding:41px 0;
				text-align:center;
			}
			.title{
				width:100%;
				padding-bottom:18px;
				color:#858585;
				border-bottom:2px solid #eaeaea;
				.CN{
					padding:12px 7px 0 0;
					font-size:20px;
					border-top:1px solid #ffb372;
				}
				.EN{
					font-size:14px;
				}
			}
			.m-email{
				margin-top:39px;
				.icon-wrapper{
					padding-top:10px;
				}
			}
			.m-password{
				margin-top:20px;
				.icon-wrapper{
					padding-top:10px;
				}
			}
		      .login-info {
		      	position:absolute;
		      	width:100%;
		      	text-align:center;
		        line-height: 30px;
		        color:#ec4d31;
		        font-size:16px;
		      }
			.btn-wrapper{
				margin-top:60px;
				text-align:center;
				.btn-login{
					padding:7px 65px;
					color:#fff;
					letter-spacing:10px;
				}
			}
		}
	}
  .error{
    border-color: #ec4d31;
  }
</style>
