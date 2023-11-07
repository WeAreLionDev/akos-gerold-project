import type { HomepageType, ServiceSectionType } from 'src/types'

import type {
  SanityAboutMeSectionType,
  SanityClientSectionType,
  SanityHeroSectionType,
  SanityHomepageType,
  SanityServiceSectionType,
  SanityTestimonialSectionType,
  SanityWelcomeSectionType,
  SanityWorkWithMeSectionType,
} from './Homepage.interface'

const convertSanityServiceSectionToServiceSection = ({
  orientation,
  blueTheme,
  ...rest
}: SanityServiceSectionType): ServiceSectionType => ({
  ...rest,
  orientation: orientation ? 'left' : 'right',
  variant: blueTheme ? 'light' : 'dark',
})

const convertSanityHomepageToHomepage = (homepage: SanityHomepageType) => {
  const pageBuilder = homepage.pageBuilder
  return pageBuilder.reduce<HomepageType>(
    (acc, section) => {
      const { _type, ...rest } = section
      switch (_type) {
        case 'heroSection':
          return { ...acc, heroSection: { ...rest } as SanityHeroSectionType }
        case 'welcomeSection':
          return { ...acc, welcomeSection: { ...rest } as SanityWelcomeSectionType }
        case 'clientSection':
          return { ...acc, clientSection: { ...rest } as SanityClientSectionType }
        case 'testimonialSection':
          return { ...acc, testimonialSection: { ...rest } as SanityTestimonialSectionType }
        case 'serviceSection': {
          const service = convertSanityServiceSectionToServiceSection({ ...rest, _type } as SanityServiceSectionType)
          return {
            ...acc,
            services: [...(acc.services || []), service],
          }
        }
        case 'aboutMeSection':
          return { ...acc, aboutMeSection: { ...rest } as SanityAboutMeSectionType }
        case 'workWithMeSection':
          return { ...acc, workWithMeSection: { ...rest } as SanityWorkWithMeSectionType }
        default:
          return { ...acc }
      }
    },
    { services: [] as SanityServiceSectionType[], title: homepage.title } as unknown as HomepageType,
  )
}
export default convertSanityHomepageToHomepage
