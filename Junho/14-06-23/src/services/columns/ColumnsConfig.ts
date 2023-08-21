import axios from "axios";

interface SendContent {
  title?: string;
  content?: string;
  _id?: string | undefined;
  column?: string;
}


type LoginResponse = {
  token: string;
}

export const ColumnConfig = async ({ _id,title,content, column }: SendContent): Promise<LoginResponse> => {
  const userToken = localStorage.getItem('AUTH_TOKEN');

  if (!userToken) {
    throw new Error('Token de usuário não encontrado');
  }

  try {
    const response = await axios.put(
      `https://arnia-kanban.vercel.app/api/card/${_id}`,
      {
        title,
        content,
        column
      },
      {
        headers: {
          'x-api-key': '52a8b954-e25d-4cc5-86e5-c32e92f994bb',
          'Content-Type': 'application/json',
          'Authorization': userToken,
        },
      }
    );

    if (response.status === 200) {
      return response.data;
    }

    if (response.status === 401 || response.status === 404) {
      throw new Error('Credenciais inválidas');
    }

    throw new Error('Ocorreu um erro. Tente novamente mais tarde!');
  } catch (error) {
    throw new Error('Ocorreu um erro ao enviar os dados. Tente novamente mais tarde!');
  }
}
