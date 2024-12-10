<script lang="ts">
  import Share2Icon from '~icons/lucide/share-2';

  import classNames from 'classnames';
  import type { CollectionEntry } from 'astro:content';
  import { deSlugifyStr } from '@utils/helpers';

  type PhotoCollectionEntry = CollectionEntry<'photos'>;

  let {
    photo,
    className,
  }: {
    photo: Pick<PhotoCollectionEntry, 'data' | 'id'>;
    className?: string;
  } = $props();

  function getShareDataFromImage(photoProp: typeof photo) {
    return {
      title: deSlugifyStr(photoProp.id) || 'Shared Photo',
      text:
        photoProp.data.description || 'Check out this amazing photograph!',
      url: `${window.location.origin}/blog/film/${photo.id}`,
    };
  }

  async function shareImage() {
    try {
      const bread = getShareDataFromImage(photo);
      await navigator.share(bread);
      console.log('Photo shared successfully');
    } catch (error) {
      console.error('Error sharing photo:', error);
      // alert('Web Share API not supported. Please copy the link manually.');
    }
  }
</script>

<button
  type="button"
  onclick={shareImage}
  class={classNames(
    'flex items-center bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300 transition',
    className
  )}
>
  <Share2Icon class="mr-2 size-3.5 lg:size-5" />
  Share
</button>
