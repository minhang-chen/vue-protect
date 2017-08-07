<template>
	<div class="m-header">
		<router-link class="m-logo" to="/" @click.native="refresh()">
			<img class="logo" src="../../images/logo2.png" height="39" width="97" >
		</router-link>
		<div class="m-search">
			<input type="text" placeholder="搜索" class="search" v-model="findInfo">
			<img src="../../images/ic_search.png" class="img-search" height="13" width="13" @click="find()">
		</div>
    <span class="quit" @click="clearCookie()">注销</span>
	</div>
</template>

<script>
    export default{
        data(){
        return{
          findInfo:''
        }
      },
      methods:{
        find(){
          this.$emit('findInfo',this.findInfo)
        },
        clearCookie(){
          this.$cookie.delete('access_token');
          location.reload()
        },
        refresh(){
          location.reload()
        }

      }
    }
</script>

<style rel="stylesheet" lang="scss">
	.m-header{
		overflow:hidden;
		font-size:0;
		background:#fff;
		box-shadow:0 2px 8px 0 rgba(189,189,189,0.29);
		.m-logo{
			float:left;
			width:203px;
			height:70px;
			line-height:70px;
			text-align:center;
			background-image:linear-gradient(-138deg, #ff9166 0%, #fbb78c 100%);
			.logo{
				display:inline-block;
				vertical-align:middle;
			}
		}
		.m-search{
			position:relative;
			float:right;
			margin-top:15px;
			margin-right:55px;
			.search{
				width:235px;
				line-height:38px;
				padding:0 16px;
				background:#f6f6f6;
				border:1px solid #e5e5e5;
				border-radius:18px;
				font-size:16px;
				color:#d3d3d3;
			}
			.img-search{
				position:absolute;
				top:13px;
				right:16px;
				cursor:pointer;
			}
		}
    .quit {
      font-size: 16px;
      position: absolute;
      right: 12px;
      top:25px;
      cursor: pointer;
    }
	}
</style>
