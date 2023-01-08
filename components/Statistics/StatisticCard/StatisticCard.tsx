import React from 'react';
type Props = {
  statistic: number,
  text: string,
};
export default function StatisticCard({ statistic, text }: Props) {
  return (
    <div className="ease-animation flex flex-col rounded-3xl bg-gray-700 p-5 text-center hover:scale-110">
      <h1 className="flex-1 p-5 text-3xl font-bold">{statistic}</h1>{' '}
      <p>{text}</p>
    </div>
  );
}
