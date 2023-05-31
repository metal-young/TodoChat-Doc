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
    title: '专注于你的工作，提高你的效率',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>TodoChat结合了单核工作法和番茄工作法，帮助你更有效地管理你的时间和任务。你可以专注于一项任务，然后在完成任务后休息一会儿，这样可以提高你的工作效率，减少工作压力。
      </>
    ),
  },
  {
    title: '使用自然语言管理你的待办事项',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
TodoChat接入主流大语言模型，让你可以通过自然语言来创建、更新和管理你的待办事项。你只需要输入你的任务，TodoChat就会自动帮你安排和管理。
      </>
    ),
  },
  {
    title: '为你的生活和工作带来便利',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
无论你是在工作中，还是在生活中，TodoChat都可以帮助你管理你的任务。你可以随时随地查看你的待办事项，确保你不会错过任何重要的事情。
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
