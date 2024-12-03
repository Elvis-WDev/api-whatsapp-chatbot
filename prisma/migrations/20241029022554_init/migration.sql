/*
  Warnings:

  - You are about to drop the column `whatsapp_session` on the `users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "users" DROP COLUMN "whatsapp_session";

-- CreateTable
CREATE TABLE "whatsapp_sessions" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "session_active" BOOLEAN NOT NULL,
    "qr_path" TEXT,

    CONSTRAINT "whatsapp_sessions_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "whatsapp_sessions_userId_key" ON "whatsapp_sessions"("userId");

-- AddForeignKey
ALTER TABLE "whatsapp_sessions" ADD CONSTRAINT "whatsapp_sessions_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
