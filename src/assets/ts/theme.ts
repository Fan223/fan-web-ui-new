// 跟随系统主题
const media = matchMedia('(prefers-color-scheme: light)');
function followOs() {
  document.documentElement.dataset.theme = media.matches ? 'light' : 'dark';
}

// 支持的主题类型
export type Theme = 'os' | 'light' | 'dark';
const storedTheme = localStorage.getItem('theme') as Theme;
const theme = ref<Theme>(
  ['os', 'light', 'dark'].includes(storedTheme) ? storedTheme : 'os'
);

// 监听主题变化
watchEffect(() => {
  localStorage.setItem('theme', theme.value);

  if ('os' === theme.value) {
    followOs();
    media.addEventListener('change', followOs);
  } else {
    document.documentElement.dataset.theme = theme.value;
    media.removeEventListener('change', followOs);
  }
});

export default theme;
