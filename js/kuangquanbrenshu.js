// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('main4'));
// 指定图表的配置项和数据
option = {
    dataset: {
        source: [
            ['people', 'number', 'city'],
            [232, 232, '广西'],
            [159, 159, '广东'],
            [119, 119, '湖南'],
            [113, 113, '贵州'],
            [96, 96, '河南'],
        ]
    },
    grid: {containLabel: true},
    xAxis: {name: 'number'},
    yAxis: {type: 'category'},
    visualMap: {
        orient: 'horizontal',
        left: 'center',
        min: 0,
        max: 300,
        text: ['High People', 'Low People'],
        // Map the people column to color
        dimension: 0,
        inRange: {
            color: ['#D7DA8B', '#E15457']
        }
    },
    series: [
        {
            type: 'bar',
            encode: {
                // Map the "number" column to X axis.
                x: 'number',
                // Map the "cityt" column to Y axis
                y: 'city'
            }
        }
    ]
};

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);