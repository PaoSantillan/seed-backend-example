const ExampleController = require('../../controllers/controllerexample');
//npm i -g eslint

//eslint src --fix
module.exports = router => {
    //Example: GET localhost:3001/api/routeexample
    router.route('/')
        .get(ExampleController.listAll)
        .post(ExampleController.create);

    //Example: GET localhost:3001/api/routeexample/1
    //Example: PATCH localhost:3001/api/routeexample/1
    //Example: DELETE localhost:3001/api/routeexample/1
    router.route('/:id')
        //.get(ExampleController.getOne)
        .patch(ExampleController.update)
        .delete(ExampleController.delete);

    // En desarrollo...
    router.route('/listBankAccounts')
        //Example: GET localhost:3001/api/routeexample/listBankAccounts
        .get(ExampleController.listBankAccounts);

    router.route('/listBanksByCreationDate')
        //Example: GET localhost:3001/api/routeexample/listBanksByCreationDate
        .get(ExampleController.listBanksByCreationDate);

    router.route('/listBanksBetween5And10')
        //Example: GET localhost:3001/api/routeexample/listBanksBetween5And10
        .get(ExampleController.listBanksBetween5And10);

    router.route('/deactivateUsers')
        //Example: PUT localhost:3001/api/routeexample/deactivateUsers
        .put(ExampleController.deactivateUsers);

    router.route('/activateUsers')
        //Example: PUT localhost:3001/api/routeexample/activateUsers
        .put(ExampleController.activateUsers);

    return router;
};
