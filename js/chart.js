$(function() {

    "use strict;"

    const leftBox = $('#container .left .canvas');
    const can1 = $('#container .right .can1 .canvas');
    const can2 = $('#container .right .can2 .canvas');
    const can3 = $('#container .right .can3 .canvas');
    const can4 = $('#container .right .can4 .canvas');

    let leftChart = echarts.init(leftBox[0]);
    let dataAll = [
        [
            [0, 0],
            [0.2, 0.3],
            [0.3, 0.4],
            [0.1, 0.5],
            [0.2, 0.3],
            [0.13, 0.18],
            [0.33, 0.23],
            [0.35, 0.22],
            [0.11, 0.22],
            [0.32, 0.29],
            [0.35, 0.25]
        ]
    ];

    let markLineOpt = {
        animation: true,
        label: {
            normal: {
                textStyle: {
                    align: 'right',
                    color: '#fff'
                }
            }
        },
        lineStyle: {
            normal: {
                type: 'dashed',
                color: '#fff'
            }
        },
        tooltip: {

        },
        data: [
            [{
                coord: [0, 3],
                symbol: 'none'
            }, {
                coord: [20, 13],
                symbol: 'none'
            }]
        ]
    };

    option = {
        title: {
            show: false,
            text: '',
            x: 'center',
            y: 0
        },
        grid: [
            { top: '5%', right: '5%', width: '90%', height: '90%', backgroundColor: 'transparent' }
        ],
        tooltip: {},
        xAxis: [{
            gridIndex: 0,
            min: 0,
            max: 0.4,

            splitLine: {
                show: false

            }
        }],
        yAxis: [{
                gridIndex: 0,
                min: 0,
                max: 0.4,

                splitLine: {
                    color: ['#aaa', 'transparent'],
                    lineStyle: {
                        type: 'dashed'
                    }

                }
            }

        ],
        series: [{
            name: 'I',
            type: 'scatter',
            xAxisIndex: 0,
            yAxisIndex: 0,
            data: dataAll[0],
            markLine: markLineOpt
        }],
        textStyle: {
            color: '#fff',
            fontWeight: 'bolder',
            fontSize: '18'
        }
    };

    // 使用刚指定的配置项和数据显示图表。
    leftChart.setOption(option);


    let canvas1 = echarts.init(can1[0]);
    can1option = {
        title: {
            text: '选中点',
            x: 'center',
            y: 10,
            textStyle: {
                color: '#fff'
            }
        },
        series: [{
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            data: [
                { value: 235, name: '人民币' },
                { value: 2004, name: '全球大宗商品' },

            ]
        }]
    };
    canvas1.setOption(can1option);



    let canvas2 = echarts.init(can2[0]);


    can2option = {
        title: {
            text: '当前点',
            x: 'center',
            y: 10,
            textStyle: {
                color: '#fff'
            }
        },
        series: [{
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            data: [
                { value: 235, name: '人民币' },


            ]
        }]
    };
    canvas2.setOption(can2option);

    painBar('选中点', '预期年化率', 2.1, can3[0]);
    painBar('当前点', '预期年化率', 1.4, can4[0]);

    const left = $('#container .bottom .left .canvas')[0];
    const center = $('#container .bottom .center .canvas')[0];
    const right = $('#container .bottom .right .canvas')[0];

    const arr = [echarts.init(left), echarts.init(center), echarts.init(right)];
    const data1 = [
        { value: 400, name: '中国基金' },
        { value: 335, name: '美国股票' },
        { value: 310, name: '欧洲股票' },
        { value: 274, name: '中国房地产' },
        { value: 235, name: '中国金融产品' }
    ];
    const data2 = [
        { value: 400, name: '中国基金' },
        { value: 21, name: '美国股票' },
        { value: 555, name: '欧洲股票' },
        { value: 274, name: '中国房地产' },
        { value: 235, name: '中国金融产品' }
    ];
    const data3 = [
        { value: 400, name: '中国基金' },
        { value: 335, name: '美国股票' },
        { value: 32, name: '欧洲股票' },
        { value: 35, name: '中国房地产' },
        { value: 235, name: '中国金融产品' }
    ];
    const dataArray = [data1, data2, data3];


    for (var i = 0; i < arr.length; i++) {
    	arr[i].setOption({
    		series: [{
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            data:dataArray[i]
        }]

    	});


    }


   


});


function painBar(title, xname, value, dom) {

    let canvas3 = echarts.init(dom);
    let cans3Option = {
        title: {
            text: title,
            x: 'center',
            y: '10',
            textStyle: {
                color: '#fff'
            }
        },
        grid: [
            { top: '10%', left: '10%', width: '80%', height: '80%', backgroundColor: 'transparent' }
        ],
        legend: {

        },
        xAxis: [{
            type: 'category',
            data: [xname],
            axisLabel: {
                textStyle: {
                    color: "#fff"
                }
            }
        }],
        yAxis: [{
            type: 'value',
            boundaryGap: ['7%', '7%'],
            axisLabel: {
                show: true,
                interval: 'auto',
                formatter: '{value}%',
                textStyle: {
                    color: "red", //刻度颜色
                    fontSize: 12 //刻度大小
                }
            }
        }],
        series: [{
            name: '做市',
            type: 'bar',
            stack: '总量',
            barWidth: 50,
            /*itemStyle : { normal: {label : {show: true, position: 'insideTop',textStyle:{color:'#000'}}}},*/
            data: [value]
        }]
    };
    canvas3.setOption(cans3Option);
}
