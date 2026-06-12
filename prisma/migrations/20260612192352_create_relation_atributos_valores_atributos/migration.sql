-- AlterTable
ALTER TABLE "Atributos" ALTER COLUMN "updated_at" DROP DEFAULT;

-- AlterTable
ALTER TABLE "valores_atributos" ALTER COLUMN "updated_at" DROP DEFAULT;

-- AddForeignKey
ALTER TABLE "valores_atributos" ADD CONSTRAINT "valores_atributos_id_atributo_fkey" FOREIGN KEY ("id_atributo") REFERENCES "Atributos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
