import { createContext, useContext, useState } from "react";

type Props = {
  children: React.ReactElement;
};

export type HakeView = "CHORE" | "CONTACT" | "LAUNDRY" | "HOME";

export type HakePerson = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
};

export type Apartment = { id: string; people: HakePerson[] };

export type HakeContextProps = {
  apartments: Apartment[];
  setApartments: (a: Apartment[]) => void;
  view: HakeView;
  setView: (view: HakeView) => void;
  currentChoreIsMowing: boolean;
  mowingIndex: number | null;
  setMowingIndex: (index: number) => void;
};

const HakeContext = createContext<HakeContextProps>({
  apartments: [],
  setApartments: () => [],
  view: "HOME",
  setView: () => {},
  currentChoreIsMowing: true,
  mowingIndex: null,
  setMowingIndex: () => {},
});

export function HakeProvider({ children }: Props) {
  const [apartments, setApartments] = useState<Apartment[]>([]);
  const [view, setView] = useState<HakeView>("HOME");
  const [mowingIndex, setMowingIndex] = useState<number | null>(null);

  // Chore
  const thisMonth = new Date().getMonth();
  const currentChoreIsMowing = thisMonth > 5 && thisMonth < 10;

  return (
    <HakeContext.Provider
      value={{
        apartments,
        setApartments,
        view,
        setView,
        currentChoreIsMowing,
        mowingIndex,
        setMowingIndex,
      }}
    >
      {children}
    </HakeContext.Provider>
  );
}

export function useHake() {
  return useContext(HakeContext);
}
