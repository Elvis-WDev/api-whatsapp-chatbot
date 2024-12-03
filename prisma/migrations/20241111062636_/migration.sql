/*
  Warnings:

  - You are about to drop the column `userId` on the `business` table. All the data in the column will be lost.
  - You are about to drop the `Category` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Chatbot` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Subcategory` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Category" DROP CONSTRAINT "Category_business_id_fkey";

-- DropForeignKey
ALTER TABLE "Chatbot" DROP CONSTRAINT "Chatbot_userId_fkey";

-- DropForeignKey
ALTER TABLE "Subcategory" DROP CONSTRAINT "Subcategory_category_id_fkey";

-- DropForeignKey
ALTER TABLE "business" DROP CONSTRAINT "business_userId_fkey";

-- DropIndex
DROP INDEX "business_userId_key";

-- AlterTable
ALTER TABLE "business" DROP COLUMN "userId";

-- DropTable
DROP TABLE "Category";

-- DropTable
DROP TABLE "Chatbot";

-- DropTable
DROP TABLE "Subcategory";

-- CreateTable
CREATE TABLE "chatbot" (
    "id" SERIAL NOT NULL,
    "chatbot_system" TEXT NOT NULL,
    "chatbot_temperature" DOUBLE PRECISION NOT NULL,
    "chatbot_maxTokens" INTEGER NOT NULL,
    "chatbot_numResults" INTEGER NOT NULL,

    CONSTRAINT "chatbot_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "category" (
    "id" SERIAL NOT NULL,
    "business_id" INTEGER NOT NULL,
    "category_name" TEXT NOT NULL,

    CONSTRAINT "category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "subcategory" (
    "id" SERIAL NOT NULL,
    "category_id" INTEGER NOT NULL,
    "subcategory_name" TEXT NOT NULL,

    CONSTRAINT "subcategory_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "category_business_id_key" ON "category"("business_id");

-- CreateIndex
CREATE UNIQUE INDEX "subcategory_category_id_key" ON "subcategory"("category_id");

-- AddForeignKey
ALTER TABLE "category" ADD CONSTRAINT "category_business_id_fkey" FOREIGN KEY ("business_id") REFERENCES "business"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "subcategory" ADD CONSTRAINT "subcategory_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
