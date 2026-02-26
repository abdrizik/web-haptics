export type HapticPattern = number[];
export type HapticInput = number | HapticPattern;

export interface TriggerOptions {
  intensity?: number;
}

export interface WebHapticsOptions {
  debug?: boolean;
}
