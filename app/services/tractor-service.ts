import { Observable, ObservableArray } from '@nativescript/core';
import { Tractor, TractorStatus } from '../models/tractor';

export class TractorService extends Observable {
  private tractors: ObservableArray<Tractor>;

  constructor() {
    super();
    this.tractors = new ObservableArray<Tractor>();
  }

  addTractor(tractor: Tractor): void {
    this.tractors.push(tractor);
  }

  getTractors(): ObservableArray<Tractor> {
    return this.tractors;
  }

  updateTractorStatus(tractorId: string, status: TractorStatus, location: string): void {
    const tractor = this.tractors.find(t => t.id === tractorId);
    if (tractor) {
      tractor.status = status;
      tractor.currentLocation = location;
      this.notifyPropertyChange('tractors', this.tractors);
    }
  }

  getTractorsByStatus(status: TractorStatus): Tractor[] {
    return this.tractors.filter(t => t.status === status);
  }
}