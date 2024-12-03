/*
  Warnings:

  - You are about to drop the column `session` on the `WhatsAppSession` table. All the data in the column will be lost.
  - Added the required column `sessionPath` to the `WhatsAppSession` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "WhatsAppSession" DROP COLUMN "session",
ADD COLUMN     "sessionPath" TEXT NOT NULL;
