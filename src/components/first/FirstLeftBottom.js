export default {
    data () {
        return {
            option: {
                //color:['#376d3f', '#6b135d', '#1b77d4', '#9b784c'],
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b}: {c} ({d}%)"
                },
                grid: {
//                        show: false
                    x: 90,
                    y: 1,
                    x2: 1,
                    y2: 1,
                    // containLabel: true
                },
                legend: {
                    orient: 'vertical',
                    x: 'left',
                    data:['已完成','未完成']
                },
                series: [
                    {
                        color:['#ad7319'],
                        name:'访问来源',
                        type:'pie',
                        selectedMode: 'single',
                        radius: ['48%', '50%'],
                        label: {
                            normal: {
                                position: 'inner'
                            }
                        },
                        labelLine: {
                            normal: {
                                show: true
                            }
                        },
                        data:[
                            {value:645, name:''},
                        ]
                    },
                    {
                        name:'',
                        color:['ad7319', '#132353'],
                        type:'pie',
                        radius: ['50%', '65%'],
                        avoidLabelOverlap: false,
                        label: {
                            normal: {
                                show: false,
                                position: 'center'
                            },
                            emphasis: {
                                show: true,
                                textStyle: {
                                    fontSize: '30',
                                    fontWeight: 'bold'
                                }
                            }
                        },

                        itemStyle: {
                            opacity: 0.5
                        },

                        data:[
                            {value:109, name:'已完成'},
                            {value:310,
                                name:'未完成',
                                itemStyle: {
                                    opacity: 0
                                }
                            }
                        ]
                    }
                ]
            },
            option1: {
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
//                        show: false
                    x: 90,
                    y: 1,
                    x2: 1,
                    y2: 1,
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