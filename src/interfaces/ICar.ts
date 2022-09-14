import { z } from 'zod';
import { VehicleZodSchema } from './IVehicle';

const CarZodSchema = z.object({
  doorsQty: z.number().int().positive().gte(2)
    .lte(7),
  seatsQty: z.number().gte(2).lte(7),
});

const FullCar = VehicleZodSchema.merge(CarZodSchema);
type ICar = z.infer<typeof FullCar>;

export { ICar, CarZodSchema };