export function whatsMyType<T>(argument: T): T {
  return argument;
}

const amIString = whatsMyType<string>("Hello World");
const amINumber = whatsMyType<number>(1);
const amIBoolean = whatsMyType<boolean>(true);
const amIObject = whatsMyType<Object>({ name: "John" });
const amIArray = whatsMyType<number[]>([1, 2, 3]);

console.log(amIString);
