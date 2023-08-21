import { ChangeEvent, useEffect, useState } from "react";
import Api from "./Services/Api";
import TableAPI from "./Services/Table";
import DeleteAPI from "./Services/Delete";

type DataTarefa = {
  title: string
  prioridade: string
}

type Tarefas = {
  id: number
  title: string
  prioridade: string
}


const App = () => {
  const [error, SetShowError] = useState<boolean>(false)
  const [tarefa, setTarefa] = useState<DataTarefa>({
    title: '',
    prioridade: 'alta'
  });
  const [table, setTable] = useState<Tarefas[]>([]);

  //pega os valores dos inputs
  const inputTarefa = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
  const {name, value} = e.target;
  setTarefa((prevTarefa) => ({
    ...prevTarefa,
    [name]: value,
  }))
  }

  //usar para tratar erros
  const handleSubmit = async () => {
      if(tarefa.title.trim() === "" || tarefa.title.length < 4) {
        SetShowError(true)
        return;
      } else {
        try {
          const data = await Api(tarefa);
          setTarefa(data);

      } catch (error) {
        //adicionar toastfy aqui
        SetShowError(true);
      }
       }
       setTarefa({
        title: "",
        prioridade: "alta"
       })
    }
  
    useEffect(() => {
        const fecthData = async () => {
          try {
            const content = await TableAPI();
            setTable(content)
            console.log(content)

          } catch (error) {
            console.log(error)
          }
        }
        fecthData();
    },[tarefa])


    const handleDelete = async (id: number) => {
      try {
        await DeleteAPI(id);
        const updateTable = table.filter(item => item.id !== id);
        setTable(updateTable);
      } catch (error) {
        console.log('algo deu errado')
      }
    }
  return (
    <>
      <h1>Lista de tarefas com api</h1>
      {error ? 
      <div>
        <p>Houve algum problema</p>
        <button onClick={() => SetShowError(false)}>Voltar</button>
      </div>
      : 
      <>
      <input type="text" placeholder="Tarefa" onChange={inputTarefa} name="title" value={tarefa.title}/>
      <select name="prioridade" onChange={inputTarefa}>
        <option value="alta">alta</option>
        <option value="media">media</option>
        <option value="baixa">baixa</option>
      </select>
        <br/>
      <button onClick={handleSubmit}>enviar</button>
      
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>tarefa</th>
            <th>prioridade</th>
            <th>Ação</th>
          </tr>
        </thead>
        <tbody>
        {table.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td>{item.prioridade}</td>
            <td> <button onClick={() => handleDelete(item.id)}>excluir</button> </td>
          </tr>
        ))}
        </tbody>
      </table>
      </>
    }
      
    </>
  )
}

export default App;