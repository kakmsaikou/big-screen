import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {px} from '../shared/px';
import {baseEchartOptions} from '../shared/base-echart-options';
import {createEchartsOptions} from '../shared/create-echarts-options';

export const Chart2 = () => {
  const divRef = useRef(null);

  useEffect(() => {
    const myChart = echarts.init(divRef.current);
    myChart.setOption(createEchartsOptions({
      ...baseEchartOptions,
      grid: {
        x: px(100),
        y: px(40),
        x2: px(40),
        y2: px(40)
      },
      xAxis: {
        axisLabel: {
          fontSize: px(12)
        },
        type: 'value',
        boundaryGap: [0, 0.01]
      },
      yAxis: {
        type: 'category',
        data: ['北京', '北京', '北京', '北京', '北京', '北京']
      },
      series: [{
        type: 'bar',
        data: [10, 20, 36, 41, 15, 26, 37, 18, 29]
      }]
    }));
  }, []);

  return (
    <div className="bordered 管辖统计">
      <h2>案件破获排名</h2>
      <div ref={divRef} className="chart"></div>
    </div>
  );
};