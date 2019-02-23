<template>
  <div class="content">
    <!--<h1>{{ msg }}</h1>-->
    <div class="content-top">

    </div>
    <div class="content-bottom">
      <chart  ref="chart"
              style="height: 100%;width: 100%"
              :options="option"
              :autoresize=true
      ></chart>
    </div>
  </div>
</template>
<script>
    export default {
        data () {
            return {
                option: {
                    color: ['#aa8137','#a2156d', '#3b26ae', '#0e6cbc'],
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'shadow'
                        }
                    },
                    grid: {
                        x: 70,
                        y: 20,
                        x2: 20,
                        y2: 30
                    },
                    xAxis: {
                        type: 'value',
                        boundaryGap: [0, 0.01],
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
                    },
                    yAxis: {
                        type: 'category',
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
                        },
                        data: ['涉案载体管理','枪支管理','车辆管理','人员管理']
                    },
                    series: [
                        {
                            type: 'bar',
                            barWidth: '20%',
                            data: [42, 32, 44, 23],
                            color: ['#aa8137','#a2156d', '#3b26ae', '#0e6cbc']
                        },

                    ]
                }
            }
        },
        props: [
            'title',
        ],
        mounted() {
        },
        methods: {
            queryData(){
                setInterval(() => {
                    this.option.series[0].data[0] = this.option.series[0].data[0] + 1;
                    let newOptions = Object.assign({}, this.option);
                    this.option = newOptions;
                }, 1000)
            }
        },
        computed: {
            getColorClass: function () {
                return {
                    'title-color': this.isBlue,
                }
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .content{
    width: 100%;
    height: 85%;
    border: 1px solid grey;
    .content-top{
      width: 100%;
      height: 30%;
      border: 1px solid grey;
    }
    .content-bottom{
      width: 80%;
      height: 70%;
      border: 1px solid grey;
    }
  }
</style>
