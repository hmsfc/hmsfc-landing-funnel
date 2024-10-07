'use client';
import React, { FC } from 'react';
import styles from './page.module.css';
import Image from 'next/image';
import './globals.css';
import Settings from '../public/stores/settings.json';

// Define the type for each certification item
interface CertificationItem {
  label: string;
  icon: string;
  split: string;
}

// Define the type for the Hero object
interface Hero {
  label: string;
  breakLabel: string;
  number: string;
  subLabel: string;
  breakSubLabel: string;
  content: string;
  certification: CertificationItem[];
}

// Hero Component
const Hero: FC<{ label: string; splitAfter: string }> = ({ label, splitAfter }) => {
  const parts = label.split(splitAfter);
  return (
    <>
      <h1 className={styles.heading}>{parts[0] + splitAfter}</h1>
      <h1 className={styles.heading}>{parts[1]}</h1>
    </>
  );
};

// Certification Component
const Certification: React.FC<{ certification: CertificationItem[] }> = ({ certification }) => {
  return (
    <div className={styles.certificationsDiv}>
      {certification.map((cert, index) => {
        // Split the label based on the split string
        const parts = cert.label.split(cert.split);

        return (
          <div key={index}>
            <Image
              style={{ placeSelf: 'center' }}
              src={cert.icon}
              alt={cert.label}
              width={50}
              height={50}
            />
            <p className={styles.phara}>
              {parts[0]}
              {cert.split} <br />
              {parts[1]}
            </p>
          </div>
        );
      })}
    </div>
  );
};

// SubHero Component
const SubHero: FC<{ subLabel: string; breakSubLabel: string }> = ({ subLabel, breakSubLabel }) => {
  const parts = subLabel.split(breakSubLabel);
  console.log(parts);
  return (
    <div className={styles.modelText}>
      <div style={{ textAlign: 'start' }}>
        {parts.slice(0, 3).map((part, index) => (
          <h2 key={index} className={styles.subHeadding}>
            {part}
          </h2>
        ))}
      </div>
      <h1 className={styles.Heading2}>{parts[3]}</h1>
    </div>
  );
};

// Home Component
const Home: React.FC = () => {
  const formUrl = 'https://forms.gle/NBuyAfbNV1wCqGiA6';
  const { hero }: { hero: Hero } = Settings;

  const formHandler = () => {
    window.open(formUrl, '_blank');
  };

  const renderContent = (
    <div className={styles.container}>
      <div>
        <Image
          className={styles.mainImg}
          style={{ placeSelf: 'center' }}
          src={'/people/founder.svg'}
          alt="Founder"
          width={400}
          height={600}
        />
        <div className={styles.leftBtnDiv}>
          <div className={styles.leftBtn}>
            <h2 className={styles.leftBtnHeading}>Agni Sarvaloka</h2>
            <p>Business Strategist</p>
          </div>
        </div>
      </div>
      <div className={styles.rightSide}>
        <div className={styles.right}>
          <div className={styles.header}>
            <Hero label={hero.label} splitAfter={hero.breakLabel} />
          </div>
          <div className={styles.headerRightSide}>
            <div className={styles.headerMid}>
              <h1 className={styles.headerMidValue}>{hero.number}</h1>
            </div>
            <SubHero subLabel={hero.subLabel} breakSubLabel={hero.breakSubLabel} />
          </div>
        </div>
        <div className={styles.mainPhara}>
          <p className={styles.phara}>{hero.content}</p>
        </div>
        <Certification certification={hero.certification} />
      </div>
    </div>
  );

  const renderSlick = (
    <div>
      <main className={styles.contant}>{renderContent}</main>
    </div>
  );

  return renderSlick;
};

export default Home;
