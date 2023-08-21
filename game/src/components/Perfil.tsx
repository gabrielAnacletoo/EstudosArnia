import React from 'react';
import { imgCarcters } from '../style/ImagesImport';
import Newbie from '../assets/newbie.png';
import Level10More from '../assets/level10mais.png';
import LEvel20More from '../assets/lvl20mais.png';
import Mage from '../assets/mago2.png';
import { PhotoPerfil } from '../style/styles';

interface PerfilProps {
  imagem: string | null;
  nome: string | null;
  // coins: string | null;
}

const Perfil: React.FC<PerfilProps> = ({ imagem, nome }) => {
  let imgPerfilBd = imagem;
  if (imgPerfilBd === 'Mago2') {
    imgPerfilBd = imgCarcters.Mago2;
  } else if (imgPerfilBd === 'Archer1'){
    imgPerfilBd = imgCarcters.Archer1;
  } else if (imgPerfilBd === 'Berseker3') {
    imgPerfilBd = imgCarcters.Berseker3;
  } else if (imgPerfilBd === 'Thief3') {
    imgPerfilBd = imgCarcters.Thief3;
  }

  return (
    <PhotoPerfil>
      <img src={Newbie} />
      {imgPerfilBd && <img src={imgPerfilBd} className="classes" />}
     <small className='nomePerfil'>Adventurer: {nome}</small><span className="onlineIndicator"></span>
    </PhotoPerfil>
  );
};

export default Perfil;
