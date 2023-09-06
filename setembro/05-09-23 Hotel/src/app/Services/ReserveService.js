import JWT from "jsonwebtoken";
import moment from "moment";

class ReserveServices {
    constructor(userRepository, hotelRepository, reserveRepository) {
        this.userRepository = userRepository;
        this.hotelRepository = hotelRepository;
        this.reserveRepository = reserveRepository;
    }

    async createReserve(reserve) {
        const { checkin, checkout, status, token, hotelId } = reserve;
        const [, tokenNovo] = token.split(" ");
        const decoded = JWT.decode(tokenNovo);
        const { _id, email } = decoded._doc;

        try {
            // Verifica se o usuário existe
            const user = await this.userRepository.findById(_id);
            const userIdString = user._id.toString(); //convertendo apenas string

            if (!user) {
                return { error: 'Usuário não encontrado', status: 404 };
            }

            // Verifica se o hotel existe
            const hotel = await this.hotelRepository.findHotelById(hotelId);
            if (!hotel) {
                return { error: 'Hotel não encontrado', status: 404 };
            }

            // Formate as datas para o formato correto
            // Formate as datas para o formato correto (DD/MM/YYYY)
            const checkinDate = moment(checkin, 'DD/MM/YYYY', true);
            const checkoutDate = moment(checkout, 'DD/MM/YYYY', true);



            // Verifique se as datas estão no formato correto
            if (!checkinDate.isValid() || !checkoutDate.isValid()) {
                return { error: 'A data deve estar no formato "YYYY-MM-DD"', status: 400 };
            }

            // Verifique se o check-in é posterior ou igual à data atual
            const currentDate = moment()
            if (checkinDate.isBefore(currentDate) || checkoutDate.year() > currentDate.year()) {
                const ReserveData = {
                    user: userIdString,
                    hotel: hotelId,
                    checkin: checkinDate,
                    checkout: checkoutDate,
                    status,
                }


                const createdReserve = await this.reserveRepository.CreateReserve(ReserveData);
                

                if (createdReserve) {
                    user.reserve.push(createdReserve);
                    await user.save();
                    // A reserva foi criada com sucesso??, agora preciso decrementar o quarto
                    console.log('Quartos disponíveis inicialmente:', hotel.roomsavailable);
                    hotel.roomsavailable -= 1;
                    console.log('Quartos disponíveis atualizados:', hotel.roomsavailable);
                    await hotel.save();

                    return createdReserve;
                } else {
                    return { error: 'Falha ao criar reserva', status: 500 };
                }
            } else {
                return { error: 'Data incorreta', status: 400 };
            }
        } catch (error) {
            console.error('Error:', error);
            return { error: 'Algo deu errado', status: 500 };
        }
    }
}

export { ReserveServices };
