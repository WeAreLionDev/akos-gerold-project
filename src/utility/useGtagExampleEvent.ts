import useGtag from 'src/utility/useGtag'

export const useGtagExampleEvent = (identifier: string, name: string, type: string) => {
  useGtag({ event_data: null })
  useGtag({
    event: 'SOME_EVENT_NAME',
    event_data: {
      identifier,
      name,
      type,
    },
  })
}
