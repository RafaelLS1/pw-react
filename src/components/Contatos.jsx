import { GithubLogo, Envelope, WhatsappLogo, LinkedinLogo } from "@phosphor-icons/react";
function Contatos() {
  return (
    <div className="lista_cont">
        <ul className="lista">
          <li>
            <a href="/Formulario">Entre em contato!</a>
          </li>
        <li>
            <LinkedinLogo className="git" size={32} />
            <a href="https://www.linkedin.com/in/rafael-lima-da-silva-419bb1238/">Rafael Lima</a>
        </li>
        <li>
            <GithubLogo className="git" size={32} />
            <a href="https://github.com/RafaelLS1">RafaelLS1</a>
        </li>
        <li>
          <Envelope className="env" size={32} />
          <p>slrafael25@gmail.com</p>
        </li>
        <li>
          <WhatsappLogo className="wpp" size={32} />
          <p>+55 (31) 98654-6794</p>
        </li>
        <li><img src="components/dot.png" alt="" /></li>
      </ul>
      
    </div>
      
    
  );
}

export default Contatos;
