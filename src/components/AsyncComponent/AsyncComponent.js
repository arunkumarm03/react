/**
 * AsyncComponent
 * Code Splitting Component / Server Side Rendering
 */
import React from 'react';
import Loadable from 'react-loadable';

// rct page loader
import RctPageLoader from '../RctPageLoader/RctPageLoader';


// dashboard
const DashboardComponent = Loadable({
	loader: () => import("../../routes/dashboard"),
	loading: () => <RctPageLoader />,
});


// about us
const AsyncAboutUsComponent = Loadable({
  loader: () => import("../../routes/about-us"),
  loading: () => <RctPageLoader />,
});

export {
  DashboardComponent,
  AsyncAboutUsComponent
};
