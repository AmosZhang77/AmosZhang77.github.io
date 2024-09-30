import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "个人前端开发经验整理",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        个人开发中遇到的问题，并且判断可能有用的会整理进来。有体系文档的这里不会重复整理，只会记录自己的一些经验（菜鸡个人维护有多垃圾，你们懂的）。
      </>
    ),
  },
  {
    title: "由爱驱动，适合人群",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        无聊时整理，擅长停更挂机。内容有问题，或者有更好的方法，欢迎指教。联系方式：moonyellow@126.com
      </>
    ),
  },
  {
    title: "",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        本人正在找一份前端工作，一份能好好写代码，不用写PPT的前端工作。

      </>
    ),
  },
  {
    title: "价值观（请尽量忽略此条，手动狗头）",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        我要将青春献给人类生存发展的伟大事业。--- I will dedicate my youth to
        the great cause of human survival and development.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--3")}>
      {/*<div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>*/}
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
