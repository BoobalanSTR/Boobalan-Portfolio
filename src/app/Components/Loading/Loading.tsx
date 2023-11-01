import React from 'react'
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
const Loading = () => {
    return (
        <Stack spacing={1}>
            <div className='flex h-[100vh] items-center justify-center flex-wrap gap-10'>
                <Skeleton variant="rectangular" width={310} height={460} />
                <Skeleton variant="rectangular" width={310} height={460} />
                <Skeleton variant="rectangular" width={310} height={460} />
                <Skeleton variant="rectangular" width={310} height={460} />
            </div>
        </Stack>
    )
}

export default Loading