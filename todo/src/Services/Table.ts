import axios from "axios";
type ApiResponse = {
    id: number;
    title: string;
    prioridade: string;
};


const TableAPI = async (): Promise<ApiResponse[]> => {
const url = 'http://localhost:3000/tarefas'
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        throw error;

    }
}
export default TableAPI;