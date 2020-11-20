//const { toUpper } = require('lodash');
const db = require('../lib/db');

class ExampleService {
    static async listAll() {
        const result = await db
            .select()
            .table('users')
            .whereNull('deleted_at');

        return {items: result};
    }

    static async save(data) {
        await db('users')
            .insert(data);

        return {success: true};
    }

    static async update(id, data) {
        await db('users')
            .where('id', id)
            .update(data);

        return {success: true};
    }

    static async delete(id) {
        await db('users')
            .where({id: id})
            .update({deleted_at: new Date()});

        return {success: true};
    }

    // Lo desarrollado...
    static async listBankAccounts() {
        const result = await db('accounts', 'banks')
            .select('titular AS TITULAR',
                'tipo_cuenta AS Tipo de cuenta',
                'moneda AS Moneda',
                'nro_cuenta AS Número de cuenta',
                'cbu AS CBU',
                'banks.nombre AS Nombre del banco')
            .join('banks', 'accounts.id', '=', 'banks.id');
        return {items: result};
    }

    static async listBanksByCreationDate() {
        const result = await db('banks')
            .select()
            .orderBy('created_at', 'desc');
        return {items: result};
    }

    static async listBanksBetween5And10() {
        const result = await db('banks')
            .select()
            .where('id', '>', '4')
            .andWhere('id', '<', '11');
        return {items: result};
    }

    static async deactivateUsers() {
        const result = await db('users')
            .where('id', '>', 1)
            .update({active: '0'});
        return {items: result};
    }

    static async activateUsers() {
        const result = await db('users')
            .where('id', '>', 1)
            .update({active: '1'});
        return {items: result};
    }
}

module.exports = ExampleService;
