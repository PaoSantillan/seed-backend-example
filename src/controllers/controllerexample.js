const ExampleService = require('../services/servicesexample');

class ExampleController{
    static async listAll(req, res, next){
        try{
            const result = await ExampleService.listAll();
            res.send(result);
        }catch(err){
            next(err);
        }
    }

    /*static async getOne(req, res, next){
        try{
            const result = await ExampleService.getOne(req.params.id);
            res.send(result);
        }catch(err){
            next(err);
        }
    }*/

    static async create(req, res, next){

        try{
            const result = await ExampleService.save(req.body);
            res.send(result);
        }catch(error){
            next(error);
        }
    }

    static async update(req, res, next){
        try{
            const result = await ExampleService.update(req.params.id, req.body);
            res.send(result);
        }catch(err){
            next(err);
        }
    }

    static async delete(req, res, next){
        try{
            const result = await ExampleService.delete(req.params.id);
            res.send(result);
        }catch(err){
            next(err);
        }
    }

    // Lo desarrollado...
    static async listBankAccounts(req, res, next){
        try{
            const result = await ExampleService.listBankAccounts();
            res.status(200).send(result);
        }catch(err){
            next(err);
        }
    }

    static async listBanksByCreationDate(req, res, next){
        try{
            const result = await ExampleService.listBanksByCreationDate();
            res.send(result);
        }catch(err){
            next(err);
        }
    }

    static async listBanksBetween5And10(req, res, next){
        try{
            const result = await ExampleService.listBanksBetween5And10();
            res.send(result);
        }catch(err){
            next(err);
        }
    }

    static async deactivateUsers(req, res, next){
        try{
            const result = await ExampleService.deactivateUsers();
            res.send(result);
        }catch(err){
            next(err);
        }
    }

    static async activateUsers(req, res, next){
        try{
            const result = await ExampleService.activateUsers();
            res.send(result);
        }catch(err){
            next(err);
        }
    }
}

module.exports = ExampleController;
