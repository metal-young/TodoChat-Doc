import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
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
      
        <LinkJoinWaitlistComponent />
          
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
    Join waitlist
  </Link>;
  }
}


type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Focus on your work, improve your efficiency',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>TodoChat combines monolithic and pomodoro methods to help you manage your time and tasks more effectively. You can focus on a task and rest for a short time after the task has been completed, thus improving your efficiency and reducing the pressure on your work.
      </>
    ),
  },
  {
    title: 'Manage your to-dos in Natural Language',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
TodoChat is connected to the mainstream language model so that you can create, update and manage your to-do using the natural language. You only need to enter your task and TodoChat will help you organize and manage it automatically.
      </>
    ),
  },
  {
    title: 'Make your life and work easier',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
Whether you work or live, TodoChat can help you manage your tasks. You can view your to-do anytime and anywhere, make sure you don't miss any important things.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

 function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
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
