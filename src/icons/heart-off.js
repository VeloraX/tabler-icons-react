import React from 'react';

export default function HeartOff({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-heart-off'
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
      <path d='M19.5 13.572l-.983 .974m-1.993 1.973l-4.524 4.481l-7.5 -7.428m0 0a5 5 0 0 1 1.085 -7.969m3.499 -.493a5 5 0 0 1 2.916 1.896a5 5 0 1 1 7.5 6.572' />
      <path d='M3 3l18 18' />
    </svg>
  );
}
