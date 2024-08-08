<script>
  import { Page, ActionBar, StackLayout, Label, Button } from '@nativescript/core';
  import { getCurrentLocation } from '../services/gps.js';

  let location = {};
  const fetchLocation = async () => {
    location = await getCurrentLocation();
  };
</script>

<Page on:loaded={fetchLocation}>
  <ActionBar title="GPS Coordinates" />
  <StackLayout>
    <Label text={`Latitude: ${location.latitude}`} />
    <Label text={`Longitude: ${location.longitude}`} />
    <Button text="Refresh" on:tap={fetchLocation} />
  </StackLayout>
</Page>
