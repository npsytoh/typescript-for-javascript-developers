export {};

// Distributive conditional types
// T extends U ? X : Y
// T = A, B, C の場合
//     (A extends U ? X : Y) | (B extends U ? X : Y) | (C extends U ? X : Y)

type MyExclude =
	| (string extends string | number ? never : string) // true: never
	| (number extends string | number ? never : number) // true: never
	| (DebugType extends string | number ? never : DebugType); // false: DebugType

type DebugType = () => void;
type SomeTypes = string | number | DebugType;
type FunctionType = Exclude<SomeTypes, string | number>;
type MyFunctionType = MyExclude;

type FunctionTypeByExtract = Extract<SomeTypes, DebugType>;

type NullableTypes = string | null | undefined;
type NonNullableTypes = NonNullable<NullableTypes>;
