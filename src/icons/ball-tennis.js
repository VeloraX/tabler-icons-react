import React from 'react';

export default function BallTennis({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-ball-tennis'
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
      <circle cx='12' cy='12' r='9' />

      <path d='M6 5.3a9 9 0 0 1 0 13.4' />

      <path d='M6 5.3a9 9 0 0 1 0 13.4' transform='rotate(180 12 12)' />
    </svg>
  );
}
