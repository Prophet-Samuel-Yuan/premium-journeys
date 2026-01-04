export interface Itinerary {
  id: string;
  slug: string;
  titleCn: string;
  titleEn: string;
  descriptionCn: string;
  descriptionEn: string;
  duration: string;
  image: string;
  category: 'personal' | 'team-building' | 'business';
  highlights?: string[];
  price?: string;
}

export const itineraries: Itinerary[] = [
  // Personal Travel
  {
    id: "baikal-ice",
    slug: "baikal-ice-tour",
    titleCn: "贝加尔湖6日蓝冰之旅",
    titleEn: "6-Day Lake Baikal Blue Ice Tour",
    descriptionCn: "冬季贝加尔湖蓝冰奇观之旅",
    descriptionEn: "Experience the blue ice wonders of Lake Baikal in winter.",
    duration: "6 Days",
    image: "baikal-ice",
    category: "personal",
    highlights: ["Blue ice formations", "Lake Baikal", "Winter photography", "Russian culture"],
  },
  {
    id: "kenya-safari",
    slug: "kenya-tanzania-safari",
    titleCn: "肯尼亚 & 坦桑尼亚豪华之旅",
    titleEn: "Luxury Kenya & Tanzania Tour",
    descriptionCn: "奢华野生动物园体验，见证非洲大迁徙",
    descriptionEn: "Luxury safari witnessing the Great Migration in Africa.",
    duration: "10 Days",
    image: "kenya-safari",
    category: "personal",
    highlights: ["Great Migration", "Safari lodges", "Wildlife photography", "Masai culture"],
  },
  {
    id: "huizhou",
    slug: "huizhou-landscapes",
    titleCn: "中国徽州山水3日游",
    titleEn: "3-Day Huizhou Landscapes Tour",
    descriptionCn: "漫步徽州古村，欣赏山水画卷",
    descriptionEn: "Stroll through Huizhou villages amid picturesque landscapes.",
    duration: "3 Days",
    image: "huizhou",
    category: "personal",
    highlights: ["Ancient villages", "Traditional architecture", "Tea culture", "Scenic mountains"],
  },
  {
    id: "egypt",
    slug: "egypt-discovery",
    titleCn: "埃及11日探索之旅",
    titleEn: "11-Day Egypt Discovery Tour",
    descriptionCn: "踏访金字塔与尼罗河，感受古埃及文明的神秘魅力",
    descriptionEn: "Discover the mysteries of ancient Egypt from pyramids to the Nile.",
    duration: "11 Days",
    image: "egypt-pyramids",
    category: "personal",
    highlights: ["Pyramids of Giza", "Nile cruise", "Valley of Kings", "Ancient temples"],
  },
  {
    id: "morocco",
    slug: "morocco-enchanting",
    titleCn: "摩洛哥12日迷情之旅",
    titleEn: "12-Day Enchanting Morocco Tour",
    descriptionCn: "漫步马拉喀什，探索撒哈拉沙漠，品味摩洛哥异域风情",
    descriptionEn: "Journey through Marrakech and the Sahara, embracing Morocco's exotic charm.",
    duration: "12 Days",
    image: "morocco",
    category: "personal",
    highlights: ["Marrakech medina", "Sahara desert", "Blue city", "Moroccan cuisine"],
  },
  {
    id: "greece",
    slug: "greece-new-year",
    titleCn: "希腊9日新春之旅",
    titleEn: "9-Day Greek New Year Tour",
    descriptionCn: "新年畅游爱琴海与雅典古迹，体验希腊神话浪漫",
    descriptionEn: "Celebrate the New Year exploring the Aegean and Athens' ancient wonders.",
    duration: "9 Days",
    image: "greece",
    category: "personal",
    highlights: ["Santorini", "Athens Acropolis", "Greek islands", "Mediterranean cuisine"],
  },
  // Team Building
  {
    id: "team-retreat",
    slug: "corporate-team-retreat",
    titleCn: "企业团队建设之旅",
    titleEn: "Corporate Team Building Retreat",
    descriptionCn: "增强团队凝聚力的定制化团建活动",
    descriptionEn: "Customized team activities designed to strengthen team cohesion.",
    duration: "3-5 Days",
    image: "team-building",
    category: "team-building",
    highlights: ["Team activities", "Leadership workshops", "Outdoor adventures", "Networking events"],
  },
  {
    id: "outdoor-adventure",
    slug: "outdoor-adventure-team",
    titleCn: "户外探险团建",
    titleEn: "Outdoor Adventure Team Building",
    descriptionCn: "在自然中挑战自我，增进团队默契",
    descriptionEn: "Challenge yourselves in nature and build team chemistry.",
    duration: "2-4 Days",
    image: "huizhou",
    category: "team-building",
    highlights: ["Hiking trails", "Water sports", "Camping", "Team challenges"],
  },
  {
    id: "cultural-immersion",
    slug: "cultural-immersion-team",
    titleCn: "文化沉浸式团建",
    titleEn: "Cultural Immersion Team Building",
    descriptionCn: "通过文化体验深化团队理解与合作",
    descriptionEn: "Deepen team understanding through cultural experiences.",
    duration: "3-5 Days",
    image: "morocco",
    category: "team-building",
    highlights: ["Cultural workshops", "Local traditions", "Art experiences", "Culinary classes"],
  },
  // Business Visit
  {
    id: "saudi-tech",
    slug: "saudi-tech-conference",
    titleCn: "沙特全球科技大会",
    titleEn: "Saudi Global Technology Conference",
    descriptionCn: "参与沙特全球科技大会，探索未来科技趋势",
    descriptionEn: "Join the Saudi Global Technology Conference to explore future tech trends.",
    duration: "5 Days",
    image: "business-conference",
    category: "business",
    highlights: ["Tech conference", "Industry networking", "Innovation showcase", "Business meetings"],
  },
  {
    id: "china-business",
    slug: "china-business-delegation",
    titleCn: "中国商务考察团",
    titleEn: "China Business Delegation Tour",
    descriptionCn: "深入了解中国市场，拓展商业机会",
    descriptionEn: "Gain insights into the Chinese market and expand business opportunities.",
    duration: "7 Days",
    image: "team-building",
    category: "business",
    highlights: ["Factory visits", "Trade meetings", "Market research", "Government liaisons"],
  },
  {
    id: "global-summit",
    slug: "global-industry-summit",
    titleCn: "全球行业峰会考察",
    titleEn: "Global Industry Summit Visit",
    descriptionCn: "参加顶级行业峰会，结识全球商业领袖",
    descriptionEn: "Attend top industry summits and connect with global business leaders.",
    duration: "4-6 Days",
    image: "business-conference",
    category: "business",
    highlights: ["Industry summits", "Executive networking", "Keynote sessions", "VIP access"],
  },
];

export const getItineraryBySlug = (slug: string): Itinerary | undefined => {
  return itineraries.find((item) => item.slug === slug);
};

export const getItinerariesByCategory = (category: Itinerary['category']): Itinerary[] => {
  return itineraries.filter((item) => item.category === category);
};
