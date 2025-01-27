/**
  * DO NOT EDIT',
  * Generated by fds-dictionary on Wed Jul 06 2022 15:04:44 GMT-0400 (Eastern Daylight Time)
  * github.com/cbinsights/form-design-system/
  */

import React from 'react';
import { IconProps } from 'components/Icon';

const AskAnalystIcon = ({
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
			<path d="M9.5,13 C13.0664368,13 17,15.0211516 17,17.950315 C17,23.3581238 2,23.3416599 2,17.950315 C2,15.0211516 5.93356323,13 9.5,13 Z M9.5,15 C6.88461304,15 4,16.122862 4,17.750175 C4,20.7453666 15,20.7545132 15,17.750175 C15,16.122862 12.115387,15 9.5,15 Z M20,11 L20,13 L18,13 L18,11 L20,11 Z M9.5,2 C11.9858,2 14,4.0142 14,6.5 C14,8.9858 11.9858,11 9.5,11 C7.0142,11 5,8.9858 5,6.5 C5,4.0142 7.0142,2 9.5,2 Z M19,3 C19.897343,3 20.704999,3.3627378 21.228516,3.9375 C21.752033,4.5122622 22,5.2568876 22,6 C22,7.285666 21.270579,8.179964 20.755859,8.773438 C20.2879317,9.31295709 20.0461045,9.60856296 20.006003,9.90935703 L20,10 L18,10 C18,8.797755 18.758861,8.022418 19.244141,7.462891 C19.729421,6.903363 20,6.565334 20,6 C20,5.7041124 19.900733,5.4486909 19.75,5.2832031 C19.599267,5.1177154 19.405657,5 19,5 C18.60432,5 18.412061,5.1192182 18.255859,5.2929688 C18.1256915,5.43776088 18.03479,5.64634706 18.0081052,5.8667535 L18,6 L16,6 C16,5.2676667 16.24953,4.5332807 16.767578,3.9570312 C17.285626,3.3807818 18.09268,3 19,3 Z M9.5,4 C8.119,4 7,5.119 7,6.5 C7,7.881 8.119,9 9.5,9 C10.881,9 12,7.881 12,6.5 C12,5.119 10.881,4 9.5,4 Z"/>
		</g>
	</g>
</svg>
  </div>
);

export default AskAnalystIcon;

