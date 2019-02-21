<template>
  <div class="content">
    <!--<h1>{{ msg }}</h1>-->
    <chart  ref="chart1"
            style="height: 1.0rem;width: 1.0rem"
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
                    tooltip: {
                        trigger: 'item',
                        formatter: "{a} <br/>{b}: {c} ({d}%)"
                    },
                    series: [
                        {
                            type:'pie',
                            radius: ['62%', '70%'],
                            avoidLabelOverlap: false,
                            label: {
                                normal: {
                                    show: false,
                                    position: 'center'
                                },
                                emphasis: {
                                    show: true,
                                    textStyle: {
                                        fontSize: '10',
                                        fontWeight: 'bold'
                                    }
                                }
                            },
                            labelLine: {
                                normal: {
                                    show: false
                                }
                            },
                            data:[
                                {value:335, name:'直接访问', color:'#bf025c'},
                                {value:102, name:'邮件营销', color:'#14182e'},
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
