import { defineStore } from 'pinia'
import type { SwapiStarShip } from '@/services/starwarsResources/types'

export const useMyStarshipsStore = defineStore('myStarships',  {
  state: () => {
    return {
      savedStarships: [] as SwapiStarShip[],
    }
  },
  actions: {
    addStarship(starship: SwapiStarShip) {
      this.savedStarships.push(starship);
    },
    removeStarship (starshipName: string) {
      const index = this.savedStarships.findIndex((starship)=>{
          return starship.name === starshipName
      })

      this.savedStarships.splice(index, 1)
    }
  }
})
