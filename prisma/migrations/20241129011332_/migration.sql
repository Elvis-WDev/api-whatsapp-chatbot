/*
  Warnings:

  - You are about to drop the `business` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `category` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `chatbot` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `subcategory` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "CommandStatus" AS ENUM ('activate', 'desactivate');

-- DropForeignKey
ALTER TABLE "business" DROP CONSTRAINT "business_category_id_fkey";

-- DropForeignKey
ALTER TABLE "business" DROP CONSTRAINT "business_subcategory_id_fkey";

-- DropForeignKey
ALTER TABLE "subcategory" DROP CONSTRAINT "subcategory_category_id_fkey";

-- DropTable
DROP TABLE "business";

-- DropTable
DROP TABLE "category";

-- DropTable
DROP TABLE "chatbot";

-- DropTable
DROP TABLE "subcategory";

-- CreateTable
CREATE TABLE "commands" (
    "id" SERIAL NOT NULL,
    "activator_command" TEXT NOT NULL,
    "message" DOUBLE PRECISION NOT NULL,
    "status" "CommandStatus" NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "commands_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "commands" ADD CONSTRAINT "commands_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
