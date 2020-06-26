// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('main3'));
// 指定图表的配置项和数据
option = {
    legend: {},
    tooltip: {},
    dataset: {
        dimensions: ['product', '', '麻烦构成（单位：%）', ''],
        source: [
            {product: '咬人', '麻烦构成（单位：%）': 42, },
            {product: '扰民',  '麻烦构成（单位：%）': 27, },
            {product: '噪音', '麻烦构成（单位：%）': 27, },
            {product: '排便',  '麻烦构成（单位：%）': 46,}
        ]
    },
    xAxis: {type: 'category'},
    yAxis: {},
    // Declare several bar series, each will be mapped
    // to a column of dataset.source by default.
    series: [
        {type: 'bar'},
        {type: 'bar'},
        {type: 'bar'}
    ]
};
// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);