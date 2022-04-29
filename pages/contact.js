import Head from 'next/head';
import { Fragment } from 'react';

import ContactForm from '../components/contact/contact-form';

function ContactPage() {
  return (
    <Fragment>
      <Head>
        <title>Contact Me</title>
        <meta
          name="description"
          content="About programming and web development."
        />
      </Head>
      <ContactForm />
    </Fragment>
  )
}

export default ContactPage;
