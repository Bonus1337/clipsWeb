import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private visable = false;
  constructor() {}

  isModalOpen() {
    return this.visable;
  }
  togleModal() {
    this.visable = !this.visable;
  }
}
