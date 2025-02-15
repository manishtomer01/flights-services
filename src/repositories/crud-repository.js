const { StatusCodes } = require("http-status-codes");
const AppError = require("../utils/errors/app-error");

class CrudRepository {
    constructor(model) {
        this.model = model;
    }

    async create(data) {
        return await this.model.create(data);
    }

    async destroy(data) {
        const response = await this.model.destroy({
            where: { id: data }
        })
        console.log('response :>> ', response);
        if (!response) {
            throw new AppError("Not able to find resource", StatusCodes.NOT_FOUND);
        }
        return response;
    }

    async get(data) {
        const response = await this.model.findByPk(data);
        if (!response) {
            throw new AppError("Not able to find resource", StatusCodes.NOT_FOUND);
        }
        return response;
    }


    async getAll() {
        return await this.model.findAll();
    }

    async update(id, data) {
        return await this.model.update(data, {
            where: { id: id }
        });
    }
}

module.exports = CrudRepository;
