import React from 'react';

export default function TrackPrev({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-track-prev'
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
      <path d='M10.31 19.802 l -6.56 -6.249 c -1 -0.799 -1 -2.307 0 -3.106 l 6.564 -6.252 c 0.67 -0.48 1.686 -0.008 1.686 0.805 v 4 l 5.394 -4.808 c 0.669 -0.478 1.606 -0.003 1.606 0.808 v 14 c 0 0.812 -0.936 1.285 -1.602 0.809 l -5.398 -4.809 v 4 c 0 0.816 -1.02 1.281 -1.69 0.802 z' />
    </svg>
  );
}
