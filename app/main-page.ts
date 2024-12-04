import { EventData, Page } from '@nativescript/core';
import { TractorListViewModel } from './view-models/tractor-list-view-model';

export function navigatingTo(args: EventData) {
  const page = <Page>args.object;
  const viewModel = new TractorListViewModel();
  page.bindingContext = viewModel;
}