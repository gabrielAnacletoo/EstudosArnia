const updateUser = require("./functions").updateUser;


describe('Update user function', () => {
    let database;

    beforeEach(() => {
        database = [
            { id: 1, name: 'User1', email: 'user1@gmail.com' },
            { id: 2, name: 'User2', email: 'user2@gmail.com' },
            { id: 3, name: 'User3', email: 'user3@gmail.com' }]
    });


    it('deve atualizar o usuário existente com sucesso', () => {
        const userId = 2;
        const newData = { id: 2, name: 'User2edit', email: 'user2@gmail.com' }

        const result = updateUser(userId, newData, database)

        expect(result).toBe('User updated successfully')//deu certo
        expect(database[1]).toEqual({ id: 2, name: 'User2edit', email: 'user2@gmail.com' })
    })


    it('deve retornar "User not found" se o usuário não existir', () => {
        const userId = 4;
        const newData = { id: 4, name: 'User4', email: 'user4@gmail.com' }

        const result = updateUser(userId, newData, database)

        expect(result).toBe('User not found');

        expect(database).toEqual([
            { id: 1, name: 'User1', email: 'user1@gmail.com' },
            { id: 2, name: 'User2', email: 'user2@gmail.com' },
            { id: 3, name: 'User3', email: 'user3@gmail.com' }
        ])
    })
})
