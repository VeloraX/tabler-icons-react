import React from 'react';

export default function MoodSmileBeam({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-mood-smile-beam'
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
      <path d='M12 21a9 9 0 1 1 0 -18a9 9 0 0 1 0 18z' />
      <path d='M10 10c-.5 -1 -2.5 -1 -3 0' />
      <path d='M17 10c-.5 -1 -2.5 -1 -3 0' />
      <path d='M14.5 15a3.5 3.5 0 0 1 -5 0' />
    </svg>
  );
}
