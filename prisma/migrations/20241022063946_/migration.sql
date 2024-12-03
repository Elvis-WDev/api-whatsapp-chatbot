/*
  Warnings:

  - You are about to drop the column `sessionPath` on the `WhatsAppSession` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "WhatsAppSession" DROP COLUMN "sessionPath",
ADD COLUMN     "active" BOOLEAN NOT NULL DEFAULT false;
