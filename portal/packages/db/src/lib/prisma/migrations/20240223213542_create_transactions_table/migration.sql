-- CreateEnum
CREATE TYPE "portal"."TransactionSource" AS ENUM ('PROMOTION', 'BUDGET');

-- AlterEnum
ALTER TYPE "portal"."PromotionType" ADD VALUE 'SUBSCRIPTION';

-- CreateTable
CREATE TABLE "portal"."transactions" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "projectId" TEXT,
    "agentId" TEXT,
    "cost" DECIMAL(65,30) NOT NULL,
    "success" BOOLEAN NOT NULL,
    "source" "portal"."TransactionSource" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "transactions_pkey" PRIMARY KEY ("id")
);
