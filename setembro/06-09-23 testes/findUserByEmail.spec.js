const findUserByEmail = require("./functions").findUserByEmail;

describe('findUserByEmail function', () => {
    let database;

    beforeEach(() => {
        database = [
            { id: 1, name: 'User1', email: 'user1@gmail.com' },
            { id: 2, name: 'User2', email: 'user2@gmail.com' },
            { id: 3, name: 'User3', email: 'user3@gmail.com' }]
    });
    it('deve retornar o usuário com email existente', () => {
        const email = 'user3@gmail.com';

        const result = findUserByEmail(email,database);

        expect(result).toEqual({ id: 3, name: 'User3', email: 'user3@gmail.com' })
    })

    it('Deve retornar null se o email não existir', () => {
        const emailToFind = 'emailnaoexistente@gmail.com';


        const result = findUserByEmail(emailToFind, database);

        expect(result).toEqual(undefined);
    })
  
})