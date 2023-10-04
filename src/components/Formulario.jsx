import React, { Component } from 'react';

class Formulario extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      email: '',
      pergunta: ''
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { nome, email, pergunta } = this.state;
    // Faça algo com os dados do formulário, como enviá-los para um servidor ou realizar alguma lógica de negócios
    console.log(`Nome: ${nome}, Email: ${email}, Pergunta: ${pergunta}`);
    // Você pode redefinir o estado do formulário após o envio
    this.setState({
      nome: '',
      email: '',
      pergunta: ''
    });
  }

  render() {
    return (
      <div className='form'>
        <h2 className='titulo'>Formulário</h2>
        <form className='formu' onSubmit={this.handleSubmit}>
          <div className='nome'>
            <label htmlFor="nome">Nome:</label>
            <br />
            <input className='textarea'
              type="text"
              id="nome"
              name="nome"
              value={this.state.nome}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className='email'>
            <label htmlFor="email">Email:</label>
            <br />
            <input className='textarea'
              type="email"
              id="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className='pergunta'>
            <label htmlFor="pergunta">Pergunta:</label>
            <br />
            <textarea className='textareap'
              id="pergunta"
              name="pergunta"
              value={this.state.pergunta}
              onChange={this.handleChange}
              required
            ></textarea>
          </div>
          <div>
            <button className='enviar' type="submit">Enviar</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Formulario;