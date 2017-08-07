<template>
	<div>
		<header-public></header-public>
		<div class="m-wrapper">
			<div class="title">
				<div>随访表</div>
				<div class="list">
					<a href="javascript:;" class="back">返回</a>
					<a href="javascript:;" class="list-item">我的患者</a>><a href="javascript:;" class="list-item">随访表</a>
					<div class="m-name">
						<span class="name">张小兰</span>（ID：<span>1234564</span>）
					</div>
				</div>
			</div>
			<div class="m-table-list">
				<div class="m-tr">
					<p class="title">1、基本资料</p>
					<div style="display:flex">
						<div class="question-box">
              <span class="u-name">姓名</span>
							<div class="m-option">
								<input class="u-text" type="text">
							</div>
							<span class="u-name">年龄</span>
							<div class="m-option">
								<input class="u-text" type="text">
							</div>
              <span class="u-name">出生年月</span>
              <div class="m-option">
                <input class="u-text" type="text">
              </div>
						</div>
					</div>
					<div style="display:flex">
            <span class="u-name">患者编号</span>
            <div class="m-option">
              <input class="u-text" type="text">
            </div>
            <span class="u-name">联系电话</span>
            <div class="m-option">
              <input class="u-text" type="text">
            </div>
					</div>
				</div>
				<div class="m-tr">
					<p class="title">2、糖尿病的分型</p>
					<div style="display:flex">
						<div class="question-box">
							<div class="m-option">
								<input class="u-radio" type="radio">
								<label class="hook">
									1型糖尿病
								</label>
							</div>
							<div class="m-option">
								<input class="u-radio" type="radio">
								<label class="hook">
									2型糖尿病
								</label>
							</div>
              <div class="m-option">
                <input class="u-radio" type="radio">
                <label class="hook">
                  妊娠糖尿病
                </label>
              </div>
						</div>
					</div>
				</div>
				<div class="m-tr">
					<p class="title">3、目前身体检测指标</p>
					<div style="display:flex">
						<div class="question-box">
              <span class="u-name">身高</span>
							<div class="m-option">
                <input class="u-text" type="text">
                <span class="u-unit">cm</span>
							</div>
              <span class="u-name">体重</span>
              <div class="m-option">
                <input class="u-text" type="text">
                <span class="u-unit">kg</span>
              </div>
              <span class="u-name">体重指数BMI</span>
							<div class="m-option">
								<input class="u-text" type="text">
								<span class="u-unit">kg/m2</span>
							</div>
						</div>
					</div>
          <div style="display:flex">
            <div class="question-box">
              <span class="u-name">腰围</span>
              <div class="m-option">
                <input class="u-text" type="text">
                <span class="u-unit">cm</span>
              </div>
              <span class="u-name">臀围</span>
              <div class="m-option">
                <input class="u-text" type="text">
                <span class="u-unit">cm</span>
              </div>
              <span class="u-name">血压</span>
              <div class="m-option">
                <input class="u-text" type="text">
                <span class="u-unit">mmHg</span>
              </div>
              <span class="u-name">心率</span>
              <div class="m-option">
                <input class="u-text" type="text">
                <span class="u-unit">次/分</span>
              </div>
            </div>
          </div>
          <div style="display:flex">
            <div class="question-box">
              <span class="u-name">空腹血糖</span>
              <div class="m-option">
                <input class="u-text" type="text">
                <span class="u-unit">mmol/L</span>
              </div>
              <span class="u-name">餐后2h</span>
              <div class="m-option">
                <input class="u-text" type="text">
                <span class="u-unit">mmol/L</span>
              </div>
              <span class="u-name">HbA1c</span>
              <div class="m-option">
                <input class="u-text" type="text">
                <span class="u-unit">%</span>
              </div>
            </div>
          </div>
				</div>
				<div class="m-tr">
					<p class="title">4．糖尿病患者血糖控制程度评估</p>
          <div style="display:flex">
            <div class="question-box">
              <div class="m-option">
                <input class="u-radio" type="radio">
                <label class="hook">
                  优秀
                </label>
              </div>
              <div class="m-option">
                <input class="u-radio" type="radio">
                <label class="hook">
                  良好
                </label>
              </div>
              <div class="m-option">
                <input class="u-radio" type="radio">
                <label class="hook">
                  中等
                </label>
              </div>
              <div class="m-option">
                <input class="u-radio" type="radio">
                <label class="hook">
                  差
                </label>
              </div>
            </div>
          </div>
				</div>
        <div class="m-tr">
          <p class="title">10、并发症及不良反应</p>
          <div style="display:flex">
            <span class="u-name">急性并发症</span>
            <div class="question-box">
              <div class="small-box">
                <span class="u-name">酮症酸中毒</span>
                <div class="m-option">
                  <input class="u-radio" type="radio" value="1" >
                  <label class="hook">
                    是
                  </label>
                </div>
                <div class="m-option">
                  <input class="u-radio" type="radio" value="2" >
                  <label class="hook">
                    否
                  </label>
                </div>
              </div>
              <div class="small-box">
                <span class="u-name">高渗性非酮症糖尿病昏迷</span>
                <div class="m-option">
                  <input class="u-radio" type="radio" value="1" >
                  <label class="hook">
                    是
                  </label>
                </div>
                <div class="m-option">
                  <input class="u-radio" type="radio" value="2" >
                  <label class="hook">
                    否
                  </label>
                </div>
              </div>
              <div class="small-box">
                <span class="u-name">乳酸性酸中毒</span>
                <div class="m-option">
                  <input class="u-radio" type="radio" value="1" >
                  <label class="hook">
                    是
                  </label>
                </div>
                <div class="m-option">
                  <input class="u-radio" type="radio" value="2" >
                  <label class="hook">
                    否
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div style="display:flex">
            <span class="u-name">慢性病发作</span>
            <div class="question-box">
              <div class="small-box">
                <span class="u-name">血管病变：动脉粥样硬化、冠心病</span>
                <div class="m-option">
                  <input class="u-radio" type="radio" value="1" >
                  <label class="hook">
                    是
                  </label>
                </div>
                <div class="m-option">
                  <input class="u-radio" type="radio" value="2" >
                  <label class="hook">
                    否
                  </label>
                </div>
              </div>
              <div class="small-box">
                <span class="u-name">神经病变：肢端感觉异常、胃轻瘫、尿失禁、尿潴留</span>
                <div class="m-option">
                  <input class="u-radio" type="radio" value="1" >
                  <label class="hook">
                    是
                  </label>
                </div>
                <div class="m-option">
                  <input class="u-radio" type="radio" value="2" >
                  <label class="hook">
                    否
                  </label>
                </div>
              </div>
              <div class="small-box">
                <span class="u-name">糖尿病肾病：蛋白尿</span>
                <div class="m-option">
                  <input class="u-radio" type="radio" value="1" >
                  <label class="hook">
                    是
                  </label>
                </div>
                <div class="m-option">
                  <input class="u-radio" type="radio" value="2" >
                  <label class="hook">
                    否
                  </label>
                </div>
              </div>
              <div class="small-box">
                <span class="u-name">眼部病变：白内障、青光眼等</span>
                <div class="m-option">
                  <input class="u-radio" type="radio" value="1" >
                  <label class="hook">
                    是
                  </label>
                </div>
                <div class="m-option">
                  <input class="u-radio" type="radio" value="2" >
                  <label class="hook">
                    否
                  </label>
                </div>
              </div>
              <div class="small-box">
                <span class="u-name">足部病变：疼痛、溃疡、肢端坏死</span>
                <div class="m-option">
                  <input class="u-radio" type="radio" value="1" >
                  <label class="hook">
                    是
                  </label>
                </div>
                <div class="m-option">
                  <input class="u-radio" type="radio" value="2" >
                  <label class="hook">
                    否
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div style="display:flex">
            <span class="u-name">低血糖</span>
            <div class="question-box">
              <div class="small-box">
                <span class="u-name">（心慌、大汗、头晕）</span>
                <div class="m-option">
                  <input class="u-radio" type="radio" value="1" >
                  <label class="hook">
                    是
                  </label>
                </div>
                <div class="m-option">
                  <input class="u-radio" type="radio" value="2" >
                  <label class="hook">
                    否
                  </label>
                </div>
              </div>
              <div class="small-box">
                <span class="u-name">饥饿感</span>
                <div class="m-option">
                  <input class="u-radio" type="radio" value="1" >
                  <label class="hook">
                    是
                  </label>
                </div>
                <div class="m-option">
                  <input class="u-radio" type="radio" value="2" >
                  <label class="hook">
                    否
                  </label>
                </div>
              </div>
              <div class="small-box">
                <span class="u-name">视力模糊</span>
                <div class="m-option">
                  <input class="u-radio" type="radio" value="1" >
                  <label class="hook">
                    是
                  </label>
                </div>
                <div class="m-option">
                  <input class="u-radio" type="radio" value="2" >
                  <label class="hook">
                    否
                  </label>
                </div>
              </div>
              <div class="small-box">
                <span class="u-name">面色苍白</span>
                <div class="m-option">
                  <input class="u-radio" type="radio" value="1" >
                  <label class="hook">
                    是
                  </label>
                </div>
                <div class="m-option">
                  <input class="u-radio" type="radio" value="2" >
                  <label class="hook">
                    否
                  </label>
                </div>
              </div>
              <div class="small-box">
                <span class="u-name">心理障碍</span>
                <div class="m-option">
                  <input class="u-radio" type="radio" value="1" >
                  <label class="hook">
                    是
                  </label>
                </div>
                <div class="m-option">
                  <input class="u-radio" type="radio" value="2" >
                  <label class="hook">
                    否
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div style="display:flex">
            <span class="u-name">药物的不良反应</span>

          </div>
        </div>
				<div class="m-tr">
					<p class="title">11、健康宣教内容</p>
					<textarea class="m-textarea" placeholder="请填写特殊情况">

					</textarea>
				</div>
				<div class="m-bottom">
					<a href="javascript:;" class="u-btn save">保存</a>
				</div>
			</div>
		</div>

	</div>
</template>

<script>
	import header from '../../components/header/header.vue'

	export default{
		components: {
			'header-public': header
		}
	}
</script>

<style rel="stylesheet" style="stylesheet/scss" lang="scss">
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
		.m-table-list{
			margin-top:19px;
			padding: 0 27px;
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
