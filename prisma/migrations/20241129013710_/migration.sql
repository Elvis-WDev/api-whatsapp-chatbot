/*
  Warnings:

  - A unique constraint covering the columns `[activator_command]` on the table `commands` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "commands_activator_command_key" ON "commands"("activator_command");
