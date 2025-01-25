-- AlterTable
ALTER TABLE "portal"."templates" ADD COLUMN     "spells" TEXT[] DEFAULT ARRAY[]::TEXT[],
ALTER COLUMN "graph" DROP NOT NULL;
