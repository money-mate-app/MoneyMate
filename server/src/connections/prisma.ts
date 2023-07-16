import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

prisma.$queryRaw`SELECT 1`
  .then(() => {
    console.info(`🚀 [prisma]: connected`);
  })
  .catch((err) => {
    console.log(`❌ [prisma]: unable to connect\n`, err);
  });

export default prisma;
