export {};

declare global {
  interface Window {
    google: any; // or you can specify types from @types/google.maps if needed
  }
}
