import { SelectUserController } from './controllers/SeletUserController';
import { UpdateUserController } from './controllers/UpdateUserController';
import { DeleteUserController } from './controllers/DeleteUserController';
import { CreateUserController } from './controllers/CreateUserController';
import { Router } from "express";




const router = Router();


const CreateUser = new CreateUserController()
const DeleteUser = new DeleteUserController()
const UpdateUser = new UpdateUserController()
const SelectUser = new SelectUserController()



router.get("/all", SelectUser.handle)
router.put ("/update", UpdateUser.handle)
router.post("/user", CreateUser.handle)
router.delete("/userdel", DeleteUser.handle)



export { router };