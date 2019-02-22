<template>
  <div class="content">
    <!--<h1>{{ msg }}</h1>-->
    <chart  ref="chart"
            style="height: 1.5rem;width: 2.3rem"
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
                    color: ['#aa8137','#a2156d', '#3b26ae', '#0e6cbc'],
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'shadow'
                        }
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

</style>
