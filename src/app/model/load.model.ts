export class Load {
    id: number;
    description: string;
    temperature?: number;
    deliveryVerified: boolean;
    driver: string;
  
    constructor(id: number, description: string, temperature?: number, deliveryVerified: boolean = false, driver: string = '') {
      this.id = id;
      this.description = description;
      this.temperature = temperature;
      this.deliveryVerified = deliveryVerified;
      this.driver = driver;
    }
  }
  