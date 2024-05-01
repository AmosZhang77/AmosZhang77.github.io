import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <img src="/img/logo.jpg" alt="" className={styles.logoImg}/>
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <p className="hero__subtitle" style={{color:'#ee3f4d'}}>请优先使用右上角搜索功能！！！可以方便地整站全文搜索</p>
        <p className="hero__subtitle">(比如搜索“原型链”)</p>

        <div className={styles.btnBox}>
          <div className={styles.buttons}>
            <Link
                className="button button--secondary button--lg"
                to="/docs/intro"
            >
               Document由此进入
            </Link>
          </div>
          <div className={styles.buttons}>
            <Link
                className="button button--secondary button--lg"
                to="/blog"
            >
              Blog
            </Link>
          </div>
        </div>
       {/* <div className={styles.btnBox2}>
          <div className={styles.buttons}>
            <Link
                className="button button--secondary button--lg"
                to="/blog/introduce"
            >
               相亲专用，请点击
            </Link>
          </div>
        </div>*/}
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
