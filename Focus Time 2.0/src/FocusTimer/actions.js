import state from "./state.js"
import * as timer from "./timer.js"
import * as el from "./elements.js"
import * as sounds from "./sounds.js"
import * as color from "./colors.js"

export function playPause(){
  state.isRunning = document.documentElement.classList.toggle('running')
  sounds.buttonPressAudio.play()

  timer.countdown()
}

export function reset(){
  state.isRunning = false
  document.documentElement.classList.remove('running')
  timer.updateDisplay()
  sounds.buttonPressAudio.play()
}

export function add() {
  timer.addMinutes()
  sounds.buttonPressAudio.play()
  
}

export function remove() {
  timer.removeMinutes()
  sounds.buttonPressAudio.play()
  
}


export function toggleMusic(currentSound){
  
  
  if(currentSound === "ph-tree"){
    state.isFlorestMute = document.documentElement.classList.toggle('florest-music-on')
    document.documentElement.classList.remove('rain-music-on', 'coffeeshop-music-on', 'fire-music-on')
    if(state.isFlorestMute){
      sounds.rainAudio.pause()
      color.rainRemoveColor()
      sounds.florestAudio.play()
      color.florestAddColor()
      sounds.coffeeShopAudio.pause()
      color.coffeeShopRemoveColor()
      sounds.fireAudio.pause()
      color.fireRemoveColor()
      return
    }
    sounds.florestAudio.pause()
    color.florestRemoveColor()
  }

  if(currentSound === "ph-cloud-rain"){
    state.isRainMute = document.documentElement.classList.toggle('rain-music-on')
    document.documentElement.classList.remove('florest-music-on', 'fire-music-on', 'coffeeshop-music-on')
    if(state.isRainMute){
      sounds.florestAudio.pause()
      color.florestRemoveColor()
      sounds.rainAudio.play()
      color.rainAddColor()
      sounds.coffeeShopAudio.pause()
      color.coffeeShopRemoveColor()
      sounds.fireAudio.pause()
      color.fireRemoveColor()
      return
    }
    sounds.rainAudio.pause()
    color.rainRemoveColor()
  }

  if(currentSound === "ph-storefront"){
    state.isCoffeeShopMute = document.documentElement.classList.toggle('coffeeshop-music-on')
    document.documentElement.classList.remove('florest-music-on', 'rain-music-on', 'fire-music-on')
    if(state.isCoffeeShopMute){
      sounds.florestAudio.pause()
      color.florestRemoveColor()
      sounds.rainAudio.pause()
      color.rainRemoveColor()
      sounds.coffeeShopAudio.play()
      color.coffeeShopAddColor()
      sounds.fireAudio.pause()
      color.fireRemoveColor()
      
      return
    }
    sounds.coffeeShopAudio.pause()
    color.coffeeShopRemoveColor()
  }

  if(currentSound === "ph-fire"){
    state.isFireMute = document.documentElement.classList.toggle('fire-music-on')
    document.documentElement.classList.remove('florest-music-on', 'coffeeshop-music-on', 'rain-music-on')
    if(state.isFireMute){
      sounds.florestAudio.pause()
      color.florestRemoveColor()
      sounds.rainAudio.pause()
      color.rainRemoveColor()
      sounds.fireAudio.play()
      color.fireAddColor()
      sounds.coffeeShopAudio.pause()
      color.coffeeShopRemoveColor()
      
      return
    }
    sounds.fireAudio.pause()
    color.fireRemoveColor()
  }
}