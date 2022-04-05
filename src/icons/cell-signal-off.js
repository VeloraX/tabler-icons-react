import React from 'react';

export default function CellSignalOff({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-cell-signal-off'
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
      <path d='M20 20h-15.269a0.731 .731 0 0 1 -.517 -1.249l7.265 -7.264m2 -2.001l5.272 -5.272a0.731 .731 0 0 1 1.249 .517v11.269' />
      <path d='M3 3l18 18' />
    </svg>
  );
}