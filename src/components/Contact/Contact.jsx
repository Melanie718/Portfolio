import icon from "../../assets/img/envoyer-un-mail.png";
import "./Contact.css";

function Contact() {
  return (
    <div class="contactForm">
        <a href="mailto:melanievano@live.fr">Contactez-moi ! <img src={icon} alt="icon-mail"/></a>
    </div>
  );
}

export default Contact;
