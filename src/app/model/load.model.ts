export class Load {
    id: number;
    description: string;
    status: string;
    temperature?: number;
    deliveryVerified: boolean;
  
    constructor(id: number, description: string, status: string = 'in-progress', temperature?: number, deliveryVerified: boolean = false) {
      this.id = id;
      this.description = description;
      this.status = status;
      this.temperature = temperature;
      this.deliveryVerified = deliveryVerified;
    }
  }
  