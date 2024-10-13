import { Box, Skeleton, Stack } from "@mui/material";

const skeletonInputContainerStyles = {
  display: 'flex',
  gap: 2,
}

const skeletonInputStyles = {
  borderRadius: 1
}

export default function ZohoSkeleton() {
  return (
    <Stack spacing={2} sx={{
      width: '100%',
      p: 1,
    }}>
      <Box sx={skeletonInputContainerStyles}>
        <Skeleton variant="rectangular" height={50} width="100%" sx={skeletonInputStyles} />
        <Skeleton variant="rectangular" height={50} width="100%" sx={skeletonInputStyles} />
      </Box>
      <Box sx={skeletonInputContainerStyles}>
        <Skeleton variant="rectangular" height={50} width="100%" sx={skeletonInputStyles} />
        <Skeleton variant="rectangular" height={50} width="100%" sx={skeletonInputStyles} />
      </Box>
      <Box sx={skeletonInputContainerStyles}>
        <Skeleton variant="rectangular" height={50} width="100%" sx={skeletonInputStyles} />
      </Box>
      <Skeleton variant="rectangular" height={40} width={80} sx={skeletonInputStyles} />
    </Stack>
  )
}