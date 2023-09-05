

class LinkedisneyService {
    constructor(repository){
        this.repository = repository;
    }

    async Create(data) {
        let status;

        if (["open to work", "closed", "hiring"].includes(data.status)) {
            status = data.status;
        } else {
            return { error: "Status is not valid. Please provide a valid status." };
        }

        const result = await this.repository.CreateProfile({ ...data, status });
        return result;
    }

    async ProfileDelete(id){
        const result = await this.repository.DeleteProfile(id);
        if(result){
            return result;
        } else {
            return { error: "Date is not valid. Please provide a valid Date." };
        }
        
    } 

    async ProfileEdit(id,status){
        const result = await this.repository.EditStatus(id,status);
        if(result){
            return result;
        } else {
            return { error: "Stats is not valid. Please provide a valid stats." };
        }
    }

    async ListAllProfiles(){
        const result = await this.repository.ListAll();
        return result;
    }


    async ListAllProfilesDeleted(){
        const result = await this.repository.ListAllDeleted();
        return result;
    }
}

export {LinkedisneyService}