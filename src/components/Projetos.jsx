import Carousel from "react-bootstrap/Carousel";
import dot from "../img/dot.png";
import portf from "../img/portf.png";
import short from "../img/short.png";
import webs2 from "../img/webs2.png";
import nlw from "../img/nlw.png"


function Projetos() {
  return (
    <Carousel >

    <Carousel.Item>
    <img className="d-block w-100"  src={dot} alt="" />
      <Carousel.Caption className="caption">
        <h3>Jogo DOT</h3>
        <p>Feito em C, jogo dot para matéria de Linguagem C.</p>
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item>
    <img className="d-block w-100" src={portf} alt="" />
      <Carousel.Caption className="caption">
        <h3>Portifolio HTML </h3>
        <p>Começo de um portifólio em HTML e CSS simples.</p>
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item>
    <img className="d-block w-100"  src={short} alt="" />
      <Carousel.Caption className="caption">
        <h3>Short Summary</h3>
        <p>
          Projeto de um resumo de Short do youtube utilizando IA para coleta e resumo do que foi dito no audio.
        </p>
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item>
    <img className="d-block w-100"   src={webs2} alt="" />
      <Carousel.Caption className="caption">
        <h3>NutriApp</h3>
        <p>
          Projeto de um site para cadastro de dietas online feito para matéria Eng. de Software
        </p>
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item>
    <img className="d-block w-100"  src={nlw} alt="" />
      <Carousel.Caption className="caption">
        <h3>NLW</h3>
        <p>
          Projeto de um site de perfil de jogos e redes sociais feito em HTML e CSS
        </p>
      </Carousel.Caption>
    </Carousel.Item>
    
  </Carousel>
  );
}

export default Projetos;
