export type TFileFormat = 'pdf' | 'doc' | 'rtf';

export interface IResume {
  format: TFileFormat;
  pathFile: string;
  name: string;
}
