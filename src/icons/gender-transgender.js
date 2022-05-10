import React from 'react';

export default function GenderTransgender({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-gender-transgender'
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
      <circle cx='12' cy='12' r='4' />
      <path d='M15 9l6 -6' />
      <path d='M21 7v-4h-4' />
      <path d='M9 9l-6 -6' />
      <path d='M3 7v-4h4' />
      <path d='M5.5 8.5l3 -3' />
      <path d='M12 16v5' />
      <path d='M9.5 19h5' />
    </svg>
  );
}