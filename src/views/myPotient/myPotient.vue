<template>
	<div>
		<header-public @findInfo = "findName"></header-public>
		<div class="m-wrapper">
			<div class="title">
				<span>我的患者</span>
				<router-link to="/myInformation" class="btn-white">
					<img class="icon-person" src="../../images/ic_addperson.png" height="23" width="23">添加患者
				</router-link>
        <div v-if="returnStatus" class="list">
          <a  @click='getPatient' class="back">返回</a>
          <span>共搜索到{{count}}条结果</span>
        </div>
			</div>
			<div class="m-table">
				<table class="table">
					<thead>
						<tr>
							<td>姓名</td>
              <td>性别</td>
							<td>年龄</td>
              <td>序号</td>
              <td>电话</td>
							<td>操作</td>
						</tr>
					</thead>
					<tbody>
						<tr v-for="(information, index) in informations">
							<td>{{information.name}}</td>
							<td>{{sex[index]}}</td>
              <td>{{information.age}}</td>
              <td>{{information.examId==""?"-":information.examId}}</td>
              <td>{{information.phone==""?"-":information.phone}}</td>
							<td>
								<div class="operating">
                  <router-link :to="{ path: 'myInformation', query:{id: information.id}}" class="xinxi"><img src="../../images/ic_xinxi.png" height="30" width="30"></router-link>
                  <router-link :to="{path:'sfPrivate', query: {id:information.id}}" calss="list">
									  <img src="../../images/ic_list.png" height="30" width="30">
                  </router-link>
									<a href="javascript:;" class="delet" @click="delet(index)"><img src="../../images/ic_delet.png" height="30" width="30"></a>
								</div>
							</td>
						</tr>
					</tbody>
				</table>
        <pagination :pageNum=pageNum :page=page @prePage = "ChangePage" @nextPage = "ChangePage" @toPage="ChangePage"></pagination>
			</div>
		</div>
	</div>
</template>

<script>
	import axios from 'axios'
	import header from '../../components/header/header.vue'
	import {PATIENT_URL,REMOVE_PATIENT_URL,FIND_PATIENT_URL} from '../../Constants'
  import pagination from '../../components/pagination/pagination.vue'
	export default{
		components: {
			'header-public': header,
      'pagination': pagination
		},
		data () {
			return {
				informations: '',
        page:'1',
        pageNum:'',
        pageSize:'8',
        change:true,
        findData:'',
        sex:[],
        count:'',
        returnStatus:false
			}
		},
		methods: {
			delet: function(index) {
			  const _this = this
        axios({
          method:'post',
          url: REMOVE_PATIENT_URL+'?id='+this.informations[index].id
        }).then(function () {
            _this.informations.splice(index, 1)
          if(_this.change){
            _this.getPatient();
          }else{
            this.getFindPatioent(_this.findData);
          }

        })
			},
      getPatient:function(){
        const _this = this
        this.change = true;
        this.returnStatus = false
        axios({
          method: 'get',
          url: PATIENT_URL+'?page='+this.page+'&size='+this.pageSize
        }).then(function (res) {
          _this.informations = res.data.content.list;
          _this.pageNum = (res.data.content.count)/_this.pageSize;
          if (_this.pageNum>parseInt(_this.pageNum)){
            _this.pageNum = parseInt(_this.pageNum)+1
          }else{
            _this.pageNum = _this.pageNum
          }
          _this.sex=[];
          for(let i=0;i<res.data.content.list.length;i++){
            if(res.data.content.list[i].gender==="f"){
              _this.sex.push('女');
            }else{
              _this.sex.push('男');
            }
          }
        })
      },
      ChangePage:function(res){
          this.page = res;
        if(this.change){
          this.getPatient();
        }else{
          this.getFindPatioent(this.findData);
        }
      },
      getFindPatioent:function(data){
        const _this = this
        this.change = false;
        this.returnStatus = true
        axios({
          methods:"get",
          url:FIND_PATIENT_URL+'?q='+data+'&page='+this.page+'&size='+this.pageSize
        }).then(function(res){
          _this.count = res.data.content.count;
          _this.informations = res.data.content.list;
          _this.pageNum = (res.data.content.count)/_this.pageSize;
          if (_this.pageNum>parseInt(_this.pageNum)){
            _this.pageNum = parseInt(_this.pageNum)+1
          }else{
            _this.pageNum = _this.pageNum
          }
          _this.sex=[];
          for(let i=0;i<res.data.content.list.length;i++){
            if(res.data.content.list[i].gender==="f"){
              _this.sex.push('女');
            }else{
              _this.sex.push('男');
            }
          }
        })
      },
      findName:function(data){
        const _this = this
        this.findData = data;
        if(data === ''){
          this.getPatient();
        }else {
          this.getFindPatioent(data);
        }

      }
		},
		mounted(){
		 this.getPatient()
		}
	}
</script>

<style rel="stylesheet"  lang="scss">
	.m-wrapper{
		.title{
      .list{
        margin-top:10px;
        font-size:14px;
        .back{
          color:#ffb372;
          cursor: pointer;
        }
      }
			overflow:hidden;
			.btn-white{
				position:relative;
				float:right;
				box-sizing:border-box;
				padding:8px 29px 8px 55px;
				.icon-person{
					position:absolute;
					top:7px;
					left:26px;
				}
			}
		}
		.m-table{
			height: 563px;
			margin-top: 39px;
			.table{
				.operating{
					position:absolute;
					left:61px;
					top:10px;
					font-size:0;
					a{
						margin-right:13px;
					}
				}
			}
		}
	}
</style>
