import React from 'react';

export default function ZeppelinOff({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-zeppelin-off'
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
      <path d='M15.773 15.783c-.723 .141 -1.486 .217 -2.273 .217c-2.13 0 -4.584 -.926 -7.364 -2.777l-2.136 1.777v-3.33a46.07 46.07 0 0 1 -2 -1.67a46.07 46.07 0 0 1 2 -1.67v-3.33l2.135 1.778c.13 -.087 .261 -.172 .39 -.256m2.564 -1.42c1.601 -.735 3.071 -1.102 4.411 -1.102c4.694 0 8.5 2.686 8.5 6c0 1.919 -1.276 3.627 -3.261 4.725' />
      <path d='M10 15.5v4.5h6v-4' />
      <path d='M3 3l18 18' />
    </svg>
  );
}