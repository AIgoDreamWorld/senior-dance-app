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
  purchaseUrl: string; // This will now be the DIRECT checkout-ready page
  lastUpdated?: string;
}

export const productData: Record<string, Product> = {
  'essential-01': {
    id: 'essential-01',
    title: '라라 디바즈 초경량 메쉬 댄스화',
    name: '라라 디바즈 초경량 메쉬 댄스화',
    price: '26,400',
    category: '신발',
    img: 'https://shopping-phinf.pstatic.net/main_4813907/48139070868.20240530184232.jpg',
    tag: '판매 1위',
    description: '통기성이 뛰어난 메쉬 소재와 충격 흡수 에어쿠션으로 발이 편안합니다. 실제 판매 페이지로 바로 연결되는 정품입니다.',
    features: ["220g 초경량 설계", "에어쿠션 충격 흡수", "메쉬 소재 통기성", "유연한 라텍스 밑창"],
    sizes: ['225', '230', '235', '240', '245', '250', '255'],
    malls: [
      { name: '네이버 쇼핑몰', price: '₩26,400', isCheapest: true, icon: 'N', url: 'https://cr.shopping.naver.com/catalog/48139070868' }
    ],
    purchaseUrl: 'https://cr.shopping.naver.com/catalog/48139070868'
  },
  'biten-01': {
    id: 'biten-01',
    title: '비텐 가벼운 라인댄스화',
    name: '비텐 가벼운 라인댄스화 (L815)',
    price: '24,800',
    category: '신발',
    img: 'https://shopping-phinf.pstatic.net/main_3696593/36965935389.20230113110334.jpg',
    tag: '실속 세트',
    description: '가벼운 착화감과 심플한 디자인으로 선호도가 매우 높은 제품입니다. 11번가 정식 판매 페이지로 연결됩니다.',
    features: ["전용 신발 파우치 증정", "통기성 캔버스 소재", "미끄럼 방지 고무창", "발볼 편한 설계"],
    sizes: ['230', '235', '240', '245', '250', '255'],
    malls: [
      { name: '11번가 결제페이지', price: '₩24,800', isCheapest: true, icon: '11', url: 'https://www.11st.co.kr/products/5325940026' }
    ],
    purchaseUrl: 'https://www.11st.co.kr/products/5325940026'
  },
  'allonge-01': {
    id: 'allonge-01',
    title: '알롱제(Allonge) 댄스화',
    name: '알롱제(Allonge) 전문 강사 추천 댄스화',
    price: '32,900',
    category: '신발',
    img: 'https://shopping-phinf.pstatic.net/main_4744747/47447477810.20240428135805.jpg',
    tag: '전문가 추천',
    description: '댄스 전문 브랜드 알롱제의 스테디셀러입니다. 상품 선택 후 바로 결제 가능한 네이버 카탈로그 페이지로 연결됩니다.',
    features: ["아치 서포트 설계", "최고급 인조가죽 메쉬", "충격 흡수 이중창"],
    sizes: ['225', '230', '235', '240', '245', '250', '255'],
    malls: [
      { name: '네이버 결제페이지', price: '₩32,900', isCheapest: true, icon: 'N', url: 'https://search.shopping.naver.com/catalog/47447477810' }
    ],
    purchaseUrl: 'https://search.shopping.naver.com/catalog/47447477810'
  },
  'bag-01': {
    id: 'bag-01',
    title: '프리미엄 댄스용 다용도 가방',
    name: '프리미엄 댄스용 다용도 가방 (신발 포켓)',
    price: '28,000',
    category: '의류/가방',
    img: 'https://shopping-phinf.pstatic.net/main_9064529/90645296376.20260213134105.jpg',
    tag: '실용성 최고',
    description: '신발 수납 공간이 분리되어 있어 위생적입니다. 스마트스토어 직행 페이지로 연결됩니다.',
    features: ["신발 전용 수납칸", "생활 방수 원단", "어깨 부담 경감 스트랩"],
    sizes: ['One Size'],
    malls: [
      { name: '스마트스토어 결제', price: '₩28,000', isCheapest: true, icon: 'N', url: 'https://smartstore.naver.com/onepiecebag/products/90645296376' }
    ],
    purchaseUrl: 'https://smartstore.naver.com/onepiecebag/products/90645296376'
  },
  'skirt-01': {
    id: 'skirt-01',
    title: '라인댄스 수술 테슬 스커트',
    name: '라인댄스 수술 테슬 스커트 (블랙)',
    price: '24,000',
    category: '의류/가방',
    img: 'https://shopping-phinf.pstatic.net/main_8314167/83141671044.20230221142512.jpg',
    tag: '베스트셀러',
    description: '스텝을 밟을 때마다 찰랑거리는 수술이 리듬감을 극대화해줍니다. 드레스몰 결제 페이지로 바로 연결됩니다.',
    features: ["고급 태슬 수술", "밴딩 허리 처리", "속바지 일체형"],
    sizes: ['Free'],
    malls: [
      { name: '드레스몰 결제', price: '₩24,000', isCheapest: true, icon: 'N', url: 'https://smartstore.naver.com/dressmall_1/products/5721111002' }
    ],
    purchaseUrl: 'https://smartstore.naver.com/dressmall_1/products/5721111002'
  },
  'pants-01': {
    id: 'pants-01',
    title: '에슬레틱 플레어 치마바지',
    name: '에슬레틱 플레어 치마바지 (연습용)',
    price: '12,900',
    category: '의류/가방',
    img: 'https://shopping-phinf.pstatic.net/main_8847672/88476722214.20230801103608.jpg',
    tag: '가성비 템',
    description: '가장 많은 댄서들이 선택하는 기본형 치마바지입니다. UFO클로젯 결제 페이지로 직접 연결됩니다.',
    features: ["스커트 레이어링", "신축성 뛰어난 소재", "부드러운 허리밴드"],
    sizes: ['S', 'M', 'L', 'XL'],
    malls: [
      { name: 'UFO클로젯 결제', price: '₩12,900', isCheapest: true, icon: 'N', url: 'https://smartstore.naver.com/ufo_closet/products/88476722214' }
    ],
    purchaseUrl: 'https://smartstore.naver.com/ufo_closet/products/88476722214'
  }
};

export const products = Object.values(productData);
