export interface DrawResult {
  drawNumber: number;
  drawDate: Date;
  winningNumbers: number[];
  additionalNumber: number;
  jackpot?: number;
  totalWinners: number;
  totalPrize: number;
  isComplete:boolean;
}

export interface WinningShare {
  groupNumber: number;
  shareAmount: number;
  winnerCount: number;
}

export interface SnowballInfo {
  groupNumber: number;
  amount: number;
}

export interface ItotoLocation {
  outletName: string;
  address: string;
  shareCount: number;
}

export interface WinningTicket {
  groupNumber: number;
  outletName:string;
  address: string;
  entryType: string;
  isItoto: boolean;
  itotoLocations?: ItotoLocation[];
}

export interface DrawDetails {
  drawResult: DrawResult;
  winningShares: WinningShare[];
  snowballInfo: SnowballInfo[];
  winningTickets: WinningTicket[];
}
