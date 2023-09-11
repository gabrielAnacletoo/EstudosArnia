import JWT from "jsonwebtoken";
import moment from "moment";

class RentServices {
    constructor(userRepository, dealershipRepository, rentRepository) {
        this.userRepository = userRepository;
        this.dealershipRepository = dealershipRepository;
        this.rentRepository = rentRepository;
    }

    async CreateRent(rent) {
        const { withdrawalDate, returnDate, token, dealershipID } = rent;
        const [, tokenNovo] = token.split(" ");
        const decoded = JWT.decode(tokenNovo);
        const { _id, email } = decoded._doc;
        try {
            // Verifica se o usuário existe
            const user = await this.userRepository.findById(_id);
            const userIdString = user._id.toString(); //convertendo apenas string
            
            if (!user) {
                return { error: 'User not found', status: 404 };
            }   

            // Verifica se a concessionaria existe
            const dealership = await this.dealershipRepository.findDealershipById(dealershipID);
            if (!dealership) {
                return { error: 'Dealership not found', status: 404 };
            }

            // Formate as datas para o formato correto
            // Formate as datas para o formato correto (DD/MM/YYYY)
            const withdrawal = moment(withdrawalDate, 'DD/MM/YYYY', true);
            const Datereturn = moment(returnDate, 'DD/MM/YYYY', true);



            // Verifique se as datas estão no formato correto
            if (!withdrawal.isValid() || !Datereturn.isValid()) {
                return { error: 'The date must be in the format "DD/MM/YYYY"', status: 400 };
            }

            // Verifique se o check-in é posterior ou igual à data atual
            const currentDate = moment()
            if (withdrawal.isSameOrAfter(currentDate) || Datereturn.year() > currentDate.year()) {
                const RentData = {
                    user: userIdString,
                    dealership: dealershipID,
                    withdrawalDate: withdrawal,
                    returnDate: Datereturn,
                    status: 'Alugado'
                }


                const createdRent = await this.rentRepository.CreateRent(RentData);
                

                if (createdRent) {
                    user.rents.push(createdRent);
                    await user.save();
                    // A reserva foi criada com sucesso??, agora preciso decrementar o quarto
                    console.log('Carros disponíveis inicialmente:', dealership.carsAvailable);
                    dealership.carsAvailable -= 1;
                    console.log('Carros disponíveis atualizados:', dealership.carsAvailable);
                    await dealership.save();

                    return createdRent;
                } else {
                    return { error: 'Failure to rent the car.', status: 400 };
                }
            } else {
                return { error: 'Wrong date', status: 400 };
            }
        } catch (error) {
            console.error('Error:', error);
            return { error: "Something's gone wrong", status: 500 };
        }
    }


    async CancelRentService(id) {
        console.log('id rent service - ' , id)

        try {
            // Encontre a reserva pelo ID
            const rent = await this.rentRepository.findById(id);
            console.log(rent.status)
            // Verifica se a reserva existe
            if (!rent) {
                return { error: 'Rent not found', status: 404 };
            }
            if(rent.status == 'cancelado'){
                return {error: 'The rent has already been canceled', status: 400}
            }
    
            // Encontre a concessionaria desse aluguel
            const dealershipconvet = rent.dealership._id.toString(); //convertendo apenas string

            const dealership = await this.dealershipRepository.findDealershipById(dealershipconvet);
            console.log(dealership)
            // Verifique se a concessionaria existe
            if (!dealership) {
                return { error: 'Dealership  not found', status: 404 };
            }
    
            dealership.carsAvailable += 1;
            // Salve as alterações na concessionaria
            await dealership.save();

            rent.status = 'Cancelado';
            await rent.save(); // Salve o status do aluguel atualizado
            
    
            return { message: 'Rent successfully canceled' };
        } catch (error) {
            return { error: "Something's gone wrong", status: 500 };
        }
    }
    
}

export { RentServices };
