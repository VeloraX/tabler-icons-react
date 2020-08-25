import React from 'react';

export default function BrandPinterest({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-brand-pinterest'
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
      <path stroke='none' d='M0 0h24v24H0z' />
      <line x1='8' y1='20' x2='12' y2='11' />
      <path d='M10.7 14C11.137 15.263 12.13 16 13.25 16c2.071 0 3.75-1.554 3.75-4a5 5 0 1 0 -9.7 1.7' />
      <circle cx='12' cy='12' r='9' />
    </svg>
  );
}
