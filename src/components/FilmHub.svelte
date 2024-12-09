<script lang="ts">
  import RoadMapLineIcon from '~icons/ri/road-map-line';
  import MapPinIcon from '~icons/ri/map-pin-2-line';
  import CalendarIcon from '~icons/ri/calendar-line';
  import FilmIcon from '~icons/ri/film-line';
  import BuildingIcon from '~icons/lucide/building-2';
  import PuzzleIcon from '~icons/lucide/puzzle';
  import SprayCanIcon from '~icons/lucide/spray-can';
  import LeafIcon from '~icons/lucide/leaf';
  import ArtHangingIcon from '~icons/streamline/travel-places-painting-painting-entertainment-display-museum-event-hobby-exhibit';

  import type { CollectionEntry } from 'astro:content';
  import classNames from 'classnames';
  import { deSlugifyStr } from '@utils/helpers';

  type PhotoCollectionEntry = CollectionEntry<'photos'>;

  // Updated photo data with more details
  const photoCategories = [
    {
      name: 'Landscape',
      icon: RoadMapLineIcon,
    },
    {
      name: 'Architecture',
      icon: BuildingIcon,
    },
    {
      name: 'Art',
      icon: ArtHangingIcon,
    },
    {
      name: 'Graffiti',
      icon: SprayCanIcon,
    },
    {
      name: 'Nature / Wildlife',
      icon: LeafIcon,
    },
    {
      name: 'Misc',
      icon: PuzzleIcon,
    },
  ] as const satisfies {
    name: PhotoCollectionEntry['data']['tags'][number];
    icon: typeof FilmIcon;
  }[];

  type PhotoCategory = (typeof photoCategories)[number];

  let { photos }: { photos: CollectionEntry<'photos'>[] } = $props();

  let selectedCategory = $state<'all' | PhotoCategory['name']>('all');

  const filteredPhotos = $derived.by(() => {
    if (selectedCategory == 'all') {
      return photos;
    }
    return photos.filter((photo) => photo.data.tags.includes(selectedCategory)) || [];
  });
</script>

<!--
  <div class="max-w-6xl mx-auto mb-8">
    <ul class="flex space-x-4">
      <li>
        <button
          onclick={() => (selectedCategory = 'all')}
          class={`flex items-center space-x-2 px-4 py-2 rounded-md transition ${
            selectedCategory === 'all'
              ? 'bg-gray-800 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          <ImageIcon class="size-5" />
          <span>All Photos</span>
        </button>
      </li>

      {#each photoCategories as category (category.name)}
        <li>
          <button
            onclick={() => (selectedCategory = category.name)}
            class={`flex items-center space-x-2 px-4 py-2 rounded-md transition ${
              selectedCategory === category.name
                ? 'bg-gray-800 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            <category.icon class="size-5" />
            <span>{category.name}</span>
          </button>
        </li>
      {/each}
    </ul>
  </div>
-->

<main
  class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row-dense gap-6"
>
  {#each filteredPhotos as { data: photo } (photo.fileName)}
    {#await import(`../assets/images/film/${photo.fileName}.jpg`) as Promise<typeof import('*.jpg')> then { default: { src, width, height } }}
      {@const photoTitle = deSlugifyStr(photo.fileName)}
      <div
        class={classNames(
          'bg-white shadow-md rounded-lg overflow-hidden transition hover:shadow-xl px-5 pt-6',
          height > width && 'row-span-2 h-max my-auto,'
        )}
      >
        <img
          {src}
          alt={photoTitle}
          class={classNames(
            'rounded-sm bg-gray-200 object-cover group-hover:opacity-75'
          )}
        />
        <!-- TODO: add 404 image here  -->

        <div class="p-4">
          <h2 class="text-xl font-semibold text-gray-800">
            {photoTitle}
          </h2>
          <div class="mt-2 space-y-1">
            <div class="flex items-center text-sm text-gray-600">
              <MapPinIcon class="mr-2 size-4 text-gray-500" />
              <span>{photo.location}</span>
            </div>
            <div class="flex items-center text-sm text-gray-600">
              <CalendarIcon class="mr-2 size-4 text-gray-500" />
              <span>
                {new Date(photo.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                })}
              </span>
            </div>
            <div class="flex items-center text-sm text-gray-600">
              <FilmIcon class="mr-2 size-4 text-gray-500" />
              <span>{photo.filmType}</span>
            </div>
          </div>
        </div>
      </div>
    {/await}
  {/each}
</main>
