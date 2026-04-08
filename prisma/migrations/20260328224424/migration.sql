/*
  Warnings:

  - A unique constraint covering the columns `[userId,baseId]` on the table `UserBase` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "UserBase_userId_baseId_key" ON "UserBase"("userId", "baseId");
