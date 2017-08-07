<template>
    <div class="time">
      <date-picker :date="startTime" :option="timeoption" @change="endTime"></date-picker>
    </div>
</template>
<script>
  import myDatepicker from 'vue-datepicker'
  import axios from 'axios'
  import {VIEW_SURVEY_ANS_URL} from '../Constants'
  export default {
    data () {
      return {
        // for Vue 2.0
        patientId:this.$route.query?this.$route.query.patientId:'',
        id:this.$route.query?this.$route.query.id:'',
        startTime: {
          time: ''
        },
        endtime: {
          time: ''
        },
        option: {
          type: 'day',
          week: ['一', '二', '三', '四', '五', '六', '日'],
          month: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
          format: 'YYYY年MM月DD日 HH时mm分',
          placeholder: '选择时间',
          inputStyle: {
            'display': 'inline-block',
            'padding': '6px',
            'width': '300px',
            'line-height': '22px',
            'font-size': '16px',
            'border': 'none',
            'text-align': 'center',
            'border-radius': '2px',
            'color': '#5F5F5F'
          },
          value:'',
          color: {
            header: '#ccc',
            headerText: '#f00'
          },
          buttons: {
            ok: '确定',
            cancel: '取消'
          },
          overlayOpacity: 0.5, // 0.5 as default
          dismissible: true // as true as default
        },
        timeoption: {
          type: 'min',
          week: ['一', '二', '三', '四', '五', '六', '日'],
          month: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
          format: 'YYYY年MM月DD日 HH时mm分',
          placeholder: '选择时间',
          inputStyle: {
            'display': 'inline-block',
            'padding': '6px',
            'width': '300px',
            'line-height': '22px',
            'font-size': '16px',
            'border': 'none',
            'text-align': 'center',
            'border-radius': '2px',
            'color': '#5F5F5F'
          },
          color: {
            header: '#ccc',
            headerText: '#f00'
          },
          buttons: {
            ok: '确定',
            cancel: '取消'
          },
          overlayOpacity: 0.5, // 0.5 as default
          dismissible: true // as true as default
        },
        multiOption: {
          type: 'multi-day',
          week: ['一', '二', '三', '四', '五', '六', '日'],
          month: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
          format:"YYYY-MM-DD HH:mm"
        }
      }
    },
    mounted(){
      const _this = this
      if(this.$route.query.id){
        axios({
          method: 'get',
          url: `${VIEW_SURVEY_ANS_URL}?id=${this.id}`
        }).then(function (res) {
          if(JSON.parse(res.data.content.ansData).date.length){
            _this.startTime.time = JSON.parse(res.data.content.ansData).date;
          }else{
            _this.startTime.time = ''
          }
        })
      }
    },
    components: {
      'date-picker': myDatepicker
    },
    methods:{
      endTime(res){
        this.$emit('endtime',res)
      }
    }
  }
</script>
