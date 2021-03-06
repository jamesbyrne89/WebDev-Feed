import React, { useEffect, useState, Fragment } from 'react';
import Head from 'next/head';
import { withTheme } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import Header from './Header';
import Sidebar from './Sidebar';
import BackToTopButton from './BackToTopButton';
import { debounce } from '../lib/utils';

type P = {
  title: string;
  onSearchSubmit: Function;
  onAddNewFavourite: Function;
  toggleTheme: Function;
  themeName: string;
  children: React.ReactNode;
  isAuthenticated: any;
  onLogoutClick: Function;
};

const Layout = (props: P) => {
  const {
    children,
    title = 'redditDev',
    onSearchSubmit,
    onAddNewFavourite,
    toggleTheme,
    themeName,
    isAuthenticated,
    onLogoutClick
  } = props;

  const [showBackToTopBtn, setShowBackToTopBtn] = useState(false);

  const onScroll = () => {
    if (window.scrollY > 500 && !showBackToTopBtn) {
      return setShowBackToTopBtn(true);
    }
    return setShowBackToTopBtn(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', debounce(onScroll));

    return () => {
      window.removeEventListener('scroll', debounce(onScroll));
    };
  }, []);

  return (
    <Fragment>
      <GlobalStyles {...props} />
      <Head>
        <title>{title}</title>
      </Head>
      <Header
        onSearchSubmit={onSearchSubmit}
        onAddNewFavourite={onAddNewFavourite}
        toggle={toggleTheme}
        themeName={themeName}
        isAuthenticated={isAuthenticated}
        onLogoutClick={onLogoutClick}
      />
      <Sidebar />
      {children}
      <BackToTopButton show={showBackToTopBtn} />
    </Fragment>
  );
};

export default withTheme(Layout);
