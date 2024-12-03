import { prisma } from '../postgreSQL/postgres-client';
import { AdminSeeder } from './admin.seeder';

(async () => {
    try {
        await main();
    } finally {
        await prisma.$disconnect();
    }
})();

async function main() {
    await AdminSeeder();
    console.log('Seeder successfully completed')
}
