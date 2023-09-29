let extendedWindow: any;

// We're in the browser environment
if (typeof window !== "undefined") {
  type ExtendedWindow = Window &
    typeof globalThis & {
      ym?: (
        id: number,
        hitType: string,
        target: string,
        options?: object
      ) => void;
      isTestEnvironment: boolean;
    };

  extendedWindow = window as ExtendedWindow;
}

export { extendedWindow };
