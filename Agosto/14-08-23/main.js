import express from "express";
import { initializeDatabase } from "./database/DataBaseConfig.js";
import { Order } from "./entities/order.js";
import { MakeOrder } from "./factory/MakeOrder.js";

const { collection, client } = initializeDatabase()

const app = express();
const service = MakeOrder.getInstance(collection)

app.use(express.json());


/*
*new orders
*/
app.post('/neworder', async (req, res) => {
  const dadosRecebidos = req.body;
  const newOrder = new Order(dadosRecebidos);
  const response = await service.CreateOrder(newOrder)
  console.log(response)
  res.json({ status: 'OK'});
})
/*
*list all orders
*/
app.get("/orders", async (req, res) => {
  const orders = await service.ListAllOrders();
  res.json(orders);
});
/*
edit order
*/
app.put('/update/:id', async (req,res) => {
  const orderID = req.params.id;
  const newData = req.body;
  const response = await service.UpdateOrders(orderID,newData);

  if(response.modifiedCount > 0){
    res.json({status: 'OK', message: 'Pedido Atualizado com sucesso!'});
  } else {
    res.status(404).json({ status: 'Erro', message: 'Pedido não encontrado' });
  }
})
app.listen(3333, () => {
  console.log(`Servidor rodando na porta 3333`);
});

