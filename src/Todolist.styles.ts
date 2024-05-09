import { SxProps } from '@mui/material'

export const filterButtonsContainerSx= {
    display: 'flex',
    justifyContent: 'space-between',
}

export const getListItemSx=(isDone:boolean) => ({
    p: 0,
    justifyContent: 'space-between',
    opacity: isDone ? 0.5 : 1,
})