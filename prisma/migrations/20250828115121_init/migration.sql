-- CreateTable
CREATE TABLE "Workplace" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Shift" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "workplaceId" INTEGER NOT NULL,
    CONSTRAINT "Shift_workplaceId_fkey" FOREIGN KEY ("workplaceId") REFERENCES "Workplace" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
