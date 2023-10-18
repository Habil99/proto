class ResponseEntity {
  private status: number;
  private data: any;

  constructor(status: number, data: any) {
    this.status = status;
    this.data = data;
  }
}

export default ResponseEntity;
