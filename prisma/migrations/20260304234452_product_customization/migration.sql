/*
  Warnings:

  - You are about to drop the column `preco` on the `Product` table. All the data in the column will be lost.
  - Added the required column `stock` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `subtitle` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "preco",
ADD COLUMN     "stock" INTEGER NOT NULL,
ADD COLUMN     "subtitle" TEXT NOT NULL;
