<template>
  <div class="content">
    <!--<h1>{{ msg }}</h1>-->
    <chart  ref="chart1"
            style="height:1.5rem;width: 3.0rem"
            :options="option"
            :autoresize=true
    ></chart>
  </div>
</template>
<script>
    export default {
        data () {
            return {
                option: {
                    color: ['#c09216','#c80813'],
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'shadow'
                        }
                    },
                    legend: {
                        orient: 'vertical',
                        data: ['系统检查', '机关检查'],
                        right: 10,
                        top: 40,
                        bottom: 20,
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis: {
                        type: 'value',
                        boundaryGap: [0, 0.01],
                        axisLabel: {
                            color: '#edf1f4'
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
                            fontSize: 10
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
                            name: '系统检查',
                            type: 'bar',
                            barWidth: '20%',
                            data: [42, 32, 44, 23]
                        },
                        {
                            name: '机关检查',
                            type: 'bar',
                            barWidth: '20%',
                            data: [13, 57, 34, 23]
                        }
                    ]
                }
            }
        },
        props: [
            'title',
        ],
        mounted() {
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

</style>
