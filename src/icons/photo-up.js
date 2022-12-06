import React from 'react';

export default function PhotoUp({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-photo-up'
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
      <path d='M15 8h.01' />
      <path d='M12 20h-5a3 3 0 0 1 -3 -3v-10a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v5' />
      <path d='M4 15l4 -4c.928 -.893 2.072 -.893 3 0l4 4' />
      <path d='M14 14l1 -1c.617 -.593 1.328 -.793 2.009 -.598' />
      <path d='M19 22v-6' />
      <path d='M22 19l-3 -3l-3 3' />
    </svg>
  );
}