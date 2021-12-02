import React from 'react';

export default function ReportSearch({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-report-search'
      width={size}
      height={size}
      viewBox='0 0 24 24'
      stroke={color}
      strokeWidth='2'
      fill='none'
      strokeLinecap='round'
      strokeLinejoin='round'
      {...restProps}
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M8 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h5.697' />
      <path d='M18 12v-5a2 2 0 0 0 -2 -2h-2' />
      <rect x='8' y='3' width='6' height='4' rx='2' />
      <path d='M8 11h4' />
      <path d='M8 15h3' />
      <circle cx='16.5' cy='17.5' r='2.5' />
      <path d='M18.5 19.5l2.5 2.5' />
    </svg>
  );
}
