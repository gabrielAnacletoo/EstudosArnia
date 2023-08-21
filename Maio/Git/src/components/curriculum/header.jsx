import envelop from '../../assets/images/envelop.png'


const Header = () => {
  return (
    <div className="header">
      <div className="item">
        <div className="icon">
          <img src={envelop} alt="ícone de envolope" />
        </div>
        <div className="text">dempsliam@gmail.com</div>
      </div>
      <div className="item">
        <div className="icon">L</div>
        <div className="text">www.civie/liamdem.com</div>
      </div>
      <div className="item">
        <div className="icon">T</div>
        <div className="text">+366 010 101 001</div>
      </div>
    </div>
  )
}

export default Header

