import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Lígia Moraes Confeitaria</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className="img">
          <Image
            src="/logoLMConfeitaria.png"
            alt="logo"
            width={250}
            height={250}
          />
        </div>

        <h1 className={styles.title}>Bem vindo a Lígia Moraes Confeitaria !</h1>

        <p className={styles.description}>
          Trabalhamos para melhor servir nossos clientes com muito amor e
          dedicação, agradecemos a preferência.
        </p>

        <p className={styles.obs}>
          Clique no botão abaixo para conferir nossos Bolos, Kit festas e muito mais.
        </p>

        
        <button className={styles.btn_cardapio}>
          Nosso Cardápio
        </button>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://api.whatsapp.com/send?phone=5585987583698"
          target="_blank"
          rel="noopener noreferrer"
        >
          Developer by André Franklin © 2022           
        </a>
      </footer>
    </div>
  );
}
