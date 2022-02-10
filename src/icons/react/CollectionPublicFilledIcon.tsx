/**
  * DO NOT EDIT',
  * Generated by fds-dictionary on Thu Feb 10 2022 10:13:01 GMT-0500 (Eastern Standard Time)
  * github.com/cbinsights/form-design-system/
  */

import React from 'react';
import { IconProps } from 'components/Icon';

const CollectionPublicFilledIcon = ({
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
			<polygon points="5 2 19 2 19 22 12 17 5 22"/>
		</g>
	</g>
</svg>
  </div>
);

export default CollectionPublicFilledIcon;

