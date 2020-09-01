import React from 'react';

export default function BrandLinkedin({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-brand-linkedin'
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
      <rect x='4' y='4' width='16' height='16' rx='2' />
      <line x1='8' y1='11' x2='8' y2='16' />
      <line x1='8' y1='8' x2='8' y2='8.01' />
      <path d='M12 16v-5' />
      <path d='M16 16v-3a2 2 0 0 0 -4 0' />
    </svg>
  );
}