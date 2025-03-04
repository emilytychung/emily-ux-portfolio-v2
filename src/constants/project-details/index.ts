import { ProjectData } from '@/types/project'
import TD_GLOBAL_TRANSFERS from '@/constants/project-details/td-global-transfers'

const PROJECT_PARAM_DATA_MAP: Record<string, ProjectData> = {
  'td-global-transfers': TD_GLOBAL_TRANSFERS,
  solana: TD_GLOBAL_TRANSFERS,
  'mistplay-refer-friends': TD_GLOBAL_TRANSFERS,
}

export default PROJECT_PARAM_DATA_MAP
