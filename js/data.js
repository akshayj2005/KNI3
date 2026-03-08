const packageDetails = {
  'japan-cherry': {
    title: 'Cherry Blossom Discovery',
    destination: 'Japan',
    duration: '10 Days / 9 Nights',
    price: '$1,999',
    originalPrice: '$2,499',
    discount: '20% OFF',
    description: 'Experience the magical cherry blossom season in Japan. Visit Tokyo, Kyoto, and Osaka during the most beautiful time of year.',
    highlights: ['Tokyo highlights & Shibuya Crossing', 'Kyoto temple visits during sakura season', 'Traditional tea ceremony', 'Osaka food tour', 'Mount Fuji day trip', 'Traditional ryokan stay'],
    includes: ['9 nights accommodation', 'Daily breakfast', 'Airport transfers', 'JR Pass (7 days)', 'English-speaking guide', 'All entrance fees'],
    gradient: 'linear-gradient(135deg, #ffb6c1 0%, #ff69b4 100%)',
    image: 'assets/images/japan_cherry_blossom.png'
  },
  'india-holi': {
    title: 'Festival of Colors Experience',
    destination: 'India',
    duration: '8 Days / 7 Nights',
    price: '$1,299',
    originalPrice: '',
    discount: '',
    description: 'Celebrate Holi, the festival of colors, in Rajasthan. Experience authentic Indian culture and traditions with local families.',
    highlights: ['Holi celebration in Jaipur', 'Udaipur lake palace visit', 'Desert safari in Pushkar', 'Local family dinner', 'Traditional dance performance', 'Elephant sanctuary visit'],
    includes: ['7 nights accommodation', 'All meals', 'Airport transfers', 'Private vehicle', 'English-speaking guide', 'Holi celebration materials'],
    gradient: 'linear-gradient(135deg, #ff6b6b 0%, #ffd93d 50%, #6bcb77 100%)',
    image: 'assets/images/india_holi.png'
  },
  'tokyo-kyoto': {
    title: 'Tokyo to Kyoto Discovery',
    destination: 'Japan',
    duration: '8 Days / 7 Nights',
    price: '$1,899',
    originalPrice: '',
    discount: '',
    description: 'The perfect introduction to Japan. Experience ultramodern Tokyo and ancient Kyoto in one comprehensive journey.',
    highlights: ['Tokyo city exploration', 'Bullet train experience', 'Kyoto temples & shrines', 'Nara deer park', 'Geisha district walk', 'Sushi making class'],
    includes: ['7 nights accommodation', 'Daily breakfast', 'Airport transfers', 'JR Pass (7 days)', 'English-speaking guide', 'All entrance fees'],
    gradient: 'linear-gradient(135deg, #ff6b6b 0%, #ff8e8e 100%)',
    image: 'assets/images/japan_hero.png'
  },
  'golden-triangle': {
    title: 'Golden Triangle Explorer',
    destination: 'India',
    duration: '6 Days / 5 Nights',
    price: '$1,199',
    originalPrice: '',
    discount: '',
    description: 'India\'s most iconic destinations in one trip. Visit Delhi, Agra (Taj Mahal), and Jaipur (Pink City).',
    highlights: ['Taj Mahal at sunrise', 'Delhi heritage walk', 'Jaipur palace tour', 'Local bazaar shopping', 'Traditional dinner', 'Elephant ride at Amber Fort'],
    includes: ['5 nights accommodation', 'Daily breakfast', 'Airport transfers', 'Private AC vehicle', 'English-speaking guide', 'All entrance fees'],
    gradient: 'linear-gradient(135deg, #ff9a56 0%, #ffb07a 100%)',
    image: 'assets/images/india_hero.png'
  },
  'japan-alps': {
    title: 'Japanese Alps Adventure',
    destination: 'Japan',
    duration: '10 Days / 9 Nights',
    price: '$2,499',
    originalPrice: '',
    discount: '',
    description: 'Mountain villages, hot springs, and stunning alpine scenery in the heart of Japan.',
    highlights: ['Shirakawa-go unique architecture', 'Old town Takayama', 'Kanazawa Kenrokuen garden', 'Snow monkey park visit', 'Matsumoto castle', 'Alpine route exploration'],
    includes: ['9 nights accommodation', 'Daily breakfast', 'Airport transfers', 'English-speaking guide', 'Premium transport'],
    gradient: 'linear-gradient(135deg, #4ecdc4 0%, #6dd5ce 100%)',
    image: 'assets/images/japan_alps.png'
  },
  'kerala': {
    title: 'Kerala Backwater Bliss',
    destination: 'India',
    duration: '7 Days / 6 Nights',
    price: '$1,399',
    originalPrice: '',
    discount: '',
    description: 'Houseboat stays, Ayurveda retreats, and tropical paradise in God\'s Own Country.',
    highlights: ['Backwater houseboat cruise', 'Munnar tea gardens', 'Thekkady spice plantation', 'Kathakali performance', 'Fort Kochi heritage walk', 'Varkala beach sunset'],
    includes: ['6 nights accommodation', 'All meals on houseboat', 'Airport transfers', 'English-speaking guide', 'Yoga sessions'],
    gradient: 'linear-gradient(135deg, #6bcb77 0%, #8fd694 100%)',
    image: 'assets/images/kerala.png'
  }
};

const blogPosts = [
  {
    id: 'cherry-blossom-guide',
    title: "Complete Guide to Japan's Cherry Blossom Season 2025",
    category: 'Japan',
    date: 'March 15, 2025',
    readTime: '10 min',
    excerpt: 'Everything you need to know about planning your sakura viewing trip - best dates, locations, and insider tips from our Japan experts.',
    image: 'assets/images/japan_cherry_blossom.png',
    featured: true
  },
  {
    id: 'kyoto-temples',
    title: 'Top 10 Hidden Temples in Kyoto',
    category: 'Japan',
    date: 'Feb 28, 2025',
    readTime: '5 min',
    excerpt: "Discover peaceful temples away from the crowds that even many locals don't know about.",
    image: 'assets/images/japan_hero.png',
    featured: false
  },
  {
    id: 'indian-street-food',
    title: "A Foodie's Guide to Indian Street Food",
    category: 'India',
    date: 'Feb 20, 2025',
    readTime: '7 min',
    excerpt: 'From Delhi\'s Chandni Chowk to Mumbai\'s beach stalls - the ultimate street food journey.',
    image: 'assets/images/india_holi.png',
    featured: false
  }
];
