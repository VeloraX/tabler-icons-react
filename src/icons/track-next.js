import React from 'react';

export default function TrackNext({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-track-next'
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
      <path d='M13.69 4.198l6.56 6.25c1 .798 1 2.306 0 3.105l-6.564 6.252c-.67 .48 -1.686 .008 -1.686 -.805v-4l-5.394 4.808c-.669 .478 -1.606 .003 -1.606 -.808v-14c0 -.812 .936 -1.285 1.602 -.809l5.398 4.809v-4c0 -.816 1.02 -1.28 1.69 -.802z' />
    </svg>
  );
}
