/*
  Warnings:

  - A unique constraint covering the columns `[productId,baseId]` on the table `Inventory` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Inventory_productId_baseId_key" ON "Inventory"("productId", "baseId");
