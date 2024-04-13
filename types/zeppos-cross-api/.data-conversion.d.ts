
declare module 'zeppos-cross-api/data-conversion' {
  function len(binOrBuf: Buffer | ArrayBuffer): number;

  function allocOfBin(size?: number): ArrayBuffer;

  function allocOfBuf(size?: number): Buffer;

  // ============= JSON =============
  function json2buf(json: any): Buffer;

  function json2bin(json: any): ArrayBuffer;

  function json2str(json: any): string;

  // ============= Buffer =============
  function buf2json(buf: Buffer, encoding?: string): any;

  function buf2bin(buf: Buffer): ArrayBuffer;

  function buf2str(buf: Buffer, encoding?: string): string;

  function buf2hex(buf: Buffer): string;

  // ============= ArrayBuffer =============
  function bin2buf(bin: ArrayBuffer): Buffer;

  function bin2str(bin: ArrayBuffer, encoding?: string): string;

  function bin2hex(bin: ArrayBuffer): string;

  function bin2json(bin: ArrayBuffer, encoding?: string): any;

  // ============= string =============
  function str2json(str: string): any;

  function str2buf(str: string, encoding?: string): Buffer;

  function str2bin(str: string, encoding?: string): ArrayBuffer;
}
