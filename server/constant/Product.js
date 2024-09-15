const products = [
    { 
        id: 'game1',
        url: 'https://tinyurl.com/7jashvx2', // Cover image URL
        
        title: {
            shortTitle: 'Action',
            longTitle: 'Black Myth: Wukong'
        }, 
        price: {
            mrp: 4999,
            cost: 3999,
            discount: '20%'
        },
        
        discount: '20% Off', 
        tagline: 'Award-Winning Game'
    },
    { 
        id: 'game2',
        url: 'https://tinyurl.com/mt8fe35m',

        title: {
            shortTitle: 'Adventure',
            longTitle: 'Ratchet & Clank: Rift Apart'
        },
        price: {
            mrp: 4999,
            cost: 3999,
            discount: '20%'
        },
        description: 'Embark on an interdimensional adventure with Ratchet and Clank. Experience stunning graphics and innovative gameplay in this exciting new chapter.',
        discount: '20% Off', 
        tagline: 'Game of the Year'
    },
    { 
        id: 'game3',
        url: 'https://tinyurl.com/epvt8khu',
       
        title: {
            shortTitle: 'RPG',
            longTitle: 'Final Fantasy VII Remake'
        }, 
        price: {
            mrp: 3999,
            cost: 3499,
            discount: '12%'
        },
        description: 'Dive into the world of Midgar in this beautifully remade classic RPG. Enjoy modernized gameplay and stunning visuals in the beloved Final Fantasy VII.',
        discount: '12% Off', 
        tagline: 'Must-Play RPG'
    },
    { 
        id: 'game4',
        url: 'https://tinyurl.com/24bh8vhy',
        
        title: {
            shortTitle: 'Shooter',
            longTitle: 'Call of Duty: Black Ops Cold War'
        }, 
        price: {
            mrp: 5999,
            cost: 4999,
            discount: '17%'
        },
        description: 'Experience the intense action of Cold War espionage in this latest installment of Call of Duty. Engage in high-stakes missions and multiplayer battles.',
        discount: '17% Off', 
        tagline: 'Top Shooter Game'
    },
    { 
        id: 'game5',
        url: 'https://image.api.playstation.com/vulcan/ap/rnd/202407/1814/07a6fda04cc8874d465605538724103f78e3f4deeede69d3.png?w=780&thumb=false',
        
        title: {
            shortTitle: 'Sports',
            longTitle: 'FC 25'
        }, 
        price: {
            mrp: 3499,
            cost: 2999,
            discount: '14%'
        },
        description: 'Get into the action with Fc 25. Enjoy realistic gameplay, updated teams, and all the excitement of the world’s most popular football game.',
        discount: '14% Off', 
        tagline: 'Ultimate Football Experience'
    }
];
// Top 10 Indie Games
 const indieGames = [
    { 
        id: 'indie1',
        url: 'https://image.api.playstation.com/cdn/EP1805/CUSA13285_00/DmwPWlU0468FbsjrtI92FhQz1xBYMoog.png?w=440&thumb=false',
        title: {
            shortTitle: 'Indie Adventure',
            longTitle: 'Hollow Knight'
        }, 
        price: {
            mrp: 1999,
            cost: 1499,
            discount: '25%'
        },
        description: 'Delve into a beautifully crafted world of insects and heroes. A must-play for platformer enthusiasts.',
        discount: '25% Off', 
        tagline: 'Critically Acclaimed Indie'
    },
    { 
        id: 'indie2',
        url: 'https://tinyurl.com/bdf78evv',
        title: {
            shortTitle: 'Puzzle',
            longTitle: 'The Witness'
        }, 
        price: {
            mrp: 2499,
            cost: 1999,
            discount: '20%'
        },
        description: 'Explore a mysterious island and solve complex puzzles in this award-winning indie game.',
        discount: '20% Off', 
        tagline: 'Mind-Bending Puzzles'
    },
    { 
        id: 'indie3',
        url: 'https://image.api.playstation.com/vulcan/ap/rnd/202406/2411/882f1b8d78ecb127db0806d7ed2993bbe74c686d4cf6b7b5.png?w=440&thumb=false',
        title: {
            shortTitle: 'Indie Essentials',
            longTitle: 'Walking Simulators '
        }, 
        price: {
            mrp: 2499,
            cost: 1664,
            discount: '20%'
        },
        description: 'Explore a mysterious island and solve complex puzzles in this award-winning indie game.',
        discount: '20% Off', 
        tagline: 'Mind-Bending Puzzles'
    },
    { 
        id: 'indie4',
        url: 'https://image.api.playstation.com/vulcan/ap/rnd/202402/2913/85cdd383f78812974826041bdd8a254d7852e11734ac3b6b.png?w=440&thumb=false',
        title: {
            shortTitle: 'Puzzle',
            longTitle: 'Chill Games'
        }, 
        price: {
            mrp: 2499,
            cost: 299,
            discount: '20%'
        },
        description: 'Explore a mysterious island and solve complex puzzles in this award-winning indie game.',
        discount: '20% Off', 
        tagline: 'Mind-Bending Puzzles'
    },
    { 
        id: 'indie5',
        url: 'https://image.api.playstation.com/vulcan/ap/rnd/202006/1221/Cv8bHzZmlWVYh4bUjuduf04T.png?w=440&thumb=false',
        title: {
            shortTitle: 'Puzzle',
            longTitle: 'Indiecalypse'
        }, 
        price: {
            mrp: 2499,
            cost: 999,
            discount: '20%'
        },
        description: 'Explore a mysterious island and solve complex puzzles in this award-winning indie game.',
        discount: '20% Off', 
        tagline: 'Mind-Bending Puzzles'
    }
   
];

// Pre-orders
 const preOrders = [
    { 
        id: 'preorder1',
        url: 'https://image.api.playstation.com/vulcan/ap/rnd/202108/0410/0Jz6uJLxOK7JOMMfcfHFBi1D.png?w=440&thumb=false',
        title: {
            shortTitle: 'Action RPG',
            longTitle: 'Elden Ring'
        }, 
        price: {
            mrp: 5999,
            cost: 5499,
            discount: '8%'
        },
        description: 'Pre-order the most anticipated action RPG of the year and get exclusive bonuses!',
        discount: '8% Off', 
        tagline: 'Pre-Order Bonus Included'
    },
    { 
        id: 'preorder2',
        url: 'https://image.api.playstation.com/vulcan/ap/rnd/202409/0315/c8dae7364369804f5f4e954fe93aea4f965c1d4edc9f06d6.png?w=440&thumb=false',
        title: {
            shortTitle: 'Shooter',
            longTitle: 'Overwatch 2'
        }, 
        price: {
            mrp: 4999,
            cost: 4599,
            discount: '10%'
        },
        description: 'Secure your copy of Overwatch 2 with exclusive pre-order skins and bonuses.',
        discount: '10% Off', 
        tagline: 'Pre-Order and Get Exclusive Skins'
    },
    { 
        id: 'preorder3',
        url: 'https://image.api.playstation.com/vulcan/ap/rnd/202304/1016/47becbe467e18575f71429abbaec9af707865744b825f34d.png?w=440&thumb=false',
        title: {
            shortTitle: 'Open World',
            longTitle: 'Starfield'
        }, 
        price: {
            mrp: 6999,
            cost: 6499,
            discount: '7%'
        },
        description: 'Embark on an epic journey across the stars in Bethesda\'s latest open-world RPG. Pre-order now and receive exclusive in-game content.',
        discount: '7% Off', 
        tagline: 'Explore the Universe'
    },
    { 
        id: 'preorder4',
        url: 'https://image.api.playstation.com/vulcan/ap/rnd/202202/2806/wpHT6JXmOA9iECLZKRPRvt0U.png?w=440&thumb=false',
        title: {
            shortTitle: 'Racing',
            longTitle: 'Gran Turismo 7'
        }, 
        price: {
            mrp: 4999,
            cost: 4599,
            discount: '8%'
        },
        description: 'Get ready to hit the tracks in the most realistic racing simulator ever created. Pre-order for exclusive cars and tracks.',
        discount: '8% Off', 
        tagline: 'Ultimate Racing Experience'
    },
    { 
        id: 'preorder5',
        url: 'https://image.api.playstation.com/vulcan/ap/rnd/202208/0921/dR9KJAKDW2izPbptHQbh3rnj.png?w=440&thumb=falsej',
        title: {
            shortTitle: 'Fantasy RPG',
            longTitle: 'Hogwarts Legacy'
        }, 
        price: {
            mrp: 5999,
            cost: 5499,
            discount: '8%'
        },
        description: 'Return to the wizarding world and carve your own legacy at Hogwarts. Pre-order for exclusive in-game items and early access.',
        discount: '8% Off', 
        tagline: 'Wizarding World Awaits'
    }
    
];

// Demos
const demos = [
    { 
        id: 'demo1',
        url: 'https://image.api.playstation.com/vulcan/ap/rnd/202408/2320/3776f025d77548c76e0a78006ea7d26c59e1660024c7cae5.png?w=440&thumb=false',
        title: {
            shortTitle: 'Adventure',
            longTitle: 'Life is Strange: True Colors'
        }, 
        price: {
            mrp: 0, // Demos are usually free
            cost: 0,
            discount: '100%'
        },
        description: 'Try the first chapter for free and discover the mystery.',
        discount: 'Free Demo', 
        tagline: 'Play the Free Demo Now'
    },
    { 
        id: 'demo2',
        url: 'https://image.api.playstation.com/vulcan/ap/rnd/202406/0712/dfee7dde1caed5e101e23f22f865d97d6dad8dfe8eebce24.png?w=440&thumb=false',
        title: {
            shortTitle: 'Horror',
            longTitle: 'Resident Evil Village'
        }, 
        price: {
            mrp: 0,
            cost: 0,
            discount: '100%'
        },
        description: 'Get a taste of the terror with the free demo of Resident Evil Village.',
        discount: 'Free Demo', 
        tagline: 'Experience the Horror for Free'
    },
    { 
        id: 'demo3',
        url: 'https://image.api.playstation.com/vulcan/ap/rnd/202103/1615/94z8atr9sYHlDLWqZqM2CiC4.png?w=440&thumb=false',
        title: {
            shortTitle: 'Platformer',
            longTitle: 'Ori and the Will of the Wisps'
        }, 
        price: {
            mrp: 0, 
            cost: 0,
            discount: '100%'
        },
        description: 'Play the free demo of this visually stunning platformer and experience the heartfelt journey of Ori.',
        discount: 'Free Demo', 
        tagline: 'A Visual Masterpiece'
    },
    { 
        id: 'demo4',
        url: 'https://image.api.playstation.com/vulcan/ap/rnd/202309/2912/a1066329a4165e89ce5c7258634bdc402d3bfdb39db8fe4f.png?w=440&thumb=false',
        title: {
            shortTitle: 'Puzzle Adventure',
            longTitle: 'Little Nightmares II'
        }, 
        price: {
            mrp: 0,
            cost: 0,
            discount: '100%'
        },
        description: 'Dive into the eerie world of Little Nightmares II with this free demo and get a taste of the thrilling puzzle adventure.',
        discount: 'Free Demo', 
        tagline: 'Explore the Unknown'
    },
    { 
        id: 'demo5',
        url: 'https://image.api.playstation.com/vulcan/ap/rnd/202010/0100/iLBYSuHyeGG5CVXTkSm4MKTo.png?w=440&thumb=false',
        title: {
            shortTitle: 'Survival Horror',
            longTitle: 'The Evil Within 2'
        }, 
        price: {
            mrp: 0,
            cost: 0,
            discount: '100%'
        },
        description: 'Experience the terror of The Evil Within 2 in this free demo. Get a glimpse of the survival horror that awaits.',
        discount: 'Free Demo', 
        tagline: 'Can You Survive?'
    }
   
];

module.exports={products,indieGames,preOrders,demos};

