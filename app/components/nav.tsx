'use client';

import styles from '../styles/nav.module.css';
import React, { useState } from 'react';
import Image from 'next/image';
import { FloatMobile, Services } from '../components';
import Settings from '../../public/stores/settings.json';

interface NavProps {
  homeLogo: string; // Changed from URL['href'] to string
}

const Nav: React.FC<NavProps> = ({ homeLogo }) => {
  const { links } = Settings;
  const [serviceList, setServiceList] = useState(false); // Fixed useState usage

  const handleServiceListToggle = () => {
    setServiceList((prevState) => !prevState);
  };

  return (
    <>
      <div className={styles.main}>
        <div className={styles.homeIcon}>
          <Image
            style={{ cursor: 'pointer' }}
            src={homeLogo}
            alt="Home Logo"
            width={24}
            height={24}
          />
        </div>
        <div className={styles.links}>
          <FloatMobile serveLinks={links.NavigationLinks} />
        </div>
        <div
          className={`${styles.hamburgerIcon} ${serviceList ? '' : styles.hamburgerIconClick}`}
          onClick={handleServiceListToggle}>
          <Image
            style={{ cursor: 'pointer' }}
            src={'/icons/hamburger/right.svg'}
            alt="Hamburger Icon"
            width={24}
            height={24}
          />
        </div>
      </div>
      {serviceList ? (
        <div className={`${styles.servicesContainer} ${serviceList ? styles.show : styles.hide}`}>
          {serviceList && <Services serveLinks={links.NavigationLinks} />}
        </div>
      ) : (
        ''
      )}
      <div className={`${serviceList ? styles.blackScreenVisible : ''}`}></div>
    </>
  );
};

export default Nav;
