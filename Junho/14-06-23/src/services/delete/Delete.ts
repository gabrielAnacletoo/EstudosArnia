import axios from "axios";

export const DeleteConfig = async (userToken: string, _id: string): Promise<void> => {
  try {
    await axios.delete(`https://arnia-kanban.vercel.app/api/card/${_id}`, {
      headers: {
        'x-api-key': '52a8b954-e25d-4cc5-86e5-c32e92f994bb',
        'Content-Type': 'application/json',
        'Authorization': userToken,
      },
    });
  } catch (error) {
    console.error(error);
    throw new Error('Falha ao excluir o card');
  }
};
