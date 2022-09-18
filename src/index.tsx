import React, { FC, HTMLAttributes } from 'react';

export interface Props extends Omit<HTMLAttributes<SVGElement>, 'children'> {
  size?: number;
  strokeWidth?: number;
  rotateSpeed?: number;
}

export const Spinner: FC<Props> = ({
  size = 20,
  strokeWidth = 2.5,
  rotateSpeed = 1,
  ...rest
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ borderRadius: '100vmax' }}
      {...rest}
    >
      <g>
        <path
          d="M20 10a10 10 0 11-2.929-7.071"
          stroke="currentColor"
          strokeWidth={strokeWidth * 2}
        >
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="rotate"
            from="0 10 10"
            to="360 10 10"
            dur={`${rotateSpeed}s`}
            repeatCount="indefinite"
          />
        </path>
      </g>
    </svg>
  );
};
