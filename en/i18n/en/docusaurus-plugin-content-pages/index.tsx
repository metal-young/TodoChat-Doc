import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Translate from '@docusaurus/Translate';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
     
      <div className="container">
      
        <h1 className="hero__title"><Translate>{siteConfig.title}</Translate></h1>
        
        <p className="hero__subtitle"><Translate>Your Smart To-do Manager Assistant</Translate></p>
        <div className={styles.buttons}>
      
        <LinkJoinWaitlistComponent />;
          
        </div>
       
      </div>
    
    </header>
  );
}

function LinkJoinWaitlistComponent() {
  const { i18n } = useDocusaurusContext();
  const { currentLocale } = i18n;

  if (currentLocale.startsWith('zh')) {
    return <Link
    className="button button--secondary button--lg"
    to="https://metaxiaoyu.feishu.cn/share/base/form/shrcnNoGjCBhPhRUNU2kJ2MkZne">
    加入等待名单（飞书） ⏱️
  </Link>;
  } else {
    return <Link
    className="button button--secondary button--lg"
    to="https://forms.gle/VJtRDEhTVXzutRbu5">
    加入等待名单（google） ⏱️
  </Link>;
  }
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
