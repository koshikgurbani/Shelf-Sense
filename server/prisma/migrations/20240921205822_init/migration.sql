/*
  Warnings:

  - You are about to drop the column `totalPurchases` on the `PurchaseSummary` table. All the data in the column will be lost.
  - You are about to drop the column `totalamount` on the `Sales` table. All the data in the column will be lost.
  - Added the required column `totalPurchased` to the `PurchaseSummary` table without a default value. This is not possible if the table is not empty.
  - Added the required column `totalAmount` to the `Sales` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "PurchaseSummary" DROP COLUMN "totalPurchases",
ADD COLUMN     "totalPurchased" DOUBLE PRECISION NOT NULL;

-- AlterTable
ALTER TABLE "Sales" DROP COLUMN "totalamount",
ADD COLUMN     "totalAmount" DOUBLE PRECISION NOT NULL;
