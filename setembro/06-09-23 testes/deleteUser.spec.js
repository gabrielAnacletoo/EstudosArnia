const deleteUser = require("./functions").deleteUser;

describe('deleteUser function', () => {
    let database;

    beforeEach(() => {
        database = [
            { id: 1, name: 'User1', email: 'user1@gmail.com' },
            { id: 2, name: 'User2', email: 'user2@gmail.com' },
            { id: 3, name: 'User3', email: 'user3@gmail.com' }]
    })

    it('deve deletar um usuário', () => {
        const userId = 3;
        
        const result = deleteUser(userId,database)

        expect(database).not.toContain({id: userId})
    })

     it('deve retornar "User not found" se o usuário não existir', () => {
        const userIdToDelete = 4;

        // Chame a função deleteUser com um ID que não existe no banco de dados
        const result = deleteUser(userIdToDelete, database);

        // Verifique se a função retorna a mensagem esperada
        expect(result).toBe('User not found');

        // Verifique se o banco de dados permanece inalterado
        expect(database).toEqual([
            { id: 1, name: 'User1', email: 'user1@gmail.com' },
            { id: 2, name: 'User2', email: 'user2@gmail.com' },
            { id: 3, name: 'User3', email: 'user3@gmail.com' }
        ]);
    });
})