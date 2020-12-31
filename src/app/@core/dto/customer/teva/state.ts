export class State {
  id: string;
  batchId: string;
  fermenterVolInL: number;
  batchStartDate: string;
  fermenterName: string;
  batchAgeInMin: number;
  batchSerialNumber: number;

  constructor() {
  }

}

export class PageState {
  content: State[];
  totalPages: number;

  constructor() {
  }
}
