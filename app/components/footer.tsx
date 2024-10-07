'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/footer.module.css';
import Settings from '../../public/stores/settings.json';

interface LicenseInformation {
  label: string;
  license: {
    label: string;
    number: string;
  }[];
}

interface Certification {
  label: string;
  icon: string;
  split: string;
}

interface FooterProps {
  sarvalokaLogo: string;
  copyright_max: string;
  copyright_min: string;
  labels: string[];
  address: string;
  pincode: string;
  InstituteName: string;
  InstituteDiscription: string;
  InstituteDetails: string;
  license_informations: LicenseInformation;
  certification: Certification[];
}

const Footer: React.FC<FooterProps> = (props) => {
  const {
    sarvalokaLogo,
    copyright_max,
    copyright_min,
    labels,
    license_informations,
    certification,
    address,
    pincode,
    InstituteName,
    InstituteDetails,
    InstituteDiscription,
  } = props;
  const { socialMediaIcons, contactIcons, footer } = Settings;

  const linksToShow = labels.length > 3 ? labels?.slice(0, 3) : labels;

  return (
    <div className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.left}>
          <div className={styles.logo}>
            <div className={styles.brandLogo}>
              <Image
                className={styles.brandLogoImg}
                style={{ cursor: 'pointer' }}
                src={sarvalokaLogo}
                alt="alt"
                width={200}
                height={70}
              />
            </div>
            <div>
              <p className={styles.fontWightSm}>{address}</p>
              <p className={styles.fontWightSm}>{pincode}</p>
            </div>
          </div>
          <div className={styles.logoContent}>
            <div className={styles.socialMedia}>
              {socialMediaIcons.map((socialMedia, index) => (
                <Image
                  key={index}
                  className={styles.socialMediaIcons}
                  style={{ cursor: 'pointer' }}
                  src={socialMedia.icon}
                  alt={socialMedia.label}
                  width={30}
                  height={30}
                />
              ))}
            </div>
            <div className={styles.contact}>
              {contactIcons.map((contact, index) => (
                <div key={index} style={{ display: 'flex', gap: '5px', marginBottom: '10px' }}>
                  <Image
                    style={{ cursor: 'pointer' }}
                    src={contact.icon}
                    alt={contact.label}
                    width={20}
                    height={20}
                  />
                  <p className={styles.fontWightSm}>{contact.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.leftRight}>
            <div className={styles.leftContent}>
              <h4 className={styles.fontWight}>{InstituteDiscription}</h4>
              <h2 className={styles.brandName}>{InstituteName}</h2>
              <p className={styles.details}>{InstituteDetails}</p>
            </div>
            <div className={styles.rightRight}>
              <h4 className={`${styles.fontWight} ${styles.licenseLabel}`}>
                {license_informations.label}
              </h4>
              <div className={styles.numberDiv}>
                {license_informations.license.map((item, index) => (
                  <div className={styles.numbereflexbox} key={index}>
                    <div>
                      <p className={styles.fontWeight}>{item.label}</p>
                      <h5 className={styles.number}>{item.number}</h5>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className={styles.rightBottom}>
            {footer.certification.map((certification, index) => (
              <div key={index} className={styles.certification}>
                <Image
                  style={{ cursor: 'pointer' }}
                  src={certification.icon}
                  alt="Certification Icon"
                  width={70}
                  height={70}
                />
                <div className={styles.certificationLinks}>
                  <p className={styles.fontWightSmColor}>{certification.label}</p>
                  <Image
                    style={{ cursor: 'pointer' }}
                    src="/icons/access/link.svg"
                    alt="Link Icon"
                    width={20}
                    height={20}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.announcementMain}>
          <div className={styles.announcementHead}>
            <p className={styles.announcementHeadPhara}>Honor Codes</p>
            <p className={styles.announcementHeadPhara}>Legal Documents</p>
            <p className={styles.announcementHeadPhara}>Corporate Governance</p>
          </div>
          {/* <div className={styles.announcement}>
            <div className={styles.announcemetDiv}>
              <Image src={'/icons/certifications/3.svg'} alt="alt" width={70} height={70} />
              <div className={styles.certificationLinks}>
                <p className={styles.announcementText}>
                  Official Announcements,Press Releases & Other Misc. Company Gazette Documents
                </p>
                <Image
                  style={{ cursor: 'pointer' }}
                  src={'/icons/access/link.svg'}
                  alt="alt"
                  width={20}
                  height={20}
                />
              </div>
            </div>
          </div>
          <div className={styles.announcementCertification}>
            <div className={styles.certification}>
              <Image src={'/icons/certifications/1.svg'} alt="alt" width={70} height={70} />
              <div className={styles.certificationLinks}>
                <p className={styles.fontWightSmColor}>
                  Government of India Tax Registration & Annual Compliance & Filingd
                </p>
                <Image
                  style={{ cursor: 'pointer' }}
                  src={'/icons/access/link.svg'}
                  alt="alt"
                  width={20}
                  height={20}
                />
              </div>
            </div>
            <div className={styles.certification}>
              <Image src={'/icons/certifications/2.svg'} alt="alt" width={70} height={70} />
              <div className={styles.certificationLinks}>
                <p className={styles.fontWightSmColor}>
                  Government of India Tax Registration & Annual Compliance & Filingd
                </p>
                <Image
                  style={{ cursor: 'pointer' }}
                  src={'/icons/access/link.svg'}
                  alt="alt"
                  width={20}
                  height={20}
                />
              </div>
            </div>
          </div> */}
          <div className={styles.container}>
            <div className={styles.announcement}>
              {certification.slice(2).map((cert, index) => (
                <div key={index} className={styles.announcemetDiv}>
                  <Image
                    src={cert.icon}
                    alt="alt"
                    width={70}
                    height={70}
                    className={styles.certificationImg}
                  />
                  <div className={styles.certificationLinks}>
                    <p className={styles.announcementText}>{cert.label}</p>
                    <Image
                      style={{ cursor: 'pointer' }}
                      src="/icons/access/link.svg"
                      alt="alt"
                      width={20}
                      height={20}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.announcementCertification}>
              {certification.slice(0, 2).map((cert, index) => (
                <div key={index} className={styles.announcemetDiv}>
                  <Image
                    className={styles.certificationImg}
                    src={cert.icon}
                    alt="alt"
                    width={70}
                    height={70}
                  />
                  <div className={styles.certificationLinks}>
                    <p className={styles.announcementText}>{cert.label}</p>
                    <Image
                      style={{ cursor: 'pointer' }}
                      src="/icons/access/link.svg"
                      alt="alt"
                      width={20}
                      height={20}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className={styles.desktop}>
          <div className={styles.items}>
            {labels.map((item, i) => (
              <Link key={i} href="#" className={styles.itemLink}>
                {item}
              </Link>
            ))}
          </div>
          <div className={styles.content}>
            <p className={styles.contenttext}>{copyright_max}</p>
          </div>
        </div>
        <div className={styles.mobile}>
          <div className={styles.items}>
            {linksToShow.map((item, i) => (
              <Link key={i} href="#" className={styles.itemLink}>
                {item}
              </Link>
            ))}
          </div>
          <div className={styles.content}>
            <p className={styles.contenttext}>{copyright_min}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
