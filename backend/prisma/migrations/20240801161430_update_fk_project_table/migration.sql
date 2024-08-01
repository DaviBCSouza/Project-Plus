/*
  Warnings:

  - Added the required column `id_user` to the `project` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `project` ADD COLUMN `id_user` CHAR(36) NOT NULL;

-- AddForeignKey
ALTER TABLE `project` ADD CONSTRAINT `project_id_user_fkey` FOREIGN KEY (`id_user`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
