<script lang="ts">
  import Share2Icon from '~icons/lucide/share-2';

  import type { CollectionEntry } from 'astro:content';
  import { deSlugifyStr } from '@utils/helpers';

  type PhotoCollectionEntry = CollectionEntry<'photos'>;


  let { photo }: { photo: PhotoCollectionEntry } = $props();

  function getShareDataFromImage(photo: PhotoCollectionEntry) {
    return {
      title: deSlugifyStr(photo.id) || 'Shared Photo',
      text: photo.data.description || 'Check out this amazing photograph!',
      url: window.location.href,
    };
  }

  async function shareImage() {
    try {
      const bread = getShareDataFromImage(photo);
      await navigator.share(bread);
      console.log('Photo shared successfully');
    } catch (error) {
      console.error('Error sharing photo:', error);
      alert('Web Share API not supported. Please copy the link manually.');
    }
  }
</script>


<button
  type="button"
  onclick={shareImage}
  class="flex items-center bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300 transition"
>
  <Share2Icon class="mr-2" />
  Share
</button>
