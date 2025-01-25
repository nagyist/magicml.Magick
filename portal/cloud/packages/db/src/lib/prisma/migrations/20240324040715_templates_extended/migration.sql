-- AlterTable
ALTER TABLE "portal"."templates" ADD COLUMN     "usageCount" INTEGER NOT NULL DEFAULT 0;

-- CreateTable
CREATE TABLE "portal"."template_versions" (
    "id" TEXT NOT NULL,
    "templateId" TEXT NOT NULL,
    "version" INTEGER NOT NULL,
    "spells" JSONB[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "template_versions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "portal"."template_collections" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "templates" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "templateId" TEXT,

    CONSTRAINT "template_collections_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "portal"."template_ratings" (
    "id" TEXT NOT NULL,
    "templateId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "template_ratings_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "template_versions_templateId_version_key" ON "portal"."template_versions"("templateId", "version");

-- CreateIndex
CREATE UNIQUE INDEX "template_ratings_templateId_userId_key" ON "portal"."template_ratings"("templateId", "userId");

-- AddForeignKey
ALTER TABLE "portal"."template_versions" ADD CONSTRAINT "template_versions_templateId_fkey" FOREIGN KEY ("templateId") REFERENCES "portal"."templates"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "portal"."template_collections" ADD CONSTRAINT "template_collections_templateId_fkey" FOREIGN KEY ("templateId") REFERENCES "portal"."templates"("id") ON DELETE SET NULL ON UPDATE CASCADE;
