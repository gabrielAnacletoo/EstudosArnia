import { initializeDatabase } from "./database/DataBaseConfig.js";
import Express from "express";
import { MakeTransitions } from "./factory/MakeTransitions.js";
import { Transition } from "./entities/Transitions.js";

//Variaveis do banco de dados exportadas de database;
const { collection, client } = initializeDatabase();
//instanciando o express
const app = Express();
/*
classe ou função MakeTransitions para instanciar um serviço que lida com transações. 
A função getInstance pode ser um método estático ou um design de padrão Singleton
*/
const service = MakeTransitions.getInstance(collection)
app.use(Express.json())


//Create New Transition
app.post("/transitions", async (req,res) => {
    const TransitionData = req.body;
    const newTransition = new Transition(TransitionData)
    const response = await service.CreateTransition(newTransition)
    console.log(response)
    if(response){
      res.status(201).json({ status: '201', message: 'Transition Created' });
    } else {
      res.status(404).json({ status: '404', message: 'Transition Failed, Check the value of kind' });
    }
})

// Return All transitions
app.get("/history", async(req,res) => {
  const transitions = await service.ListTransitions();
  if(transitions){
    res.json(transitions)
  }else {
    res.status(404).json({ status: '404', message: 'Request Failed' });
  }
})

// Only withdraw transitions
app.get("/withdraw", async (req, res) => {
  const listWithDraw = await service.WithdrawalTransitions();
  if(listWithDraw){
    res.json(listWithDraw)
  } else {
    res.status(404).json({ status: '404', message: 'Not Found'})
  }
})

// Only Deposit transitions
app.get("/deposit", async (req, res) => {
  const listDeposit = await service.DepositTransitions();
  if(listDeposit){
    res.json(listDeposit)
  } else {
    res.status(404).json({ status: '404', message: 'Not Found'})
  }
})

//Search By Id 
app.get('/search/:id', async (req,res) => {
  const TransitionID = req.params.id;
  const response = await service.SearchById(TransitionID);
  if(response){
    res.json(response)
  } else {
    res.status(404).json({ status: '404', message: 'Not Found'})
  }
})

//Change Stats Cancel
app.path('/cancel/:id', async (req,res) => {
  const CanceledID = req.params.id;
  const CanceledStatus = req.body
  const response = await service.CancelTransition(CanceledID,CanceledStatus);
  if(response){
    res.json(response)
  } else {
    res.status(404).json({ status: '404', message: 'Not Found'})
  }
})

app.listen(3333, () => {
    console.log(`Servidor rodando na porta 3333`);
  });
  
