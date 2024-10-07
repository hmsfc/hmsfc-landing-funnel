'use client';

import { useState } from 'react'; // Import useState
import styles from '../styles/float.module.css';

import Link from 'next/link';
import Image from 'next/image';

interface FloatProps {
  link?: {
    label: string;
    url: string;
  }[];
}

const Float: React.FC<FloatProps> = (props) => {
  const { link = [] } = props;

  const [activeLinkIndex, setActiveLinkIndex] = useState<number | null>(0); // Default to index 1

  const handleClick = (index: number) => {
    setActiveLinkIndex(index);
  };

  return (
    <>
      <div className={styles.scrollContainer}>
        <div className={styles.tabViewList}>
          {link.map((link, i) => (
            <div key={i} className={styles.linkWrapper}>
              <Link
                href={link.url}
                className={`${styles.links} ${i === activeLinkIndex ? styles.activeLink : ''}`}
                onClick={() => handleClick(i)}>
                {link.label}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Float;
