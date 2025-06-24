-- CreateTable
CREATE TABLE "portal"."promotion_codes" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "description" TEXT,
    "couponId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "isUsed" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "promotion_codes_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "promotion_codes_code_key" ON "portal"."promotion_codes"("code");

-- CreateIndex
CREATE UNIQUE INDEX "promotion_codes_userId_key" ON "portal"."promotion_codes"("userId");
