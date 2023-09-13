import { describe, vi , it } from "vitest";
import { UserService } from "./UserService";

const repositoryMock =  {
    FindByEmail: vi.fn()}
//system under test
const sut = new UserService(repositoryMock)
describe("UserService", () => {
    it("deve ser capaz de retornar um erro se o usuario ja existir", async() => {
        const paramsMock = { name: "gah" , email: "gah@briel.com", password: '123'}
        vi.spyOn(repositoryMock, "FindByEmail").mockResolvedValue({ name: "Ciclano" , email: "gah@briel.com", password: '123'})
        
    const result = await sut.CreateService(paramsMock)

    expect(result).toStrictEqual({
        error: "User Already Exists",
        status: 400
    })
    })
})