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
      fileName: 'stay_away',
      date: 'May 2024',
      location: 'Mexico City, Mexico',
      tags: ['Graffiti'],
      filmType: 'Fujifilm Pro 400H',
    },
  ] as const satisfies {
    fileName: string;
    date: string;
    location: string;
    tags: PhotoCategory['name'][];
    filmType: 'Kodak Gold 200' | 'Fujifilm Pro 400H';
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

<div class="min-h-screen bg-gray-50 p-6">
  <header class="max-w-6xl mx-auto mb-8">
    <h1 class="text-4xl font-bold text-gray-800 mb-4">
      Film Photography Journal
    </h1>
    <p class="text-gray-600 max-w-2xl">
      Capturing moments on film, one frame at a time. Exploring the world
      through my lens and sharing stories beyond pixels.
    </p>
  </header>

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

  <main
    class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
  >
    {#each filteredPhotos as photo (photo.fileName)}
      {@const photoTitle = deSlugifyStr(photo.fileName)}
      <div
        class="bg-white shadow-md rounded-lg overflow-hidden transition hover:shadow-xl"
      >
        {#await import(`../assets/images/film/${photo.fileName}.jpg`) then { default: { src } }}
          <img {src} alt={photoTitle} class="w-full h-64 object-cover" />
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
              <span>{photo.date}</span>
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
</div>
