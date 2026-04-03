export interface ProductMall {
  name: string;
  price: string;
  isCheapest: boolean;
  icon: string;
  url: string;
  score?: number;
  clicks?: number;
}

export interface Product {
  id: string;
  title: string;
  name: string;
  price: string;
  category: string;
  img: string;
  tag: string;
  description: string;
  features: string[];
  sizes: string[];
  malls: ProductMall[];
  purchaseUrl: string;
  lastUpdated?: string;
}

export const productData: Record<string, Product> = {
  'essential-01': {
    id: 'essential-01',
    title: '라라 디바즈 초경량 메쉬 댄스화',
    name: '라라 디바즈 초경량 메쉬 댄스화',
    price: '26,400',
    category: '신발',
    img: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=800',
    tag: '판매 1위',
    description: '통기성이 뛰어난 메쉬 소재와 충격 흡수 에어쿠션으로 발이 편안합니다. 2026년 상반기 전체 판매 1위 모델입니다.',
    features: ["220g 초경량 설계", "에어쿠션 충격 흡수", "메쉬 소재 통기성", "유연한 라텍스 밑창"],
    sizes: ['225', '230', '235', '240', '245', '250', '255'],
    malls: [
      { name: '쿠팡 로켓', price: '₩26,400', isCheapest: true, icon: '🚀', url: 'https://www.coupang.com/np/search?q=라라디바즈+댄스화', score: 4.8, clicks: 14500 },
      { name: '네이버 쇼핑', price: '₩28,500', isCheapest: false, icon: 'N', url: 'https://search.shopping.naver.com/search/all?query=라라디바즈+초경량+메쉬+댄스화', score: 4.9, clicks: 9200 }
    ],
    purchaseUrl: 'https://www.coupang.com/np/search?q=라라디바즈+댄스화'
  },
  'elite-pivot-02': {
    id: 'elite-pivot-02',
    title: '엘리트 에어 피벗 v2',
    name: '엘리트 에어 피벗 v2 (프리미엄 에디션)',
    price: '189,000',
    category: '신발',
    img: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=800',
    tag: 'PREMIUM',
    description: '라인댄스의 모든 무브먼트를 고려하여 설계되었습니다. 독자적인 \'Air-Pivot\' 기술로 회전 시 무릎 부담을 최소화하며, 프리미엄 옵시디언 가죽으로 격조 높은 스타일을 완성합니다.',
    features: ["Air-Pivot 회전 지원 기술", "프리미엄 옵시디언 가죽", "충격 분산 미드솔", "인체공학적 아치 서포트"],
    sizes: ['230', '235', '240', '245', '250', '255', '260'],
    malls: [
      { name: 'Capezio 공식', price: '₩189,000', isCheapest: true, icon: 'C', url: 'https://search.shopping.naver.com/search/all?query=Capezio+Elite+Air+Pivot', score: 4.9, clicks: 520 },
      { name: '신세계몰', price: '₩195,000', isCheapest: false, icon: 'S', url: 'https://search.shopping.naver.com/search/all?query=엘리트+에어+피벗+v2', score: 4.8, clicks: 310 }
    ],
    purchaseUrl: 'https://search.shopping.naver.com/search/all?query=Capezio+Elite+Air+Pivot'
  },
  'biten-01': {
    id: 'biten-01',
    title: '비텐 가벼운 라인댄스화',
    name: '비텐 가벼운 라인댄스화 (파우치 증정)',
    price: '24,800',
    category: '신발',
    img: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=800',
    tag: '실속 세트',
    description: '휴대용 전용 파우치를 증정하며, 가벼운 착화감과 심플한 디자인으로 선호도가 매우 높은 제품입니다.',
    features: ["전용 신발 파우치 증정", "통기성 캔버스 소재", "미끄럼 방지 고무창", "발볼 편한 설계"],
    sizes: ['230', '235', '240', '245', '250', '255'],
    malls: [
      { name: '네이버 쇼핑', price: '₩24,800', isCheapest: true, icon: 'N', url: 'https://search.shopping.naver.com/search/all?query=비텐+가벼운+라인댄스화', score: 4.8, clicks: 8300 },
      { name: '쿠팡 로켓', price: '₩26,200', isCheapest: false, icon: '🚀', url: 'https://www.coupang.com/np/search?q=비텐+라인댄스화', score: 4.7, clicks: 4100 }
    ],
    purchaseUrl: 'https://search.shopping.naver.com/search/all?query=비텐+가벼운+라인댄스화'
  },
  'allonge-01': {
    id: 'allonge-01',
    title: '알롱제(Allonge) 댄스화',
    name: '알롱제(Allonge) 전문 강사 추천 댄스화',
    price: '32,900',
    category: '신발',
    img: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=800',
    tag: '전문가 추천',
    description: '댄스 전문 브랜드 알롱제의 스테디셀러입니다. 발의 아치를 완벽하게 지지하여 오랜 시간 연습에도 무리가 없습니다.',
    features: ["아치 서포트 설계", "최고급 인조가죽 메쉬", "충격 흡수 이중창", "강사진 선호 1위"],
    sizes: ['225', '230', '235', '240', '245', '250', '255', '260'],
    malls: [
      { name: '네이버 쇼핑', price: '₩32,900', isCheapest: true, icon: 'N', url: 'https://search.shopping.naver.com/search/all?query=알롱제+댄스화', score: 5.0, clicks: 12000 },
      { name: '쿠팡 로켓', price: '₩35,000', isCheapest: false, icon: '🚀', url: 'https://www.coupang.com/np/search?q=알롱제+댄스화', score: 4.9, clicks: 3400 }
    ],
    purchaseUrl: 'https://search.shopping.naver.com/search/all?query=알롱제+댄스화'
  },
  'protection-01': {
    id: 'protection-01',
    title: '리커버리 360 무릎 보호대',
    name: '리커버리 360 충격완충 무릎 보호대',
    price: '34,000',
    category: '용품',
    img: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=800',
    tag: '부상 방지',
    description: '무릎 관절을 360도로 안정적으로 잡아주며, 격렬한 스텝 시 전달되는 충격을 최소화합니다.',
    features: ["실리콘 패드 내장", "고탄력 통기성 원단", "미끄럼 방지 설계", "KPS 인증 완료"],
    sizes: ['M', 'L', 'XL'],
    malls: [
      { name: '쿠팡 로켓', price: '₩34,000', isCheapest: true, icon: '🚀', url: 'https://www.coupang.com/np/search?q=무릎+보호대+충격완충', score: 4.9, clicks: 5200 },
      { name: '네이버 쇼핑', price: '₩36,500', isCheapest: false, icon: 'N', url: 'https://search.shopping.naver.com/search/all?query=실리콘+패드+무릎+보호대', score: 4.7, clicks: 2100 }
    ],
    purchaseUrl: 'https://www.coupang.com/np/search?q=무릎+보호대+충격완충'
  },
  'bag-01': {
    id: 'bag-01',
    title: '프리미엄 댄스용 다용도 가방',
    name: '프리미엄 댄스용 다용도 가방 (신발 포켓)',
    price: '28,000',
    category: '의류/가방',
    img: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=800',
    tag: '실용성 최고',
    description: '신발 수납 공간이 분리되어 있어 위생적이며, 넉넉한 수납 공간으로 연습복과 물통 등을 모두 담을 수 있습니다.',
    features: ["신발 전용 수납칸", "생활 방수 원단", "어깨 부담 경감 스트랩", "USB 충전 포트"],
    sizes: ['One Size'],
    malls: [
      { name: '네이버 쇼핑', price: '₩28,000', isCheapest: true, icon: 'N', url: 'https://search.shopping.naver.com/search/all?query=댄스+가방+신발수납', score: 4.8, clicks: 6100 },
      { name: '쿠팡 로켓', price: '₩29,900', isCheapest: false, icon: '🚀', url: 'https://www.coupang.com/np/search?q=스포츠+가방+신발주머니', score: 4.6, clicks: 2300 }
    ],
    purchaseUrl: 'https://search.shopping.naver.com/search/all?query=댄스+가방+신발수납'
  },
  'top-01': {
     id: 'top-01',
     title: '여성 숄더 망사 플라워 센슈얼 탑',
     name: '여성 숄더 망사 플라워 센슈얼 탑',
     price: '18,800',
     category: '의류/가방',
     img: 'https://images.unsplash.com/photo-1516575334481-f8528e946824?q=80&w=800',
     tag: '인기 상품',
     description: '어깨 라인의 섬세한 망사 디테일과 플라워 패턴이 돋보이는 화려한 댄스 상의입니다.',
     features: ["매쉬 망사 통기성", "플라워 포인트 디자인", "신축성 우수", "무대/연습 겸용"],
     sizes: ['S', 'M', 'L', 'XL'],
     malls: [
       { name: '네이버 쇼핑', price: '₩18,800', isCheapest: true, icon: 'N', url: 'https://search.shopping.naver.com/search/all?query=여성+망사+댄스+상의+플라워' }
     ],
     purchaseUrl: 'https://search.shopping.naver.com/search/all?query=여성+망사+댄스+상의+플라워'
  },
  'skirt-01': {
    id: 'skirt-01',
    title: '라인댄스 수술 테슬 스커트',
    name: '라인댄스 수술 테슬 스커트 (블랙)',
    price: '24,000',
    category: '의류/가방',
    img: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800',
    tag: '베스트셀러',
    description: '스텝을 밟을 때마다 찰랑거리는 수술이 리듬감을 극대화해주는 라인댄스 필수 스커트입니다.',
    features: ["고급 태슬 수술", "밴딩 허리 처리", "속바지 일체형", "풍성한 움직임"],
    sizes: ['Free'],
    malls: [
      { name: '네이버 쇼핑', price: '₩24,000', isCheapest: true, icon: 'N', url: 'https://search.shopping.naver.com/search/all?query=라인댄스+수술+테슬+스커트' }
    ],
    purchaseUrl: 'https://search.shopping.naver.com/search/all?query=라인댄스+수술+테슬+스커트'
  },
  'pants-01': {
    id: 'pants-01',
    title: '에슬레틱 플레어 치마바지',
    name: '에슬레틱 플레어 치마바지 (연습용)',
    price: '12,900',
    category: '의류/가방',
    img: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=800',
    tag: '가성비 템',
    description: '가장 많은 댄서들이 선택하는 기본형 치마바지로, 활동성과 가성비를 동시에 잡았습니다.',
    features: ["스커트 레이어링", "신축성 뛰어난 소재", "부드러운 허리밴드", "Y존 커버 보정"],
    sizes: ['S', 'M', 'L', 'XL'],
    malls: [
      { name: '네이버 쇼핑', price: '₩12,900', isCheapest: true, icon: 'N', url: 'https://search.shopping.naver.com/search/all?query=댄스+치마바지+에슬레틱+플레어' }
    ],
    purchaseUrl: 'https://search.shopping.naver.com/search/all?query=댄스+치마바지+에슬레틱+플레어'
  }
};

export const products = Object.values(productData);
