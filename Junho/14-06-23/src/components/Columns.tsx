    import { ColumnsStyled, Column, Cards, Btns, ModalDelete,Container, Error404 } from "../style/style";
    import { ChangeEvent, useState, MouseEvent, useEffect } from "react";
    import { SendService } from "../services/send/send";
    import NavHome from "./NavHome";
    import { useNavigate } from "react-router-dom";
    import { RequerConfig } from "../services/received/received";
    import { Botoes } from "../imports";
    import { DeleteConfig } from "../services/delete/Delete";
    import { ColumnConfig } from "../services/columns/ColumnsConfig";
    import { UpdateConfig } from "../services/update/update";



    interface TemplateCard {
      title: string;
      content: string;
      _id?: string;
      column?: string;
    }

    const Columns = () => {
      console.log(localStorage.getItem("AUTH_TOKEN"))
      const navigate = useNavigate();
      const [newTodo, setNewToDo] = useState<TemplateCard>({
        title: "",
        content: "",
      })
      const [error, setError] = useState<TemplateCard>({
        title: "",
        content: "",
      })
      const [cards, setCards] = useState<TemplateCard[]>([]);
      const [showModal, setShowModal] = useState<boolean>(false);
      const [cardToDelete, setCardToDelete] = useState<string | undefined>(undefined);
      const [editingCard, setEditingCard] = useState<TemplateCard | null>(null);
      const [isEditing, setIsEditing] = useState<boolean>(false);
      const [editedTitle, setEditedTitle] = useState("")
      const [editedContent, setEditedContent] = useState("");



  

  const handleContent = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (editingCard !== null) {
      setEditedTitle(value);
      setEditedContent(value);
    } else {
      setNewToDo((prevContent) => ({
        ...prevContent,
        [name]: value,
      }))
    }
  }

      

  const fetchData = async (token: string) => {
    try {
      if (token) {
        const todos = await RequerConfig(token);
        setCards(todos);
      } else {
        navigate("/App");
      }
    } catch (error) {
      console.log(error);
    }
  }



      
    
      useEffect(() => {
        const token = localStorage.getItem("AUTH_TOKEN");
        if(token) {
          fetchData(token);
        }
      }, []);

      const handleNewTodo = async (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setError({
          title: "",
          content: "",
        });
      
        if (newTodo.title === "" || newTodo.content === "") {
          setError({
            title: "fill all the fields",
            content: "fill all the fields",
          });
          return;
        }
      
        try {
          const response = await SendService({
            title: newTodo.title,
            content: newTodo.content,
          });
          console.log(response);
          setNewToDo({ title: "", content: "" });
      
          const token = localStorage.getItem("AUTH_TOKEN");
          if (token) {
            fetchData(token);
          } else {
            navigate("/App");
          }
        } catch (error) {
          console.error(error);
        }
      };
      

      const handleDeleteCard = async (cardId: string) => {
        try {
          const token = localStorage.getItem("AUTH_TOKEN");
          if (token) {
            await DeleteConfig(token, cardId);
            setShowModal(false);
            fetchData(token);
          } else {
            console.log("Token necessário");
          }
        } catch (error) {
          console.log(error);
        }
      }

      const handleMoveCard = async (cardId: string, newColumn: string) => {
        try {
          const token = localStorage.getItem("AUTH_TOKEN");
          if (token) {
            const columnConfigData = {
              _id: cardId,
              column: newColumn,
            };
            console.log(columnConfigData);
            await ColumnConfig(columnConfigData);

            const updatedCard = cards.find((card) => card._id === cardId);
            if (updatedCard) {
              setCards((prevCards) =>
                prevCards.map((card) => {
                  if (card._id === cardId) {
                    return {
                      ...card,
                      column: newColumn,
                    };
                  } else {
                    return card;
                  }
                })
              );
            }
          } else {
            console.log("Token necessário");
          }
        } catch (error) {
          console.log(error);
        }
      };

      const handleEditCard = (card: TemplateCard) => {
        setEditedTitle(card.title);
        setEditedContent(card.content);
        setEditingCard(card);
        setIsEditing(true);
      };
      

      const handleSaveEdit = async () => {
        try {
          const token = localStorage.getItem("AUTH_TOKEN");
          if (token && editingCard) {
            if (!editingCard._id) {
              throw new Error("ID do card não encontrado.");
            }
      
            const updatedCard = {
              ...editingCard,
              title: editedTitle,
              content: editedContent,
              _id: editingCard._id!,
              column: editingCard.column!,
            };
            
      
            await UpdateConfig(token, editingCard._id, updatedCard);
      
            setEditingCard(null);
            setIsEditing(false);
            fetchData(token);
          } else {
            console.log("Token necessário ou cartão inválido");
          }
        } catch (error) {
          console.log(error);
        }
      };
      
      
      

      return (
        <>
        {localStorage.getItem("AUTH_TOKEN") ? (
          <>
          <NavHome />
          <ColumnsStyled>
            {showModal && (
              <ModalDelete>
                <p>DO YOU REALLY WANT TO DELETE THIS CARD?</p>
                <div>
                  <button className="btnNot" onClick={() => setShowModal(false)}>NO</button>
                  <button className="btnYeah" onClick={() => cardToDelete && handleDeleteCard(cardToDelete)}>YES</button>
                </div>
              </ModalDelete>
            )}
            <Column>
              <h1>Novo</h1>
              <Cards>
              <input
                  type="text"
                  placeholder="Title"
                  className="inputTitle"
                  name="title"
                  value={newTodo.title}
                  onChange={(e) => setNewToDo({ ...newTodo, title: e.target.value })}
                />
                <p>
                  <small>{error.title}</small>
                </p>
                <input
                  type="text"
                  className="textarea"
                  placeholder="Content"
                  value={newTodo.content}
                  name="content"
                  onChange={(e) => setNewToDo({ ...newTodo, content: e.target.value })}
                />


                <p>
                  <small>{error.content}</small>
                </p>
                <Btns>
                  <button className="btnMore" onClick={handleNewTodo}>
                    <img src={Botoes.More} alt="" />
                  </button>
                </Btns>
              </Cards>
            </Column>

            <Column>
              <h1>To Do</h1>
              {cards
                .filter((card) => card.column === "TODO")
                .map((card) => (
                  <Cards key={card._id}>
                    {isEditing && editingCard === card ? (
                      <>
                          <input
                            type="text"
                            placeholder="Title"
                            className="inputTitle"
                            onChange={(e) => setEditedTitle(e.target.value)}
                            name="title"
                            value={isEditing && editingCard === card ? editedTitle : card.title}
                          />

                          <p>
                            <small>{error.title}</small>
                          </p>

                          <input
                            type="text"
                            className="textarea"
                            placeholder="Content"
                            onChange={(e) => setEditedContent(e.target.value)}
                            name="content"
                            value={isEditing && editingCard === card ? editedContent : card.content}
                          />
                          <p>
                            <small>{error.content}</small>
                          </p>
                      </>
                    ) : (
                      <>
                      <div>
                        <p className="title"><b>{card.title}</b></p>
                        <p className="content">{card.content}</p>
                        </div>
                      </>
                    )}
                    <Btns>
                      {isEditing && editingCard === card ? (
                        <>
                          <button className="BtnSave" onClick={handleSaveEdit}>
                            Save
                          </button>
                          <button
                            className="BtnCancel"
                            onClick={() => {
                              setEditingCard(null);
                              setIsEditing(false);
                            }}
                          >
                            Cancel
                          </button>
                        </>
                      ) : (
                        <>
                          <button className="btnEdit" onClick={() => handleEditCard(card)}>
                            <img src={Botoes.EDitBtn} alt="" />
                          </button>
                          <button
                            className="btnDelete"
                            onClick={() => {
                              setCardToDelete(card._id);
                              setShowModal(true);
                            }}
                          >
                            <img src={Botoes.DeleteBtn} alt="" />
                          </button>
                          <button
                            className="btnMove"
                            onClick={() => card._id && handleMoveCard(card._id, "DOING")}
                          >
                            <img src={Botoes.RightBtn} alt="" />
                          </button>
                        </>
                      )}
                    </Btns>
                  </Cards>
                ))}
            </Column>




            <Column>
              <h1>Doing</h1>
              {cards
                .filter((card) => card.column === "DOING")
                .map((card) => (
                  <Cards key={card._id}>
                    {isEditing && editingCard === card ? (
                      <>
                        <input
                          type="text"
                          placeholder="Title"
                          className="inputTitle"
                          onChange={handleContent}
                          name="title"
                          value={editingCard.title}
                        />
                        <p>
                          <small>{error.title}</small>
                        </p>
                        <input
                          type="text"
                          className="textarea"
                          placeholder="Content"
                          onChange={handleContent}
                          name="content"
                          value={editingCard.content}
                        />
                        <p>
                          <small>{error.content}</small>
                        </p>
                      </>
                    ) : (
                      <>
                      <div>
                        <p className="title"><b>{card.title}</b></p>
                        <p className="content">{card.content}</p>
                        </div>
                      </>
                    )}
                    <Btns>
                      {isEditing && editingCard === card ? (
                        <>
                         <button className="BtnSave" onClick={handleSaveEdit}>
                            Save
                          </button>
                          <button
                            className="BtnCancel"
                            onClick={() => {
                              setEditingCard(null);
                              setIsEditing(false);
                            }}
                          >
                            Cancel
                          </button>
                        </>
                      ) : (
                        <>
                          <button className="btnEdit" onClick={() => handleEditCard(card)}>
                            <img src={Botoes.EDitBtn} alt="" />
                          </button>
                          <button
                            className="btnMove"
                            onClick={() => card._id && handleMoveCard(card._id, "TODO")}
                          >
                            <img src={Botoes.LeftBtn} alt="" />
                          </button>
                          <button
                            className="btnDelete"
                            onClick={() => {
                              setCardToDelete(card._id);
                              setShowModal(true);
                            }}
                          >
                            <img src={Botoes.DeleteBtn} alt="" />
                          </button>
                          <button
                            className="btnMove"
                            onClick={() => card._id && handleMoveCard(card._id, "DONE")}
                          >
                            <img src={Botoes.RightBtn} alt="" />
                          </button>
                        </>
                      )}
                    </Btns>
                  </Cards>
                ))}
            </Column>

            <Column>
              <h1>Done</h1>
              {cards
                .filter((card) => card.column === "DONE")
                .map((card) => (
                  <Cards key={card._id}>
                    {isEditing && editingCard === card ? (
                      <>
                        <input
                          type="text"
                          placeholder="Title"
                          className="inputTitle"
                          onChange={handleContent}
                          name="title"
                          maxLength={12}
                          value={editingCard.title}
                        />
                        <p>
                          <small>{error.title}</small>
                        </p>
                        <input
                          type="text"
                          className="textarea"
                          placeholder="Content"
                          onChange={handleContent}
                          name="content"
                          value={editingCard.content}
                          maxLength={121}
                        />
                        <p>
                          <small>{error.content}</small>
                        </p>
                      </>
                    ) : (
                      <>
                      <div>
                      <p className="title"><b>{card.title}</b></p>
                      <p className="content">{card.content}</p>
                      </div>
                      </>
                    )}
                    <Btns>
                      {isEditing && editingCard === card ? (
                        <>
                       <button className="BtnSave" onClick={handleSaveEdit}>
                            Save
                          </button>
                          <button
                            className="BtnCancel"
                            onClick={() => {
                              setEditingCard(null);
                              setIsEditing(false);
                            }}
                          >
                            Cancel
                          </button>
                        </>
                      ) : (
                        <>
                          <button className="btnEdit" onClick={() => handleEditCard(card)}>
                            <img src={Botoes.EDitBtn} alt="" />
                          </button>
                          <button
                            className="btnDelete"
                            onClick={() => {
                              setCardToDelete(card._id);
                              setShowModal(true);
                            }}
                          >
                            <img src={Botoes.DeleteBtn} alt="" />
                          </button>
                          <button
                            className="btnMove"
                            onClick={() => card._id && handleMoveCard(card._id, "DOING")}
                          >
                            <img src={Botoes.LeftBtn} alt="" />
                          </button>
                        </>
                      )}
                    </Btns>
                  </Cards>
                ))}
            </Column>
          </ColumnsStyled>
          </>) : ( 
          <>
         
         <Error404>
         <h1>404 - page not found</h1><br/>
            <p> you must be logged in </p>
         </Error404>
          </>)
          }
        </>
      );
    };

    export default Columns;
