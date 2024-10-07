'use client';

import { useState } from 'react'; // Import useState
import styles from '../styles/float.module.css';
import upIcon from '../../public/icons/access/up.svg';
import downIcon from '../../public/icons/access/down.svg';

import Link from 'next/link';
import Image from 'next/image';

interface FloatProps {
  serveLinks?: {
    label: string;
    url: string;
  }[];
}

const FloatMax: React.FC<FloatProps> = (props) => {
  const { serveLinks = [] } = props;
  const linksToShow = serveLinks.length > 3 ? serveLinks?.slice(0, 5) : serveLinks;

  const [activeLinkIndex, setActiveLinkIndex] = useState<number | null>(0); // Default to index 1

  const handleClick = (index: number) => {
    setActiveLinkIndex(index);
  };

  return (
    <>
      <div className={styles.tabViewList}>
        {linksToShow.map((link, i) => (
          <div key={i} className={styles.linkWrapper}>
            <Link
              href={link.url}
              className={`${styles.links} ${i === activeLinkIndex ? styles.activeLink : ''}`}
              onClick={() => handleClick(i)}>
              {link.label}
            </Link>
            <Image
              width={24}
              height={24}
              src={i === activeLinkIndex ? downIcon : upIcon}
              alt={i === activeLinkIndex ? 'Up icon' : 'Down icon'}
            />
          </div>
        ))}
      </div>
      {/* <div className={styles.mobileViewList}>
        {linksToShow.map((link, i) => (
          <Link
            key={i}
            href={link.url}
            className={`${styles.links} ${i === activeLinkIndex ? styles.activeLink : ''}`}
            onClick={() => handleClick(i)} // Set active link on click
          >
            {link.label}
          </Link>
        ))}
      </div> */}
    </>
  );
};

export default FloatMax;
