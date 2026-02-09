'use client';

const SalesChart = () => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'];
  const yAxisValues = [50, 40, 30, 20, 10, 0];
  
  const monthlyData = [
    [45, 35, 25], // Jan
    [40, 30, 20], // Feb
    [50, 40, 30], // Mar
    [45, 35, 25], // Apr
    [40, 30, 20], // May
    [50, 40, 30], // Jun
    [45, 35, 25], // Jul
    [40, 30, 20], // Aug
    [50, 40, 30], // Sep
  ];
  
  const barColors = ['#4545FE', '#12B76A', '#F04438'];

  // Calculate max height for scaling
  const maxValue = Math.max(...monthlyData.flat());
  const scaleFactor = 160 / maxValue; // 160px max height

  return (
    <div className="w-full h-full">
      <div className="flex items-end h-48">
        <div className="flex flex-col justify-between h-full pr-4">
          {yAxisValues.map((value) => (
            <div key={value} className="text-xs text-neutral-500">
              {value}M
            </div>
          ))}
        </div>

        <div className="flex-1 flex items-end justify-between pl-2">
          {months.map((month, monthIndex) => (
            <div 
              key={month} 
              className="flex flex-col items-center flex-1"
              style={{ 
                marginRight: monthIndex < months.length - 1 ? '14px' : '0',
                height: '100%'
              }}
            >
              <div className="flex flex-col items-center justify-end h-full w-full">
                <div className="flex items-end gap-[2px] h-full">
                  {monthlyData[monthIndex].map((value, barIndex) => (
                    <div
                      key={`${month}-${barIndex}`}
                      className="w-1 rounded-t"
                      style={{
                        height: `${value * scaleFactor}px`,
                        backgroundColor: barColors[barIndex],
                      }}
                    />
                  ))}
                </div>
                
                <div className="text-xs text-neutral-500 mt-2">
                  {month}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SalesChart;