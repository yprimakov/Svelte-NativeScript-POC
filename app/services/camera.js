import * as camera from "@nativescript/camera";
import { knownFolders, path } from "@nativescript/core";

export function takePicture() {
  return new Promise((resolve, reject) => {
    camera.takePicture().then(
      (imageAsset) => {
        const folder = knownFolders.documents();
        const filePath = path.join(folder.path, "photo.jpg");
        imageAsset.saveToFile(filePath, "jpg");
        resolve(filePath);
      },
      (error) => {
        reject(error);
      }
    );
  });
}
