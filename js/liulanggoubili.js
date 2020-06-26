// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('main5'));
// 指定图表的配置项和数据
option = {
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
        orient: 'vertical',
        left: 10,
        data: ['流浪狗比例', '非流浪狗比例',]
    },
    series: [
        {
            name: '是否为流浪狗',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                show: false,
                position: 'center'
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: '30',
                    fontWeight: 'bold'
                }
            },
            labelLine: {
                show: false
            },
            data: [
                {value: 75, name: '流浪狗比例'},
                {value: 25, name: '非流浪狗比例'},
            ]
        }
    ]
};
// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);