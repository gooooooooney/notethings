"use server"

export const getUserInfo = async (userId: string) => {
  return await db?.user.findUnique({
    where: {
      externalUserId: userId,
    },
  })


}