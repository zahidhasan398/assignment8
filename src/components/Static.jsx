import React, { PureComponent } from 'react';
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from 'recharts';

const Static = () => {
    const data = [
        { name: 'assignment-1', value: 60 },
        { name: 'assignment-2', value: 60 },
        { name: 'assignment-3', value: 58 },
        { name: 'assignment-4', value: 55 },
        { name: 'assignment-5', value: 53 },
        { name: 'assignment-6', value: 60 },
        { name: 'assignment-7', value: 60 },
        
      ];
    return (
        <div className='flex justify-center'>
           
        <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          />
          <Tooltip />
        </PieChart>
      
        </div>
    );
};

export default Static;