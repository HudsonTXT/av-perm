import React from 'react';
import {
  App,
  Panel,
  View,
  Statusbar,
} from 'framework7-react';

import routes from '../routes';



export default function (props) {

  // Framework7 parameters here
  const f7params = {
    id: 'io.framework7.testapp', // App bundle ID
    name: 'Framework7', // App name
    theme: 'md',
    // App routes
    routes,
  };

  return (
    <App params={f7params}>
      {/* Statusbar */}
      <Statusbar />

      {/* Left Panel */}
      <Panel left cover>
        <View url="/panel-left/" />
      </Panel>

      {/* Main View */}
      <View id="main-view" url="/" main className="safe-areas" pushState/>
    </App>
  );
};
