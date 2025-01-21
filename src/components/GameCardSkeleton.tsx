import { HStack, Stack } from "@chakra-ui/react"
import {
  Skeleton,
  SkeletonCircle,
  SkeletonText,
} from "@/components/ui/skeleton"
    const GameCardSkeleton = () => {
        return (
          <Stack gap="6" maxW="xs">
            <HStack width="full">
              <SkeletonCircle size="10" />
              <SkeletonText noOfLines={2} />
            </HStack>
            <Skeleton height="200px" width="300px"/>
          </Stack>
        )
      }

export default GameCardSkeleton