/*
  Warnings:

  - You are about to drop the `WhatsAppSession` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "WhatsAppSession" DROP CONSTRAINT "WhatsAppSession_userId_fkey";

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "whatsapp_session" BOOLEAN;

-- DropTable
DROP TABLE "WhatsAppSession";
