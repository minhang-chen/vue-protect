<template>
	<div>
    <header-public @findInfo = "findName"></header-public>
		<div class="m-wrapper">
			<div class="title">
				<div>
          {{name}}
          <a class="btn-white" @click="showPaperDialog"><img class="icon-person" src="../../images/ic_addlist.png" height="23" width="23">添加随访</a>
        </div>

				<div class="list">
          <router-link to="/" class="back">返回</router-link>
					<a href="javascript:;" class="list-item">我的患者</a>><a href="javascript:;" class="list-item">{{name}}</a>
				</div>
			</div>
			<div class="m-table">
				<table class="table">
					<thead>
						<tr>
							<td>随访表名称</td>
							<td>操作</td>
						</tr>
					</thead>
					<tbody>
						<tr v-for="(information, index) in informations">
							<td>{{information.paperName}}</td>
							<td>
								<div class="operating">
                  <router-link :to="{path:'sfTable', query: {id:information.id}}" class="xinxi"><img src="../../images/ic_bianji.png" height="30" width="30"></router-link>
									<a href="javascript:;" class="delet" @click="delet(index)"><img src="../../images/ic_delet.png" height="30" width="30"></a>
								</div>
							</td>
						</tr>
					</tbody>
				</table>
        <pagination :pageNum=pageNum :page=page  @prePage = "ChangePage" @nextPage = "ChangePage" @toPage="ChangePage"></pagination>
			</div>
		</div>
    <choose-paper :paperDialogShow='paperDialogShow' :patientId="patientId" @closePaperDialog="hidePaperDialog"></choose-paper>
	</div>
</template>

<script>
	import header from '../../components/header/header.vue'
  import choosePaper from '../../components/choosePaper.vue'
  import axios from 'axios'
  import {SFLIST_URL} from '../../Constants'
  import {PATIENT_URL} from '../../Constants'
  import {REMOVE_SFLIST_URL} from '../../Constants'
  import {FIND_SFLIST_URL} from '../../Constants'
  import {VIEW_PATIENT_URL} from '../../Constants'
  import pagination from '../../components/pagination/pagination.vue'

	export default {
		components: {
			'header-public': header,
      'pagination': pagination,
      'choose-paper':choosePaper
		},
		data () {
			return {
        name:'',
        page:'1',
        pageNum:'',
        pageSize:'8',
        patientId:'',
        paperId:'',
        informations: '',
        change:true,
        findData:'',
        paperDialogShow: false
			}
		},
		methods: {
      delet: function(index) {
        const _this = this
        axios({
          method:'post',
          url: REMOVE_SFLIST_URL+'?id='+this.informations[index].id
        }).then(function () {
          _this.informations.splice(index, 1)
          if(_this.change){
            _this.getPatient();
          }else{
            this.getFindPatioent(_this.findData);
          }
        })
      },
      ChangePage:function(res){
        this.page = res
        if(this.change){
          this.getPatient();
        }else{
          this.getFindPatioent(this.findData);
        }
      },
      getPatient(){
        const _this = this
        this.patientId = this.$route.query.id
        axios({
          method: 'get',
          url: SFLIST_URL+'?patientId='+this.patientId+'&page='+this.page+'&size='+this.pageSize
        }).then(function (res) {
          _this.informations = res.data.content.list;
          _this.pageNum = (res.data.content.count)/_this.pageSize;
          if (_this.pageNum>parseInt(_this.pageNum)){
            _this.pageNum = parseInt(_this.pageNum)+1
          }else{
            _this.pageNum = _this.pageNum
          }
        })
        axios({
          method: 'get',
          url: VIEW_PATIENT_URL+'?id='+this.patientId
        }).then(function (res) {
              _this.name = res.data.content.name
              _this.systemId = res.data.content.systemId
              _this.patientId = res.data.content.id
          }
        )
      },
      getFindPrivate:function(){
        const _this = this;
        axios({
          methods:"get",
          url:FIND_SFLIST_URL+'?name='+this.findData+'&id='+this.patientId+'&page='+this.page+'&size='+this.pageSize
        }).then(function(res){
          _this.informations = res.data.content.list;
          _this.pageNum = (res.data.content.count)/_this.pageSize;
          if (_this.pageNum>parseInt(_this.pageNum)){
            _this.pageNum = parseInt(_this.pageNum)+1
          }else{
            _this.pageNum = _this.pageNum
          }
        })
      },
      findName:function(data){
        const _this = this;
        this.findData = data;
        if(data === ''){
          this.getPatient()
        }else{
          _this.getFindPrivate(data)
        }
      },
      showPaperDialog() {
        this.paperDialogShow = true;
      },
      hidePaperDialog(){
        this.paperDialogShow = false;
      }
		},
    mounted(){
      this.getPatient()
    }

	}
</script>

<style rel="stylesheet" style="stylesheet/scss" lang="scss">
	.m-wrapper{
		.title{
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
			.list{
				margin-top:6px;
				font-size:14px;
				.back{
					color:#ffb372;
				}
				.m-name{
					float:right;
				}
			}
		}
		.m-table{
			height: 563px;
			margin-top: 19px;
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
