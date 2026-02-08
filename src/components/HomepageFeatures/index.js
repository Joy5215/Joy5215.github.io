import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '学习记录',
    link: '/docs/tech/intro_tech',
    Svg: require('@site/static/img/tech.svg').default,
    description: (
      <>  
      学习知识过程的一些笔记。
      </>
    ),
  },
  {
    title: '项目记录',
    link: '/docs/repo/intro_repo',
    Svg: require('@site/static/img/repo1.svg').default,
    description: (
      <>
      </>
    ),
  },
  {
    title: 'Bug',
    link: '/docs/question/intro_ques',
    Svg: require('@site/static/img/resource.svg').default,
    description: (
      <>
      </>
    ),
  },
];

function Feature({Svg, title, link, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <a href = {link} >
        <h3>{title}</h3>
        </a>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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