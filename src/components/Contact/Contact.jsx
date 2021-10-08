import icon from "../../assets/img/envoyer-un-mail.png";
import "./Contact.css";

function Contact() {
  return (
    <div class="content" id="contact">
      <span class="anchor" name="target"></span>
        <a href="mailto:melanievano@live.fr">Contactez-moi ! <img src={icon} alt="icon-mail"/></a>
    </div>
  );
}

export default Contact;
