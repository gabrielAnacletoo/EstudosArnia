type Atividade = {
    activity: string;
    type: string;
    participants: number;
    price: number;
    key: string;
    accessibility: number;
}

async function obterAtividade(): Promise<Atividade> {
    try {
      const response = await fetch("https://www.boredapi.com/api/activity")
        const data = await response.json();
        console.log(data)
        return data 
    } catch (error) {
      throw new Error("Ocorreu um erro: ")
    }
  }
  
  obterAtividade();
  