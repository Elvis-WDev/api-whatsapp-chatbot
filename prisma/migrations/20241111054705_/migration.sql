/*
  Warnings:

  - You are about to drop the `whatsapp_sessions` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "whatsapp_sessions" DROP CONSTRAINT "whatsapp_sessions_userId_fkey";

-- DropTable
DROP TABLE "whatsapp_sessions";

-- CreateTable
CREATE TABLE "Chatbot" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "chatbot_system" TEXT NOT NULL,
    "chatbot_temperature" DOUBLE PRECISION NOT NULL,
    "chatbot_maxTokens" INTEGER NOT NULL,
    "chatbot_numResults" INTEGER NOT NULL,

    CONSTRAINT "Chatbot_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "business" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "business_address" TEXT NOT NULL,
    "business_opening_hours" TEXT NOT NULL,
    "business_contact_info" TEXT NOT NULL,
    "business_description" TEXT NOT NULL,
    "business_name" TEXT NOT NULL,

    CONSTRAINT "business_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Category" (
    "id" SERIAL NOT NULL,
    "business_id" INTEGER NOT NULL,
    "category_name" TEXT NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Subcategory" (
    "id" SERIAL NOT NULL,
    "category_id" INTEGER NOT NULL,
    "subcategory_name" TEXT NOT NULL,

    CONSTRAINT "Subcategory_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Chatbot_userId_key" ON "Chatbot"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "business_userId_key" ON "business"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Category_business_id_key" ON "Category"("business_id");

-- CreateIndex
CREATE UNIQUE INDEX "Subcategory_category_id_key" ON "Subcategory"("category_id");

-- AddForeignKey
ALTER TABLE "Chatbot" ADD CONSTRAINT "Chatbot_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "business" ADD CONSTRAINT "business_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Category" ADD CONSTRAINT "Category_business_id_fkey" FOREIGN KEY ("business_id") REFERENCES "business"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Subcategory" ADD CONSTRAINT "Subcategory_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
