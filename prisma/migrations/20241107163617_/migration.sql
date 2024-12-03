/*
  Warnings:

  - You are about to drop the column `session_local_path` on the `whatsapp_sessions` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "whatsapp_sessions" DROP COLUMN "session_local_path";
