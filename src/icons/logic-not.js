import React from 'react';

export default function LogicNot({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-logic-not'
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
      <path d='M22 12h-3' />
      <path d='M2 9h3' />
      <path d='M2 15h3' />
      <path d='M5 5l10 7l-10 7z' />
      <circle cx='17' cy='12' r='2' />
    </svg>
  );
}
