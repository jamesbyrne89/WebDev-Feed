import { constants, sizes } from './constants';
import styled from 'styled-components';

export const HeaderStyles = styled.header`
  z-index: 350;
  display: flex;
  align-items: center;
  width: 100%;
  background: ${props => props.theme.header_background};
  box-shadow: 0 0 0 1px ${constants.text_grey_mid_two};
  grid-area: header;
  position: sticky;
  top: 0;
  .header__title-wrapper {
    display: flex;
    align-items: center;
  }
  .header__nav-wrapper {
    display: flex;
    justify-content: flex-end;
    padding-top: 0.25rem;
    > a {
      margin: 0 0.5rem;
      border-bottom: solid 1px transparent;
      &:last-of-type {
        margin-right: 0;
      }
      &:hover {
        border-bottom: solid 1px currentColor;
      }
    }
  }
  ul {
    display: flex;
    justify-content: flex-end;
    flex-grow: 1;
    margin: 0.5rem 0;
    @media (max-width: ${sizes.desktop_sm}px) {
      justify-content: flex-start;
    }
    @media (max-width: ${sizes.tablet}px) {
      justify-content: flex-end;
    }
  }
`;

export const MastheadStyles = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  align-items: flex-end;
  padding: 0.25em 0;
  width: 85%;
  height: auto;
  margin: 0 auto 0 calc(7.5% + 2rem);
  @media (max-width: ${sizes.desktop_sm}px) {
    flex-wrap: wrap;
    justify-content: flex-start;
  }
  @media (max-width: ${sizes.tablet}px) {
    width: 95%;
    margin-left: auto;
  }
`;

export const LogoStyles = styled.h1`
  font-family: 'Tiempos Headline Black';
  font-size: ${props => props.fontSize || '3.75rem'};
  font-weight: 700;
  -webkit-box-flex: 0;
  -ms-flex: 0 0 200px;
  flex: 0 0 200px;
  z-index: 100;
  color: ${props => props.theme.font_colour_primary};
  line-height: 1;
  text-align: left;
  margin: 0;
  padding: ${props => props.padding || '0'};
  cursor: pointer;
  @media (max-width: ${sizes.tablet}px) {
    font-size: 2.5rem;
  }
`;

export const NavItemStyles = styled.li`
  display: flex;
  align-items: center;
  margin-left: -2px;
  padding-left: 1em;
  position: relative;
  font-weight: bold;
  li {
    cursor: pointer;
  }
  a,
  button {
    display: flex;
    align-items: center;
    position: relative;
    background: none;
    border: 0;
    cursor: pointer;
    transition: all 0.2s ease-out;
    padding: 0 1em;
    line-height: 2.4;
    color: ${props => props.theme.button_colour};
    border: solid 2px ${props => props.theme.button_colour};
    &:hover {
      /* // text-decoration: underline; */
      color: ${props => props.theme.button_hover_colour};
      background: ${props => props.theme.button_colour};
    }
  }
`;
