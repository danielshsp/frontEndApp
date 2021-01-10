export class State {
  id: string;
  batchId: string;
  fermenterVolInL: number;
  batchStartDate: string;
  fermenterName: string;
  batchAgeInMin: number;
  batchSerialNumber: number;
  monitored: Monitored;
  controller: Controller;
  constructor() {
  }

}

export class Monitored {
  temperature: number;
  pressure: number;
  airFlow: number;
  fs: number;
  fa: number;
  agitation: number;
  onlinePH: number;
  offlinePH: number;
  do: number;
  co2: number;
  mass: number;
  power: number;
  incyte: number;
  amnConcent: number;
  tobraConcent: number;
  kanamConcent: number;
  pcv: number;
  dextroseConcent: number;
  constructor() {
  }
}

export class Controller {
  fsAction: number;
  faAction: number;
  agitationAction: number;
  dcEstim: number;
  amnEstim: number;
  amnWanted: number;
  constructor() {
  }
}

export class PageState {
  content: State[];
  totalPages: number;
  constructor() {
  }
}
export class FindStateByBatchId{
  findStateByBatchId: State[];
  constructor() {
  }
}


export class StateChart {
  co2: number[];
  ph: number[];
  constructor(co2: number[], ph: number[] ) {
    this.co2 = co2;
    this.ph = ph;
  }
}
