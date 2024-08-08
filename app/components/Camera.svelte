<script>
  import { Page, ActionBar, StackLayout, Button, Image } from '@nativescript/core';
  import { takePicture } from '../services/camera.js';

  let imagePath = '';
  const captureImage = async () => {
    imagePath = await takePicture();
  };
</script>

<Page>
  <ActionBar title="Camera" />
  <StackLayout>
    <Button text="Capture Image" on:tap={captureImage} />
    {#if imagePath}
      <Image src={`file://${imagePath}`} />
    {/if}
  </StackLayout>
</Page>
