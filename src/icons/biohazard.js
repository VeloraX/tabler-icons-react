import React from 'react';

export default function Biohazard({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-biohazard'
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
      <circle cx='12' cy='12' r='2' />
      <path d='M11.939 14 c0.03 0.173 0.048 0.351 0.056 0.533 l 0.005 0.217 a4.75 4.75 0 0 1 -4.533 4.745 l -0.217 0.005 m -4.75 -4.75 a4.75 4.75 0 0 1 7.737 -3.693 m 6.513 8.443 a4.75 4.75 0 0 1 -4.69 -5.503 l -0.06 0.003 m 1.764 -2.944 a4.75 4.75 0 0 1 7.731 3.477 l 0.005 0.217 m -11.195 -3.813 a4.75 4.75 0 0 1 -1.828 -7.624 l 0.164 -0.172 m 6.718 0 a4.75 4.75 0 0 1 -1.665 7.798' />
    </svg>
  );
}
