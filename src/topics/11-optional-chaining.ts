export interface Passenger {
  name: string;
  children?: string[];
}

const passenger1: Passenger = {
  name: "Jonathan",
};

const passenger2: Passenger = {
  name: "Diego",
  children: ["Sofia", "Javier"],
};

const printChildren = (passenger: Passenger): void => {
  const howManyChildren = passenger.children?.length || 0;
  console.log(howManyChildren);
};
