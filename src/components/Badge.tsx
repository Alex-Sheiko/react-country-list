import React from 'react';

type BadgeLabel = 'area' | 'population';

interface BadgeProps {
  label: BadgeLabel;
  value: number;
  color: string;
}

export const Badge = ({ color, value, label }: BadgeProps) => {
  return (
    <span className={`badge bg-${color} col-2 p-2`}>
      {label}: {value}
    </span>
  );
};
