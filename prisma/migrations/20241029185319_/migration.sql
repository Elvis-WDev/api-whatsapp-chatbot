/*
  Warnings:

  - You are about to drop the column `qr_path` on the `whatsapp_sessions` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "whatsapp_sessions" DROP COLUMN "qr_path",
ADD COLUMN     "qr_code" TEXT,
ADD COLUMN     "session_local_path" TEXT;
