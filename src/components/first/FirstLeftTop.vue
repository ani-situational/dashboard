<template>
  <div class="content">
    <div class="content-left"></div>
    <div class="content-right">
      <Carousel v-model="value1"
                :autoplay=false
                :autoplay-speed=5000
                arrow="never"
                :radius-dot=true
                height="1.42rem"
                loop
                style="height:100%;"

      >
        <CarouselItem style="" >
          <chart  ref="chart"
                  style="height: 100%;width: 100%"
                  :options="option"
                  :autoresize=true
          ></chart>
        </CarouselItem>
        <CarouselItem>
          <chart  ref="chart"
                  style="height: 100%;width: 100%"
                  :options="option"
                  :autoresize=true
          ></chart>
        </CarouselItem>
      </Carousel>
    </div>
  </div>
</template>
<script>
    export default {
        data () {
            return {
                option: {
                    textStyle: {
                        fontFamily: 'Microsoft YaHei',
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                            type: 'line'           // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },
                    grid: {
                        //type: 'dotted',
                        x: 50,
                        y: 20,
                        x2: 1,
                        y2: 40,
                    },
                    xAxis: [
                        {
                            type: 'category',
                            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                            axisTick: {
                                alignWithLabel: true
                            },
                            axisLabel: {
                                color: '#edf1f4',
                                fontSize: 10,
                                rotate: 45,
                            },
                            axisLine: {
                                lineStyle: {
                                    color: '#edf1f4',
                                    width: 1,
                                    shadowColor: '#edf1f4',
                                    shadowBlur: 10
                                }
                            }
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value',
                            boundaryGap: ['0%', '20%'],
                            splitLine: {
                                show: true,
                                lineStyle: {
                                    color: ['#333']
                                }
                            },
                            axisLabel: {
                                color: '#edf1f4',
                                fontSize: 10,
                            },
                            axisLine: {
                                lineStyle: {
                                    color: '#edf1f4',
                                    width: 1,
                                    shadowColor: '#edf1f4',
                                    shadowBlur: 10
                                }
                            }
                        }
                    ],
                    series: [
                        {
                            //name:'直接访问',
                            type: 'bar',
                            barWidth: '40%',
                            itemStyle: {
                                color: '#215181',
                                borderColor: '#00ddff',
                                borderWidth: 1
                            },
                            data: [1, 7, 3, 17, 3, 22, 100]
                        }
                    ]
                },
                value1: 0,
//                itemHeight: "1.4rem"

            }
        },
        props: [
            'title',
        ],
        mounted() {

        },
        methods:{
        },
        computed: {
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .content{
    height: 82%;
    width: 100%;
    /*position: relative;*/
    display: flex;
    justify-content: space-around;
    .content-left{
      /*position: absolute;*/
      /*left: 5%;*/
      /*top:0;*/
      height: 40%;
      width: 20%;
      border: 1px solid grey;
    }
    .content-right{
      height: 100%;
      width: 65%;
      border: 1px solid grey;
    }
  }
  .ivu-carousel-list{
    height: 100% !important;
  }
</style>
