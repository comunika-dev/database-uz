// apache-crypt.d.ts
declare module 'crypt' {
  function crypt(password: string, hash: string): string;
  export = crypt;
}