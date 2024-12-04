import { Observable } from '@nativescript/core';
import { TractorService } from '../services/tractor-service';
import { Tractor, TractorStatus } from '../models/tractor';

export class TractorListViewModel extends Observable {
  private tractorService: TractorService;

  constructor() {
    super();
    this.tractorService = new TractorService();
  }

  get operationalTractors(): Tractor[] {
    return this.tractorService.getTractorsByStatus(TractorStatus.IN_OPERATION);
  }

  get returnedTractors(): Tractor[] {
    return this.tractorService.getTractorsByStatus(TractorStatus.RETURNED);
  }

  get inTransitTractors(): Tractor[] {
    return this.tractorService.getTractorsByStatus(TractorStatus.IN_TRANSIT);
  }

  get storedTractors(): Tractor[] {
    return this.tractorService.getTractorsByStatus(TractorStatus.IN_STORAGE);
  }

  updateTractorStatus(tractorId: string, status: TractorStatus, location: string): void {
    this.tractorService.updateTractorStatus(tractorId, status, location);
  }
}