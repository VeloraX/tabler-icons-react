import React from 'react';

export default function Pool({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-pool'
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
      <path d='M2 20a2.4 2.4 0 0 0 2 1 2.4 2.4 0 002-1 2.4 2.4 0 012-1 2.4 2.4 0 012 1 2.4 2.4 0 002 1 2.4 2.4 0 002-1 2.4 2.4 0 012-1 2.4 2.4 0 012 1 2.4 2.4 0 002 1 2.4 2.4 0 002-1' />
      <path d='M2 16a2.4 2.4 0 0 0 2 1 2.4 2.4 0 002-1 2.4 2.4 0 012-1 2.4 2.4 0 012 1 2.4 2.4 0 002 1 2.4 2.4 0 002-1 2.4 2.4 0 012-1 2.4 2.4 0 012 1 2.4 2.4 0 002 1 2.4 2.4 0 002-1' />
      <path d='M15 12v-7.5a1.5 1.5 0 0 1 3 0' />
      <path d='M9 12v-7.5a1.5 1.5 0 0 0 -3 0' />
      <line x1='15' y1='5' x2='9' y2='5' />
      <line x1='9' y1='10' x2='15' y2='10' />
    </svg>
  );
}