declare global {
    interface Window {
        WebAwesome?: {
            iconRegistry?: {
                addIcon: (library: string, name: string, svg: string) => void;
            };
        };
    }
}
declare function registerBundledIcons(): void;
export default registerBundledIcons;
