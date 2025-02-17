export interface DrawResult {
  drawNumber: number;
  drawDate: Date;
  winningNumbers: number[];
  additionalNumber: number;
  jackpot: number;
  totalWinners: number;
  totalPrize: number;
}

interface GroupDetail {
  groupNumber: number;
  shareAmount: number;
  winnerCount: number;
}

interface SnowballInfo {
  groupNumber: number;
  amount: number;
}

export interface WinningLocation {
  groupNumber: number;
  outletName: string;
  address: string;
  entryType: string;
}

export interface DrawDetails {
  drawResult: DrawResult;
  winningShares: GroupDetail[];
  snowballInfo: SnowballInfo[];
  winningLocations: WinningLocation[];
}
