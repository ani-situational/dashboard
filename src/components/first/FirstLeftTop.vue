<template>
  <div class="content">
    <Carousel v-model="value1"
              autoplay="true"
              autoplay-speed="5000"
              height="1.4rem"
              arrow="false"
              radius-dot="true"
              loop>
    <CarouselItem>
      <div class="demo-carousel">123</div>
    </CarouselItem>
    <CarouselItem>
      <div class="demo-carousel">45</div>
    </CarouselItem>
    </Carousel>
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
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        borderColor: '#1b3970',
                        borderWidth: 1,
                        borderType: 'dotted',
                        containLabel: true
                    },
                    xAxis: [
                        {
                            type: 'category',
                            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                            axisTick: {
                                alignWithLabel: true
                            },
                            splitLine: {
                                show: false
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
                            axisLabel: {
                                color: '#edf1f4',
                                fontSize: 10,
                            },
                            splitLine: {
                                show: true,
                                lineStyle: {
                                    color: ['#333']
                                }
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
                            data: [1, 7, 3, 7, 3, 2, 1]
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

  .el-carousel__container {
    height: 100% !important;
  }

  .content{
    padding-left: 35%;
    height: 80%;
  }
  .charts-content {
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #142248;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #142248;
  }
</style>
