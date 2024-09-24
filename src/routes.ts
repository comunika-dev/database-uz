import { Router } from "express";
import authController from './controllers/authControllers'
import mentorControllers from "./controllers/mentorControllers";
import investorControllers from "./controllers/investorControllers";
import entepriseControllers from "./controllers/entepriseControllers";
import startupControllers from "./controllers/startupControllers";
import main from './controllers/main'


const router = Router();

router.get('/',main.getWelcomeMessage);
router.post('/login',authController.login); 
router.get('/users',authController.getUsers); 

//mentor
router.post('/mentor',mentorControllers.create);
router.get('/mentors',mentorControllers.getAll);
router.get('/mentor/:id',mentorControllers.getById);
router.patch('/mentor/:id',mentorControllers.update);
router.delete('/mentor/:id',mentorControllers.delete);

//investor
router.post('/investor',investorControllers.create);
router.get('/investors',investorControllers.getAll);
router.get('/investor/:id',investorControllers.getById);
router.patch('/investor/:id',investorControllers.update);
router.delete('/investor/:id',investorControllers.delete);

//enteprise
router.post('/enteprise',entepriseControllers.create);
router.get('/enteprises',entepriseControllers.getAll);
router.get('/enteprise/:id',entepriseControllers.getById);
router.patch('/enteprise/:id',entepriseControllers.update);
router.delete('/enteprise/:id',entepriseControllers.delete);

//start-up
router.post('/start-up',startupControllers.create);
router.get('/start-ups',startupControllers.getAll);
router.get('/start-up/:id',startupControllers.getById);
router.patch('/start-up/:id',startupControllers.update);
router.delete('/start-up/:id',startupControllers.delete);



export default router;