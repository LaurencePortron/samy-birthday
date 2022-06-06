import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import React, { Component, useState } from 'react';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <div className={styles.main}>
      <Head>
        <title>Happy BD</title>
      </Head>

      <div className={styles.main}>
        <h1 className={styles.title}>Happy Happy 30th Birthday Fripouille!</h1>
        <Link href='/game'>
          <button className={styles.playButton}>
            <p>Get lucky</p>
          </button>
        </Link>
      </div>

      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Home;
