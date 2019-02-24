<template>
  <div class="content">
    <!--<h1>{{ msg }}</h1>-->
    <div class="content-top">
      <div class="top-left">
        <chart  ref="chart1"
                style="height: 100%;width: 100%"
                :options="option"
                :autoresize=true
        ></chart>
      </div>
      <div class="top-right">
        <chart  ref="chart1"
                style="height: 100%;width: 100%"
                :options="option"
                :autoresize=true
        ></chart>
      </div>
    </div>
    <div class="content-bottom">
      <div class="bottom-left">
        <chart  ref="chart1"
                style="height: 100%;width: 100%"
                :options="option"
                :autoresize=true
        ></chart>
      </div>
      <div class="bottom-right">
        <chart  ref="chart1"
                style="height: 100%;width: 100%"
                :options="option"
                :autoresize=true
        ></chart>
      </div>
    </div>

  </div>
</template>
<script src="./FirstCenterBottomRight.js"></script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .content{
    width: 90%;
    height: 90%;
    border: 1px solid grey;
    .content-top{
      width:100%;
      height: 50%;
      border: 1px solid grey;
      display: flex;
      .top-left{
        width: 50%;
        height: 100%;
        border: 1px solid grey;
      }
      .top-right{
        width: 50%;
        height: 100%;
        border: 1px solid grey;
      }
    }
    .content-bottom{
      width:100%;
      height: 50%;
      border: 1px solid grey;
      display: flex;
      .bottom-left{
        width: 50%;
        height: 100%;
        border: 1px solid grey;
      }
      .bottom-right{
        width: 50%;
        height: 100%;
        border: 1px solid grey;
      }
    }
  }
</style>
