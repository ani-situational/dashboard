<template>
  <div class="second">
    <div class="top">
      <div class="top-left">
        <CardHeaderSlant titleWord="同期各种问题类型间数量对比" titleWidth=23></CardHeaderSlant>
        <SecondTopLeft></SecondTopLeft>
      </div>
      <div class="top-right">
        <CardHeaderSlant titleWord="各单位间问题数量对比" titleWidth=28></CardHeaderSlant>
        <SecondTopRight></SecondTopRight>
      </div>
    </div>
    <div class="bottom">
      <CardHeaderSlant titleWord="各单位不同时间问题数量对比" titleWidth=13></CardHeaderSlant>
      <SecondBottom></SecondBottom>
    </div>
  </div>
</template>
<script>
    import SecondTopLeft from '../components/second/SecondTopLeft'
    import SecondTopRight from '../components/second/SecondTopRight'
    import SecondBottom from '../components/second/SecondBottom'
    import CardHeaderSlant from '../components/CardHeaderSlant'
    export default {
        data () {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        },
        components:{
            'SecondTopLeft':SecondTopLeft,
            'SecondTopRight':SecondTopRight,
            'SecondBottom':SecondBottom,
            'CardHeaderSlant':CardHeaderSlant
        },
        mounted(){
        },
        methods: {
        }
    }
</script>
<style lang="less">
  .second {
    width: 100%;
    height: 91%;
    font-size: 0.25rem;
    display: flex;
    flex-direction: column;
    .top {
      display: flex;
      height: 45%;
      .top-left {
        margin: 0.1rem 0.05rem 0rem 0.1rem;
        border: 0.1px solid #0e3367;
        box-shadow: 1px 1px 5px #0e3367 inset,
          -1px -1px 5px #0e3367 inset;
        width: 60%;
        .top-left-header{
          display: flex;
          align-items: center;
          width: 100%;
          height: 0.34rem;
          background: #102c62;
          font-size: 0.1rem;
        }
      }
      .top-right{
        margin: 0.1rem 0.1rem 0rem 0.05rem;
        border: 0.1px solid #0e3367;
        box-shadow: 1px 1px 5px #0e3367 inset,
          -1px -1px 5px #0e3367 inset;
        width: 40%;
        .top-right-header{
          display: flex;
          align-items: center;
          width: 100%;
          height: 0.34rem;
          background: #102c62;
          font-size: 0.1rem;
        }
      }
    }
    .bottom{
      margin: 0.1rem 0.1rem 0.1rem 0.1rem;
      border: 0.1px solid #0e3367;
      height: 53%;
      box-shadow: 1px 1px 5px #0e3367 inset,
        -1px -1px 5px #0e3367 inset;
      .bottom-header{
        display: flex;
        align-items: center;
        width: 100%;
        height: 0.34rem;
        background: #102c62;
        font-size: 0.1rem;
      }
    }
  }
</style>