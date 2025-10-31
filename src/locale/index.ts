import type * as Types from '@app/Types.ts'
import { af } from '@locale/af.ts'
import { ar } from '@locale/ar.ts'
import { az } from '@locale/az.ts'
import { be } from '@locale/be.ts'
import { bg } from '@locale/bg.ts'
import { bm } from '@locale/bm.ts'
import { bn } from '@locale/bn.ts'
import { bo } from '@locale/bo.ts'
import { br } from '@locale/br.ts'
import { bs } from '@locale/bs.ts'
import { ca } from '@locale/ca.ts'
import { cs } from '@locale/cs.ts'
import { cv } from '@locale/cv.ts'
import { cy } from '@locale/cy.ts'
import { da } from '@locale/da.ts'
import { de } from '@locale/de.ts'
import { dv } from '@locale/dv.ts'
import { el } from '@locale/el.ts'
import { en } from '@locale/en.ts'
import { eo } from '@locale/eo.ts'
import { es } from '@locale/es.ts'
import { et } from '@locale/et.ts'
import { eu } from '@locale/eu.ts'
import { fa } from '@locale/fa.ts'
import { fi } from '@locale/fi.ts'
import { fil } from '@locale/fil.ts'
import { fo } from '@locale/fo.ts'
import { fr } from '@locale/fr.ts'
import { fy } from '@locale/fy.ts'
import { ga } from '@locale/ga.ts'
import { gd } from '@locale/gd.ts'
import { gl } from '@locale/gl.ts'
import { gom } from '@locale/gom.ts'
import { gu } from '@locale/gu.ts'
import { he } from '@locale/he.ts'
import { hi } from '@locale/hi.ts'
import { hr } from '@locale/hr.ts'
import { hu } from '@locale/hu.ts'
import { hy } from '@locale/hy.ts'
import { id } from '@locale/id.ts'
import { is } from '@locale/is.ts'
import { it } from '@locale/it.ts'
import { ja } from '@locale/ja.ts'
import { jv } from '@locale/jv.ts'
import { ka } from '@locale/ka.ts'
import { kk } from '@locale/kk.ts'
import { km } from '@locale/km.ts'
import { kn } from '@locale/kn.ts'
import { ko } from '@locale/ko.ts'
import { ku } from '@locale/ku.ts'
import { ky } from '@locale/ky.ts'
import { lb } from '@locale/lb.ts'
import { lo } from '@locale/lo.ts'
import { lt } from '@locale/lt.ts'
import { lv } from '@locale/lv.ts'
import { me } from '@locale/me.ts'
import { mi } from '@locale/mi.ts'
import { mk } from '@locale/mk.ts'
import { ml } from '@locale/ml.ts'
import { mn } from '@locale/mn.ts'
import { mr } from '@locale/mr.ts'
import { ms } from '@locale/ms.ts'
import { mt } from '@locale/mt.ts'
import { my } from '@locale/my.ts'
import { nb } from '@locale/nb.ts'
import { ne } from '@locale/ne.ts'
import { nl } from '@locale/nl.ts'
import { nn } from '@locale/nn.ts'
import { no } from '@locale/no.ts'
import { oc } from '@locale/oc.ts'
import { pa } from '@locale/pa.ts'
import { pl } from '@locale/pl.ts'
import { pt } from '@locale/pt.ts'
import { ro } from '@locale/ro.ts'
import { ru } from '@locale/ru.ts'
import { sd } from '@locale/sd.ts'
import { se } from '@locale/se.ts'
import { si } from '@locale/si.ts'
import { sk } from '@locale/sk.ts'
import { sl } from '@locale/sl.ts'
import { sq } from '@locale/sq.ts'
import { sr } from '@locale/sr.ts'
import { ss } from '@locale/ss.ts'
import { sv } from '@locale/sv.ts'
import { sw } from '@locale/sw.ts'
import { ta } from '@locale/ta.ts'
import { te } from '@locale/te.ts'
import { tet } from '@locale/tet.ts'
import { tg } from '@locale/tg.ts'
import { th } from '@locale/th.ts'
import { tk } from '@locale/tk.ts'
import { tl } from '@locale/tl.ts'
import { tlh } from '@locale/tlh.ts'
import { tr } from '@locale/tr.ts'
import { tzl } from '@locale/tzl.ts'
import { tzm } from '@locale/tzm.ts'
import { ug } from '@locale/ug.ts'
import { uk } from '@locale/uk.ts'
import { ur } from '@locale/ur.ts'
import { uz } from '@locale/uz.ts'
import { vi } from '@locale/vi.ts'
import { yo } from '@locale/yo.ts'
import { zh } from '@locale/zh.ts'

/**
 * Locale registry mapping locale codes to locale data.
 */
const localeRegistry: Record<string, Types.LocaleData> = {
  af,
  ar,
  az,
  be,
  bg,
  bm,
  bn,
  bo,
  br,
  bs,
  ca,
  cs,
  cv,
  cy,
  da,
  de,
  dv,
  el,
  en,
  eo,
  es,
  et,
  eu,
  fa,
  fi,
  fil,
  fo,
  fr,
  fy,
  ga,
  gd,
  gl,
  gom,
  gu,
  he,
  hi,
  hr,
  hu,
  hy,
  id,
  is,
  it,
  ja,
  jv,
  ka,
  kk,
  km,
  kn,
  ko,
  ku,
  ky,
  lb,
  lo,
  lt,
  lv,
  me,
  mi,
  mk,
  ml,
  mn,
  mr,
  ms,
  mt,
  my,
  nb,
  ne,
  nl,
  nn,
  no,
  oc,
  pa,
  pl,
  pt,
  ro,
  ru,
  sd,
  se,
  si,
  sk,
  sl,
  sq,
  sr,
  ss,
  sv,
  sw,
  ta,
  te,
  tet,
  tg,
  th,
  tk,
  tl,
  tlh,
  tr,
  tzl,
  tzm,
  ug,
  uk,
  ur,
  uz,
  vi,
  yo,
  zh
}

/**
 * Default locale code.
 */
let defaultLocale = 'en'

/**
 * Gets all available locale codes.
 * @returns Array of available locale codes
 */
export function getAvailableLocales(): string[] {
  return Object.keys(localeRegistry)
}

/**
 * Gets the default locale code.
 * @returns The default locale code
 */
export function getDefaultLocale(): string {
  return defaultLocale
}

/**
 * Gets locale data for the given locale code.
 * @param code - The locale code (e.g., 'en', 'id')
 * @returns Locale data or default (en) if not found
 */
export function getLocale(code?: string): Types.LocaleData {
  if (!code) {
    code = defaultLocale
  }
  const normalizedCode = normalizeLocaleCode(code)
  const locale = localeRegistry[normalizedCode]
  if (locale !== undefined) {
    return locale
  }
  const defaultLocaleData = localeRegistry[defaultLocale]
  if (defaultLocaleData === undefined) {
    throw new Error(`Default locale '${defaultLocale}' not found`)
  }
  return defaultLocaleData
}

/**
 * Normalizes and validates a locale code.
 * @param code - The locale code to normalize and validate
 * @returns Normalized locale code, falls back to default if invalid
 */
export function normalizeLocaleCode(code: string): string {
  if (!code || code.trim() === '') {
    return defaultLocale
  }
  const normalized = code.toLowerCase().split('-')[0] ?? 'en'
  const availableLocales = Object.keys(localeRegistry)
  if (availableLocales.includes(normalized)) {
    return normalized
  }
  return defaultLocale
}

/**
 * Sets the default locale code.
 * @param code - The locale code to set as default
 */
export function setDefaultLocale(code: string): void {
  const normalizedCode = normalizeLocaleCode(code)
  if (localeRegistry[normalizedCode] === undefined) {
    throw new Error(
      `Locale '${code}' not found. Available locales: ${Object.keys(localeRegistry).join(', ')}`
    )
  }
  defaultLocale = normalizedCode
}
