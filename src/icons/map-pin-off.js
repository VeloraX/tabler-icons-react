import React from 'react';

export default function MapPinOff({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-map-pin-off'
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
      <line x1='3' y1='3' x2='21' y2='21' />
      <path d='M9.44 9.435a3 3 0 0 0 4.126 4.124m1.434 -2.559a3 3 0 0 0 -3 -3' />
      <path d='M8.048 4.042a8.003 8.003 0 0 1 10.912 10.908m-1.801 2.206l-3.745 3.744a1.998 1.998 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 0 1 -.48 -10.79' />
    </svg>
  );
}
