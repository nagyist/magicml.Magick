-- CreateExtension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- CreateExtension
CREATE EXTENSION IF NOT EXISTS "vector";

-- CreateEnum
CREATE TYPE "portal"."PromotionType" AS ENUM ('INTRO', 'ADMIN');

-- CreateEnum
CREATE TYPE "portal"."SubscriptionType" AS ENUM ('FREE', 'STANDARD', 'PREMIUM');

-- CreateTable
CREATE TABLE "portal"."projects" (
    "id" TEXT NOT NULL,
    "owner" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "deletedAt" TIMESTAMP(3),
    "updatedAt" TIMESTAMP(3),
    "image" TEXT,
    "lastActive" TIMESTAMP(3),

    CONSTRAINT "projects_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "portal"."templates" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "image" TEXT,
    "graph" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "deletedAt" TIMESTAMP(3),
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "templates_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "portal"."publicAgents" (
    "id" TEXT NOT NULL,
    "agentId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "madePublic" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deletedAt" TIMESTAMP(3),
    "description" TEXT NOT NULL DEFAULT '',
    "remixable" BOOLEAN NOT NULL DEFAULT false,
    "isTemplate" BOOLEAN NOT NULL DEFAULT false,
    "featured" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "publicAgents_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "portal"."reports" (
    "id" TEXT NOT NULL,
    "publicAgentId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "message" TEXT NOT NULL,

    CONSTRAINT "reports_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "portal"."likes" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "publicAgentId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "likes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "portal"."comments" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "publicAgentId" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "comments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "portal"."AnonymousUser" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "anonymousId" TEXT NOT NULL,
    "fingerprint" TEXT NOT NULL,
    "lastAccessed" TIMESTAMP(3),

    CONSTRAINT "AnonymousUser_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "portal"."budget" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "balance" DECIMAL(65,30) NOT NULL DEFAULT 0,
    "currentCost" DECIMAL(65,30) DEFAULT 0,
    "modelCost" JSONB DEFAULT '{}',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "budget_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "portal"."promotions" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "type" "portal"."PromotionType" NOT NULL,
    "amount" DECIMAL(65,30) NOT NULL,
    "description" TEXT,
    "validFrom" TIMESTAMP(3) NOT NULL,
    "validUntil" TIMESTAMP(3) NOT NULL,
    "isUsed" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "promotions_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "publicAgents_agentId_key" ON "portal"."publicAgents"("agentId");

-- CreateIndex
CREATE UNIQUE INDEX "likes_userId_publicAgentId_key" ON "portal"."likes"("userId", "publicAgentId");

-- CreateIndex
CREATE UNIQUE INDEX "AnonymousUser_anonymousId_key" ON "portal"."AnonymousUser"("anonymousId");

-- CreateIndex
CREATE UNIQUE INDEX "budget_userId_key" ON "portal"."budget"("userId");

-- AddForeignKey
ALTER TABLE "portal"."reports" ADD CONSTRAINT "reports_publicAgentId_fkey" FOREIGN KEY ("publicAgentId") REFERENCES "portal"."publicAgents"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "portal"."likes" ADD CONSTRAINT "likes_publicAgentId_fkey" FOREIGN KEY ("publicAgentId") REFERENCES "portal"."publicAgents"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "portal"."comments" ADD CONSTRAINT "comments_publicAgentId_fkey" FOREIGN KEY ("publicAgentId") REFERENCES "portal"."publicAgents"("id") ON DELETE CASCADE ON UPDATE CASCADE;
