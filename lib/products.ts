export interface Product {
  id: string;
  name: string;
  category: string;
  subCategory: string; // Added sub-category for better curation
  price: number;
  rating: number;
  reviews: number;
  img: string;
  description: string;
  purchaseUrl: string;
  features: string[];
  sizes: string[];
}

export const products: Product[] = [
  {
    id: "ld-shoe-01",
    name: "비텐(Bten) 초경량 라인댄스화 L815",
    category: "라인댄스화",
    subCategory: "초경량화",
    price: 16900,
    rating: 4.9,
    reviews: 852,
    img: "https://shop-phinf.pstatic.net/20230113_244/16735959950668XyX8_JPEG/74731804240763426_164893118.jpg",
    description: "라인댄스 입문자들의 베스트셀러! 깃털처럼 가벼운 무게와 유연한 바닥창으로 완벽한 스텝을 지원합니다.",
    purchaseUrl: "https://smartstore.naver.com/bten/products/6933291000",
    features: ["초경량 설계 (약 150g)", "스플릿 솔 (분리창) 기술", "전용 신발 파우치 증정"],
    sizes: ["225", "230", "235", "240", "245", "250", "255"]
  },
  {
    id: "ld-shoe-02",
    name: "라라 디바즈 프리미엄 가죽 라인댄스화",
    category: "라인댄스화",
    subCategory: "소가죽화",
    price: 34500,
    rating: 4.8,
    reviews: 320,
    img: "https://shop-phinf.pstatic.net/20240713_142/1720831995066XyX8_JPEG/라라디바즈.jpg",
    description: "장시간 연습에도 발이 편안한 에어쿠션과 고급 소가죽 소재의 조화. 전문가용 라인댄서들을 위한 최고의 선택입니다.",
    purchaseUrl: "https://smartstore.naver.com/chunmistore/products/10267046546",
    features: ["고급 천연 소가죽", "충격 흡수 에어쿠션", "인체공학적 아치 보호"],
    sizes: ["230", "235", "240", "245", "250", "255", "260"]
  },
  {
    id: "ld-skirt-01",
    name: "댄스도매몰 3단 캉캉 라인댄스 스커트",
    category: "의류",
    subCategory: "스커트",
    price: 15900,
    rating: 4.7,
    reviews: 415,
    img: "https://shop-phinf.pstatic.net/20240810_261/17232742918821fK49_JPEG/34394065675459344_1224673629.jpg",
    description: "스텝을 밟을 때마다 찰랑이는 3단 캉캉 디자인. 허리 밴드로 편안하며 모든 체형에 잘 어울립니다.",
    purchaseUrl: "https://smartstore.naver.com/haglinggling/products/10639455325",
    features: ["고신축성 스판 원단", "정전기 방지 처리", "세탁 후 복원력 우수"],
    sizes: ["FREE (55-88)"]
  },
  {
    id: "ld-pants-01",
    name: "슬림핏 하이웨스트 라인댄스 팬츠",
    category: "의류",
    subCategory: "팬츠",
    price: 18900,
    rating: 4.8,
    reviews: 520,
    img: "https://shop-phinf.pstatic.net/20210325_239/1616656461941z8xH4_JPEG/22712217036980076_103328577.jpg",
    description: "다리가 길어 보이는 하이웨스트 디자인과 뛰어난 복원력의 고기능성 댄스 팬츠입니다.",
    purchaseUrl: "https://smartstore.naver.com/bridgetmarket/products/5472787906",
    features: ["복부 압박 하이웨스트", "흡습 속건 기능", "실루엣 유지 기술"],
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: "ld-top-01",
    name: "셔링 포인트 라인댄스 연습복 상의",
    category: "의류",
    subCategory: "연습복/탑",
    price: 12900,
    rating: 4.6,
    reviews: 215,
    img: "https://shop-phinf.pstatic.net/20210810_134/1597022400066XyX8_JPEG/알롱제.jpg",
    description: "우아한 셔링 포인트와 뛰어난 신축성으로 몸매를 예쁘게 잡아주는 연습복 상의입니다.",
    purchaseUrl: "https://smartstore.naver.com/dancemall/products/4933939504",
    features: ["사방 스트레치", "우아한 셔링 디자인", "빠른 땀 흡수/건조"],
    sizes: ["M", "L", "XL"]
  },
  {
    id: "ld-bag-01",
    name: "댄서 전용 대용량 숄더백",
    category: "가방/소품",
    subCategory: "가방",
    price: 24500,
    rating: 4.8,
    reviews: 430,
    img: "https://shop-phinf.pstatic.net/20220930_208/1664506307304M0J14_JPEG/65642182390176378_1935639600.jpg",
    description: "댄스화와 의상을 분리 수납할 수 있는 넉넉한 공간의 전용 가방입니다.",
    purchaseUrl: "https://smartstore.naver.com/dancedr/products/7386762391",
    features: ["분리형 슈즈 수납칸", "생활 방수 기능", "어깨 통증 방지 패드"],
    sizes: ["ONE SIZE"]
  }
];

export const productData: Record<string, Product> = products.reduce((acc, p) => {
  acc[p.id] = p;
  return acc;
}, {} as Record<string, Product>);
