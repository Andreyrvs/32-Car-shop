import * as sinon from 'sinon';
import chai from 'chai';
const { expect } = chai;
import { ZodError} from 'zod'
import CarModel from '../../../models/Car'
import CarService from '../../../services/Car'
import { carMock, carMockWithId} from '../../mocks/carMock'

describe('Cars Service', () => {
  const carModel = new CarModel();
  const carService = new CarService(carModel);

  before(async () => {
    sinon
      .stub(carModel, 'create')
      .resolves(carMockWithId);
  });

  after(()=>{
    sinon.restore();
  })

  describe('Cria um carro', () => {
    it('Com sucesso', async () => {
      const carCreated = await carService.create(carMock);
      expect(carCreated).to.be.deep.equal(carMockWithId);
    });
    it('Quando Falha', async () => {
      let error;
      try {
        await carService.create({})
      } catch (err) {
        error = err
      }
      expect(error).to.be.instanceOf(ZodError)
    })
  })
});