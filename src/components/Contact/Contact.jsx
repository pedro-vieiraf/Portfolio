import { getImageUrl } from '../../utils';
import styles from './Contact.module.css';

export function Contact() {
  return (
    <footer className={ styles.container } id="contact">
      <div className={ styles.text }>
        <h2>Contato</h2>
        <p>Entre em contato comigo!</p>
      </div>
      <ul className={ styles.links }>
        <li className={ styles.link }>
          <img src={ getImageUrl('contact/emailIcon.png') } alt="Email icon" />
          <a href="mailto:pedrovieirafdev@gmail.com">pedrovieirafdev@gmail.com</a>
        </li>
        <li className={ styles.link }>
          <img src={ getImageUrl('contact/linkedinIcon.png') } alt="Linkedin icon" />
          <a href="https://www.linkedin.com/in/pedro-vieira-dev/">linkedin.com/pedro-vieira-dev</a>
        </li>
        <li className={ styles.link }>
          <img src={ getImageUrl('contact/githubIcon.png') } alt="Github icon" />
          <a href="https://github.com/pedro-vieiraf">github.com/pedro-vieiraf</a>
        </li>
      </ul>
    </footer>
  );
}
