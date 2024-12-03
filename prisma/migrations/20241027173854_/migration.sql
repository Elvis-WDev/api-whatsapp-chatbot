/*
  Warnings:

  - You are about to drop the column `img` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `role` on the `users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "users" DROP COLUMN "img",
DROP COLUMN "role",
ADD COLUMN     "avatar_url" TEXT;
