/**
  * DO NOT EDIT',
  * Generated by fds-dictionary on Mon Mar 28 2022 10:15:40 GMT-0400 (Eastern Daylight Time)
  * github.com/cbinsights/form-design-system/
  */

import React from 'react';
import { IconProps } from 'components/Icon';

const WorldIcon = ({
  size = 's',
  color,
  customSize,
}: IconProps): JSX.Element => (
  <div
    className={`fds-icon fds-icon--${size}`}
    style={{
      fill: color,
      width: customSize && `${customSize}px`,
      height: customSize && `${customSize}px`,
    }}
  >
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
	<g fillRule="evenodd">
		<g>
			<path d="M12,2 C6.486,2 2,6.486 2,12 C2,17.514 6.486,22 12,22 C17.514,22 22,17.514 22,12 C22,6.486 17.514,2 12,2 Z M18.918,8 L16.613,8 C16.366,6.801 16.008,5.735 15.561,4.846 C16.964,5.548 18.132,6.648 18.918,8 Z M20,12 C20,12.692 19.903,13.359 19.737,14 L16.907,14 C16.967,13.357 17,12.689 17,12 C17,11.311 16.967,10.643 16.907,10 L19.737,10 C19.903,10.641 20,11.308 20,12 Z M12,20 C11.157,20 10.051,18.519 9.445,16 L14.554,16 C13.949,18.519 12.843,20 12,20 Z M9.108,14 C9.041,13.371 9,12.707 9,12 C9,11.293 9.041,10.629 9.108,10 L14.892,10 C14.959,10.629 15,11.293 15,12 C15,12.707 14.959,13.371 14.892,14 L9.108,14 Z M4,12 C4,11.308 4.097,10.641 4.263,10 L7.093,10 C7.033,10.643 7,11.311 7,12 C7,12.689 7.033,13.357 7.093,14 L4.263,14 C4.097,13.359 4,12.692 4,12 Z M12,4 C12.843,4 13.949,5.481 14.555,8 L9.445,8 C10.051,5.481 11.157,4 12,4 Z M8.44,4.846 C7.993,5.735 7.635,6.801 7.388,8 L5.082,8 C5.868,6.648 7.036,5.548 8.44,4.846 Z M5.082,16 L7.387,16 C7.634,17.199 7.992,18.265 8.439,19.154 C7.036,18.452 5.868,17.352 5.082,16 Z M15.56,19.154 C16.007,18.265 16.364,17.199 16.612,16 L18.917,16 C18.132,17.352 16.964,18.452 15.56,19.154 Z"/>
		</g>
	</g>
</svg>
  </div>
);

export default WorldIcon;

