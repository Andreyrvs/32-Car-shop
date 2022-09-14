import * as sinon from 'sinon';
import chai from 'chai';
import { Model } from 'mongoose';
import { carMock, carMockWithId } from '../../mocks/carMock';
import CarModel from '../../../models/Car';
const { expect } = chai;

describe('Car Model', () => {
  const carModel = new CarModel()
  before(async () => {
    sinon
      .stub(Model, 'create')
      .resolves(carMockWithId);
  });

  after(()=>{
    sinon.restore();
  })

  describe('Cria um carro', () => {
    it('Cria com sucesso', async () => {
      const newCar = await carModel.create(carMock)
      expect(newCar).to.be.deep.equal(carMockWithId)
    });
  })

});