import React from 'react';

export default function Pills({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-pills'
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
      <circle cx='8' cy='8' r='5' />
      <circle cx='17' cy='17' r='4' />
      <path d='M4.5 4.5l7 7' />
      <path d='M19.5 14.5l-5 5' />
    </svg>
  );
}
