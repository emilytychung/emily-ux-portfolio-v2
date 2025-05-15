import {
  CompassIcon,
  NotebookIcon,
  ShieldIcon,
  LockIcon,
  BalanceIcon,
  SparkleIcon,
  IncreasingIcon,
  RecognitionIcon,
  ThinkingIcon,
  CrossFunctionalIcon,
  RocketIcon,
} from '@/components/Icons'
import cafeHopping from '@images/polaroids/cafe.png'
import tdLogo from '@images/logo/td.png'
import tdGlobalCover from '@images/projects/td-global-transfers/cover.png'
import tdGlobalSummary1 from '@images/projects/td-global-transfers/summary1.png'
import tdGlobalSummary2 from '@images/projects/td-global-transfers/summary2.png'
import tdGlobalSummary3 from '@images/projects/td-global-transfers/summary3.png'
import tdGlobalDiscover21 from '@images/projects/td-global-transfers/discover2-1.png'
import tdGlobalDiscover22 from '@images/projects/td-global-transfers/discover2-2.png'
import tdGlobalDiscover23 from '@images/projects/td-global-transfers/discover2-3.png'
import tdGlobalUser1 from '@images/projects/td-global-transfers/user1.png'
import tdGlobalUser2 from '@images/projects/td-global-transfers/user2.png'
import tdGlobalExecute2 from '@images/projects/td-global-transfers/execute2.png'
import tdGlobalExecute31 from '@images/projects/td-global-transfers/execute3-1.png'
import tdGlobalExecute32 from '@images/projects/td-global-transfers/execute3-2.png'
import tdGlobalFlatlayDesktop from '@images/projects/td-global-transfers/flatlay-desktop.png'
import tdGlobalFlatlayTablet from '@images/projects/td-global-transfers/flatlay-tablet.png'
import tdGlobalFlatlayMobile from '@images/projects/td-global-transfers/flatlay-mobile.png'
import { ProjectData } from '@/types/project'

const TD_GLOBAL_TRANSFERS: ProjectData = {
  slug: 'td-global-transfers',
  companyLogoIcon: tdLogo,
  company: 'TD Canada Trust',
  title: 'Global Transfers Case Study',
  cardDescription: 'Marketplace to shop rates and send money',
  description:
    'Empowering over 15M users with seamless international transfers— an award-winning redesign for TD Canada Trust.',
  tags: ['desktop', 'ios', 'android'],
  coverImage: tdGlobalCover,
  flatlayImages: {
    desktop: tdGlobalFlatlayDesktop,
    tablet: tdGlobalFlatlayTablet,
    mobile: tdGlobalFlatlayMobile,
  },
  roles: [
    'Product designer',
    'Design systems',
    'User researcher & Accessibility',
  ],
  team: ['CXO', 'Product manager', 'Me'],
  timeline: '1 year +',
  summary: [
    {
      subheader: 'Marketplace design',
      description:
        'Users can easily compare three transfer methods—Visa card, cash pickup, and direct bank transfer—after searching for a quote. The design simplifies decision-making by showing key details side by side.',
      imgFile: tdGlobalSummary1,
    },
    {
      subheader: 'Redesigned Success Screen',
      description:
        'The success screen clearly guides users through cash pickup, highlighting key steps and information. This improved usability boosted cash pickup success rates and reduced errors.',
      imgFile: tdGlobalSummary2,
    },
    {
      subheader:
        'Consistent design across 3 platforms -  Responsive Web, iOS and Android',
      description:
        'Created a unified experience while respecting the unique constraints of each design system, ensuring seamless usability on all platforms.',
      imgFile: tdGlobalSummary3,
    },
  ],
  designProcess: {
    discover: [
      {
        title: 'Auditing',
        imgFile: cafeHopping,
        highlights: [
          {
            subheader: 'Action overload',
            description:
              'The form fields lacked an intuitive flow, making it harder for users to complete.',
          },
          {
            subheader: 'Vendor Logos Overpowered Transfer Methods',
            description:
              'The form fields lacked an intuitive flow, making it harder for users to complete.',
          },
          {
            subheader: 'Unclear Success State',
            description:
              'The success page doesn’t effectively highlight the most critical information, like the MTCN number, which is easily overlooked.',
          },
        ],
      },
      {
        title: 'Research & Analysis',
        highlights: [
          {
            subheader: 'Transferwise Transparent Fee Breakdown',
            description:
              'Clearly displays fees, exchange rates, and the exact recipient amount, ensuring transparency by revealing any hidden fees in the exchange rate.',
            imgFile: tdGlobalDiscover21,
          },
          {
            subheader: 'Kayak Intuitive Comparison Layout',
            description:
              'Three-column layout simplifies comparisons by prioritizing key information like cost on the right, following a natural F-pattern for easier decision-making.',
            imgFile: tdGlobalDiscover22,
          },
          {
            subheader: 'Google Flights Simplified Adjustments',
            description:
              'Keeps the search bar accessible at the top, allowing users to adjust search options without disrupting their selection process.',
            imgFile: tdGlobalDiscover23,
          },
        ],
      },
    ],
    define: [
      {
        title: 'Problem & Goal',
        cards: [
          {
            subheader: 'Complex Navigation',
            description:
              'Users faced confusing flows, with key information split across multiple steps, leading to frustration.',
            IconComponent: CompassIcon,
          },
          {
            subheader: 'Trust Barriers',
            description:
              'Unfamiliarity with third-party services created uncertainty, as users expected an experience similar to Interac e-Transfer.',
            IconComponent: ShieldIcon,
          },
          {
            subheader: 'Information Overload',
            description:
              'Too many data points—fees, exchange rates, and logos—were presented simultaneously, overwhelming users.',
            IconComponent: NotebookIcon,
          },
        ],
      },
      {
        title: 'Challenge & Constraints',
        cards: [
          {
            subheader: 'Inherited Design Constraints',
            description:
              'Working within pre-existing designs and partially built features required close collaboration with developers and business teams',
            IconComponent: LockIcon,
          },
          {
            subheader: 'Balancing Business Goals',
            description:
              'Aligning user needs for simplicity with business priorities to promote partnerships like Western Union and Visa Direct.',
            IconComponent: BalanceIcon,
          },
          {
            subheader: 'Platform Consistency',
            description:
              'Ensuring a unified experience across desktop, mobile web, iOS, and Android while adhering to TD’s design system and platform limitations.',
            IconComponent: SparkleIcon,
          },
        ],
      },
    ],
    userPersona: {
      title: 'User personas',
      users: [
        {
          name: 'Amelia',
          title: 'The busy professional',
          description: `32, Toronto, Marketing Manager. Highly familiar with digital tools but prefers quick, straightforward experiences. Sends monthly remittances to her family abroad.\n \u2B24 Goals: Understand fees and delivery timelines upfront. \u2B24 Pain Points: Worries about hidden fees and unclear exchange rates. \u2B24 Behavioral Insights: Prefers mobile apps for quick actions but switches to desktop for more complex tasks.`,
          goals: 'Understand fees and delivery timelines upfront.',
          painPoints: 'Worries about hidden fees and unclear exchange rates.',
          behavioralInsights:
            'Prefers mobile apps for quick actions but switches to desktop for more complex tasks.',
          imgFile: tdGlobalUser1,
        },
        {
          name: 'David',
          title: 'The New User',
          description:
            '48. Lives in Ott`awa as a Small Business Owner. Minimal experience with online banking; primarily deals with local transfers. Recently began sending money to an international supplier.',
          goals:
            'Complete transfers confidently without worrying about security issues.',
          painPoints:
            'Finds too much information overwhelming and doesn’t know where to focus.',
          behavioralInsights:
            'Relies on visual cues like icons and progress bars and direct support channels for confidence.',
          imgFile: tdGlobalUser2,
        },
      ],
    },
    explore: {
      title: 'Med-fi & User Testing',
      media: {
        type: 'image',
        src: cafeHopping,
      },
      highlights: [
        {
          subheader: 'Exchange Rate Dropdown',
          description:
            'We added a dropdown to calculate vendor-specific rates as receiving amounts. While helpful, it caused some friction as users preferred quicker clarity.',
        },
        {
          subheader: 'Clarifying Destination and Recipient Banks',
          description:
            'Users found "destination" confusing, especially when sending money to Canadian banks while abroad. Clearer instructions were needed to avoid misunderstandings.',
        },
        {
          subheader: 'Vendor Logos & Sending Methods',
          description:
            'Vendor logos were prioritized for business objectives, but users struggled to recognize transfer options and differentiate between vendors.',
        },
      ],
    },
    execute: [
      {
        title: 'Final designs',
        videoFile: cafeHopping,
        highlights: [
          {
            subheader: 'Three-Column Comparison with Centralized Rates',
            description:
              'Arranged sending methods, exchange rates, and decision factors in a flight-booking-style layout.',
          },
          {
            subheader: 'Restructured Flow and Visual Redesign',
            description:
              'Simplified the flow with modals for recipient details, upfront fraud awareness, and a faster, streamlined visual design.',
          },
          {
            subheader: 'Redesigned Success State',
            description:
              'Revamped the success page to highlight the MTCN, making it easy for users to find and recall critical information.',
          },
        ],
      },
      {
        title: 'Guidance for new users',
        description:
          'Designed an onboarding flow to help new users understand the transfer process. This approach tested positively, providing clarity and confidence in using the service.',
        imgFile: tdGlobalExecute2,
      },
      {
        title: 'Edge case scenarios',
        highlights: [
          {
            subheader: 'Dynamic Handling of Destination Mismatches',
            description:
              'Addressed the "destination" ambiguity by handling mismatches on the backend. If a mismatch between the bank account and destination country is detected after form submission, a modal prompts users to correct the flow seamlessly.',
            imgFile: tdGlobalExecute31,
          },
          {
            subheader: 'Exchange Rate Updates',
            description:
              'Introduced a modal to notify users when the exchange rate changes while they are filling out the form, allowing them to update the rate and proceed with accurate information.',

            imgFile: tdGlobalExecute32,
          },
        ],
      },
    ],
  },
  outcomes: [
    {
      title: 'Metrics',
      cards: [
        {
          subheader: 'Usability improvements',
          description:
            'Improvements in the System Usability Scale (SUS) scores:\n \u2B24 Desktop: 83.6 (above industry average of 68).\n \u2B24 Mobile: 80',
          IconComponent: LockIcon,
        },
        {
          subheader: 'Increased User Engagement',
          description:
            'The platform successfully drove engagement, with over 200,000 TD customers sending 1.8 million transfers globally.',
          IconComponent: IncreasingIcon,
        },
        {
          subheader: 'Business Recognition',
          description:
            'The project was awarded the 2022 BIG Innovation Award by the Business Intelligence Group, recognizing it as an innovative digital solution.',
          IconComponent: RecognitionIcon,
        },
      ],
    },
    {
      title: 'Reflection & Learnings',
      cards: [
        {
          subheader: 'Strategic Thinking',
          description:
            'Balanced business goals (promoting partnerships) with user needs for simplicity and trust. Competitive research into travel comparison platforms shaped the marketplace structure.',
          IconComponent: ThinkingIcon,
        },
        {
          subheader: 'Cross-Functional Leadership',
          description:
            'Collaborated with developers, accessibility experts, legal, and copywriters to meet business, technical, and compliance needs while improving usability.',
          IconComponent: CrossFunctionalIcon,
        },
        {
          subheader: 'Measurable Impact',
          description:
            'This project set the stage for over five additional TD collaborations, including redesigns of the Interac e-Transfer system and TD’s investing and onboarding processes.',
          IconComponent: RocketIcon,
        },
      ],
    },
  ],
}

export default TD_GLOBAL_TRANSFERS
