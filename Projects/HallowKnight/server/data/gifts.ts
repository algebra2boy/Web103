type Gift = {
    id: number,
    name: string,
    healthPoint: number,
    audience: string,
    image: string,
    description: string,
}

const giftData: Gift[] = [
    {
        "id": 1,
        "name": "Broken Vessel",
        "healthPoint": 100,
        "audience": "Beginner",
        "image": "http://pa1.narvii.com/6609/84a4a9203980912269721c8ff403a7b1314540d9_00.gif",
        "description": "A party in a candle",
    },
    {
        "id": 2,
        "name": "Crystal Guardian",
        "healthPoint": 299,
        "audience": "Intermediate",
        "image": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4b368430-8d57-492e-bc0b-360ef75b19bd/df7btpo-b405685c-1f21-45ae-ae2d-ec2ccf9917ed.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzRiMzY4NDMwLThkNTctNDkyZS1iYzBiLTM2MGVmNzViMTliZFwvZGY3YnRwby1iNDA1Njg1Yy0xZjIxLTQ1YWUtYWUyZC1lYzJjY2Y5OTE3ZWQuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.v0Ld-ubRZSjy9vAbVd0F2mvUm_ObG46xEsWW25NSiDM",
        "description": "A gift and fun activity to do together",
    },
    {
        "id": 3,
        "name": "False Knight",
        "healthPoint": 300,
        "audience": "Advanced",
        "image": "https://flipanim.com/gif/x/4/X4Khfx0b.gif",
        "description": "A gift for gamers on-the-go",
    },
    {
        "id": 4,
        "name": "Hallow Knight",
        "healthPoint": 999,
        "audience": "Advanced",
        "image": "https://media.tenor.com/HdBYk1CMyE4AAAAd/hollow-knight.gif",
        "description": "A fan-favorite black and white color-blocking sneaker",
    },
    {
        "id": 5,
        "name": "Hornet Protector",
        "healthPoint": 1000,
        "audience": "Advanced",
        "image": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7a2d7d4d-0115-4ac6-8324-c15f9174c7d2/dda0aas-4df1cb55-fee4-4fbf-a8cb-dc2494df7544.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzdhMmQ3ZDRkLTAxMTUtNGFjNi04MzI0LWMxNWY5MTc0YzdkMlwvZGRhMGFhcy00ZGYxY2I1NS1mZWU0LTRmYmYtYThjYi1kYzI0OTRkZjc1NDQuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.cqBK9ZSric91qct31u23_5mJjwwVI-CqxM5R4TreqwQ",
        "description": "Create the purrfect gaming look with your own killer kitty style",
    },
]

export default giftData;