import axios, { AxiosResponse } from "axios";

interface TypeTodo {
    title: string;
    content: string;
    column: string;
}

export const RequerConfig = async (userToken: string): Promise<TypeTodo[]> => {
try {
    const response: AxiosResponse<TypeTodo[]> = await axios.get('https://arnia-kanban.vercel.app/api/card', {
        headers: {
        'x-api-key': '52a8b954-e25d-4cc5-86e5-c32e92f994bb',
        'Content-Type': 'application/json',
        'Authorization': userToken,
        },
    })
    return response.data;
} catch(error) {
    console.log(error);
    throw new Error('Falha ao obter cards')
}
}