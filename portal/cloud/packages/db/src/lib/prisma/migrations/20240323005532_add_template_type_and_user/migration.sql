/*
  Warnings:

  - You are about to drop the `seraph_events` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "portal"."TemplateType" AS ENUM ('OFFICIAL', 'COMMUNITY');

-- AlterTable
ALTER TABLE "portal"."templates" ADD COLUMN     "type" "portal"."TemplateType" NOT NULL DEFAULT 'OFFICIAL',
ADD COLUMN     "userId" TEXT;

-- DropTable
DROP TABLE "portal"."seraph_events";
