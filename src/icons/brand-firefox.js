import React from 'react';

export default function BrandFirefox({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-brand-firefox'
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
      <path d='M4.028 7.82a9 9 0 1 0 7.972 -4.82c-.334 0 -.667 -.036 -1 0' />
      <path d='M4.914 9.485c-1.756-1.569-.805-5.38.109-6.17.086.896.585 1.208 1.111 1.685.88-.275 1.313-.282 1.867 0 .82-.91 2.074-2.261 3.007-2-1.081 1.741-.45 3.64.992 4.08-.17.975-1.484 1.913-2.76 2.686-1.296.938-.722 1.85 0 2.234.949.506 3.611-.995 4.545.354-1.698.102-1.536 3.107-3.983 2.727 2.523.957 4.345.462 5.458-.34 1.965-1.52 2.879-3.542 2.879-5.557-.014-1.398.194-2.695-1.26-4.75' />
    </svg>
  );
}
