import styles from './About.module.css';
import { getImageUrl } from '../../utils';
import { AboutItem } from './AboutItem';

export function About() {
  return (
    <section className={ styles.container } id="about">
      <h2 className={ styles.title }>Sobre mim</h2>
      <div className={ styles.content }>
        <ul className={ styles.aboutItems }>
          <AboutItem
            icon={ getImageUrl('about/cursorIcon.png') }
            title="Desenvolvedor Frontend"
            description="Sou um desenvolvedor
            frontend com experiência em desenvolver
            sites responsivos e otimizados utilizando principalmente React e Redux"
          />
          <AboutItem
            icon={ getImageUrl('about/serverIcon.png') }
            title="Desenvolvedor Backend"
            description="Sou um desenvolvedor backend com experiência
            em desenvolver APIs REST e sistemas backend otimizados e completos
            utilizando Node.js e Express"
          />
        </ul>
      </div>
    </section>
  );
}
