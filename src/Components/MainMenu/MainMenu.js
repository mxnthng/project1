import React from 'react';
import TopMenu from './TopMenu/TopMenu';
import BottomMenu from './BottomMenu/BottomMenu'

const styles = {
    root: {
        'float': 'left',
        'width': '66px',
        'height': '100vh',
        'background': 'linear-gradient(45deg, #26a69a 30%, #56B4D3 90%)',
    },
};

export default function MainMenu() {
  return (
    <div style={styles.root}>
      <TopMenu />
      <BottomMenu />
    </div>
  );
}