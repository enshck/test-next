import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p>
          Get started by editing <code>pages/index.js</code>
        </p>
        <Link href={"/about/1"}>1</Link>
        <Link href={"/about/2"}>2</Link>
        <Link href={"/about/3"}>3</Link>
      </main>
    </div>
  );
}
