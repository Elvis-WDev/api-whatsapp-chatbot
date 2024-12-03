/*
  Warnings:

  - You are about to drop the column `business_id` on the `category` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "category" DROP CONSTRAINT "category_business_id_fkey";

-- DropIndex
DROP INDEX "category_business_id_key";

-- DropIndex
DROP INDEX "subcategory_category_id_key";

-- AlterTable
ALTER TABLE "business" ADD COLUMN     "category_id" INTEGER,
ADD COLUMN     "subcategory_id" INTEGER;

-- AlterTable
ALTER TABLE "category" DROP COLUMN "business_id";

-- AddForeignKey
ALTER TABLE "business" ADD CONSTRAINT "business_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "category"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "business" ADD CONSTRAINT "business_subcategory_id_fkey" FOREIGN KEY ("subcategory_id") REFERENCES "subcategory"("id") ON DELETE SET NULL ON UPDATE CASCADE;
