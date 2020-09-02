import React from 'react';

export default function TextWrapDisabled({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-text-wrap-disabled'
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
      <line x1='4' y1='6' x2='14' y2='6' />
      <line x1='4' y1='18' x2='14' y2='18' />
      <path d='M4 12h17l-3 -3m0 6l3 -3' />
    </svg>
  );
}