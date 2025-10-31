import type * as Types from '@app/Types.ts'

/**
 * Telugu (te) locale data.
 * @description Telugu locale for Daytime library.
 */
export const te: Types.LocaleData = {
  dayNames: ['ఆదివారం', 'సోమవారం', 'మంగళవారం', 'బుధవారం', 'గురువారం', 'శుక్రవారం', 'శనివారం'],
  dayNamesShort: ['ఆది', 'సోమ', 'మంగళ', 'బుధ', 'గురు', 'శుక్ర', 'శని'],
  monthNames: [
    'జనవరి',
    'ఫిబ్రవరి',
    'మార్చి',
    'ఏప్రిల్',
    'మే',
    'జూన్',
    'జులై',
    'ఆగస్టు',
    'సెప్టెంబర్',
    'అక్టోబర్',
    'నవంబర్',
    'డిసెంబర్'
  ],
  monthNamesShort: ['జన', 'ఫిబ్ర', 'మార్చి', 'ఏప్రి', 'మే', 'జూన్', 'జులై', 'ఆగ', 'సెప్టె', 'అక్టో', 'నవం', 'డిసెం'],
  relative: {
    now: 'ఇప్పుడు',
    past: '{value} {unit} క్రితం',
    future: '{value} {unit} తర్వాత',
    units: {
      singular: {
        second: 'సెకను',
        minute: 'నిమిషం',
        hour: 'గంట',
        day: 'రోజు',
        week: 'వారం',
        month: 'నెల',
        year: 'సంవత్సరం'
      },
      plural: {
        second: 'సెకన్లు',
        minute: 'నిమిషాలు',
        hour: 'గంటలు',
        day: 'రోజులు',
        week: 'వారాలు',
        month: 'నెలలు',
        year: 'సంవత్సరాలు'
      }
    }
  },
  code: 'te'
}
