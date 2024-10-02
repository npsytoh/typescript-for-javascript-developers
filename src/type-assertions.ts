export {};

let name: any = 'Ken';

// let length = (name as string).length;
let length = (<string>name).length;
// length = 'foo';
