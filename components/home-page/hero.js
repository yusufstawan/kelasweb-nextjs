import Image from 'next/image';

import classes from './hero.module.css';

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image src="/images/site/max.png" alt="An image profile" width={300} height={300} />
      </div>
      <h1>Hi, I'm Yusuf</h1>
      <p>I blog about web development - especially frontend framework like Angular or React.</p>
    </section>
  )
}

export default Hero;
