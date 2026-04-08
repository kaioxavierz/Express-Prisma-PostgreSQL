import { Router, Request, Response} from "express";
import { addUserToBase, listBases, listUsers, updateUserRole, removeUserFromBase} from "../Controllers/UserBaseRelationController";

export const router = Router();

router.post("/", addUserToBase);
router.get("/bases/:userId", listBases);
router.get("/users/:baseId", listUsers);
router.put("/roles/:userId/:baseId", updateUserRole);
router.delete("/users/:userId/:baseId", removeUserFromBase);

export default router;