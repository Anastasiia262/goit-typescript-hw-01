export interface UserDetail {
  name: string;
  age: number;  
  email: string; 
  address?: {
    city: string; 
    country: string; 
  };
}

export const mango: UserDetail = {
  name: "Mango",
  age: 30,
  email: "john@example.com",
  address: {
    city: "New York",
    country: "USA",
  },
};

export const poly: UserDetail = {
  name: "Mango",
  age: 30,
  email: "john@example.com",
};
