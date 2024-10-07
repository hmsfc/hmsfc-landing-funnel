'use client';

import Image from 'next/image';
import { URL } from 'url';
import styles from '../styles/head.module.css';
import { useRouter } from 'next/navigation';
import { Float } from '../components';
import Settings from '../../public/stores/settings.json';

interface HeadProps {
  logoPath: URL['href'];
  links?: [];
  menuHandler?: any;
  homeLogo: string;
  quotes: string;
  breakAfter: string;
}

const Head: React.FC<HeadProps> = (props) => {
  const { logoPath, menuHandler, homeLogo, quotes, breakAfter } = props;
  const { links } = Settings;

  const router = useRouter();

  const callHandler = () => {
    window.location.href = 'tel:+91 8122801215';
  };

  const logoHandler = () => {
    router.replace('/');
  };
  const parts = quotes.split(breakAfter);

  return (
    <div className={styles.head}>
      <div className={styles.left}>
        <Image
          style={{ cursor: 'pointer' }}
          onClick={menuHandler}
          className={styles.hamburgerIcon}
          src={'/icons/hamburger/color.svg'}
          alt="alt"
          width={20}
          height={20}
        />
        <Image
          onClick={logoHandler}
          style={{ cursor: 'pointer' }}
          className="mainLogo"
          src={logoPath}
          alt="alt"
          width={142}
          height={46}
        />
        <p className={styles.quotes}>
          {parts[0]}
          {breakAfter}
          <br />
          {parts[1]}
        </p>
      </div>
      <div className={styles.list}>
        <div className={styles.float}>
          <Float link={links.NavigationLinks} />
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.rightBtn}>
          <button className={styles.btn}>Enroll Now</button>
        </div>
        <div className={styles.access}>
          <Image
            style={{ cursor: 'pointer' }}
            onClick={callHandler}
            src={'/icons/access/color.svg'}
            alt="alt"
            width={26}
            height={26}
          />
          <p>Access</p>
        </div>
      </div>
    </div>
  );
};

export default Head;
