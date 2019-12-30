import React from 'react';
import SettingMenu from './SettingMenu/SettingMenu';
import NightMode from './NightMode/NightMode';

const styles = {
    root: {
        'display': 'block',
    },
};

export default function TopMenu() {
  return (
    <div style={styles.root}>
      <SettingMenu />
      <NightMode />
    </div>
  );
}