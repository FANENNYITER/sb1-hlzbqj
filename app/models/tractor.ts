import { Observable } from '@nativescript/core';

export enum TractorStatus {
  IN_OPERATION = 'IN_OPERATION',
  RETURNED = 'RETURNED',
  IN_TRANSIT = 'IN_TRANSIT',
  IN_STORAGE = 'IN_STORAGE'
}

export class Tractor extends Observable {
  constructor(
    public id: string,
    public modelNumber: string,
    public status: TractorStatus,
    public currentLocation: string,
    public assignedFarm?: string,
    public lastMaintenanceDate?: Date
  ) {
    super();
  }
}