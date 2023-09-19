import { describe, vi , it, expect  } from "vitest";
import { UserService } from "./UserService";
import bcrypt from "bcrypt"

// System under test
const repositoryMock = { 
    FindByEmail: vi.fn(), 
    Create: vi.fn(),
    FindAll: vi.fn(),
    FindAppointment: vi.fn()
}  as any 
const sut = new UserService(repositoryMock)

describe("UserService", () => {
  describe("Create Service", () => {
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

describe("Find All users", ()=> {
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

  describe("Find Appointment", () => {
    it("must be able to return to a patient's medical appointments", async () => {
      const userId = "123"
      const mockAppointments = [
        { appointmentdate: "2023-09-15", appointmenttime: "10:00", status: "Scheduled" },
        { appointmentdate: "2023-09-16", appointmenttime: "02:30", status: "Completed" },
      ];

      // Configura o mock para o método FindAppointment
      vi.spyOn(repositoryMock, "FindAppointment").mockResolvedValue({ Appointments: mockAppointments });

      // Chama o método FindAppointment do serviço
      const result = await sut.FindAppointment(userId);

      // Verifica se o serviço retorna as consultas corretamente
      expect(result).toStrictEqual({
        message: "This user's Appointments",
        Appointments: mockAppointments,
      });

      // Verificando se o método FindAppointment foi chamado com o ID de usuário certo
      expect(repositoryMock.FindAppointment).toHaveBeenCalledWith(userId);
    })

    it("should return an error if the repository returns an error", async() => {
      const userid = "123"

      //simulando o repository
      vi.spyOn(repositoryMock, "FindAppointment").mockResolvedValue(false)
      
      // Chame o método FindAppointment do serviço
      const result = await sut.FindAppointment(userid)

      // Verifique se o serviço retorna o erro esperado
      expect(result).toStrictEqual({
        error: 'User has no appointment',
        status: 404
      });
    
      // Verifique se o método FindAppointment foi chamado com o ID de usuário correto
      expect(repositoryMock.FindAppointment).toHaveBeenCalledWith(userid)
    })
  })

  })
  
})