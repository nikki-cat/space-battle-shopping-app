interface HTTPErrorMessage {
  status: number;
  statusText: string;
  response: any;
}

export class HTTPError extends Error implements HTTPErrorMessage {
  status: number;
  statusText: string;
  response: any;

    constructor(status: number, statusText: string, response: any) {
      super(`${status} ${statusText}`);
      this.status = status;
      this.statusText = statusText;
      this.response = response;
    }
  }