"use server"
import {db} from '@/lib/db'

export const getUserInfo = async (userId: string) => {
  return await db?.user.findUnique({
    where: {
      externalUserId: userId,
    },
  })


}