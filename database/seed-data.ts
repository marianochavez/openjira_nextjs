
interface SeedData{
    entries: SeedEntry[];
}

interface SeedEntry {
    description: string;
    status: string;
    createdAt: Number;
}

export const seedData: SeedData = {
    entries: [
        {
            description:
                "P:Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium tempore dolorem hic, delectus molestiae dicta consequuntur odio accusamus odit, officiis minima doloremque sunt facere eius laudantium eligendi ipsum mollitia voluptatem.",
            status: "pending",
            createdAt: Date.now(),
        },
        {
            description:
                "IP:Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium tempore dolorem hic, delectus molestiae dicta consequuntur odio accusamus odit, officiis minima doloremque sunt facere eius laudantium eligendi ipsum mollitia voluptatem.",
            status: "in-progress",
            createdAt: Date.now() - 1000000,
        },
        {
            description:
                "F:Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium tempore dolorem hic, delectus molestiae dicta consequuntur odio accusamus odit, officiis minima doloremque sunt facere eius laudantium eligendi ipsum mollitia voluptatem.",
            status: "finished",
            createdAt: Date.now() - 100000000,
        },
    ]
}