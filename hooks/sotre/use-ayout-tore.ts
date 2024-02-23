import { create } from "zustand";

type LayoutStore = {
    isCollapsed: boolean;
    defaultSize: number[];

}

export const useLayoutStore = create<LayoutStore>((set) => ({
    isCollapsed: false,
    defaultSize: [14, 86],
}));

export const setIsCollapsed = (bool: boolean) => {

    useLayoutStore.setState({ isCollapsed: bool })

    if (bool) {
        setDefaultSize([0, 100]);
    }
};

export const setDefaultSize = (size: number[]) => useLayoutStore.setState({ defaultSize: size });