<template>
  <div id="app">
    <div class="bg-dark h-screen">
      <div class="flex" style="height: 88vh">
        <!-- Side nav -->
        <div class="w-56 bg-black h-full flex-none">
          <div class="p-6">
            <img src="../Spotify_Logo_CMYK_White.png" class="h-10" alt="sidebar-logo" />
          </div>
          <div class="mx2 mb-5">
            <button
              v-for="page in pages"
              :key="page.id"
              @click="setID = page.id"
              :class="[
                'w-full text-s font-semibold rounded px-3 py-2 flex items-center justify-start',
                page.id === setID ? 'bg-lighter text-white' : 'text-lighter'
              ]"
            >
              <img
                :src="page.icon"
                class="h-6 mr-3"
                alt="icon"
                style="filter: brightness(0) invert(1)"
              />
              <p class="text-white text-sm">{{ page.name }}</p>
            </button>
          </div>
          <div class="mx-5 mt-5">
            <h1 class="mb-3 text-xs text-lighter tracking-widest uppercase">Playlists</h1>
            <button class="flex items-center justify-start opacity-75 hover:opacity-100 mb-2">
              <img
                src="./assets/baseline_add_box_black_24dp.png"
                class="h-7 w-7 mr-3"
                alt="icon"
                style="filter: brightness(0) invert(1)"
              />
              <p class="text-sm text-white font-semibold">Create Playlist</p>
            </button>
            <button class="flex items-center justify-start opacity-75 hover:opacity-100">
              <img src="./assets/liked.png" class="h-5 w-5 ml-1 mr-4" alt="icon" />
              <p class="text-sm text-white font-semibold">Liked Songs</p>
            </button>
            <div class="h-px w-full bg-light my-3"></div>
          </div>
          <div class="mx-5">
            <div class="w-full h-24 overflow-y-scroll">
              <p class="text-xs text-lighter hover:text-white py-1"></p>
            </div>
          </div>
        </div>
        <!-- Main content -->
        <div class="w-full h-full">
          <!-- Header -->
          <div class="w-full sticky top-0 p-2"></div>
        </div>
      </div>
    </div>
    <!--Play bar -->
    <div class="w-full bg-light" style="height: 12vh"></div>
  </div>
</template>

<script>
import Home from './assets/baseline_home_black_24dp.png'
import Search from './assets/baseline_search_black_24dp.png'
import Library from './assets/baseline_bar_chart_black_24dp.png'
import TheNewsAgents from './assets/TheNewsAgents.png'
import SilkSonic from './assets/SilkSonic.png'
import DAngelo from './assets/DAngelo.png'
import JohnMayer from './assets/JohnMayer.png'
import CodeNewbie from './assets/CodeNewbie.png'
import ClassicHipHop from './assets/ClassicHipHop.png'
import MoodBooster from './assets/MoodBooster.png'

export default {
  name: 'App',
  data: function () {
    return {
      pages: [
        { id: 'home', name: 'Home', icon: Home },
        { id: 'search', name: 'Search', icon: Search },
        {
          id: 'library',
          name: 'Your Library',
          icon: Library
        }
      ],
      setID: 'home',
      albums: [
        { id: 'TheNewsAgents', name: 'The News Agents', icon: TheNewsAgents },
        { id: 'SilkSonic', name: 'Silk Sonic', icon: SilkSonic },
        { id: "D'Angelo", name: "D'Angelo", icon: DAngelo },
        { id: 'JohnMayer', name: 'John Mayer', icon: JohnMayer },
        { id: 'CodeNewbie', name: 'Code Newbie', icon: CodeNewbie },
        { id: 'ClassicHipHop', name: 'Classic Hip Hop', icon: ClassicHipHop },
        { id: 'MoodBooster', name: 'Mood Booster', icon: MoodBooster }
      ]
    }
  }
}
</script>
