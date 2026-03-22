/*
  Warnings:

  - A unique constraint covering the columns `[code]` on the table `Base` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Base_code_key" ON "Base"("code");
