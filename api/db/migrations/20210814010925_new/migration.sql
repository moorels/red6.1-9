-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL DEFAULT 99999999,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,

    PRIMARY KEY ("id")
);
