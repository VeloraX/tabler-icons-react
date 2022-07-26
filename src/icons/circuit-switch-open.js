import React from 'react';

export default function CircuitSwitchOpen({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-circuit-switch-open'
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
      <path d='M2 12h2' />
      <path d='M20 12h2' />
      <circle cx='6' cy='12' r='2' />
      <circle cx='18' cy='12' r='2' />
      <path d='M7.5 10.5l7.5 -5.5' />
    </svg>
  );
}
