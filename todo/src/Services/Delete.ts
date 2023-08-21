import axios from "axios";


const DeleteAPI = async (id: number) => {
const url = `http://localhost:3000/tarefas/${id}`
    try {
        const response = await axios.delete(url);
        return response;
    } catch (error) {
        console.log('algo deu errado')
    }
}
export default DeleteAPI