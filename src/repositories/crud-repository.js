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
        return await this.model.destroy({
            where: { id: data }
        });
    }

    async get(data) {
        const resource = await this.model.findByPk(data);
        if (!resource) {
            throw new AppError("Not able to find resource", StatusCodes.NOT_FOUND);
        }
        return resource;
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
