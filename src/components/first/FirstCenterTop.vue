<template>
    <div class="content" style="position: relative">
        <chart ref="chart1"
               style="height: 100%;width: 100%"
               :options="orgOptions"
               :autoresize=true
        ></chart>
        <img style="position: absolute;bottom:0px;left:-2px;" src="../../assets/images/left-bottom.png" alt="">
        <img style="position: absolute;bottom:0px;right:-2px;" src="../../assets/images/right-bottom.png" alt="">
    </div>
</template>
<script>
    export default {
        data () {
            return {
                orgOptions: {
                    color: ['#9a1e7a', '#7533c1', '#1b77d4', '#9b784c'],
                    tooltip: {
                        trigger: 'item',
                        formatter: "{a} <br/>{b}: {c} ({d}%)"
                    },
                    legend: {
                        orient: 'vertical',
                        x: 'left',
                        color: 'edf1f4',
                        data: ['人员管理', '车辆管理', '枪弹管理', '涉密载体管理']
                    },
                    series: [
                        {
                            name: '',
                            type: 'pie',
                            radius: ['50%', '70%'],

                            avoidLabelOverlap: false,
//                            label: {
//                                normal: {
//                                    show: false,
//                                    position: 'center'
//                                },
//                                emphasis: {
//                                    show: true,
//                                    textStyle: {
//                                        fontSize: '30',
//                                        fontWeight: 'bold'
//                                    }
//                                }
//                            },
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
                                            fontSize: 16,
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
                            data: [
                                {value: 335, name: '人员管理'},
                                {value: 310, name: '车辆管理'},
                                {value: 234, name: '枪弹管理'},
                                {value: 135, name: '涉密载体管理'},
                            ]
                        }
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
              this.http.get(this.ports.manage.allProblem, (res) => {
                  if(res.success){
                      this.orgOptions.series[0].data[0].value=res.data.人员管理;
                      this.orgOptions.series[0].data[1].value=res.data.车辆管理;
                      this.orgOptions.series[0].data[2].value=res.data.枪弹管理;
                      this.orgOptions.series[0].data[3].value=res.data.涉密载体管理;
                  }
              });
              let newOptions = Object.assign({},this.orgOptions);
              this.orgOptions = newOptions;
          }
        },
        computed: {}
    }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    .content {
        height: 91.2%;
    }
</style>
