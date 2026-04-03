export interface ProductMall {
  name: string;
  price: string;
  isCheapest: boolean;
  icon: string;
  url: string;
}

export interface Product {
  id: string;
  title: string;
  name?: string; // For detail page compatibility
  price: string;
  category: string;
  img: string;
  tag: string;
  description: string;
  features?: string[];
  sizes?: string[];
  malls?: ProductMall[];
  purchaseUrl?: string; // Shortcut to the best mall
  lastUpdated?: string;
}

export const products: Product[] = [
  // 상의 (Tops)
  {
    id: 'top-01',
    title: '여성 숄더 망사 플라워 센슈얼 탑',
    name: '여성 숄더 망사 플라워 센슈얼 탑',
    price: '18,800',
    category: '상의',
    img: 'https://images.unsplash.com/photo-1516575334481-f8528e946824?q=80&w=800&auto=format&fit=crop',
    tag: '인기 급상승',
    description: '어깨 라인의 섬세한 망사 디테일과 플라워 패턴이 돋보이는 화려한 댄스 상의입니다.',
    features: ["매쉬 망사 통기성", "플라워 포인트 디자인", "신축성 우수", "무대/연습 겸용"],
    sizes: ['S', 'M', 'L', 'XL'],
    malls: [
      { name: '네이버 쇼핑', price: '₩18,800', isCheapest: true, icon: 'N', url: 'https://cr.shopping.naver.com/adcr?nvMid=89078372765' }
    ],
    purchaseUrl: 'https://cr.shopping.naver.com/adcr?nvMid=89078372765',
    lastUpdated: '2026-04-01'
  },
  {
    id: 'top-02',
    title: '데일리 셔링 댄스 피트 티셔츠',
    name: '데일리 셔링 댄스 피트 티셔츠',
    price: '17,900',
    category: '상의',
    img: 'https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?q=80&w=800&auto=format&fit=crop',
    tag: '기획 특가',
    description: '옆선 셔링 디테일로 허리 라인을 슬림하게 잡아주며, 격렬한 동작에도 흐트러짐 없는 피팅감을 제공합니다.',
    features: ["사이드 셔링 포인트", "부드러운 스판 소재", "비침 방지 가공", "슬림핏 디자인"],
    sizes: ['Free'],
    malls: [
      { name: '네이버 쇼핑', price: '₩17,900', isCheapest: true, icon: 'N', url: 'https://cr.shopping.naver.com/adcr?nvMid=86255440207' }
    ],
    purchaseUrl: 'https://cr.shopping.naver.com/adcr?nvMid=86255440207',
    lastUpdated: '2026-04-01'
  },
  {
    id: 'top-03',
    title: '모네르 크리스탈 포인트 무대 상의',
    name: '모네르 크리스탈 포인트 무대 상의',
    price: '45,000',
    category: '상의',
    img: 'https://images.unsplash.com/photo-1539109132314-347596ad99e1?q=80&w=800&auto=format&fit=crop',
    tag: 'PREMIUM',
    description: '고급스러운 크리스탈 장식이 무대 위에서 화려하게 빛나는 시니어 전용 무대복입니다.',
    features: ["크리스탈 수작업", "고급 벨벳 원단", "체형 보정 패턴", "국내 제작"],
    sizes: ['M', 'L', 'XL'],
    malls: [
      { name: '네이버 스마트스토어', price: '₩45,000', isCheapest: true, icon: 'N', url: 'https://shopping.naver.com/' },
      { name: '쿠팡 로켓', price: '₩48,500', isCheapest: false, icon: '🚀', url: 'https://www.coupang.com/' }
    ],
    purchaseUrl: 'https://shopping.naver.com/',
    lastUpdated: '2026-04-01'
  },
  {
    id: 'top-04',
    title: '쿨론 메쉬 연습용 라운드 티셔츠',
    name: '쿨론 메쉬 연습용 라운드 티셔츠',
    price: '12,500',
    category: '상의',
    img: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=800&auto=format&fit=crop',
    tag: '가성비 갑',
    description: '땀 흡수가 빠르고 건조가 빠른 쿨론 소재로 단체복으로 가장 많이 선호되는 실용적인 티셔츠입니다.',
    features: ["쿨론 기능성 소재", "뛰어난 통기성", "다양한 컬러", "세탁 후 변형 적음"],
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    malls: [
      { name: '쿠팡', price: '₩12,500', isCheapest: true, icon: '🚀', url: 'https://www.coupang.com/' }
    ],
    purchaseUrl: 'https://www.coupang.com/',
    lastUpdated: '2026-04-01'
  },

  // 전용 스커트 (Skirts)
  {
    id: 'skirt-01',
    title: '라인댄스 수술 테슬 스커트 (블랙)',
    name: '라인댄스 수술 테슬 스커트 (블랙)',
    price: '24,000',
    category: '전용 스커트',
    img: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop',
    tag: 'BEST SELLER',
    description: '스텝을 밟을 때마다 찰랑거리는 수술이 리듬감을 극대화해주는 라인댄스 필수 스커트입니다.',
    features: ["고급 태슬 수술", "밴딩 허리 처리", "속바지 일체형", "풍성한 움직임"],
    sizes: ['Free'],
    malls: [
      { name: '네이버 스토어', price: '₩24,000', isCheapest: true, icon: 'N', url: 'https://smartstore.naver.com/' }
    ],
    purchaseUrl: 'https://smartstore.naver.com/',
    lastUpdated: '2026-04-01'
  },
  {
    id: 'skirt-02',
    title: '프리미엄 3단 망사 볼륨 스커트',
    name: '프리미엄 3단 망사 볼륨 스커트',
    price: '31,900',
    category: '전용 스커트',
    img: 'https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?q=80&w=800&auto=format&fit=crop',
    tag: '화려함',
    description: '회전 동작 시 풍성하게 퍼지는 3단 망사 레이어로 무대를 압도하는 실루엣을 연출합니다.',
    features: ["풍성한 3단 레이어", "정전기 방지 처리", "가벼운 무게감", "무대용 적합"],
    sizes: ['Free', 'L'],
    malls: [
      { name: '네이버 쇼핑', price: '₩31,900', isCheapest: true, icon: 'N', url: 'https://cr.shopping.naver.com/adcr?nvMid=86659124207' }
    ],
    purchaseUrl: 'https://cr.shopping.naver.com/adcr?nvMid=86659124207',
    lastUpdated: '2026-04-01'
  },
  {
    id: 'skirt-03',
    title: '가성비 실크 터치 랩 스커트',
    name: '가성비 실크 터치 랩 스커트',
    price: '8,400',
    category: '전용 스커트',
    img: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=800&auto=format&fit=crop',
    tag: '최저가 도전',
    description: '가볍고 찰랑거리는 소재로 어떤 상의와도 잘 어울리는 기본형 랩 디자인 스커트입니다.',
    features: ["실크 터치 공법", "사이즈 조절 끈", "빠른 건조", "다양한 컬러"],
    sizes: ['S', 'M', 'L'],
    malls: [
      { name: '네이버 쇼핑', price: '₩8,400', isCheapest: true, icon: 'N', url: 'https://cr.shopping.naver.com/adcr?nvMid=84308232995' }
    ],
    purchaseUrl: 'https://cr.shopping.naver.com/adcr?nvMid=84308232995',
    lastUpdated: '2026-04-01'
  },
  {
    id: 'skirt-04',
    title: '벨벳 언밸런스 댄스 스커트',
    name: '벨벳 언밸런스 댄스 스커트',
    price: '35,000',
    category: '전용 스커트',
    img: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?q=80&w=800&auto=format&fit=crop',
    tag: '우아함',
    description: '고급스러운 벨벳 광택과 비대칭 디자인으로 무대 위에서 우아한 분위기를 연출해줍니다.',
    features: ["프리미엄 벨벳", "언밸런스 컷팅", "신축성 우수", "구김 방지 가공"],
    sizes: ['Free'],
    malls: [
      { name: '네이버 쇼핑', price: '₩35,000', isCheapest: true, icon: 'N', url: 'https://shopping.naver.com/' }
    ],
    purchaseUrl: 'https://shopping.naver.com/',
    lastUpdated: '2026-04-01'
  },

  // 연습용 바지 (Pants)
  {
    id: 'pants-01',
    title: '에슬레틱 플레어 치마바지 (연습용)',
    name: '에슬레틱 플레어 치마바지 (연습용)',
    price: '12,900',
    category: '연습용 바지',
    img: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=800&auto=format&fit=crop',
    tag: '국민 아이템',
    description: '가장 많은 댄서들이 선택하는 기본형 치마바지로, 활동성과 가성비를 동시에 잡았습니다.',
    features: ["스커트 레이어링", "신축성 뛰어난 소재", "부드러운 허리밴드", "Y존 커버 보정"],
    sizes: ['S', 'M', 'L', 'XL'],
    malls: [
      { name: '네이버 스토어', price: '₩12,900', isCheapest: true, icon: 'N', url: 'https://smartstore.naver.com/laladevaz/products/4819777174' }
    ],
    purchaseUrl: 'https://smartstore.naver.com/laladevaz/products/4819777174',
    lastUpdated: '2026-04-01'
  },
  {
    id: 'pants-02',
    title: '이지-무브 댄스 전용 7부 레깅스',
    name: '이지-무브 댄스 전용 7부 레깅스',
    price: '24,500',
    category: '연습용 바지',
    img: 'https://images.unsplash.com/photo-1483721310020-03333e577078?q=80&w=800&auto=format&fit=crop',
    tag: '활동성 강화',
    description: '압박감 없이 부드럽게 감싸주는 댄스 전용 소재로 제작되어 장시간 연습에도 쾌적합니다.',
    features: ["무봉제 편직 공법", "하이웨이스트 설계", "비침 없는 두께", "체형 보정 효과"],
    sizes: ['S', 'M', 'L'],
    malls: [
      { name: '네이버 쇼핑', price: '₩24,500', isCheapest: true, icon: 'N', url: 'https://smartstore.naver.com/' }
    ],
    purchaseUrl: 'https://smartstore.naver.com/',
    lastUpdated: '2026-04-01'
  },
  {
    id: 'pants-03',
    title: '와이드 스트레이트 핏 트레이닝 팬츠',
    name: '와이드 스트레이트 핏 트레이닝 팬츠',
    price: '29,000',
    category: '연습용 바지',
    img: 'https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?q=80&w=800&auto=format&fit=crop',
    tag: '편안함 끝판왕',
    description: '다리 라인을 길고 슬림하게 보여주며, 통기성이 우수한 소재의 와이드 연습 팬츠입니다.',
    features: ["와이드 핏 디자인", "고탄력 스판 소재", "비침 방지 안감", "이지 웨어 겸용"],
    sizes: ['M', 'L', 'XL'],
    malls: [
      { name: '쿠팡 로켓', price: '₩29,000', isCheapest: true, icon: '🚀', url: 'https://www.coupang.com/' }
    ],
    purchaseUrl: 'https://www.coupang.com/',
    lastUpdated: '2026-04-01'
  },

  // 관절/무릎 보호 (Care)
  {
    id: 'care-01',
    title: '잠스트 JK-밴드 (심플 슬개골 보호대)',
    name: '잠스트 JK-밴드 (심플 슬개골 보호대)',
    price: '28,000',
    category: '관절/무릎 보호',
    img: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=800&auto=format&fit=crop',
    tag: '시니어 추천',
    description: '무릎 아래를 가볍게 압박하여 슬개골의 부담을 줄여주는 일본 정통 스포츠 보호대 브랜드 제품입니다.',
    features: ["슬개골 집중 가압", "휴대성 우수", "땀 흡수 빠른 소재", "정품 보증"],
    sizes: ['S', 'M', 'L', 'LL'],
    malls: [
      { name: '네이버 브랜드스토어', price: '₩28,000', isCheapest: true, icon: 'N', url: 'https://shopping.naver.com/' }
    ],
    purchaseUrl: 'https://shopping.naver.com/',
    lastUpdated: '2026-04-01'
  },
  {
    id: 'care-02',
    title: '핏가드 실리콘 패드 무릎 보호대',
    name: '핏가드 실리콘 패드 무릎 보호대',
    price: '15,900',
    category: '관절/무릎 보호',
    img: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=800&auto=format&fit=crop',
    tag: '가성비 1위',
    description: '도넛형 실리콘 패드가 무릎을 안전하게 고정해주며, 신축성이 좋아 장시간 착용 시에도 편안합니다.',
    features: ["실리콘 패드 내장", "고탄력 니트 직조", "미끄럼 방지 실리콘", "세탁 가능"],
    sizes: ['M', 'L', 'XL'],
    malls: [
      { name: '쿠팡 로켓', price: '₩15,900', isCheapest: true, icon: '🚀', url: 'https://www.coupang.com/' }
    ],
    purchaseUrl: 'https://www.coupang.com/',
    lastUpdated: '2026-04-01'
  },
  {
    id: 'care-03',
    title: '고농축 마그네슘 리커버리 오일 (롤온)',
    name: '고농축 마그네슘 리커버리 오일 (롤온)',
    price: '21,000',
    category: '관절/무릎 보호',
    img: 'https://images.unsplash.com/photo-1612817288484-6f916006741a?q=80&w=800&auto=format&fit=crop',
    tag: '근육 이완',
    description: '운동 전후 뭉친 근육을 부드럽게 풀어주고 관절 피로를 덜어주는 프리미엄 마그네슘 오일입니다.',
    features: ["고농축 마그네슘", "바르기 편한 롤온", "천연 라벤더 향", "빠른 흡수속도"],
    sizes: ['50ml'],
    malls: [
      { name: '네이버 쇼핑', price: '₩21,000', isCheapest: true, icon: 'N', url: 'https://shopping.naver.com/' }
    ],
    purchaseUrl: 'https://shopping.naver.com/',
    lastUpdated: '2026-04-01'
  },
  {
    id: 'care-04',
    title: '논슬립 슈즈 그립 강화 스프레이',
    name: '논슬립 슈즈 그립 강화 스프레이',
    price: '14,000',
    category: '관절/무릎 보호',
    img: 'https://images.unsplash.com/photo-1626285861696-9f0be5a49c6d?q=80&w=800&auto=format&fit=crop',
    tag: '낙상 방지',
    description: '댄스 연습실 바닥에서 미끄러지는 것을 방지하여 무릎 및 허리 부상을 예방해줍니다.',
    features: ["강력한 접지력 확보", "슈즈 바닥 보호", "무독성 친환경", "미세 안개 분사"],
    sizes: ['150ml'],
    malls: [
      { name: '네이버 쇼핑', price: '₩14,000', isCheapest: true, icon: 'N', url: 'https://shopping.naver.com/' }
    ],
    purchaseUrl: 'https://shopping.naver.com/',
    lastUpdated: '2026-04-01'
  },

  // 전용화 (Shoes)
  {
    id: 'shoes-01',
    title: '라라 디바즈 초경량 메쉬 댄스화',
    name: '라라 디바즈 초경량 메쉬 댄스화',
    price: '16,250',
    category: '전용화',
    img: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=800&auto=format&fit=crop',
    tag: '입문자 베스트',
    description: '장시간 연습에도 발이 편안한 통기성 메쉬 소재의 가성비 No.1 라인댄스화입니다.',
    features: ["240g 초경량 설계", "에어쿠션 탑재", "통기성 메쉬 소재", "회전 특화 솔"],
    sizes: ['225', '230', '235', '240', '245', '250'],
    malls: [
      { name: 'G마켓', price: '₩16,250', isCheapest: true, icon: 'G', url: 'https://cr.shopping.naver.com/adcr?nvMid=56721577670' }
    ],
    purchaseUrl: 'https://cr.shopping.naver.com/adcr?nvMid=56721577670',
    lastUpdated: '2026-04-01'
  },
  {
    id: 'shoes-02',
    title: 'TS스포츠 알롱제 A1 라인댄스화',
    name: 'TS스포츠 알롱제 A1 라인댄스화',
    price: '28,900',
    category: '전용화',
    img: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=800&auto=format&fit=crop',
    tag: '스테디셀러',
    description: '한국인 발볼에 최적화된 너비와 뛰어난 충격 흡수 쿠션을 자랑하는 인기 제품입니다.',
    features: ["와이드 발볼 설계", "천연 라텍스 인솔", "국내 생산 가공", "미끄럼 방지"],
    sizes: ['230', '235', '240', '245', '250', '255'],
    malls: [
      { name: '네이버 쇼핑', price: '₩28,900', isCheapest: true, icon: 'N', url: 'https://smartstore.naver.com/ts_sport/products/5144883901' }
    ],
    purchaseUrl: 'https://smartstore.naver.com/ts_sport/products/5144883901',
    lastUpdated: '2026-04-01'
  },
  {
    id: 'shoes-03',
    title: '로시난테 라텍스 쿠션 댄스화',
    name: '로시난테 라텍스 쿠션 댄스화',
    price: '45,000',
    category: '전용화',
    img: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=800&auto=format&fit=crop',
    tag: '쿠션감 혁명',
    description: '고탄성 라텍스 쿠션이 이중으로 적용되어 무릎 통증이 있는 댄서들에게 강력 추천합니다.',
    features: ["이중 라텍스 쿠션", "최고급 합성 피혁", "회전 특화 밑창", "고급 마감 처리"],
    sizes: ['220', '225', '230', '235', '240', '245', '250'],
    malls: [
      { name: '네이버 쇼핑', price: '₩45,000', isCheapest: true, icon: 'N', url: 'https://shopping.naver.com/' }
    ],
    purchaseUrl: 'https://shopping.naver.com/',
    lastUpdated: '2026-04-01'
  },
  {
    id: 'shoes-04',
    title: '하이-테크 웨지 큐반 댄스화',
    name: '하이-테크 웨지 큐반 댄스화',
    price: '56,000',
    category: '전용화',
    img: 'https://images.unsplash.com/photo-1603808033192-082d6919d3e1?q=80&w=800&auto=format&fit=crop',
    tag: '안정적인 굽',
    description: '4cm의 안정적인 큐반 힐로 제작되어 회전 시 균형을 잘 잡아주며 무릎 무리를 줄였습니다.',
    features: ["4cm 큐반 힐", "와이드 안정 솔", "메모리폼 인솔", "항균 내피 적용"],
    sizes: ['230', '235', '240', '245', '250', '255', '260'],
    malls: [
      { name: '네이버 쇼핑', price: '₩56,000', isCheapest: true, icon: 'N', url: 'https://smartstore.naver.com/' }
    ],
    purchaseUrl: 'https://smartstore.naver.com/',
    lastUpdated: '2026-04-01'
  },

  // 가성비 세트 (Sets)
  {
    id: 'set-01',
    title: '입문자 스타터 3종 세트',
    name: '입문자 스타터 3종 세트',
    price: '39,900',
    category: '가성비 세트',
    img: 'https://images.unsplash.com/photo-1516512243958-9f3b562b320d?q=80&w=800&auto=format&fit=crop',
    tag: '기획 상품',
    description: '셔링 상의, 치마바지, 슈즈 보관백까지 입문자에게 꼭 필요한 3가지를 묶었습니다.',
    features: ["인기 상의 1종", "치마바지 1종", "댄스화 전용백", "할인된 세트가"],
    sizes: ['S', 'M', 'L', 'XL'],
    malls: [
      { name: '네이버 스마트스토어', price: '₩39,900', isCheapest: true, icon: 'N', url: 'https://shopping.naver.com/' }
    ],
    purchaseUrl: 'https://shopping.naver.com/',
    lastUpdated: '2026-04-01'
  },
  {
    id: 'set-02',
    title: '댄스화 관리 풀패키지',
    name: '댄스화 관리 풀패키지',
    price: '21,500',
    category: '가성비 세트',
    img: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=800&auto=format&fit=crop',
    tag: '꿀맛 보장',
    description: '슈즈 브러쉬와 논슬립 스프레이, 보관 가방까지 신발 수명을 늘려주는 필수 패키지입니다.',
    features: ["하드 와이어 브러쉬", "그립 강화 스프레이", "에어 플로우 가방", "개별 구매 대비 15% 할인"],
    sizes: ['One Size'],
    malls: [
      { name: '쿠팡 로켓', price: '₩21,500', isCheapest: true, icon: '🚀', url: 'https://www.coupang.com/' }
    ],
    purchaseUrl: 'https://www.coupang.com/',
    lastUpdated: '2026-04-01'
  },
  {
    id: 'set-03',
    title: '시니어 관절 건강 보호 세트',
    name: '시니어 관절 건강 보호 세트',
    price: '42,000',
    category: '가성비 세트',
    img: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=800&auto=format&fit=crop',
    tag: '시니어 강추',
    description: '무릎 보호대 1쌍과 마그네슘 리커버리 오일을 한 번에! 즐거운 댄스를 위해 관절을 먼저 챙기세요.',
    features: ["실리콘 패드 보호대", "마그네슘 롤온 오일", "부모님 선물용 적합", "정품 박싱 포함"],
    sizes: ['M', 'L', 'XL'],
    malls: [
      { name: '네이버 브랜드관', price: '₩42,000', isCheapest: true, icon: 'N', url: 'https://shopping.naver.com/' }
    ],
    purchaseUrl: 'https://shopping.naver.com/',
    lastUpdated: '2026-04-01'
  }
];
