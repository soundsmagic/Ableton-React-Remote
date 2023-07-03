export interface Track {
  trackIndex: number;
  trackName: string;
  muteStatus: boolean;
  soloStatus: boolean;
}

export interface TrackUpdateMutation {
  trackIndex: number;
  update: {
    trackName?: string;
    muteStatus?: boolean;
    soloStatus?: boolean;
    sendValue?: TrackSendValue;
  };
}

export interface TrackSendValue {
  sendIndex: string;
  value: number;
}
