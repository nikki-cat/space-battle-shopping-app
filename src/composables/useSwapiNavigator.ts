import { fetchAllStarships, fetchStarshipsBySearch, fetchSwapiResource } from '@/services/starwarsResources/fetch-starwars';
import type { SwapiStarShip } from '@/services/starwarsResources/types';
import { computed, onBeforeMount, ref, type Ref } from 'vue';

export const useSwapiStarships = () => {
  const loading = ref(false);
  const error = ref(false);
  const page = ref(1);
  const totalStarshipsInBackend = ref(0);

  const firstPageUrl = ref('')
  const nextPageUrl = ref('');
  const prevPageUrl = ref('');
  
  const starshipsResults: Ref<SwapiStarShip[] | null> = ref(null);
  const starshipsLinkResults: Ref<SwapiStarShip[] | null> = ref(null);
  const starshipSearchResults: Ref<SwapiStarShip[] | null> = ref(null);

  const starships = computed(()=>{
    return starshipsLinkResults.value || starshipSearchResults.value || starshipsResults.value;
  });

  onBeforeMount( async () => {
    // fetch all starships when the component mounts to get the main list
    const allStarships = await fetchStarships()
    starshipsResults.value = allStarships;
  })

  const fetchStarships = async (url?: string, searchQuery?: string) => {
    loading.value = true;
    let starshipsData = null;

    try {
      if(searchQuery) {
        starshipsData = await fetchStarshipsBySearch(searchQuery);
      } else if(url) {
        starshipsData = await fetchSwapiResource(url);
      } else {
        starshipsData = await fetchAllStarships();
      }

      if (!starshipsData || !starshipsData.results) {
        throw new Error('no starshsips retrieved :(')  
      }
      

      nextPageUrl.value = starshipsData.next;
      prevPageUrl.value = starshipsData.previous;

      if (!firstPageUrl.value) {
        // Assuming we only ever go forward in pagination,
        // The first time `firstPageUrl` is set, would be on page 2, where Previous page equals 1.
        // This way we can loop back to page 1 later.
        firstPageUrl.value = starshipsData.previous;
      }  

      totalStarshipsInBackend.value = starshipsData.count;

    } catch (errorNessage) {
      error.value = true;
      console.error(errorNessage);
    }

    loading.value = false;
    return starshipsData.results
  };

  const fetchStarshipsByLink = async (url: string) => {
    const allStarships = await fetchStarships(url)
    starshipsResults.value = allStarships;
  };

  const searchStarships = async (query:string) => {
    resetDefaults()
    const searchResults = await fetchStarships(undefined, query)
    starshipSearchResults.value = searchResults;
  };

  const resetSearch = () => {
    resetDefaults()
    starshipSearchResults.value = null;
  }

  const nextPage = async () => {
    if (nextPageUrl.value) {
      page.value += 1;
      await fetchStarshipsByLink(nextPageUrl.value);
    } else if(firstPageUrl.value) {
      nextPageUrl.value = firstPageUrl.value
      page.value = 1;
    }
  };

  const prevPage = () => {
    if (prevPageUrl.value) {
      page.value -= 1;
      fetchStarshipsByLink(prevPageUrl.value);
    }
  };
  
  const resetDefaults = ()=> {
        // reset cached pageUrl if new type of fetch is commenced
        firstPageUrl.value = "";

        // Link results no longer relevant
        starshipsLinkResults.value = null;

        // Back to page 1
        page.value = 1;
  }

  return {
    starships,
    page,
    loading,
    error,
    nextPage,
    prevPage,
    resetSearch,
    searchStarships
  };
};