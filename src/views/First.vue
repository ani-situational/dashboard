<template>
  <div class="first">
    <div class="left">
      <div class="left-top">
        <CardHeaderTitle title="机关产生问题统计"></CardHeaderTitle>
        <FirstLeftTop></FirstLeftTop>
      </div>
      <div class="left-middle">
        <CardHeaderTitle title="机关发现问题统计"></CardHeaderTitle>
        <FirstLeftMiddle></FirstLeftMiddle>
      </div>
      <div class="left-bottom">
        <CardHeaderTitle title="机关人员履职情况"></CardHeaderTitle>
        <FirstLeftBottom></FirstLeftBottom>
      </div>
    </div>
    <div class="center">
      <div class="center-top">
        <CardHeaderSlant titleWord="问题管理状态" titleWidth=14></CardHeaderSlant>
        <FirstCenterTop></FirstCenterTop>
      </div>
      <div class="center-bottom"  style="position: relative">
        <CardHeaderSlant titleWord="重要目标安全技术防范状态" titleWidth=26></CardHeaderSlant>
        <div class="center-bottom-content">
          <div class="center-bottom-left">
            <LittleCardHeaderTitle title="报警处置情况"></LittleCardHeaderTitle>
            <FirstCenterBottomLeft></FirstCenterBottomLeft>
          </div>
          <div class="center-bottom-center">
            <LittleCardHeaderTitle title="安全等级"></LittleCardHeaderTitle>
            <FirstCenterBottomCenter></FirstCenterBottomCenter>
          </div>
          <div class="center-bottom-right">
            <LittleCardHeaderTitle title="安防设备故障"></LittleCardHeaderTitle>
            <FirstCenterBottomRight></FirstCenterBottomRight>
          </div>
        </div>
        <img style="position: absolute;bottom:-2px;left:-2px;" src="../assets/images/left-bottom.png" alt="">
        <img style="position: absolute;bottom:-2px;right:-2px;" src="../assets/images/right-bottom.png" alt="">

      </div>
    </div>
    <div class="right">
      <div class="right-top">
        <CardHeaderTitle title="机关检查基层问题统计"></CardHeaderTitle>
        <FirstRightTop></FirstRightTop>
      </div>
      <div class="right-middle">
        <CardHeaderTitle title="基层发现问题统计"></CardHeaderTitle>
        <FirstRightMiddle></FirstRightMiddle>
      </div>
      <div class="right-bottom">
        <CardHeaderTitle title="基层人员履职情况"></CardHeaderTitle>
        <FirstRightBottom></FirstRightBottom>
      </div>
    </div>
  </div>
</template>
<script>
  import CardHeaderTitle from '../components/CardHeaderTitle'
  import CardHeaderSlant from '../components/CardHeaderSlant'
  import LittleCardHeaderTitle from '../components/LittleCardHeaderTitle'
  import FirstLeftTop from '../components/first/FirstLeftTop'
  import FirstLeftMiddle from '../components/first/FirstLeftMiddle'
  import FirstLeftBottom from '../components/first/FirstLeftBottom'
  import FirstCenterTop from '../components/first/FirstCenterTop'
  import FirstCenterBottomLeft from '../components/first/FirstCenterBottomLeft'
  import FirstCenterBottomCenter from '../components/first/FirstCenterBottomCenter'
  import FirstCenterBottomRight from '../components/first/FirstCenterBottomRight'
  import FirstRightTop from '../components/first/FirstRightTop'
  import FirstRightMiddle from '../components/first/FirstRightMiddle'
  import FirstRightBottom from '../components/first/FirstRightBottom'
    export default {
        name: 'hello',
        data () {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        },
        components:{
            'CardHeaderSlant':CardHeaderSlant,
            'CardHeaderTitle':CardHeaderTitle,
            'LittleCardHeaderTitle':LittleCardHeaderTitle,
            'FirstLeftTop':FirstLeftTop,
            'FirstLeftMiddle':FirstLeftMiddle,
            'FirstLeftBottom':FirstLeftBottom,
            'FirstCenterTop':FirstCenterTop,
            'FirstCenterBottomLeft':FirstCenterBottomLeft,
            'FirstCenterBottomCenter':FirstCenterBottomCenter,
            'FirstCenterBottomRight':FirstCenterBottomRight,
            'FirstRightTop':FirstRightTop,
            'FirstRightMiddle':FirstRightMiddle,
            'FirstRightBottom':FirstRightBottom,


        },
        mounted(){
        },
        methods: {
        }
    }
</script>
<style lang="less">
  @bgColor:rgba(9,60,118,0.23);
  @centerBottomBgColor:none;
  @centerBorder:1px solid rgba(0,131,179,0.23);

  .first{
    width: 100%;
    height: 90%;
    font-size: 0.25rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .left{
      width: 25%;
      padding: 0.2rem 0 0.1rem 0.1rem;
      /*height: 98%;*/
      .left-top{
        margin: 0 0 0.1rem 0;
        height: 28%;
        /*background:#093c76;*/
        background-color:@bgColor; //#093c76 23%
      }
      .left-middle{
        margin: 0 0 0.1rem 0;
        background-color:@bgColor;
        height: 28%;
      }
      .left-bottom{
        background-color:@bgColor;
        height: 43%;
        border: 1px solid red;
      }
    }
    .center{
      height: 99%;
      box-shadow: 0 0 0 1px rgba(186, 247, 238, 0.36) inset;
      margin: 0.1rem 0.1rem 0.05rem 0.1rem;
      padding: 0.08rem 0.08rem 0.08rem 0.08rem;
      width: 50%;
      .center-top{
        margin-bottom: 0.1rem;
        /*background: none;*/
        background-image: url("../assets/images/first-center-top.png");
        background-size: 100% 100%;
        border: @centerBorder;
        height: 53.5%;
        /*//box-shadow: 1px 1px 5px #0e3367 inset,*/
        /*//            -1px -1px 5px #0e3367 inset;*/
      }
      .center-bottom{
        background-image: url("../assets/images/first-center-top.png");
        background-size: 100% 100%;
        //box-shadow: 1px 1px 5px #0e3367 inset,
        //            -1px -1px 5px #0e3367 inset;
        border: @centerBorder;
        height: 45%;
        display: flex;
        flex-direction: column;
        /*padding-top: 0.2rem;*/
        .center-bottom-content{
          height: 100%;
          display: flex;
          align-items: flex-end;
          .center-bottom-left{
            background:  @centerBottomBgColor;
            height: 88%;
            width: 32%;
            /*border: 0.1px solid pink;*/
            margin: 0 0.5% 0.5% 1%;
          }
          .center-bottom-center{
            background:  @centerBottomBgColor;
            height: 88%;
            width: 22%;
            /*border: 0.1px solid pink;*/
            margin: 0 0.5% 0.5% 0.5%;
          }
          .center-bottom-right{
            background-color: @centerBottomBgColor;
            height: 88%;
            width: 42%;
            margin: 0 1% 0.5% 0.5%;
            /*border: 0.1px solid pink;*/
          }
        }
      }
    }
    .right{
      width: 25%;
      padding: 0.2rem 0 0.1rem 0;
      .right-top{
        margin: 0 0 0.1rem 0;
        background-color:@bgColor;
        height: 28%;
      }
      .right-middle{
        margin: 0 0 0.1rem 0;
        background-color:@bgColor;
        height: 28%;
      }
      .right-bottom{
        background-color:@bgColor;
        height: 43%;
        border: 1px solid red;
      }
    }
  }
  .first-header{
    font-size: 0.2rem;
  }
</style>