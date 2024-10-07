'use client';
import React, { useEffect, useState } from 'react';
import {
  Head,
  Slick,
  Float,
  SplashScreen,
  Announcement,
  Contact,
  Nav,
  Footer,
  Video,
} from './components';
import Settings from '../public/stores/settings.json';
import styles from './page.module.css';
import './globals.css';
import { usePathname } from 'next/navigation';
import TagManager, { TagManagerArgs } from 'react-gtm-module';

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { brand, Mobilenavigation, announcement, links, footer } = Settings;
  const [isSlickOn, setIsSlickOn] = useState(false);
  const menuHandler = () => {
    setIsSlickOn(!isSlickOn);
  };

  const pathname = usePathname();
  const isHome = pathname === '/';
  const [isLoading, setIsLoading] = useState(isHome);

  useEffect(() => {
    if (isLoading) {
      return;
    }
  }, [isLoading]);

  // Google Tag Manager
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID || '';
  const tagManagerArgs: TagManagerArgs = {
    gtmId,
  };

  useEffect(() => {
    if (gtmId) {
      console.log('Initializing GTM with ID:', gtmId);
      TagManager.initialize(tagManagerArgs);
    }
  }, [gtmId]);

  const renderSlick = (
    <main>
      {isLoading && isHome ? (
        <SplashScreen logoPath={brand.logoPath} finishLoading={() => setIsLoading(false)} />
      ) : (
        <>
          <div className={styles.headline}>
            <Head
              menuHandler={menuHandler}
              logoPath={brand.logoPathColor}
              quotes={brand.quotes}
              breakAfter={brand.breakAfter}
              homeLogo={Mobilenavigation.homeIconUrl}
            />
            <Nav homeLogo={Mobilenavigation.homeIconUrl} />
          </div>

          {isSlickOn && (
            <Slick
              menuHandler={menuHandler}
              ctrlLinks={links.ctrlLinks}
              logoPath={brand.logoPath}
            />
          )}

          {children}
          <Video />
          <Footer
            sarvalokaLogo={footer.sarvalokaLogo}
            copyright_max={footer.copyright_max}
            copyright_min={footer.copyright_min}
            labels={footer.labels}
            address={footer.address}
            pincode={footer.pincode}
            InstituteName={footer.InstituteName}
            InstituteDiscription={footer.Institute_discription}
            InstituteDetails={footer.Institute_details}
            license_informations={footer.license_informations}
            certification={footer.certification}
          />
        </>
      )}
    </main>
  );

  return renderSlick;
}
