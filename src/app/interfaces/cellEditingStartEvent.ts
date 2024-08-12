import {CellEvent} from "./cellevent";

export interface CellEditingStartedEvent extends CellEvent {
}

export interface CellEditingStoppedEvent extends CellEvent {
  /** The old value before editing */
  oldValue: any;
  /** The new value after editing */
  newValue: any;
}
