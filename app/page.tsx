//import Head from 'next/head'
import styles from "@/styles/styles.module.css"
import Footer from '@/components/footer'
import Link from "next/link"
import Counter from "@/components/counter"
import Login from "@/components/login"
import IndexPage from "@/components/indexPage"

export default function Home() {
  return (
    <div className={styles.container}>
      {/*<Head>
        <title>Mi pagina web</title>
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta name="viewport" content="width-device-width, initial-scale=1, shrink-to-fit=no"/>
        </Head>*/}

      {/*Navbar*/}

      {/*<nav className={styles.navbar}>
        <a href="#" className={styles.navbarBrand}>Home</a>
        <ul className={styles.navbarNav}>
          <li className={styles.navItem}>
            <Link href="/pages/test" className={styles.navLink}>Ayuda</Link>
          </li>
          <li className={styles.navItem}>
            <a href="/pages/pag" className={styles.navLink}>Sesión</a>
          </li>
        </ul>
      </nav>

      {/*Contenido Principal*/}
      {/*<div className={styles.content}>
        <h1>Hola mundo!</h1>
      </div>

      {/*Componente Footer*/}
      {/*<Footer/>
      <Counter/>*/}
      {/*<Login/>*/}
      <IndexPage/>
    </div>
  )
}