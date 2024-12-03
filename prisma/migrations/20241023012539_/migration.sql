/*
  Warnings:

  - You are about to drop the column `active` on the `WhatsAppSession` table. All the data in the column will be lost.
  - Added the required column `qr_path` to the `WhatsAppSession` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "WhatsAppSession" DROP COLUMN "active",
ADD COLUMN     "qr_path" TEXT NOT NULL,
ADD COLUMN     "status" BOOLEAN NOT NULL DEFAULT false;
