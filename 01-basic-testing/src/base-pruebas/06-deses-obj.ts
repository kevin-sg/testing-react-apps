interface IFirstAppProps {
  clave: string;
  name: string;
  age: number;
  range: string;
}

export const persona = {
  name: "Tony",
  age: 45,
  clave: "Ironman",
};

export const usContext = ({ clave, name, age, range = "Capitán" }: IFirstAppProps) => {
  return {
    nameClave: clave,
    anios: age,
    latlng: {
      lat: 14.1232,
      lng: -12.3232,
    },
  };
};
