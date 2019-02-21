<template>
  <div class="content">
    <!--<h1>{{ msg }}</h1>-->
    <chart  ref="chart1"
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
                        data:['真警','误报','未处置']
                    },
                    series: [
                        {
                            color:['#0493e4', '#1b3667'],
                            name:'访问来源',
                            type:'pie',
                            selectedMode: 'single',
                            radius: ['40%', '50%'],

                            label: {
                                normal: {
                                    position: 'inner'
                                }
                            },
                            labelLine: {
                                normal: {
                                    show: false
                                }
                            },
                            data:[
                                {value:645, name:'已处置'},
                                {value:135, name:'未处置'}
                            ]
                        },
                        {
                            name:'',
                            color:['#69145c', '#376c3e', '#ffffff'],
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
                            label: {
                                normal: {
                                    formatter: '{b|{b}：}{c}  ',
                                    backgroundColor: '#eee',
                                    borderColor: '#aaa',
                                    borderWidth: 1,
                                    borderRadius: 4,
                                    // shadowBlur:3,
                                    // shadowOffsetX: 2,
                                    // shadowOffsetY: 2,
                                    // shadowColor: '#999',
                                    // padding: [0, 7],
                                    rich: {
                                        a: {
                                            color: '#999',
                                            lineHeight: 22,
                                            align: 'center'
                                        },
                                        // abg: {
                                        //     backgroundColor: '#333',
                                        //     width: '100%',
                                        //     align: 'right',
                                        //     height: 22,
                                        //     borderRadius: [4, 4, 0, 0]
                                        // },
                                        hr: {
                                            borderColor: '#aaa',
                                            width: '100%',
                                            borderWidth: 0.5,
                                            height: 0
                                        },
                                        b: {
                                            fontSize: 10,
                                            lineHeight: 33
                                        },
                                        per: {
                                            color: '#eee',
                                            backgroundColor: '#334455',
                                            padding: [2, 4],
                                            borderRadius: 2
                                        }
                                    }
                                }
                            },
                            data:[
                                {value:335, name:'真警'},
                                {value:310, name:'误报'},
                                {value:135, name:'未处置'},
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
        methods:{
            queryData(){
                setInterval(() => {
                    this.orgOptions.series[0].data[0]= this.orgOptions.series[0].data[0]+1;
                    let newOptions = Object.assign({},this.orgOptions);
                    this.orgOptions = newOptions;
                },1000)
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
