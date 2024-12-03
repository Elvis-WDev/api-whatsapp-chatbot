/*
  Warnings:

  - You are about to drop the column `userId` on the `whatsapp_sessions` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "whatsapp_sessions" DROP CONSTRAINT "whatsapp_sessions_userId_fkey";

-- DropIndex
DROP INDEX "whatsapp_sessions_userId_key";

-- AlterTable
ALTER TABLE "whatsapp_sessions" DROP COLUMN "userId";
