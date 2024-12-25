import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTagify,
  presetTypography,
  presetUno,
} from 'unocss';

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons(),
    presetAttributify(),
    presetTypography(),
    presetTagify(),
  ],
});
