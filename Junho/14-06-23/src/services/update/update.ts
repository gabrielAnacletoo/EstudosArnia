import axios from "axios";

type UpdateContent = {
  title: string;
  content: string;
  _id: string;
  column: string;
};

export const UpdateConfig = async (
  token: string,
  cardId: string,
  updatedContent: UpdateContent
): Promise<void> => {
  try {
    const response = await axios.put(
      `https://arnia-kanban.vercel.app/api/card/${cardId}`,
      updatedContent,
      {
        headers: {
          "x-api-key": "52a8b954-e25d-4cc5-86e5-c32e92f994bb",
          "Content-Type": "application/json",
          Authorization: token,
        },
      }
    );

    if (response.status === 200) {
      // Atualização bem-sucedida
      console.log("Card atualizado com sucesso!");
    } else {
      throw new Error("Ocorreu um erro ao atualizar o card.");
    }
  } catch (error) {
    throw new Error("Ocorreu um erro ao atualizar o card. Tente novamente mais tarde!");
  }
};
