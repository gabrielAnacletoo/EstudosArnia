import axios from "axios";

type DataTarefa = {
  title: string;
  prioridade: string;
};

// Tipo para a resposta da API
type ApiResponse = {
    title: string;
    prioridade: string;
    id: number;
};

const Api = async (tarefa: DataTarefa): Promise<ApiResponse> => {
  const URL = `http://localhost:3000/tarefas`;

  try {
    const response = await axios.post(URL, tarefa);
    return response.data;
  } catch (error) {
    // Lança o erro novamente para o código que chama a função lidar com ele
    throw error;
  }
};

export default Api;
