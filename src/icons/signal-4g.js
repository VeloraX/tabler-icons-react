import React from 'react';

export default function Signal4g({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-signal-4g'
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
      <path d='M4 8v5h6' />
      <path d='M8 8v8' />
      <path d='M20 9a1 1 0 0 0 -1 -1h-5a1 1 0 0 0 -1 1v6a1 1 0 0 0 1 1h5a1 1 0 0 0 1 -1v-2a1 1 0 0 0 -1 -1h-1' />
    </svg>
  );
}
