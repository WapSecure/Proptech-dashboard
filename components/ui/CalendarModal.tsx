'use client';

import { useState } from 'react';
import {
  LeftArrowIcon,
  RightArrowIcon,
  BackArrowIcon,
  CloseIcon,
} from '@/components/ui/Icons';

interface CalendarModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CalendarModal: React.FC<CalendarModalProps> = ({ isOpen, onClose }) => {
  const [selectedDate, setSelectedDate] = useState<number>(16);
  const [currentMonth, setCurrentMonth] = useState('November 2023');

  const daysOfWeek = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  const totalDays = 30;
  const startDay = 3; // Wednesday (0-indexed)

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />
      
      <div className="relative w-full md:w-[360px] h-full bg-neutral-900 text-white">
        <div className="p-4 border-b border-neutral-800">
          <div className="flex items-center gap-4 mb-6">
            <button onClick={onClose} className="p-1">
              <BackArrowIcon className="w-5 h-5" />
            </button>
            <h3 className="font-medium">Calendar</h3>
            <button onClick={onClose} className="ml-auto p-1">
              <CloseIcon className="w-5 h-5" />
            </button>
          </div>

          <div className="flex items-center justify-between mb-4">
            <button className="p-2 hover:bg-neutral-800 rounded-md transition-colors">
              <LeftArrowIcon className="w-5 h-5" />
            </button>
            <span className="font-medium">{currentMonth}</span>
            <button className="p-2 hover:bg-neutral-800 rounded-md transition-colors">
              <RightArrowIcon className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="p-4">
          <div className="grid grid-cols-7 gap-1 mb-2">
            {daysOfWeek.map((day) => (
              <div
                key={day}
                className="text-center text-sm text-neutral-400 py-2"
              >
                {day}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-1">
            {Array.from({ length: startDay }).map((_, index) => (
              <div key={`empty-${index}`} className="h-10 md:h-12" />
            ))}

            {Array.from({ length: totalDays }).map((_, index) => {
              const day = index + 1;
              const isSelected = day === selectedDate;

              return (
                <button
                  key={day}
                  onClick={() => setSelectedDate(day)}
                  className={`
                    h-10 md:h-12 flex items-start justify-start p-2 rounded
                    transition-colors text-sm md:text-base
                    ${isSelected
                      ? 'bg-blue-600 text-white'
                      : 'hover:bg-neutral-800'
                    }
                  `}
                >
                  <span>
                    {day === 1 ? `Dec ${day}` : day}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarModal;