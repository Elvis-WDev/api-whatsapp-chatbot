/*
  Warnings:

  - You are about to drop the column `status` on the `WhatsAppSession` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "WhatsAppSession" DROP COLUMN "status",
ADD COLUMN     "isAuthenticated" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "session_path" TEXT;
