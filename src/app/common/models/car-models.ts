export interface ICarModel {
  id: string;
  model: string;
}

export interface ICarModels {
  id: string;
  brand: string;
  models: ICarModel[]
}


