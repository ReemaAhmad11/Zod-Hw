import express from 'express';
import validate from '../middilwares/validate';
import { parkSchema, ParkSchemaType,} from '../zod-schema/park_schema';

//last solve
const router = express.Router();
let park : ParkSchemaType[] = [];

//Endpoints CRUD rides 
//1-get
// status 200 for get
router.get('/', (req, res, next) => {
  return res.status(200).json(park);
});

//2-post
//status 201 for post
router.post('/', validate(parkSchema), (req, res, next) => {
  const newpostpark = req.body as ParkSchemaType;

  park.push(newpostpark);
  return res.status(201).json({ message: 'was added !' });
});

//3-update
router.put('/:id',validate(parkSchema), (req, res) => {
    const updatepark = req.body as ParkSchemaType;
    const { id } = req.params;
  
    const updatedpark = park.filter((par) => {
      return par.id !== id;
    });
  
    updatedpark .push(updatepark);
  
    park = updatedpark;
  
    return res.json({
      message: 'was updated !',
    });
  });


//4-delete
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const deletepar = park.filter((par) => {
      return par.id !== id ;
    });
  
    park = deletepar;
    return res.json({
      message: 'was deleted !',
    });
});


export default router;
