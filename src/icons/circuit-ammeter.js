import React from 'react';

export default function CircuitAmmeter({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-circuit-ammeter'
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
      <circle cx='12' cy='12' r='7' />
      <path d='M5 12h-3' />
      <path d='M19 12h3' />
      <path d='M10 14v-3c0 -1.036 .895 -2 2 -2s2 .964 2 2v3' />
      <path d='M14 12h-4' />
    </svg>
  );
}
