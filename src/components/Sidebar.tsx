import React from 'react';
import SidebarStyles from './styles/SidebarStyles';

const Sidebar = () => (
  <SidebarStyles>
    Created in
    <svg
      className="loc-icon"
      version="1.1"
      id="Capa_1"
      x="0px"
      y="0px"
      viewBox="0 0 19.674 19.674"
    >
      <title>London</title>
      <g>
        <path
          d="M10.804,7.278L9.843,8.237L9.836,8.236c-0.005,0-0.007,0.005-0.013,0.005L9.121,7.535l-0.19,0.193L9.64,8.435
        c0,0.111,0.089,0.2,0.197,0.2c0.11,0,0.199-0.089,0.199-0.2c0-0.001-0.002-0.003-0.002-0.005l0.961-0.96L10.804,7.278z
         M12.017,18.66v-8.442h0.163V6.774h0.057V6.508h-0.379v-0.4l0,0L10.97,4.447h0.004V3.292h-0.017C10.888,3.132,9.95,0.416,9.883,0
        H9.79C9.724,0.416,8.783,3.132,8.718,3.292h-0.02v1.154l0,0l-0.88,1.662H7.816v0.4h-0.38v0.266h0.06v3.443h0.162v8.443h-0.69v1.014
        h5.738V18.66H12.017z M9.836,10.138c-0.939,0-1.701-0.763-1.701-1.703c0-0.939,0.762-1.702,1.701-1.702s1.702,0.762,1.702,1.702
        S10.777,10.138,9.836,10.138z"
        />
      </g>
    </svg>by
    <a href="http://jamestbyrne.com">James Byrne</a>
  </SidebarStyles>
);

export default Sidebar;
