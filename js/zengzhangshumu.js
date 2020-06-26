// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('main2'));
// 指定图表的配置项和数据
var pathSymbols = {
    dog: 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAIPklEQVR4nO2dYXXqTBRFjwQkIKESkFAJkVAJ10ElIKESkIAEJCCh34+8t15nPtoSSHJuZvZea/8tyTl3CgMhSAAAAAAAAAAAAAAAAAAAAAAAAABQs5N0kPQmaZC0Nx4LQBp2kt4lXSV9Vp4kvfgODcDLTtKH/r8wagfT8QFYCf2+OFgk0CU73X5ZxSIB0Lghn7I4WCTQFW96bIGwSKALQo8vEBYJNE/ouQXCIoGmCT2/QFgk0CyheRYIiwSaJDTfAmGRQHOE5l0gLBJoitD8C2QpLxoviTmKRQgrEfIP/jO+z54IwBdC/iF/1qu42hgWIuQf8Ll8nTcagLYWCIsEZifkH+o5vWq8QhlgFkL+oZ7bjzkDgr4J+Qd6Cdm0wyyE/MO8hOcZM4KOCfmHmWcRSEvIP8g8i0BaQv5B5lkE0hLyD/HSzyKxgq/iJntNEvIPcUuexUJpipB/qFqUT/QbIeQfphblE/1GCPmHqVW5FL8BQv5BatXT/TVAVkL+Qaq9/NF9HM96vb8GyErIP0h/h+lN/3/dPmjbiwU2Tsg/RGf9vKHdaXy54j5OFkiHhLwDdO+7PTtt85kENk7IO0DDhGMdzMfKAumQkHeA9hOOdWc+VhZIh4R8w/PI1bYX4/GyQDok5BueR94GZYHAqoS8AzTlcgxeYsHqhLwDNEw41oP5WFkgHRLyDtC9L7N2Gvcs7oFngXRGyD9Ep1+OcafxhtXu42SBdEjIP0SfGp9JhurYdhpfVl0SHB8LpFNC/iGqPf9x6u+3ZxQ2Tsg/RK16ub8GyErIP0itym2HGiDkH6RWPd1fA2Ql5B+kVj3eXwNkJeQfpFaNe0vYabwNyqDxW2ODxrfvuOuDn5B/kFp1/1PwfxfFb2/XfYhfLHUS8g9Si/64QT9o+mUBZ3GzLQch/zC16Le3/Ak99wFPfPeHYRFC/mFq0cOtsN9n+uP8hNZ6hPzD1JqnW0G/zfwgw60HgdkJ+QeqNQ91yHstc93Mvn4gmJ2Qf6Ba8uarn+OaDwazEvIPVUse6oCX/hrkvn5AmJWQf6ha8eY7V3PvPWrfbj0ozEbIP1gt+KFvPvj+WOGBYTlC/uHauj/eOvWy8INzh+xlCfkHbMte9csPhbJAtk3IP2Rb9axvPhD8yhpfi+SixuUI+Qdti55051yucSsWfut6OUL+Ydua75rwT/u0wgEd7j0YmMyLtntLnbU96YELapd+F+tTfDNrLd603R+qWdKLbv/61V3MdYHiT7JRX5edxoHY4p0M55y5k55YGH9ZY4F8iu+KuHjRuE+5yD+0Sy+Is/59gW+2N4ZeVzwB8PKqvPuVo8a96hRf/rjou6Rr3pL+uOSJwCSyLZZY9Gyf5KL1ghjWOSWYQIbNfSx9ks+w9n8SLmDMiXNzH8uf3uMMWj+QD3EpfGbW3tzHGif1KM6fxnoXn7Rn51XLv9sZa53Mo7jfM79qfFY5agwLRw/KxVKb+1jxHB5ikHeB4M//PDI+0865uY91D/0xLvIPA/7sWeMw7W826GGOzX2sfdCPsNan6jiPJ+V7R/DRzX2sf6jT2eLvWONoxnskT9nch+cQp8OzyPZ91/Y292E7sonsxF6kFbe0uQ/nAU1lrQsYcT2zb+7DeyjTWeOLVOjxpHyb+83Bhr0PM27uN8NB/gJxPTNu7tOz9K1JMZ9ZN/dpOcpfGnrMuLlPyUn+stDrSWzuv2UnFgn+k839NxzlLwdzyea+gstR8JZs7r/Au1v4k2zuNf6ncH8TEfN7Uuebe55N8F673dzvxQYep9nl5v4gFgpO86oO7928F+924f2GOsYdPuY31DHu8DG/oY5xh4/5DXWMO3zMb6hj3OFjfkMd4w4f8xvqGHf4mN9Qx7jDx/yGOsYdPuY31DHu8DG/oY5xh4/5DXWMO3zMb6hj3OFjfkMd4w4f8xvqGHf4mN9Qx7jDx/yGOsYdPuY31DHu8DG/oY5xh4/5DXWMO3zMb6hj3OFjfkMd4w4f8xvqGHf4mN9Qx7jDx/yGOsYdPuY31DHu8DG/oY5xh4/5DXWMO3zMb6hj3OFjfkMd4w4f8xvqGHf4mN9Qx7jDx/yGOsYdPuY31DHu8DG/oY5xh4/5DXWMO3zMb6hj3OFjfkMd4w4f8xvqGHf4mN9Qx7jDx/yGOsYdPoWUuLOnjwp3+BRS4s6ePirc4VNIiTt7+qhwh08hJe7s6aPCHT6FlLizp48Kd/gUUuLOnj4q3OFTSIk7e/qocIdPISXu7Omjwh0+hZS4s6ePCnf4FFLizp4+KtzhU0iJO3v6qHCHTyEl7uzpo8IdPoWUuLOnjwp3+BRS4s6ePirc4VNIiTt7+qhwh08hJe7s6aPCHT6FlLizp48Kd/gUUuLOnj4q3OFTSIk7e/qocIdPISXu7Omjwh0+hZS4s6ePCnf4FFLizp4+KtzhU0iJO3v6qHCHTyEl7uzpo8IdPoWUuLOnjwp3+BRS4s6ePirc4VNIiTt7+qhwh08hJe7s6aPCHT6FlLizp48Kd/gUUuLOnj4q3OFTSIk7e/qocIdPISXu7Omjwh0+hZS4s6ePCnf4FFLizp4+KtzhU0iJO3v6qHCHTyEl7uzpo8IdPoWUuLOnjwp3+BRS4s6ePirc4VNIiTt7+qhwh08hJe7s6aPCHT6FlLizp48Kd/gUUuLOnj4q3OFTSIk7e/qocIdPISXu7Omj4iJ/AbXDkiecHPpIxrv8BdTulzzh5NBHMg7yF/DV86Jnm5+D/B3QR8WH/EV8SrpqHJDeoY+EHOUvY1j6JDcEfSRk0Pjf66L1SjhrfN29X/zstscg+viW/wCt2CbETtCtGwAAAABJRU5ErkJggg==',
    doog: 'image://data:image/png;base64,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',
    dooog: 'image://data:image/png;base64,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',
};

option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'none'
        },
        formatter: function (params) {
            return params[0].name + ': ' + params[0].value;
        }
    },
    xAxis: {
        data: ['2003年', '2009年', '2013年', ],
        axisTick: {show: false},
        axisLine: {show: false},
        axisLabel: {
            color: '#e54035'
        }
    },
    yAxis: {
        splitLine: {show: false},
        axisTick: {show: false},
        axisLine: {show: false},
        axisLabel: {show: false}
    },
    color: ['#e54035'],
    series: [{
        name: 'hill',
        type: 'pictorialBar',
        barCategoryGap: '-130%',
        // symbol: 'path://M0,10 L10,10 L5,0 L0,10 z',
        symbol: 'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z',
        itemStyle: {
            opacity: 0.5
        },
        emphasis: {
            itemStyle: {
                opacity: 1
            }
        },
        data: [30000000, 75000000, 150000000],
        z: 10
    }, {
        name: 'glyph',
        type: 'pictorialBar',
        barGap: '-100%',
        symbolPosition: 'end',
        symbolSize: 50,
        symbolOffset: [0, '-120%'],
        data: [{
            value: 30000000,
            symbol: pathSymbols.dog,
            symbolSize: [40, 50]
        }, {
            value: 75000000,
            symbol: pathSymbols.doog,
            symbolSize: [40, 50]
        }, {
            value: 150000000,
            symbol: pathSymbols.dooog,
            symbolSize: [40, 50]
        },]
    }]
};
// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);