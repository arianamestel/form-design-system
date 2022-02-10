/**
  * DO NOT EDIT',
  * Generated by fds-dictionary on Thu Feb 10 2022 10:13:01 GMT-0500 (Eastern Standard Time)
  * github.com/cbinsights/form-design-system/
  */

import React from 'react';
import { IconProps } from 'components/Icon';

const ExpertIcon = ({
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
			<path d="M16,12 L17.686,15.8384211 L22,16.1915789 L18.724,18.93 L19.708,23 L16,20.8405263 L12.292,23 L13.276,18.93 L10,16.1915789 L14.314,15.8384211 L16,12 Z M12,2 C14.76,2 17,4.24 17,7 L17,7 L17,9 L18,9 C19.1,9 20,9.9 20,11 L20,11 L20,13 L18,13 L18,11 L6,11 L6,20 L11,20 L11,22 L6,22 C4.95,22 4.0822314,21.1799587 4.00551277,20.1486946 L4,20 L4,11 C4,9.9 4.9,9 6,9 L6,9 L7,9 L7,7 C7,4.24 9.24,2 12,2 Z M12,4 C10.34,4 9,5.11666667 9,6.5 L9,6.5 L9,9 L15,9 L15,6.5 C15,5.11666667 13.66,4 12,4 Z"/>
		</g>
	</g>
</svg>
  </div>
);

export default ExpertIcon;

