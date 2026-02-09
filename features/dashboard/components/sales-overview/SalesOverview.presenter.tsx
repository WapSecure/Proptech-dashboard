'use client';

import Card from '@/components/ui/Card';
import { formatCurrency } from '@/lib/formatters/currency';
import { TrendUpIcon, TrendDownIcon, ChevronRightIcon } from '@/components/ui/Icons';
import SalesChart from './SalesChart';
import { SalesMetrics, TimeRange } from '../../types/dashboard.types';

interface SalesOverviewPresenterProps {
  metrics: SalesMetrics;
  selectedRange: TimeRange;
  onRangeChange: (range: TimeRange) => void;
}

const SalesOverviewPresenter: React.FC<SalesOverviewPresenterProps> = ({
  metrics,
  selectedRange,
  onRangeChange,
}) => {
  const timeRanges: { value: TimeRange; label: string }[] = [
    { value: 'week', label: '1 Week' },
    { value: 'month', label: '1 Month' },
    { value: 'year', label: '1 Year' },
  ];

  const metricConfigs = {
    totalInflow: { label: 'Total Inflow', color: 'text-blue-500' },
    mrr: { label: 'MRR', color: 'text-green-500' },
    commissionRevenue: { label: 'Commission Revenue', color: 'text-teal-500' },
    gmv: { label: 'GMV', color: 'text-red-500' },
  };

  return (
    <Card className="border border-neutral-200 h-full">
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h3 className="font-medium text-neutral-900">Sales Overview</h3>
            <p className="text-xs text-[#606060] mt-0.5">
              Showing overview Jan 2022 - Sep 2022
            </p>
          </div>
          
          <button className="
            px-4 py-1.5 text-sm font-medium text-[#191919] 
            bg-white border border-[#D6D6D6] rounded-full
            hover:bg-neutral-50 transition-colors whitespace-nowrap
            w-full sm:w-auto
          ">
            View Transactions
          </button>
        </div>

        <div className="flex items-center justify-end overflow-x-auto">
          <div className="flex items-center gap-2">
            {timeRanges.map((range) => (
              <button
                key={range.value}
                onClick={() => onRangeChange(range.value)}
                className={`
                  px-3 py-1.5 rounded-full text-sm font-medium border
                  transition-colors whitespace-nowrap flex-shrink-0
                  ${selectedRange === range.value
                    ? 'bg-neutral-100 text-neutral-800 border-neutral-300'
                    : 'text-neutral-500 border-transparent hover:text-neutral-800 hover:bg-neutral-50'
                  }
                `}
              >
                {range.label}
              </button>
            ))}
          </div>
        </div>

        <div className="border-t border-neutral-200 pt-6">
          <div className="flex flex-col lg:flex-row items-stretch gap-6 lg:gap-8">
            <div className="flex-1">
              <SalesChart />
            </div>

            <div className="hidden lg:flex items-center justify-center">
              <div className="h-full w-px bg-neutral-200 relative">
                <div
                  className="
                    absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                    w-8 h-8 bg-white border border-neutral-200 rounded-full
                    flex items-center justify-center
                  "
                >
                  <ChevronRightIcon className="w-4 h-4 text-neutral-400" />
                </div>
              </div>
            </div>

            <div className="flex-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {Object.entries(metrics).map(([key, metric]) => {
                  const config = metricConfigs[key as keyof typeof metricConfigs];
                  const isPositive = metric.trend === 'up';
                  const Icon = isPositive ? TrendUpIcon : TrendDownIcon;

                  return (
                    <div
                      key={key}
                      className="
                        p-4 rounded-lg border border-neutral-200 
                        bg-white hover:shadow-sm transition-shadow
                      "
                    >
                      <p className={`text-lg font-semibold ${config.color} mb-1`}>
                        {formatCurrency(metric.value, { withDecimals: true })}
                      </p>
                      <div className="flex items-center justify-between">
                        <p className="text-[10px] text-neutral-500 whitespace-nowrap">
                          {config.label}
                        </p>
                        <div
                          className={`
                            flex items-center gap-1 text-[10px] font-medium whitespace-nowrap
                            ${isPositive ? 'text-green-500' : 'text-red-500'}
                          `}
                        >
                          <Icon className="w-3 h-3 flex-shrink-0" />
                          <span>{metric.percentage}%</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default SalesOverviewPresenter;