'use client';

import { useState } from 'react'; // Import useState
import styles from '../styles/servicelist.module.css';
import Link from 'next/link';
import Image from 'next/image';

interface ServiceProps {
  serveLinks?: {
    label: string;
    url: string;
    icon: URL['href'];
  }[];
}

const services: React.FC<ServiceProps> = (props) => {
  const { serveLinks = [] } = props;
  const renderLinks = serveLinks.map((link, i) => {
    return (
      <>
        <div className={styles.main}>
          <div>
            <Image style={{ cursor: 'pointer' }} src={link.icon} alt="alt" width={24} height={24} />
          </div>
          <Link
            style={{
              listStyle: 'none',
              textDecoration: 'none',
              fontSize: '12px',
            }}
            key={i}
            href={link.url}>
            {link.label}
          </Link>
        </div>
      </>
    );
  });

  return <div className={styles.serviceslist}>{renderLinks}</div>;
};

export default services;
