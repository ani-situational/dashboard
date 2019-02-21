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
                    //color:['#376d3f', '#6b135d', '#1b77d4', '#9b784c'],
                    tooltip: {
                        trigger: 'item',
                        formatter: "{a} <br/>{b}: {c} ({d}%)"
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
