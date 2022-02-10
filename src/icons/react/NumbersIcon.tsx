/**
  * DO NOT EDIT',
  * Generated by fds-dictionary on Thu Feb 10 2022 10:13:01 GMT-0500 (Eastern Standard Time)
  * github.com/cbinsights/form-design-system/
  */

import React from 'react';
import { IconProps } from 'components/Icon';

const NumbersIcon = ({
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
			<path d="M11.9166667,9 C13.2713333,9 14.1243333,9.31774847 14.875,9.95214847 C15.6243333,10.5865485 16,11.4814765 16,12.6384765 C16,13.2728764 15.9011667,14.0109514 15.3958333,14.7103514 C14.9611667,15.3109514 11.3593747,19.9484375 11.3593747,19.9484375 L11.3593747,19.9484375 L16,19.9484375 L16,22 L8,22 L8,20.2556639 C8,20.2556639 9.10269189,18.9302594 10.2647797,17.5188084 L10.6141446,17.0940311 C11.7195019,15.7485778 12.7843066,14.4373197 12.9140627,14.2228514 C13.1940627,13.7600514 13.3333333,13.3173 13.3333333,12.9 C13.3333333,11.4908 12.548,11.0515625 12,11.0515625 C11.4093333,11.0515625 10.619792,11.6 10.619792,12.9 L10.619792,12.9 L8,12.9 C8,12.1187 8.19025,11.4056703 8.57291667,10.7595703 C8.95558333,10.1134703 9.96066667,9 11.9166667,9 Z M7,2 L7,15 L4.5,15 L4.5,5.07480472 L2,5.9888667 L2,3.89160153 L6.6875,2 L7,2 Z M17.873492,1.99999321 C21.6011307,1.99870023 22,4.59709513 22,5.55538226 C22,7.33412947 20.40192,8.15649975 20.1356601,8.29302641 C20.8013099,8.56737999 22,9.25184144 22,11.3049424 C22,14.3878444 19.3374009,14.9999932 18.0061014,14.9999932 C17.6450943,14.9999932 17.3049508,14.967681 17,14.9083722 L17,14.9083722 L16.9999984,12.6076866 C17.246126,12.8102015 17.5757835,12.9480368 18.0061014,12.9480368 C19.4803924,12.9480368 19.6014454,11.854351 19.6049554,11.3615087 L19.6040172,11.247685 C19.6033573,11.2150298 19.6026211,11.188032 19.6026211,11.1678059 C19.6026211,9.51558669 18.4169196,9.38335814 17.9192481,9.37831472 L17.8139764,9.37883313 C17.7839289,9.37934451 17.759244,9.37995676 17.7408813,9.37995676 L17,9.37995676 L17,7.47274954 L17,7.47274954 L17.9525648,7.47207031 C18.6295754,7.46009978 19.7378305,7.27411635 19.7378305,5.695058 C19.7378305,4.18936398 18.4054913,4.05196368 18.0061014,4.05196368 C16.9410618,4.05196368 16.3211755,5.09720529 16.3211755,5.90076207 L16.3211755,5.90076207 L14.0122028,5.90076207 C14.0122028,3.43678105 15.9244695,1.99999321 17.873492,1.99999321 Z"/>
		</g>
	</g>
</svg>
  </div>
);

export default NumbersIcon;

