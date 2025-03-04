import { ProjectData } from '@/types/project'
import TD_GLOBAL_TRANSFERS from '@/constants/project-details/td-global-transfers'

const PROJECT_PARAM_DATA_MAP: Record<string, ProjectData> = {
  [TD_GLOBAL_TRANSFERS.slug]: TD_GLOBAL_TRANSFERS,
  solana: TD_GLOBAL_TRANSFERS,
  'mistplay-refer-friends': TD_GLOBAL_TRANSFERS,
}

// USE WHEN HAVE ALL DATA SETUP
// const WHITELIST = [TD_GLOBAL_TRANSFERS]

// function createProjectParamDataMap(
//   whitelistedProjects: ProjectData[]
// ): Record<string, ProjectData> {
//   return whitelistedProjects.reduce(
//     (acc, project) => {
//       acc[project.slug] = project
//       return acc
//     },
//     {} as Record<string, ProjectData>
//   )
// }

// const PROJECT_PARAM_DATA_MAP = createProjectParamDataMap(WHITELIST)

export default PROJECT_PARAM_DATA_MAP
