import React from 'react';
// import echarts from 'echarts/lib/echarts';
import * as echarts from 'echarts';



class Statistic extends React.Component {
    componentDidMount() {
        // 初始化
        var myChart = echarts.init(document.getElementById('main'));
        // 绘制图表
        myChart.setOption({
            tooltip: {
                trigger: 'item'
            },
            legend: {
                top: '5%',
                left: 'center'
            },
            title: {
                text: 'Multi omics Gene statistics',
                left: 'center'
            },
            series: [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius: ['40%', '70%'],
                    avoidLabelOverlap: false,
                    itemStyle: {
                        borderRadius: 10,
                        borderColor: '#fff',
                        borderWidth: 2
                    },
                    label: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: '40',
                            fontWeight: 'bold'
                        }
                    },
                    labelLine: {
                        show: false
                    },
                    data: this.props.data.data1
                }
            ]
        });
        var myChart = echarts.init(document.getElementById('right-main'));
        // 绘制图表
        myChart.setOption({
            tooltip: {
                trigger: 'item'
            },
            legend: {
                top: '5%',
                left: 'center'
            },
            title: {
                text: 'Single Cell Gene statistics',
                left: 'center'
            },
            series: [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius: ['40%', '70%'],
                    avoidLabelOverlap: false,
                    itemStyle: {
                        borderRadius: 10,
                        borderColor: '#fff',
                        borderWidth: 2
                    },
                    label: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: '40',
                            fontWeight: 'bold'
                        }
                    },
                    labelLine: {
                        show: false
                    },
                    data: this.props.data.data2
                }
            ]
        });
    }
    render() {
        return (
            <div>
                <div id="main" style={{ width: '50%', height: 500, float: 'left' }} ></div>
                <div id="right-main" style={{ width: '50%', height: 500, float: 'left' }}></div>
            </div>
        );
    }
}

export default Statistic;