import { PrismaClient } from "@prisma/client"

declare global {
	namespace globalThis {
		var prismaGlobal: PrismaClient
	}
}

// To ensure single instance of Prisma Client