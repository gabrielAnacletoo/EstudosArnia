
  import axios from 'axios';
  import { useState } from 'react';

  export const Form = () => {
    const [address, setAddress] = useState({
      cep: '',
      nomedarua: '',
      numero: '',
      complemento: '',
      cidade: '',
      estado: ''
    });

    const handleCepChange = async (e) => {
      const cep = e.target.value;

      if (cep.length === 8) {
        try {
          const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
          const { logradouro, complemento, localidade, uf } = response.data;

          setAddress({
            ...address,
            cep,
            nomedarua: logradouro,
            complemento,
            cidade: localidade,
            estado: uf
          });
        } catch (error) {
          console.log('Erro ao obter dados do CEP:', error);
        }
      } else {
        setAddress({
          ...address,
          cep
        });
      }
    };

    return (
      <div className='container'>
        <form>
          <div>
            <label htmlFor="cep">CEP:</label>
            <input type="text" name="cep" value={address.cep} onChange={handleCepChange} maxLength={8} />
          </div>

          <div>
            <label htmlFor="nomedarua">Nome da Rua:</label>
            <input type="text" name="nomedarua" value={address.nomedarua} onChange={(e) => setAddress({ ...address, nomedarua: e.target.value })} />
          </div>

          <div>
            <label htmlFor="numero">Numero</label>
            <input type="text" name="numero" value={address.numero} onChange={(e) => setAddress({ ...address, numero: e.target.value })} />
          </div>

          <div>
            <label htmlFor="complemento">Complemento</label>
            <input type="text" name="complemento" value={address.complemento} onChange={(e) => setAddress({ ...address, complemento: e.target.value })} />
          </div>

          <div>
            <label htmlFor="cidade">Cidade</label>
            <input type="text" name="cidade" value={address.cidade} onChange={(e) => setAddress({ ...address, cidade: e.target.value })} />
          </div>

          <div>
            <label htmlFor="estado">Estado</label>
            <input type="text" name="estado" value={address.estado} onChange={(e) => setAddress({ ...address, estado: e.target.value })} />
          </div>
        </form>
      </div>
    );
  };
