import "./Footer.css";

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6'>
            <p>Vinicius Viana</p>
            <p>viniciusviana054@gmail.com</p>
          </div>
          <div className='col-md-6'>
            <p>redes sociais:</p>
            <ul>
              <li><a href='#'>Linkedin</a></li>
              <li><a href='#'>Github</a></li>
            </ul>
          </div>
        </div>
        <hr />
        <div className='row'>
          <div className='col-md-12'>
            <p>&copy; 2023 - Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer