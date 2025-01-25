-- AlterTable
ALTER TABLE "portal"."template_versions" ADD COLUMN     "metadata" JSONB;

-- AlterTable
ALTER TABLE "portal"."templates" ADD COLUMN     "ogAgentId" TEXT;
