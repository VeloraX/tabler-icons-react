import React from 'react';

export default function Octagon({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-octagon'
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
      <path d='M8.7 3 h 6.6 c0.3 0 .5 .1 .7 .3 l4.7 4.7 c0.2 .2 .3 .4 .3 .7 v6.6 c0 .3 -.1 .5 -.3 .7 l-4.7 4.7 c-0.2 .2 -.4 .3 -.7 .3h-6.6 c-0.3 0 -.5 -.1 -.7 -.3 l-4.7 -4.7 c-0.2 -.2 -.3 -.4 -.3 -.7 v-6.6 c0 -.3 .1 -.5 .3 -.7l4.7 -4.7 c0.2 -.2 .4 -.3 .7 -.3z' />
    </svg>
  );
}
