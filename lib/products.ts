export interface Product {
  id: string;
  name: string;
  category: string;
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
    category: "라인댄스 의류",
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
    id: "ld-skirt-02",
    name: "젠스핏 라인댄스 태슬 수술 스커트",
    category: "라인댄스 의류",
    price: 28500,
    rating: 4.9,
    reviews: 68,
    img: "https://shop-phinf.pstatic.net/20220930_208/1664506307304M0J14_JPEG/65642182390176378_1935639600.jpg",
    description: "무대의 주인공이 되는 화려한 수술 디자인. 움직임에 따라 역동적으로 반응하는 태슬이 화려함을 더해줍니다.",
    purchaseUrl: "https://smartstore.naver.com/dancedr/products/7386762391",
    features: ["고밀도 프리미엄 수술", "속바지 일체형", "격렬한 동작에도 안정적"],
    sizes: ["M", "L", "XL"]
  }
];

export const productData: Record<string, Product> = products.reduce((acc, p) => {
  acc[p.id] = p;
  return acc;
}, {} as Record<string, Product>);
