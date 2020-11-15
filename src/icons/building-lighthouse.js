import React from 'react';

export default function BuildingLighthouse({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-building-lighthouse'
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
      <path d='M12 3l2 3l2 15h-8l2 -15z' />
      <line x1='8' y1='9' x2='16' y2='9' />
      <path d='M3 11l2 -2l-2 -2' />
      <path d='M21 11l-2 -2l2 -2' />
    </svg>
  );
}