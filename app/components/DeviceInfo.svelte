<script>
  import { Page, ActionBar, StackLayout, Label } from '@nativescript/core';
  import { getDeviceInfo } from '../services/device.js';

  let deviceInfo = getDeviceInfo();
</script>

<Page>
  <ActionBar title="Device Info" />
  <StackLayout>
    <Label text={`Manufacturer: ${deviceInfo.manufacturer}`} />
    <Label text={`Model: ${deviceInfo.model}`} />
    <Label text={`OS: ${deviceInfo.os}`} />
    <Label text={`OS Version: ${deviceInfo.osVersion}`} />
    <Label text={`SDK Version: ${deviceInfo.sdkVersion}`} />
  </StackLayout>
</Page>
