
import Chain from "../assets/tb/chain.gif"


export const ChainSide = () => {

    const renderChainImages = () => {
        const chainImages = [];
        const imageHeight = 10; // Altura estimada de cada imagem "Chain"
        const chainCount = 12; // Número de repetições desejadas
      
        for (let i = 0; i < chainCount; i++) {
          const topPosition = i * imageHeight; // Calcula a posição "top" para cada imagem
          chainImages.push(
            <img src={Chain} className="chain" key={i} style={{ top: `${topPosition}px` }} />
          );
        }
      
        return chainImages;
      }
    return (
        <>
        {renderChainImages()}
        </>
    )
}
export const ChainSideRight = () => {

  const renderChainImages = () => {
      const chainImages = [];
      const imageHeight = 10; // Altura estimada de cada imagem "Chain"
      const chainCount = 12; // Número de repetições desejadas
    
      for (let i = 0; i < chainCount; i++) {
        const topPosition = i * imageHeight; // Calcula a posição "top" para cada imagem
        chainImages.push(
          <img src={Chain} className="chainRight" key={i} style={{ top: `${topPosition}px` }} />
        );
      }
    
      return chainImages;
    }
  return (
      <>
      {renderChainImages()}
      </>
  )
}

export const ChainSideIventoriLeft = () => {

  const renderChainImages = () => {
      const chainImages = [];
      const imageHeight = 10; // Altura estimada de cada imagem "Chain"
      const chainCount = 19; // Número de repetições desejadas
    
      for (let i = 0; i < chainCount; i++) {
        const topPosition = (i * imageHeight) + 130; // Calcula a posição "top" para cada imagem
        chainImages.push(
          <img src={Chain} className="chainleft2" key={i} style={{ top: `${topPosition}px` }} />
        );
      }
    
      return chainImages;
    }
  return (
      <>
      {renderChainImages()}
      </>
  )
}


export const ChainSideIventoriRight = () => {

  const renderChainImages = () => {
      const chainImages = [];
      const imageHeight = 10; // Altura estimada de cada imagem "Chain"
      const chainCount = 19; // Número de repetições desejadas
    
      for (let i = 0; i < chainCount; i++) {
        const topPosition = (i * imageHeight) + 130; // Calcula a posição "top" para cada imagem
        chainImages.push(
          <img src={Chain} className="chainRight2" key={i} style={{ top: `${topPosition}px` }} />
        );
      }
    
      return chainImages;
    }
  return (
      <>
      {renderChainImages()}
      </>
  )
}

