type WindowWithDataLayer = Window & {
  globalDataLayer: Record<string, unknown>[]
}

declare const window: WindowWithDataLayer

const useGtag = (data: Record<string, unknown>) => {
  window && window.globalDataLayer && window.globalDataLayer.push(data)
}

export default useGtag
