// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('main1'));

        // 指定图表的配置项和数据
option = {
    title: {
        text: '年轻人最爱买宠物解压',
        left: 'center'
    },
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['年轻人饲养宠物', '非年轻人饲养宠物', ]
    },
    series: [
        {
            name: '全中国约有',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: [
                {value: 72.5, name: '年轻人饲养宠物'},
                {value: 27.5, name: '非年轻人饲养宠物'},
            ],
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};
// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);// JavaScript Document