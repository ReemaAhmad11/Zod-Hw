import { z, TypeOf } from 'zod';


//Park Structure : ID , Name , Type , tickets, price
export const parkSchema = z.object({
  body: z.object({
    id: z.string({ required_error: 'Id is required !' })
      .min(2, 'You id must be more than 2'),

    name: z.string({ required_error: 'Name is required !' })
      .min(4, 'you name must be more than 4 characters'),

    type: z.enum(['rollercoaster', 'thriller', 'water'], { required_error: 'Type is required , value must be one of this rollercoaster or thriller or water !' }),

    tickets: z.number({ required_error: 'Number is required !' }),

    price: z.number({ required_error: 'Price is required !' })

  }),
});

export type ParkSchemaType = TypeOf<typeof parkSchema>['body'];