import { describe, vi , it, expect  } from "vitest";
import { UserService } from "./UserService";
import bcrypt from "bcrypt"

// System under test
const repositoryMock = { 
    FindByEmail: vi.fn(), 
    Create: vi.fn(),
    FindAll: vi.fn(),
}  as any 
const sut = new UserService(repositoryMock)

describe("UserService", () => {
  it("should be able to return an error if user already exists", async () => {
    const paramsMock = { name: "Fulano", email: "fulano@email.com", password: "1234" }
    vi.spyOn(repositoryMock, "FindByEmail")
      .mockResolvedValue({ name: "Ciclano", email: "fulano@email.com", password: "1234" })

    const result = await sut.CreateService(paramsMock)

    expect(result).toStrictEqual({
        error: 'User Already Exists', status: 400
    })
  })

  it("should be able to create a user", async () => {
    const paramsMock = { name: "Fulano", email: "fulano@email.com", password: "1234" }
    const expected = { id: 1, name: "Fulano", email: "fulano@email.com", password: "blablabla" }

    vi.spyOn(repositoryMock, "FindByEmail").mockResolvedValue(null)
    vi.spyOn(repositoryMock, "Create").mockResolvedValue(expected)
    vi.spyOn(bcrypt, "hashSync").mockReturnValue("blablabla")

    const result = await sut.CreateService(paramsMock)

    expect(result).toStrictEqual(expected)
  })


    it("should be able to return all users", async () => {
        const mockUsers = [
            {id:1, name: "user1", email: "user1@email.com"},
            {id:2, name: "user2", email: "user2@email.com"},
            {id:3, name: "user3", email: "user3@email.com"}
        ]

        vi.spyOn(repositoryMock, "FindAll").mockResolvedValue(mockUsers)
        const result = await sut.FindAll();

        expect(result).toStrictEqual(mockUsers)

    }) 
})