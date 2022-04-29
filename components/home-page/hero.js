import Image from 'next/image';

import classes from './hero.module.css';

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image src="/images/site/max.png" alt="An image profile" width={300} height={300} />
      </div>
      <h1>Kelas Web</h1>
      <p>Tempat belajar menjadi Web Developer yang handal</p>
    </section>
  )
}

export default Hero;
