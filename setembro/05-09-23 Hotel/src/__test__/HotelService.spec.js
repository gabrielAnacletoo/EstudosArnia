import { expect, jest } from '@jest/globals'
import { HotelServices } from "../app/Services/HotelService"

const repositoryMock = {
    Create: () => Promise.resolve({}),
    findHotelById:() => Promise.resolve({})
}

//System under test(sut)
const ServiceHotel = new HotelServices(repositoryMock);

describe("NewHotel", () => {
    it("Deve ser capaz de criar um novo hotel", async () => {
    const HotelData = {
        name: "Hotel Tropeço e Queda",
        address: "Fortaleza",
        roomsavailable: 10
    }
    jest.spyOn(repositoryMock, "Create").mockResolvedValue(HotelData);
    const result = await ServiceHotel.newHotel(HotelData)
    expect(result).toEqual(HotelData)
    expect(repositoryMock.Create).toBeCalledWith(HotelData)

    })


    it("Deve retornar um erro quando a criação do hotel falhar", async () => {
        const HotelData = {
            name: "Hotel Tropeço e Queda",
            address: "Fortaleza",
            roomsavailable: 10
        }
        jest.spyOn(repositoryMock, "Create").mockResolvedValue(false);
        const result = await ServiceHotel.newHotel(HotelData)
        expect(result).toEqual({ error: 'Failure to create hotel', status: 400 });
        expect(repositoryMock.Create).toBeCalledWith(HotelData);
    })
})

describe("findByID", () => {
    it("Deve ser capaz de encontrar um hotel por ID com sucesso", async () => {
        const hotelId = 2;
        const HotelData = {
            id: 2,
            name: "Hotel Tropeço e Queda",
            address: "Fortaleza",
            roomsavailable: 10
        }

        jest.spyOn(repositoryMock, "findHotelById").mockResolvedValue(HotelData);
        const result = await ServiceHotel.findByID(hotelId);

        expect(result).toEqual(HotelData)
        expect(repositoryMock.findHotelById).toBeCalledWith(hotelId)
    })

    it("Deve retornar um erro quando a busca por ID falhar", async () => {
        const hotelID = 3;
        jest.spyOn(repositoryMock, "findHotelById").mockResolvedValue(null);

        const result = await ServiceHotel.findByID(hotelID);

        expect(result).toEqual({error: 'Hotel not found', status: 404});
        expect(repositoryMock.findHotelById).toBeCalledWith(hotelID)
    })
})
