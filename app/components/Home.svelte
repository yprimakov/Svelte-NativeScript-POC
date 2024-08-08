<script>
  import { Page, ActionBar, StackLayout, Button } from '@nativescript/core';
  import { navigate } from 'svelte-native';

  function goToPage(page) {
    navigate(page);
  }
</script>

<Page>
  <ActionBar title="Home" />
  <StackLayout>
    <Button text="GPS Coordinates" on:tap={() => goToPage('gps')} />
    <Button text="Device Info" on:tap={() => goToPage('device-info')} />
    <Button text="Camera" on:tap={() => goToPage('camera')} />
  </StackLayout>
</Page>
