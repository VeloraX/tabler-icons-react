import React from 'react';

export default function LetterA({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-letter-a'
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
      <path d='M7 20v-12a4 4 0 0 1 4 -4h2a4 4 0 0 1 4 4v12' />
      <line x1='7' y1='13' x2='17' y2='13' />
    </svg>
  );
}
