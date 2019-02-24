<template>
  <div class="content">
    <!--<h1>{{ msg }}</h1>-->
    <div class="content-top">
      <div class="content-top-left">
        <chart  ref="chart"
                style="height: 100%;width: 100%"
                :options="option"
                :autoresize=true
        ></chart>
      </div>
      <div class="content-top-right">

      </div>
    </div>
    <div class="content-bottom">
      <chart  ref="chart"
              style="height:100%;width: 100%"
              :options="option1"
              :autoresize=true
      ></chart>
    </div>
   </div>
</template>
<script src="./FirstLeftBottom.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .content{
    width: 100%;
    height: 82%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    .content-top{
      height: 40%;
      width: 100%;
      border: 1px solid grey;
      display: flex;
      .content-top-left{
        height: 100%;
        width: 70%;
        border: 1px solid grey;
      }
      .content-top-right{
        height: 100%;
        width: 30%;
        border: 1px solid grey;
      }
    }
    .content-bottom{
      height: 60%;
      border: 1px solid grey;
      width: 90%;
    }
  }
</style>
