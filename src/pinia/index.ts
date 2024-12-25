export const useGlobalStore = defineStore('global', {
  state: () => ({
    scrollPercent: 0,
    screenWidth: window.innerWidth,
  }),
});
