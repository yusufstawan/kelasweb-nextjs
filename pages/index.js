import { Fragment } from "react";
import Head from "next/head";

import FeaturedPosts from "../components/home-page/featured-posts";
import Hero from "../components/home-page/hero";
import { getFeaturedPosts } from '../lib/posts-util';

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>Home Page | Tempat belajar menjadi Web Developer yang handal</title>
        {/* Favicon */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest"></link>
        {/* Primary Meta Tags */}
        <meta name="title" content="Kelas Web | Tempat belajar menjadi Web Developer yang handal" />
        <meta name="description" content="Tempat belajar membuat website secara online dari dasar hingga mahir. Kamu bisa belajar HTML, CSS, JavaScript hingga framework JavaScript seperti React JS, Next JS." />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://kelasweb.id/" />
        <meta property="og:title" content="Kelas Web | Tempat belajar menjadi Web Developer yang handal" />
        <meta property="og:description" content="Tempat belajar membuat website secara online dari dasar hingga mahir. Kamu bisa belajar HTML, CSS, JavaScript hingga framework JavaScript seperti React JS, Next JS." />
        <meta property="og:image" content="https://yusufstawan.com/static/media/kelas.17a7f855c2dfa08dfbe7.png" />
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://kelasweb.id/" />
        <meta property="twitter:title" content="Kelas Web | Tempat belajar menjadi Web Developer yang handal" />
        <meta property="twitter:description" content="Tempat belajar membuat website secara online dari dasar hingga mahir. Kamu bisa belajar HTML, CSS, JavaScript hingga framework JavaScript seperti React JS, Next JS." />
        <meta property="twitter:image" content="https://yusufstawan.com/static/media/kelas.17a7f855c2dfa08dfbe7.png" />
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </Fragment>
  )
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts
    }
  }
}

export default HomePage;
