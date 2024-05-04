class CrudRepository {
  constructor(model) {
    this.model = model;
  }
  async create(data) {
    try {
      const result = await this.model.create(data);
      return result;
    } catch (error) {
      console.log("Something went wrong in CRUD repo", error);
    }
  }
  async destroy(id) {
    try {
      const result = await this.model.findByIdAndDelete(id);
      return result;
    } catch (error) {
      console.log("Something went wrong in CRUD repo", error);
    }
  }
  async update(id, data) {
    try {
      const result = await this.model.findByIdAndUpdate(id, data, {
        new: true,
      });
      return result;
    } catch (error) {
      console.log("Something went wrong in CRUD repo", error);
    }
  }
  async get(id) {
    try {
      const result = await this.model.findById(id);
      return result;
    } catch (error) {
      console.log("Something went wrong in CRUD repo", error);
    }
  }
  async getAll() {
    try {
      const result = await this.model.find();
      return result;
    } catch (error) {
      console.log("Something went wrong in CRUD repo", error);
    }
  }
  async find(id) {
    try {
      const tweet = await Tweet.findById(id).populate({ path: "likes" });
      return tweet;
    } catch (error) {
      console.log(error);
    }
  }
}

export default CrudRepository;
