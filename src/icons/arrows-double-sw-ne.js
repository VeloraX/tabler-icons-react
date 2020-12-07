import React from 'react';

export default function ArrowsDoubleSwNe({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-arrows-double-sw-ne'
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
      <path d='M14 3l-11 11' />
      <path d='M3 10v4h4' />
      <path d='M17 10h4v4' />
      <path d='M10 21l11 -11' />
    </svg>
  );
}