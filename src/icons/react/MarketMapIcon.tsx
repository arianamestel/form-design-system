/**
  * DO NOT EDIT',
  * Generated by fds-dictionary on Wed Jul 06 2022 15:04:45 GMT-0400 (Eastern Daylight Time)
  * github.com/cbinsights/form-design-system/
  */

import React from 'react';
import { IconProps } from 'components/Icon';

const MarketMapIcon = ({
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
		<g fillRule="nonzero">
			<path d="M19,20 L21,20 L21,22 L17,22 L17,17 L19,17 L19,20 Z M19,13 L21,13 L21,15 L17,15 L17,10 L19,10 L19,13 Z M19,6 L21,6 L21,8 L17,8 L17,3 L19,3 L19,6 Z M12,20 L15,20 L15,22 L10,22 L10,17 L12,17 L12,20 Z M12,13 L15,13 L15,15 L10,15 L10,10 L12,10 L12,13 Z M12,6 L15,6 L15,8 L10,8 L10,3 L12,3 L12,6 Z M5,20 L8,20 L8,22 L3,22 L3,17 L5,17 L5,20 Z M5,13 L8,13 L8,15 L3,15 L3,10 L5,10 L5,13 Z M5,6 L8,6 L8,8 L3,8 L3,3 L5,3 L5,6 Z"/>
		</g>
	</g>
</svg>
  </div>
);

export default MarketMapIcon;

