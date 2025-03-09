import React, { JSX, useEffect } from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import { useHistory } from '@docusaurus/router'; // Import pour gérer la redirection

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--warning', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          🚧 Under Construction 🚧
        </Heading>
        <p className="hero__subtitle">
          {siteConfig.title} is currently under construction. Check back later to discover its content!
        </p>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  const history = useHistory();

  useEffect(() => {
    if (!localStorage.getItem('authToken')) {
      history.push('/login');
    }
  }, []);

  return (
    <Layout
      title={`Under Construction - ${siteConfig.title}`}
      description="This site is under construction, thank you for your patience!"
    >
      <HomepageHeader />
      <main>
        <div className="container" style={{ textAlign: 'center', padding: '2rem' }}>
          <p>We are actively working on {siteConfig.title} to bring you the best possible content.</p>
          <p>Stay tuned! 🚀</p>
        </div>
      </main>
    </Layout>
  );
}
