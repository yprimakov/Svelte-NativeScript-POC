import { device as Device } from "@nativescript/core";

export function getDeviceInfo() {
  return {
    manufacturer: Device.manufacturer,
    model: Device.model,
    os: Device.os,
    osVersion: Device.osVersion,
    sdkVersion: Device.sdkVersion,
    language: Device.language,
    region: Device.region,
    uuid: Device.uuid,
    deviceType: Device.deviceType,
  };
}
