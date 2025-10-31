import type * as Types from '@app/Types.ts'

/**
 * Malayalam (ml) locale data.
 * @description Malayalam locale for Daytime library.
 */
export const ml: Types.LocaleData = {
  dayNames: ['ഞായറാഴ്ച', 'തിങ്കളാഴ്ച', 'ചൊവ്വാഴ്ച', 'ബുധനാഴ്ച', 'വ്യാഴാഴ്ച', 'വെള്ളിയാഴ്ച', 'ശനിയാഴ്ച'],
  dayNamesShort: ['ഞായ', 'തിങ്ക', 'ചൊവ്വ', 'ബുധ', 'വ്യാഴ', 'വെള്ളി', 'ശനി'],
  monthNames: [
    'ജനുവരി',
    'ഫെബ്രുവരി',
    'മാർച്ച്',
    'ഏപ്രിൽ',
    'മേയ്',
    'ജൂൺ',
    'ജൂലൈ',
    'ഓഗസ്റ്റ്',
    'സെപ്റ്റംബർ',
    'ഒക്ടോബർ',
    'നവംബർ',
    'ഡിസംബർ'
  ],
  monthNamesShort: [
    'ജനു',
    'ഫെബ്',
    'മാർ',
    'ഏപ്രി',
    'മേയ്',
    'ജൂൺ',
    'ജൂലൈ',
    'ഓഗ',
    'സെപ്റ്റ',
    'ഒക്ടോ',
    'നവം',
    'ഡിസം'
  ],
  relative: {
    now: 'ഇപ്പോൾ',
    past: '{value} {unit} മുമ്പ്',
    future: '{value} {unit} കഴിഞ്ഞ്',
    units: {
      singular: {
        second: 'സെക്കൻഡ്',
        minute: 'മിനിറ്റ്',
        hour: 'മണിക്കൂർ',
        day: 'ദിവസം',
        week: 'വാരം',
        month: 'മാസം',
        year: 'വർഷം'
      },
      plural: {
        second: 'സെക്കൻഡ്',
        minute: 'മിനിറ്റ്',
        hour: 'മണിക്കൂർ',
        day: 'ദിവസം',
        week: 'വാരം',
        month: 'മാസം',
        year: 'വർഷം'
      }
    }
  },
  code: 'ml'
}
