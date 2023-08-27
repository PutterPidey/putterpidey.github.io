// Libretto
export type Lines = { timeTag: string; words: string }[];
export type ApiResponse = { error: boolean; syncType: string; lines: Lines };