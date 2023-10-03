import * as S from '../../assets/Styles/Styled'


const Header = () => {
    return (
        <>
          <S.HeaderDiv>
            <div><span className='meta'>Meta</span><span className='vagas'>Vagas</span></div>
            <S.HeaderButtons>
                <button>Entrar</button>
                <button>Cadastre-se gratuitamente</button>
            </S.HeaderButtons>
            </S.HeaderDiv>  
        </>
    );
};

export default Header;