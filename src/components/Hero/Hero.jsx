import styles from './Hero.module.css';
// import { getImageUrl } from '../../utils';

export function Hero() {
  return (
    <section className={ styles.container }>
      <div className={ styles.content }>
        <h1 className={ styles.title }>Olá! Eu sou Pedro Vieira</h1>
        <p className={ styles.description }>
          Eu sou um Desenvolvedor Web Full-Stack apaixonado
          por resolver e simplificar problemas e
          criar novas aplicações úteis. Tenho experiência em
          desenvolvimento de aplicações web
          completas usando JavaScript e suas tecnologias, como React,
          Node.js, Express, entre outras.
          {' '}
        </p>
        <a
          href="mailto:pedrovieirafdev@gmail.com"
          className={ styles.contactBtn }
        >
          Fale comigo
        </a>
      </div>
      {/*       <img
        src={ getImageUrl('hero/me.png') }
        alt="hero"
        className={ styles.heroImg }
      /> */}
      <div className={ styles.topBlur } />
      <div className={ styles.bottomBlur } />

    </section>
  );
}
