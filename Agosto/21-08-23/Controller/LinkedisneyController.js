

class LinkedisneyController{
    constructor(service){
        this.service = service;
    }

    async CreateController(req, res){
        const result = await this.service.Create(req.body);

        if(result.error){
            return res.status(400).json({ error: result.error });
        }

       return res.status(201).json({message: `Perfil criado com sucesso.`});
    }


    async ListAllDeletedController(req,res) {
        const result = await this.service.ListAllProfilesDeleted();

        if(result.error){
            return res.status(400).json({error: result.error});
        } else {
            res.status(200).json(result);
        }
       
    }

    async ListAllController(req,res) {
        const result = await this.service.ListAllProfiles();

        if(result.error){
            return res.status(400).json({error: result.error});
        } else {
            res.status(200).json(result);
        }
       
    }


    async DeleteController(req,res){
        const id = req.params.id;
        const result = await this.service.ProfileDelete(id);
        if(result.error){
            return res.status(400).json({error: result.error});
        } else {
            res.status(200).json('Profile successfully modified');
        }
    }

    async EditController(req,res){
        const id = req.params.id;
        const status = req.body.status;
        const result = await this.service.ProfileEdit(id,status);
        if(result.error){
            return res.status(400).json({error: result.error});
        } else {
            res.status(200).json('Profile successfully modified');
        }
    }


     async ControllerProfilesDeleted(req,res){
       const result = await this.service.ListAllProfilesDeleted();
       res.status(201).json(result);
    }
}




export {LinkedisneyController}