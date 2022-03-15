import React from 'react';

export default function Currency({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-currency'
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
      <path d='M4 4l3 3' />
      <path d='M20 4l-3 3' />
      <path d='M4 20l3 -3' />
      <path d='M20 20l-3 -3' />
    </svg>
  );
}
