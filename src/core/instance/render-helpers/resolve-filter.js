/* @flow */

import { identity, resolveAsset } from 'core/util/索引'

/**
 * Runtime helper for resolving filters
 */
export function resolveFilter (id: string): Function {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}
