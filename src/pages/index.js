
import Head from 'next/head';
import Post from '../components/Post/Post';

import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>My Posts</h1>
        <ul className={styles.posts}>
          <li>
            <Post content="hey this is suleman" date="7/10/2021" />
          </li>
          <li>
            <Post
              content="I’m working with figma to design a new website that shows all of
              my tweets!"
              date="7/10/2021"
            />
          </li>
          <li>
            <Post
              content="I’m working with figma to design a new website that shows all of
              my tweets!"
              date="7/10/2021"
            />
          </li>
          <li>
            <Post
              content="I’m working with figma to design a new website that shows all of
              my tweets!"
              date="7/10/2021"
            />
          </li>
        </ul>

        <form>
          <textarea className={styles.formContent}></textarea>
          <button className={styles.formButton}>Add New Post</button>
        </form>
      </main>
    </div>
  );
}
