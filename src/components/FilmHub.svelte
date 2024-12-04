<script lang="ts">
  import ImageIcon from '~icons/ri/image-line';
  import RoadMapLineIcon from '~icons/ri/road-map-line';
  import MapPinIcon from '~icons/ri/map-pin-2-line';
  import CalendarIcon from '~icons/ri/calendar-line';
  import FilmIcon from '~icons/ri/film-line';
  import BuildingIcon from '~icons/lucide/building-2';
  import PuzzleIcon from '~icons/lucide/puzzle';
  import SprayCanIcon from '~icons/lucide/spray-can';
  import LeafIcon from '~icons/lucide/leaf';
  import ArtHangingIcon from '~icons/streamline/travel-places-painting-painting-entertainment-display-museum-event-hobby-exhibit';

  import { deSlugifyStr } from '@utils/helpers';

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
    name: string;
    icon: typeof FilmIcon;
  }[];

  type PhotoCategory = (typeof photoCategories)[number];

  const photos = [
    {
      fileName: 'butterfly_building',
      date: new Date(2024, 10),
      location: 'Mexico City, Mexico',
      tags: ['Architecture'],
      filmType: 'Kodak Gold 800 (Disposable)',
    },
    {
      fileName: 'stay_away',
      date: new Date(2024, 10),
      location: 'Mexico City, Mexico',
      tags: ['Graffiti'],
      filmType: 'Kodak Gold 800 (Disposable)',
    },
    {
      fileName: 'cloud_carpet',
      date: new Date(2024, 10),
      location: 'Somewhere over Greenland',
      tags: ['Misc'],
      filmType: 'Kodak UltraMax 400',
    },
    {
      fileName: 'sandy_dragon',
      date: new Date(2024, 10),
      location: 'Barcelona, Spain',
      tags: ['Art'],
      filmType: 'Kodak Gold 200',
    },
    {
      fileName: 'misery_loves_company',
      date: new Date(2024, 10),
      location: 'Barcelona, Spain',
      tags: ['Graffiti'],
      filmType: 'Kodak UltraMax 400',
    },
    {
      fileName: 'bouba',
      date: new Date(2024, 10),
      location: 'Barcelona, Spain',
      tags: ['Art'],
      filmType: 'Kodak Gold 200',
    },
    {
      fileName: 'cozy_spanish_room',
      date: new Date(2024, 10),
      location: 'Barcelona, Spain',
      tags: ['Misc'],
      filmType: 'Kodak UltraMax 400',
    },
    {
      fileName: 'meal_fit_for_a_king',
      date: new Date(2024, 10),
      location: 'Barcelona, Spain',
      tags: ['Misc'],
      filmType: 'Kodak UltraMax 400',
    },
    {
      fileName: 'botanical_lunch',
      date: new Date(2024, 10),
      location: 'Barcelona, Spain',
      tags: ['Nature / Wildlife', 'Architecture'],
      filmType: 'Kodak Gold 200',
    },
    {
      fileName: 'thats_a_telly_booth_innit',
      date: new Date(2024, 10),
      location: 'London, England',
      tags: ['Misc'],
      filmType: 'Fuji Film 400',
    },
    {
      fileName: '300_pound_jacket',
      date: new Date(2024, 10),
      location: 'London, England',
      tags: ['Misc'],
      filmType: 'Fuji Film 400',
    },
    {
      fileName: 'phoenix_indian_school',
      date: new Date(2024, 11),
      location: 'Phoenix, AZ USA',
      tags: ['Architecture'],
      filmType: 'Kodak UltraMax 400',
    },
  ] as const satisfies {
    fileName: string;
    date: Date;
    location: string;
    tags: PhotoCategory['name'][];
    filmType:
      | 'Kodak Gold 200'
      | 'Kodak UltraMax 400'
      | 'Kodak Gold 800 (Disposable)'
      | 'Fuji Film 400';
  }[];

  let selectedCategory = $state<'all' | PhotoCategory['name']>('all');

  const filteredPhotos = $derived.by(() => {
    if (selectedCategory == 'all') {
      return photos;
    }
    // @ts-expect-error idk man
    return photos.filter((photo) => photo.tags.includes(selectedCategory));
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
  class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
>
  {#each filteredPhotos as photo (photo.fileName)}
    {@const photoTitle = deSlugifyStr(photo.fileName)}
    <div
      class="bg-white shadow-md rounded-lg h-max overflow-hidden transition hover:shadow-xl px-5 pt-6"
    >
      {#await import(`../assets/images/film/${photo.fileName}.jpg`) as Promise<typeof import('*.jpg')> then { default: { src, width, height } }}
        <img
          {src}
          alt={photoTitle}
          class="rounded-sm bg-gray-200 object-cover group-hover:opacity-75"
        />
        <!-- TODO: add 404 image here  -->
      {/await}

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
              {photo.date.toLocaleDateString('en-US', {
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
  {/each}
</main>
