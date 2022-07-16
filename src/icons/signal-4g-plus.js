import React from 'react';

export default function Signal4gPlus({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-signal-4g-plus'
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
      <path d='M3 8v5h5' />
      <path d='M7 8v8' />
      <path d='M15 8h-2a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h2v-4h-1' />
      <path d='M18 12h4' />
      <path d='M20 10v4' />
    </svg>
  );
}
