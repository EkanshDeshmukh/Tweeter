import CrudRepository from "./crud-repo.js";
import User from "../models/user.js";

class UserRepository extends CrudRepository {
  constructor() {
    super(User);
  }
}
export default UserRepository;
