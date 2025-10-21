/*
  Warnings:

  - The primary key for the `recommendations` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "recommendations" DROP CONSTRAINT "recommendations_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "recommendations_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "recommendations_id_seq";
