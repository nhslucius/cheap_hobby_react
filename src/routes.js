import React from 'react';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import NotFound from './pages/NotFound/NotFound';

const routes = [
  {
    path: '/',
    exact: true,
    main: () => <Home />
  },
  {
    path: '/lien-he',
    exact: false,
    main: () => <Contact />
  },
  {
    path: '',
    exact: false,
    main: () => <NotFound />
  }
];

export default routes;