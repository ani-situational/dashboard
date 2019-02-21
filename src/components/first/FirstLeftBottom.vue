<template>
  <div class="content">
    <!--<h1>{{ msg }}</h1>-->
    <chart  ref="chart1"
            style="height:2.5rem;width: 4.0rem"
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
                    textStyle: {
                        fontFamily: 'Microsoft YaHei',
                    },
                    color: ['#52d2d7', '#1d436b'],
                    tooltip : {
                        trigger: 'axis',
                        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },
                    legend: {
                        data: ['实检', '应检']
                    },
                    grid: {
                        show: false
                        // left: '3%',
                        // right: '4%',
                        // bottom: '3%',
                        // containLabel: true
                    },
                    xAxis:  {
                        show: false,
                        type: 'value',
                        borderWidth: 0,

                    },
                    yAxis: {
                        type: 'category',
                        nameTextStyle:{
                            color: '#e2e2e5',
                            fontStyle: 'italic',
                            fontSize: 20
                        },
                        axisLabel: {
                            color: '#edf1f4'
                        },
                        axisLine: {
                            show: false
                        },
                        data: ['安全组','保卫科','弹药科','部队管理科','装备管理科']
                    },
                    series: [
                        {
                            name: '直接访问',
                            type: 'bar',
                            stack: '总量',
                            barWidth: '30%',
                            label: {
                                normal: {
                                    show: true,
                                    position: 'insideRight'
                                }
                            },
                            data: [320, 302, 301, 334, 404],
                            itemStyle:{
                                borderColor:'#52d2d7',
                                borderWidth:'2'
                            }

                        },
                        {
                            name: '邮件营销',
                            type: 'bar',
                            stack: '总量',
                            label: {
                                normal: {
                                    show: true,
                                    position: 'insideRight'
                                }
                            },
                            data: [120, 132, 101, 134, 90],
                            itemStyle:{
                                color:'#1d436b',
                                borderColor:'#52d2d7',
                                borderWidth:'2'
                            }
                        },

                    ]
                },
            }
        },
        props: [
            'title',
        ],
        mounted() {
            this.queryData();
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
