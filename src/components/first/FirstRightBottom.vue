<template>
  <div class="content">
    <!--<h1>{{ msg }}</h1>-->
    <div class="content-top">
      <div class="top-left">
        <chart  ref="chart"
                style="height: 100%;width: 100%"
                :options="option"
                :autoresize=true
        ></chart>
      </div>
      <div class="top-right">

      </div>
    </div>
    <div class="centent-bottom">
      <chart  ref="chart1"
              style="height:100%;width: 100%"
              :options="option1"
              :autoresize=true
      ></chart>
    </div>


  </div>
</template>
<script src="./FirstRightBottom.js"></script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .content{
    width: 100%;
    height: 89%;
    border: 1px solid grey;
    .content-top{
      height: 40%;
      width: 100%;
      display: flex;
      .top-left{
        width: 70%;
        height: 100%;
        border: 1px solid grey;
      }
      .top-right{
        width: 30%;
        height: 100%;
        border: 1px solid grey;
      }
    }
    .centent-bottom{
      width: 90%;
      height: 55%;
      border: 1px solid grey;
    }
  }
</style>
