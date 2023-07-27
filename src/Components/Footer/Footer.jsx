import Logo from "@/UI/Logo";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.column1}>
          <h2>
            <Logo />
          </h2>
          <h3 className="p">
            Desfrute de um café de qualidade enquanto se reconecta com o que é
            essencial.
          </h3>

          {/* <SocialLinks /> */}
        </div>
        <div className={styles.column2}>
          <h2 className="p">Faça-nos uma visita</h2>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.2830916518765!2d-46.68825032383809!3d-23.594178162800254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf023b55c12181%3A0x3b8abfd50b94e707!2sAg%C3%AAncia%20Econverse%20%7C%20Implanta%C3%A7%C3%A3o%20VTEX%20e%20Shopify!5e0!3m2!1spt-BR!2sbr!4v1690417136083!5m2!1spt-BR!2sbr"
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className={styles.column3}>
          <h2 className="p">Funcionamento</h2>

          <ul>
            <li>Segunda - Sexta: 09:00 ás 18:00</li>
            <li>Sabado - Domingo: 09:00 ás 18:00</li>
            <li>(11)998787-8778</li>
            <li>contatobubblecoffe@gmail.com</li>
          </ul>
        </div>
      </div>

      <span>Todos os direitos reservados</span>
    </footer>
  );
};

export default Footer;
