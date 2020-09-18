import React from 'react';

export default function BrandTailwind({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-brand-tailwind'
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
      <path d='M11.667 6 c -2.49 0 -4.044 1.222 -4.667 3.667 c 0.933 -1.223 2.023 -1.68 3.267 -1.375 c 0.71 0.174 1.217 0.68 1.778 1.24 c 0.916 0.912 1.975 1.968 4.288 1.968 c 2.49 0 4.044 -1.222 4.667 -3.667 c -0.933 1.223 -2.023 1.68 -3.267 1.375 c -0.71 -0.174 -1.217 -0.68 -1.778 -1.24 c -0.916 -0.912 -1.975 -1.968 -4.288 -1.968 z m-4 6.5 c -2.49 0 -4.044 1.222 -4.667 3.667 c 0.933 -1.223 2.023 -1.68 3.267 -1.375 c 0.71 0.174 1.217 0.68 1.778 1.24 c 0.916 0.912 1.975 1.968 4.288 1.968 c 2.49 0 4.044 -1.222 4.667 -3.667 c -0.933 1.223 -2.023 1.68 -3.267 1.375 c -0.71 -0.174 -1.217 -0.68 -1.778 -1.24 c -0.916 -0.912 -1.975 -1.968 -4.288 -1.968 z' />
    </svg>
  );
}
