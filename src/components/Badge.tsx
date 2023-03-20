import React from 'react';
import { BadgeLabel } from '../types/types';

interface BadgeProps {
  label: BadgeLabel;
  value: number;
  color: string;
}

export const Badge = ({ color, value, label }: BadgeProps) => {
  return (
    <div className={`badge bg-${color} col-2 p-2`}>
      {label}: {value}
    </div>
  );
};
