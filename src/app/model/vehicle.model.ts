import { Load } from "./load.model";

export class Vehicle {
    id: number;
    name: string;
    loads: Load[];
  
    constructor(id: number, name: string, loads: Load[] = []) {
      this.id = id;
      this.name = name;
      this.loads = loads;
    }
  }
  