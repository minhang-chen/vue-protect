<template>
	<div>
		<header-public></header-public>
		<div class="m-wrapper">
			<div class="title">
				<div>随访表</div>
				<div class="list">
          <a @click="returnPrompt" href="javascript:;"  class="back">返回</a>
					<a href="javascript:;" class="list-item">我的患者</a>><a href="javascript:;" class="list-item">{{name}}</a> > <a href="javascript:;" class="list-item">随访表</a>
				</div>
			</div>
      <div class="m-information">
        <span class="name">姓名：{{name}}</span><span class="sex">性别：{{sex}}</span><span class="system-id">ID：{{systemId}}</span><span class="exam-id">体检号：{{examId}}</span>
      </div>
			<div class="m-table-list">
        <div class="table-title">{{paperName}}</div>
        <date-picker  @endtime="time2" ></date-picker>
				<div class="m-tr">
					<p class="title">1、饮食记录完整性如何？</p>
					<div style="display:flex">
						<div class="question-box">
							<div class="m-option">
								<input class="u-radio" type="radio" v-model="answers.Q1.value[0]" value="1">
								<label class="hook">
									完整
								</label>
							</div>
							<div class="m-option">
								<input class="u-radio" type="radio" v-model="answers.Q1.value[0]" value="2">
								<label class="hook">
									不完整
								</label>
							</div>
						</div>
					</div>
				</div>
				<div class="m-tr">
					<p class="title">2、具体饮食特色如何？</p>
					<div style="display:flex">
						<span class="u-name">主食</span>
            <div class="question-box">
              <div class="m-option">
                <input class="u-radio" type="radio" value="1" v-model="answers.Q2.value[0]">
                <label class="hook">
                  过多
                </label>
              </div>
              <div class="m-option">
                <input class="u-radio" type="radio" value="2" v-model="answers.Q2.value[0]">
                <label class="hook">
                  过少
                </label>
              </div>
              <div class="m-option">
                <input class="u-radio" type="radio" value="3" v-model="answers.Q2.value[0]">
                <label class="hook">
                  正常
                </label>
              </div>
              <div class="m-option">
                <input class="u-radio" type="radio" value="4" v-model="answers.Q2.value[0]">
                <label class="hook">
                  粗细搭配
                </label>
              </div>
            </div>
					</div>
					<div style="display:flex">
						<span class="u-name">蛋白质</span>
						<div class="question-box">
							<div class="m-option">
								<input class="u-radio" type="radio" value="1" v-model="answers.Q2.value[1]">
								<label class="hook">
									过多
								</label>
							</div>
							<div class="m-option">
								<input class="u-radio" type="radio" value="2" v-model="answers.Q2.value[1]">
								<label class="hook">
									过少
								</label>
							</div>
							<div class="m-option">
								<input class="u-radio" type="radio" value="3" v-model="answers.Q2.value[1]">
								<label class="hook">
									正常
								</label>
							</div>
							<div class="m-option">
								<input class="u-radio" type="radio" value="4" v-model="answers.Q2.value[1]">
								<label class="hook">
									肉类为主
								</label>
							</div>
							<div class="m-option">
								<input class="u-radio" type="radio" value="5" v-model="answers.Q2.value[1]">
								<label class="hook">
									鸡鸭为主
								</label>
							</div>
							<div class="m-option">
								<input class="u-radio" type="radio" value="6" v-model="answers.Q2.value[1]">
								<label class="hook">
									鱼虾类为主
								</label>
							</div>
							<div class="m-option">
								<input class="u-radio" type="radio" value="7" v-model="answers.Q2.value[1]">
								<label class="hook">
									均衡
								</label>
							</div>
						</div>
					</div>
          <div style="display:flex">
            <span class="u-name">蔬菜</span>
            <div class="question-box">
              <div class="m-option">
                <input class="u-radio" type="radio" value="1" v-model="answers.Q2.value[2]">
                <label class="hook">
                  过多
                </label>
              </div>
              <div class="m-option">
                <input class="u-radio" type="radio" value="2" v-model="answers.Q2.value[2]">
                <label class="hook">
                  过少
                </label>
              </div>
              <div class="m-option">
                <input class="u-radio" type="radio" value="3" v-model="answers.Q2.value[2]">
                <label class="hook">
                  正常
                </label>
              </div>
              <div class="m-option">
                <input class="u-radio" type="radio" value="4" v-model="answers.Q2.value[2]">
                <label class="hook">
                  叶菜为主
                </label>
              </div>
              <div class="m-option">
                <input class="u-radio" type="radio" value="5" v-model="answers.Q2.value[2]">
                <label class="hook">
                  瓜菜为主
                </label>
              </div>
              <div class="m-option">
                <input class="u-radio" type="radio" value="6" v-model="answers.Q2.value[2]">
                <label class="hook">
                  均衡
                </label>
              </div>
            </div>
          </div>
          <div style="display:flex">
            <span class="u-name">水果</span>
            <div class="question-box">
              <div class="m-option">
                <input class="u-radio" type="radio" value="1" v-model="answers.Q2.value[3]">
                <label class="hook">
                  过多
                </label>
              </div>
              <div class="m-option">
                <input class="u-radio" type="radio" value="2" v-model="answers.Q2.value[3]">
                <label class="hook">
                  过少
                </label>
              </div>
              <div class="m-option">
                <input class="u-radio" type="radio" value="3" v-model="answers.Q2.value[3]">
                <label class="hook">
                  正常
                </label>
              </div>
            </div>
          </div>
          <div style="display:flex">
            <span class="u-name">油脂</span>
            <div class="question-box">
              <div class="m-option">
                <input class="u-radio" type="radio" value="1" v-model="answers.Q2.value[4]">
                <label class="hook">
                  过多
                </label>
              </div>
              <div class="m-option">
                <input class="u-radio" type="radio" value="2" v-model="answers.Q2.value[4]">
                <label class="hook">
                  过少
                </label>
              </div>
              <div class="m-option">
                <input class="u-radio" type="radio" value="3" v-model="answers.Q2.value[4]">
                <label class="hook">
                  正常
                </label>
              </div>
            </div>
          </div>
          <div style="display:flex">
            <span class="u-name">食物多样性</span>
            <div class="question-box">
              <div class="m-option">
                <input class="u-radio" type="radio" value="1" v-model="answers.Q2.value[5]">
                <label class="hook">
                  是
                </label>
              </div>
              <div class="m-option">
                <input class="u-radio" type="radio" value="2" v-model="answers.Q2.value[5]">
                <label class="hook">
                  否
                </label>
              </div>
            </div>
          </div>
				</div>
				<div class="m-tr">
					<p class="title">3、运动执行情况？</p>
					<div style="display:flex">
						<span class="u-name">有氧运动</span>

						<div class="question-box">
							<span class="u-name">类型</span>
							<div class="m-option">
								<input class="u-text" type="text" v-model="answers.Q3.value[0][0]">
							</div>
							<span class="u-name">时长</span>
							<div class="m-option">
								<input class="u-text" type="text"  v-model="answers.Q3.value[0][1]">
								<span class="u-unit">分钟</span>
							</div>
							<span class="u-name">（建议30~60分钟）</span>
						</div>
					</div>
					<div style="display:flex">
						<span class="u-name">抗阻力运动</span>

						<div class="question-box">
							<span class="u-name">类型</span>
							<div class="m-option">
								<input class="u-text" type="text"  v-model="answers.Q3.value[1][0]">
							</div>
							<span class="u-name">时长</span>
							<div class="m-option">
								<input class="u-text" type="text"  v-model="answers.Q3.value[1][1]">
								<span class="u-unit">分钟</span>
							</div>
							<span class="u-name">（建议每天15-20min，每周至少5天）</span>
						</div>
					</div>
				</div>
				<div class="m-tr">
					<p class="title">4、体重情况？</p>
					<div style="display:flex">
						<span class="u-name">是否每日称量体重（晨起称量）并记录体重？</span>
						<div class="question-box">
							<div class="m-option">
								<input class="u-radio" type="radio" value="1" v-model="answers.Q4.value[0]">
								<label class="hook">
									是
								</label>
							</div>
							<div class="m-option">
								<input class="u-radio" type="radio" value="2" v-model="answers.Q4.value[0]">
								<label class="hook">
									否
								</label>
							</div>
						</div>
					</div>
					<div style="display:flex">
						<span class="u-name">本周体重下降</span>
						<div class="question-box">
							<div class="m-option">
								<input class="u-text" type="text" v-model="answers.Q4.value[1]">
								<span class="u-unit">公斤</span>
							</div>
						</div>
					</div>
					<div style="display:flex">
						<span class="u-name">体重下降速度过快或过慢？</span>
						<div class="question-box">
							<div class="m-option">
								<input class="u-radio" type="radio" value="1" v-model="answers.Q4.value[2]">
								<label class="hook">
									是
								</label>
							</div>
							<div class="m-option">
								<input class="u-radio" type="radio" value="2"  v-model="answers.Q4.value[2]">
								<label class="hook">
									否
								</label>
							</div>
						</div>
					</div>
				</div>
				<div class="m-tr">
					<p class="title">5、用药依从性？</p>
					<div style="display:flex">
						<span class="u-name">是否有忘记服药经历？</span>
						<div class="question-box">
							<div class="m-option">
								<input class="u-radio" type="radio" value="1" v-model="answers.Q5.value[0][0]">
								<label class="hook">
									是
								</label>
							</div>
							<div class="m-option">
								<input class="u-radio" type="radio" value="2" v-model="answers.Q5.value[0][0]">
								<label class="hook">
									否
								</label>
							</div>
							<div class="m-option">
								<input class="u-text" type="text" v-model="answers.Q5.value[0][1]">
								<span class="u-unit">次</span>
							</div>
						</div>
					</div>
					<div style="display:flex">
						<span class="u-name">是否曾自行停药？</span>
						<div class="question-box">
							<div class="m-option">
								<input class="u-radio" type="radio" value="1" v-model="answers.Q5.value[1]">
								<label class="hook">
									是
								</label>
							</div>
							<div class="m-option">
								<input class="u-radio" type="radio" value="2" v-model="answers.Q5.value[1]">
								<label class="hook">
									否
								</label>
							</div>
						</div>
					</div>
					<div style="display:flex">
						<span class="u-name">是否使用其他药物？</span>
						<div class="question-box">
							<div class="m-option">
                <input class="u-text" type="text" v-model="answers.Q5.value[2]">
							</div>
						</div>
					</div>
				</div>
				<div class="m-tr">
					<p class="title">6、不良反应</p>
					<div style="display:flex">
						<span class="u-name">低血糖反应及低血压的症状（心慌、大汗、黑朦）</span>
						<div class="question-box">
							<div class="m-option">
								<input class="u-radio" type="radio" value="1" v-model="answers.Q6.value[0]">
								<label class="hook">
									是
								</label>
							</div>
							<div class="m-option">
								<input class="u-radio" type="radio" value="2" v-model="answers.Q6.value[0]">
								<label class="hook">
									否
								</label>
							</div>
						</div>
					</div>
					<div style="display:flex">
						<span class="u-name">低血压的症状（头晕、目眩、黑朦）</span>
						<div class="question-box">
							<div class="m-option">
								<input class="u-radio" type="radio" value="1" v-model="answers.Q6.value[1]">
								<label class="hook">
									是
								</label>
							</div>
							<div class="m-option">
								<input class="u-radio" type="radio" value="2" v-model="answers.Q6.value[1]">
								<label class="hook">
									否
								</label>
							</div>
						</div>
					</div>
					<div style="display:flex">
						<span class="u-name">便秘</span>
						<div class="question-box">
							<div class="m-option">
								<input class="u-radio" type="radio" value="1" v-model="answers.Q6.value[2]">
								<label class="hook">
									是
								</label>
							</div>
							<div class="m-option">
								<input class="u-radio" type="radio" value="2" v-model="answers.Q6.value[2]">
								<label class="hook">
									否
								</label>
							</div>
						</div>
					</div>
					<div style="display:flex">
						<span class="u-name">饥饿感</span>
						<div class="question-box">
							<div class="m-option">
								<input class="u-radio" type="radio" value="1" v-model="answers.Q6.value[3]">
								<label class="hook">
									是
								</label>
							</div>
							<div class="m-option">
								<input class="u-radio" type="radio" value="2" v-model="answers.Q6.value[3]">
								<label class="hook">
									否
								</label>
							</div>
						</div>
					</div>
					<div style="display:flex">
						<span class="u-name">心理障碍</span>
						<div class="question-box">
							<div class="m-option">
								<input class="u-radio" type="radio" value="1" v-model="answers.Q6.value[4]">
								<label class="hook">
									是
								</label>
							</div>
							<div class="m-option">
								<input class="u-radio" type="radio" value="2" v-model="answers.Q6.value[4]">
								<label class="hook">
									否
								</label>
							</div>
						</div>
					</div>
				</div>
				<div class="m-tr">
					<p class="title">7、提醒1周后门诊就诊</p>
					<span class="remind-text">带上饮食和运动日记，不需要空腹</span>
				</div>
				<div class="m-tr">
					<p class="title">8、特殊情况备注</p>
					<textarea class="m-textarea" placeholder="请填写特殊情况"  v-model="answers.Q8.value[0]">

					</textarea>
				</div>
				<div class="m-bottom">
					<a href="javascript:;" class="u-btn save" @click="submitAnswer">保存</a>
				</div>
			</div>
		</div>
    <dialog-public :paperDialogShow='paperDialogShow' @determine="judge" @save="judge" @close="judge"></dialog-public>
	</div>
</template>

<script>
	import header from '../../components/header/header.vue'
  import dialog from '../../components/dialog/dialog.vue'
  import datePicker from '../../components/datePicker.vue'
  import axios from 'axios'
  import {VIEW_SURVEY_ANS_URL,ADD_SURVEY_ANS_URL,MODIFY_SURVEY_ANS_URL,PATIENT_URL,SFLIST_URL,VIEW_PATIENT_URL} from '../../Constants'
	export default{
		components: {
			'header-public': header,
      'dialog-public': dialog,
      'date-picker' : datePicker
		},
    data(){
		  return {
        id:this.$route.query?this.$route.query.id:'',
        systemId:'',
        name:'',
        paperId:this.$route.query?this.$route.query.paperId:'',
        patientId:this.$route.query?this.$route.query.patientId:'',
        examId:'',
        paperName:'',
        sex:'',
        paperDialogShow:false,
        startTime:'',
        answers:{
          date:{},
          Q1:{
            value:[""]
          },
          Q2:{
            value:["","","","","",""]
          },
          Q3:{
            value:[["",""],["",""]]
          },
          Q4:{
            value:["","",""]
          },
          Q5:{
            value:[["",""],"",""]
          },
          Q6:{
            value:["","","","",""]
          },
          Q8:{
            value:[""]
          }
        }
      }
    },
    mounted(){
      const _this = this;
      if(this.$route.query.id){
        axios({
          method: 'get',
          url: `${VIEW_SURVEY_ANS_URL}?id=${this.id}`
        }).then(function (res) {
          if (res.data.code === 0){
            _this.paperId=res.data.content.paperId;
            _this.patientId=res.data.content.patientId;
            _this.answers=JSON.parse(res.data.content.ansData);
            if(_this.answers.date === ''){
              _this.startTime = ''
            }else{
              _this.startTime = _this.answers.date
            }
            axios({
              method: 'get',
              url: `${SFLIST_URL}?patientId=${_this.patientId}&page=0&size=0`
            }).then(function (res) {
              for(var i=0;i<res.data.content.list.length;i++){
                if(res.data.content.list[i].paperId === _this.paperId){
                  _this.paperName = res.data.content.list[i].paperName
                }
              }
            })
            axios({
              method: 'get',
              url: `${VIEW_PATIENT_URL}?id=${_this.patientId}`
            }).then(function (res) {
                  _this.name = res.data.content.name
                  _this.systemId = res.data.content.systemId
                  _this.examId = res.data.content.examId
                  if(res.data.content.gender === 'm'){
                    _this.sex="男"
                  }else{
                    _this.sex="女"
                  }
              })
            }
        })
      }
      if(this.$route.query.patientId){
        this.paperName=this.$route.query.paperName
        axios({
          method: 'get',
          url: `${VIEW_PATIENT_URL}?id=${_this.patientId}`
        }).then(function (res) {
              _this.name = res.data.content.name
              _this.systemId = res.data.content.systemId
              _this.examId = res.data.content.examId
              if(res.data.content.gender === 'm'){
                _this.sex="男"
              }else{
                _this.sex="女"
              }
        })
      }
    },
    methods:{
      time2(res){
        this.answers.date=res
      },
      submitAnswer(){
        const _this=this;
        let json={
          "paperId": this.paperId,
          "patientId": this.patientId,
          "ansData": JSON.stringify(this.answers)
        };
        if(this.id){
          json=_.assignIn(json,{id:this.id});
        }
        axios({
          method: 'post',
          url: this.id?`${MODIFY_SURVEY_ANS_URL}`:`${ADD_SURVEY_ANS_URL}`,
          data:json
        }).then(function (res) {
          if (res.data.code === 0){
            _this.$router.push({path: '/sfPrivate?id='+_this.patientId})
          }
        })
      },
      returnPrompt(){
        this.paperDialogShow = true
      },
      judge(res){
        if(res===true){
          this.$router.push({path: '/sfPrivate?id='+this.patientId})
        }else if(res===false){
          this.submitAnswer()
        }else{
          this.paperDialogShow=false
        }
      }
    }
	}
</script>

<style rel="stylesheet" lang="scss">
	.m-wrapper{
		padding-bottom:109px;
		.title{
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
    .m-information{
      margin-top:32px;
      padding: 0 27px;
      font-size:16px;
      border-radius: 5px;
      border: 1px solid #eee;
      background: #fff;
      box-shadow:0 2px 8px 0 rgba(189,189,189,0.29);
      .name,.sex,.system-id,.exam-id{
        line-height:102px;
        margin-right:80px;
      }
    }
		.m-table-list{
			margin-top:19px;
			padding: 0 27px;
      .table-title{
        margin-top: 60px;
        font-size:29px;
        text-align:center;
      }
      .time{
        margin-top: 18px;
        font-size: 18px;
        text-align: center;
      }
			.m-tr{
				font-size:0;
				border-bottom: 1px solid #eaeaea;
				.title{
					margin-top:26px;
					font-size:16px;
					color:#2b2b2b;
				}
			}
			.m-bottom{
				text-align: right;
				width:calc( 100% -  80px );
				line-height:87px;
				margin:0 auto 0 auto;
				.save{
					margin-right:20px;
					padding:6px 74px;
				}
			}
		}
	}
</style>
