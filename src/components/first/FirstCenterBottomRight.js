export default {
    data () {
        return {
            option: {
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b}: {c} ({d}%)"
                },
                grid: {
//                        show: false
                    x: 1,
                    y: 1,
                    x2: 1,
                    y2: 1,
                    // containLabel: true
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