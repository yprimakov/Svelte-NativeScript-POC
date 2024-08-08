import * as geolocation from "@nativescript/geolocation";

export function getCurrentLocation() {
  return new Promise((resolve, reject) => {
    geolocation.getCurrentLocation({}).then(
      (location) => {
        resolve(location);
      },
      (error) => {
        reject(error);
      }
    );
  });
}
