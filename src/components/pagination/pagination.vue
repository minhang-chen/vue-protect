<template>
	<div class="pagination">
    <span class="pre page-btn" @click="pre()"><</span>
    <span v-if="isShowPreMore">...</span>
    <span v-for="item in pagers" class="page-itm page-btn"  :class="{'z-active': item == curPageNum }" @click="toPage(item)" :key="item">{{item}}</span>
    <span v-if="isShowNextMore">...</span>
    <span class="next page-btn" @click="next()">></span>
    <span>共{{pageNum}}页，</span>
    <span class="to-wrap">到<input class="to" v-model="pageInput">页<span class="page-btn confirm" @click="toPage(pageInput)">确定</span></span>
	</div>
</template>

<script>
  export default {
    props:['pageNum'],
    data(){
      return {
        isShowPreMore:false,
        isShowNextMore:false,
        curPageNum:1,
        page:1,
        pageInput:'',
      }
    },
    methods:{
      pre(){
        if(this.page>1) {
          this.page --
          this.curPageNum --
        }
          this.$emit('prePage',this.page)
      },
      next(){
        if(this.page < this.pageNum) {
          this.page ++
          this.curPageNum ++
        }
        this.$emit('nextPage',this.page)
      },
      toPage:function(item){
        this.curPageNum = item
        this.page = item
        this.$emit('toPage',this.curPageNum)
      }
    },
    computed:{
      pagers(){
        const pagerCount = 6,
                array=[],
                curPageNum = parseInt(this.curPageNum),
                pageCount = parseInt(this.pageNum);
        let isShowPreMore = false;
        let isShowNextMore = false;
        if(pagerCount < pageCount && curPageNum > pagerCount - 2){
          isShowPreMore = true;
        }
        if(pagerCount < pageCount && curPageNum < pageCount - 2){
          isShowNextMore = true;
        }
        if(isShowPreMore && isShowNextMore){
          const offset = Math.floor(pagerCount / 2) - 1;
          for(let i = curPageNum - offset; i <= curPageNum + offset; i++){
            array.push(i);
          }
        } else if(!isShowPreMore && isShowNextMore){
          for(let i = 1; i <= pagerCount; i++){
            array.push(i);
          }
        } else if(isShowPreMore && !isShowNextMore){
          for(let i = pageCount - 5; i <= pageCount; i++){
            array.push(i);
          }
        } else if(!isShowPreMore && !isShowNextMore){
          for(let i = 1; i <= pageCount; i++){
            array.push(i);
          }
        }
        this.isShowPreMore = isShowPreMore;
        this.isShowNextMore = isShowNextMore;
        return array
      }
    }
  }
</script>

<style rel="stylesheet" lang="scss">
  .pagination{
    margin-top:28px ;
    text-align: center;
    font-size: 14px;
    position: absolute;
    width: 100%;
    bottom: 30px;
    .page-btn{
      cursor:pointer;
      margin: 0 4px;
    }
    .page-itm{
      display: inline-block;
      width: 20px;
      text-align: center;
      line-height: 20px;
      box-sizing: border-box;
    }
    .page-itm.z-active{
      color:#ffb372;
    }
    .to-wrap{
      .to{
        display: inline-block;
        width: 40px;
        margin: 0 5px;
        padding-left:5px;
        box-sizing:border-box;
        border:1px solid #dfdfdf;
      }
    }
    .confirm{
      padding: 0 4px;
      border:1px solid #dfdfdf;
    }
  }
</style>
