import styled from 'styled-components';
import { constants } from '../styles/constants';

const LoaderStyles = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  height: 3.5rem;
  width: 3.5em;
  color: ${props => props.theme.button_colour};
  font-family: ${constants.sansSerif};
  user-select: none;
  font-size: 7.5vh;
  opacity: 0.8;
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  span {
    display: inline-block;
    -webkit-animation: pulse 0.4s alternate infinite ease-in-out;
    animation: pulse 0.4s alternate infinite ease-in-out;
  }
  span:nth-child(odd) {
    -webkit-animation-delay: 0.4s;
    animation-delay: 0.4s;
  }
  @-webkit-keyframes pulse {
    to {
      -webkit-transform: scale(0.8);
      transform: scale(0.8);
      opacity: 0.5;
    }
  }
  @keyframes pulse {
    to {
      -webkit-transform: scale(0.8);
      transform: scale(0.8);
      opacity: 0.5;
    }
  }
`;

export default LoaderStyles;
