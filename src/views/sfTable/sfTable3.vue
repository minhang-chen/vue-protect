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
            <span class="u-name">体检号</span>
            <div class="m-option">
              <input class="u-text" type="text">
            </div>
            <span class="u-name">手机号</span>
            <div class="m-option">
              <input class="u-text" type="text">
            </div>
					</div>
				</div>
        <div class="m-tr">
          <p class="title">2、目前身体检测指标</p>
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
            </div>
          </div>
        </div>
				<div class="m-tr">
					<p class="title">2、心血管风险评估程度</p>
					<div style="display:flex">
						<div class="question-box">
							<div class="m-option">
								<input class="u-radio" type="radio">
								<label class="hook">
									轻危
								</label>
							</div>
							<div class="m-option">
								<input class="u-radio" type="radio">
								<label class="hook">
									中危
								</label>
							</div>
              <div class="m-option">
                <input class="u-radio" type="radio">
                <label class="hook">
                  高危
                </label>
              </div>
						</div>
					</div>
				</div>
				<div class="m-tr">
					<p class="title">4、慢性疾病</p>
          <div style="display:flex">
            <div class="question-box">
              <div class="m-option">
                <input class="u-radio" type="radio">
                <label class="hook">
                  高血压
                </label>
              </div>
              <div class="m-option">
                <input class="u-radio" type="radio">
                <label class="hook">
                  高血糖
                </label>
              </div>
              <div class="m-option">
                <input class="u-radio" type="radio">
                <label class="hook">
                  高尿酸
                </label>
              </div>
              <div class="m-option">
                <input class="u-radio" type="radio">
                <label class="hook">
                  高血脂
                </label>
              </div>
              <div class="m-option">
                <input class="u-radio" type="radio">
                <label class="hook">
                  骨质疏松
                </label>
              </div>
            </div>
          </div>
				</div>
        <div class="m-tr">
          <p class="title">6、饮食调查</p>
          <div style="display:flex">
            <span class="u-name">粗粮</span>
            <div class="question-box">
              <div class="m-option">
                <input class="u-radio" type="radio" value="1" >
                <label class="hook">
                  是
                </label>
              </div>
              <div class="m-option">
                <input class="u-radio" type="radio" value="1" >
                <label class="hook">
                  否
                </label>
              </div>
              <span class="u-name">（每周3次以上）</span>
            </div>
          </div>
          <div style="display:flex">
            <span class="u-name">肉类</span>
            <div class="question-box">
              <div class="m-option">
                <input class="u-radio" type="radio" value="1" >
                <label class="hook">
                  是
                </label>
              </div>
              <div class="m-option">
                <input class="u-radio" type="radio" value="1" >
                <label class="hook">
                  否
                </label>
              </div>
              <span class="u-name">（每周3次以上）</span>
            </div>
          </div>
          <div style="display:flex">
            <span class="u-name">动物内脏</span>
            <div class="question-box">
              <div class="m-option">
                <input class="u-radio" type="radio" value="1" >
                <label class="hook">
                  是
                </label>
              </div>
              <div class="m-option">
                <input class="u-radio" type="radio" value="1" >
                <label class="hook">
                  否
                </label>
              </div>
              <span class="u-name">（每周3次以上）</span>
            </div>
          </div>
          <div style="display:flex">
            <span class="u-name">油炸或油煎食品</span>
            <div class="question-box">
              <div class="m-option">
                <input class="u-radio" type="radio" value="1" >
                <label class="hook">
                  是
                </label>
              </div>
              <div class="m-option">
                <input class="u-radio" type="radio" value="1" >
                <label class="hook">
                  否
                </label>
              </div>
              <span class="u-name">（每周3次以上）</span>
            </div>
          </div>
          <div style="display:flex">
            <span class="u-name">奶类</span>
            <div class="question-box">
              <div class="m-option">
                <input class="u-radio" type="radio" value="1" >
                <label class="hook">
                  是
                </label>
              </div>
              <div class="m-option">
                <input class="u-radio" type="radio" value="1" >
                <label class="hook">
                  否
                </label>
              </div>
              <span class="u-name">（每周3次以上）</span>
            </div>
          </div>
          <div style="display:flex">
            <span class="u-name">鱼虾等水产品</span>
            <div class="question-box">
              <div class="m-option">
                <input class="u-radio" type="radio" value="1" >
                <label class="hook">
                  是
                </label>
              </div>
              <div class="m-option">
                <input class="u-radio" type="radio" value="1" >
                <label class="hook">
                  否
                </label>
              </div>
              <span class="u-name">（每周3次以上）</span>
            </div>
          </div>
          <div style="display:flex">
            <span class="u-name">蔬菜</span>
            <div class="question-box">
              <div class="m-option">
                <input class="u-radio" type="radio" value="1" >
                <label class="hook">
                  是
                </label>
              </div>
              <div class="m-option">
                <input class="u-radio" type="radio" value="1" >
                <label class="hook">
                  否
                </label>
              </div>
              <span class="u-name">（每周3次以上）</span>
            </div>
          </div>
        </div>
        <div class="m-tr">
          <p class="title">7、运动方式</p>
          <div style="display:flex">
            <div class="small-box">
              <span class="u-name">运动项目</span>
              <div class="m-option">
                <input class="u-text" type="text">
              </div>
            </div>
            <div class="small-box">
              <span class="u-name">频率</span>
              <div class="m-option">
                <input class="u-text" type="text">
                <span class="u-unit">次/周</span>
              </div>
            </div>
            <div class="small-box">
              <span class="u-name">强度</span>
              <div class="m-option">
                <input class="u-radio" type="radio" value="1" >
                <label class="hook">
                  低等
                </label>
              </div>
              <div class="m-option">
                <input class="u-radio" type="radio" value="2" >
                <label class="hook">
                  中等
                </label>
              </div>
            </div>
          </div>
        </div>
        <div class="m-tr">
          <p class="title">8、生活习惯、吸烟、睡眠</p>
          <div style="display:flex">
            <span class="u-name">吸烟</span>
            <div class="question-box">
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
              <div class="m-option">
                <input class="u-text" type="text">
                <span class="u-unit">支/天</span>
              </div>
              <div class="small-box">
                <span class="u-name">吸烟史</span>
                <div class="m-option">
                  <input class="u-text" type="text">
                  <span class="u-unit">年</span>
                </div>
              </div>

            </div>
          </div>
          <div style="display:flex">
            <span class="u-name">饮酒</span>
            <div class="question-box">
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
              <div class="m-option">
                <input class="u-text" type="text">
                <span class="u-unit">ml/天</span>
              </div>
              <div class="small-box">
                <div class="m-option">
                  <input class="u-text" type="text">
                  <span class="u-unit">酒</span>
                </div>
              </div>

            </div>
          </div>
          <div style="display:flex">
            <span class="u-name">每天是否有固定的起床及入睡时间</span>
            <div class="question-box">
              <div class="small-box">
                <span class="u-name">起床时间</span>
                <div class="m-option">
                  <input class="u-text" type="text">
                </div>
              </div>
              <div class="small-box">
                <span class="u-name">入睡时间</span>
                <div class="m-option">
                  <input class="u-text" type="text">
                </div>
              </div>
              <div class="small-box">
                <span class="u-name">午休时间</span>
                <div class="m-option">
                  <input class="u-text" type="text">
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="m-tr">
          <p class="title">9、并发症及不良反应</p>
          <div style="display:flex">
            <span class="u-name">高血糖</span>
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
            <span class="u-name">高血压</span>
            <div class="question-box">
              <div class="small-box">
                <span class="u-name">低钾血症（利尿剂）</span>
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
                <span class="u-name">心动过缓：作用于心率偏快，普萘洛尔（心得安）、美托洛尔（倍他乐克）、阿替洛尔（氨酰心安）</span>
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
                <span class="u-name">体位性低血压：伴有肥胖、高脂血症及肾功能不良的高血压病人。（哌唑嗪（脉宁平）、特拉唑嗪（高特灵）和多沙唑嗪（喹唑嗪）</span>
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
                <span class="u-name">潮红、头痛、心跳加快、踝部水肿，高血糖；适用于合并肾功能不全或糖尿病的高血压病人。拜新同、波依定和络活喜</span>
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
                <span class="u-name">不同程度的咳嗽，以咽痒、干咳为主。卡托普利（开博通）、依那普利（悦宁定）、苯那普利（洛汀新）、西拉普利（一平苏）、培哚普利（雅施达）。</span>
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
                <span class="u-name">轻度头晕、恶心等，偶可致高钾血症。氯沙坦（科素亚）、缬沙坦（代文）</span>
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
            <span class="u-name">高血脂</span>
            <div class="question-box">
              <div class="small-box">
                <span class="u-name">头晕目眩、头痛</span>
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
                <span class="u-name">胸闷、气短、心慌</span>
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
                <span class="u-name">胸痛、乏力</span>
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
                <span class="u-name">口角歪斜、不能说话、肢体麻木</span>
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
            <span class="u-name">高尿酸</span>
            <div class="question-box">
              <div class="small-box">
                <span class="u-name">慢性关节炎</span>
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
                <span class="u-name">痛风</span>
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
                <span class="u-name">血尿酸偏高</span>
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
                <span class="u-name">口角歪斜、不能说话、肢体麻木</span>
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
        </div>
				<div class="m-tr">
					<p class="title">10、健康宣教内容</p>
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
