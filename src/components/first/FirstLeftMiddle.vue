<template>
  <div class="content">
      <div class="content-left">
        <chart  ref="chart1"
                style="height:100%;width: 100%"
                :options="option"
                :autoresize=true
        ></chart>
      </div>
      <div class="content-right">
      </div>
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
                        x: 50,
                        y: 10,
                        x2: 10,
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
                        data: ['涉密载体管理','枪支管理','车辆管理','人员管理']
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
            this.queryData();
        },
        methods:{
            queryData(){
                this.http.get(this.ports.manage.officeFind, (res) => {
                    console.log(res)
                    if(res.success){
                        this.option.series[0].data[3]=res.data.system.人员管理;
                        this.option.series[0].data[2]=res.data.system.车辆管理;
                        this.option.series[0].data[1]=res.data.system.枪弹管理;
                        this.option.series[0].data[0]=res.data.system.涉密载体;

                        this.option.series[1].data[3]=res.data.office.人员管理;
                        this.option.series[1].data[2]=res.data.office.车辆管理;
                        this.option.series[1].data[1]=res.data.office.枪弹管理;
                        this.option.series[1].data[0]=res.data.office.涉密载体管理;
                      let newOptions = Object.assign({},this.option);
                      console.log('this.newOptions.series');
                      console.log(this.option.series);
                      this.option = newOptions;
                    }
                });
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
    height: 82%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .content-left{
      height: 100%;
      width: 60%;
      border:1px solid grey;
    }
    .content-right{
      width: 30%;
      height: 40%;
      border:1px solid grey;
    }
  }
</style>
