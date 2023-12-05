<template>
  <div id="app" class="min-h-screen flex grow overflow-hidden">
    <!-- Side nav -->
    <div class="w-56 bg-black h-screen flex-auto">
      <div class="p-6 bg-black my-5">
        <img src="../Spotify_Logo_CMYK_White.png" class="h-10" alt="sidebar-logo" />
      </div>
      <div class="mx2 my-5 bg-black">
        <button
          v-for="page in pages"
          :key="page.id"
          @click="setID = page.id"
          :class="[
            'w-full text-base font-semibold rounded px-3 py-3 flex items-center justify-start',
            page.id === setID ? 'bg-lighter text-white' : 'text-lighter'
          ]"
        >
          <img
            :src="page.icon"
            class="h-6 mr-3"
            alt="icon"
            style="filter: brightness(0) invert(1)"
          />
          <p class="text-white text-base">{{ page.name }}</p>
        </button>
      </div>
      <div class="mx-5">
        <h1 class="mb-3 text-xs text-lighter tracking-widest uppercase">Playlists</h1>
        <button class="flex items-center justify-start opacity-75 hover:opacity-100 mb-4">
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
      <div class="mt-5 h-80 w-full bg-black flex-auto">
        <div class="w-full h-80 overflow-y-scroll">
          <p
            v-for="album in albums"
            :key="album.id"
            class="text-xs text-lighter hover:text-white py-1 flex items-center"
          >
            <img :src="album.icon" class="h-8 ml-3 mr-3" alt="icon" />
            <span class="text-lighter hover:text-white text-sm">{{ album.name }}</span>
          </p>
        </div>
      </div>
      <div class="flex justify-center relative h-full">
        <img src="./assets/playing.jpg" class="w-48 h-44 bg-black object-cover fixed bottom-28" />
      </div>
    </div>
    <!-- Main content -->
    <div class="w-full h-92 bg-dark">
      <!-- Header -->
      <div class="w-full sticky top-0 p-2 py-3 px-5 my-5 flex items-center justify-between">
        <div class="flex items-center mt-5">
          <button class="rounded-full bg-black w-8 h-8 flex items-center">
            <img
              src="./assets/chevron-left.png"
              alt="icon"
              class-="w-full h-full"
              style="filter: brightness(0) invert(1)"
            />
          </button>
          <button class="rounded-full bg-black w-8 h-8 flex items-center">
            <img
              src="./assets/chevron-right.png"
              alt="icon"
              class-="w-full h-full"
              style="filter: brightness(0) invert(1)"
            />
          </button>
        </div>
      </div>
      <!-- cards-->
      <div class="px-6 py-3 flex items-center justify-between">
        <h1 class="text-2xl font-semibold text-white tracking-wider hover:underline">
          Recently Played
        </h1>
        <h2 class="text-sm text-lighter tracking-wider uppercase hover:underline">See All</h2>
      </div>
    </div>

    <!--Play bar -->
    <div
      class="w-full bg-light flex-auto h-28 absolute inset-x-0 bottom-0 flex items-center justify-between px-3"
    >
      <div class="flex items-center">
        <div class="ml-3">
          <h1 class="text-sm text-white tracking-wide">Gravity</h1>
          <h2 class="text-xs text-lighter teacking-wide">John Mayer</h2>
        </div>
        <div>
          <button class="rounded-full flex items-center">
            <img
              v-if="showFavourite === false"
              @click="showFavourite = true"
              src="./assets/favourite.svg"
              class="w-6 ml-5"
              style="filter: brightness(0) invert(1)"
            />
            <img
              v-else
              @click="showFavourite = false"
              src="./assets/favourite-green.svg"
              class="w-6 ml-5"
            />
          </button>
        </div>
      </div>
      <div class="flex flex-col justify-center w-1/3 items-center">
        <div class="flex items-center">
          <button class="rounded-full flex items-center">
            <img
              src="./assets/previous.svg"
              class="w-8 h-8 mx-5"
              style="filter: brightness(0) invert(1)"
            />
          </button>
          <button class="rounded-full flex items-center">
            <img
              v-if="showPause === false"
              src="./assets/play.svg"
              @click="showPause = true"
              class="w-10 h-10 mx-5"
              style="filter: brightness(0) invert(1)"
            />
            <img
              v-else
              src="./assets/pause.svg"
              @click="showPause = false"
              class="w-10 h-10 mx-5"
              style="filter: brightness(0) invert(1)"
            />
          </button>
          <button class="rounded-full flex items-center">
            <img src="./assets/skip.svg" class="w-8 ml-5" style="filter: brightness(0) invert(1)" />
          </button>
        </div>
        <div class="w-full">
          <div class="w-full ml-5 bg-lighter h-1 rounded-full mt-4"></div>
        </div>
      </div>
      <div class="flex items-center mr-3">
        <button class="rounded-full w-8 h-8 flex items-center">
          <img
            src="./assets/playlist-play.png"
            class="w-6 h-6 mx-5"
            style="filter: brightness(0) invert(1)"
          />
        </button>
        <button class="rounded-full w-8 h-8 flex items-center">
          <img
            src="./assets/important-devices.png"
            class="w-6 h-6 mx-5"
            style="filter: brightness(0) invert(1)"
          />
        </button>
        <button class="rounded-full w-8 h-8 flex items-center">
          <img
            src="./assets/volume-up.png"
            class="w-6 h-6 mx-5"
            style="filter: brightness(0) invert(1)"
          />
        </button>
        <div class="w-20 ml-5 bg-lighter h-1 rounded-full"></div>
      </div>
    </div>
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
import ModernBluesRock from './assets/ModernBluesRock.png'
import Top50UK from './assets/Top50UK.png'

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
        { id: 'MoodBooster', name: 'Mood Booster', icon: MoodBooster },
        { id: 'ModernBluesRock', name: 'Modern Blues Rock', icon: ModernBluesRock },
        { id: 'top50UK', name: 'Top 50 - UK', icon: Top50UK }
      ],
      showPause: false,
      showFavourite: false
    }
  }
}
</script>
