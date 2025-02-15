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
        return await this.model.findByPk(data);
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
