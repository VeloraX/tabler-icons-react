import React from 'react';

export default function TrafficLights({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-traffic-lights'
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
      <rect x='7' y='2' width='10' height='20' rx='5' />
      <circle cx='12' cy='7' r='1' />
      <circle cx='12' cy='12' r='1' />
      <circle cx='12' cy='17' r='1' />
    </svg>
  );
}