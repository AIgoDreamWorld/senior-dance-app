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
    id: "essential-01",
    name: "라라 디바즈 초경량 메쉬 댄스화",
    category: "댄스화",
    price: 25500,
    rating: 4.8,
    reviews: 1250,
    img: "https://shop-phinf.pstatic.net/20240713_142/1720831995066XyX8_JPEG/라라디바즈.jpg",
    description: "발이 편안한 초경량 메쉬 소재로 장시간 연습에도 쾌적함을 유지합니다.",
    purchaseUrl: "https://smartstore.naver.com/chunmistore/products/10267046546",
    features: ["통기성 메쉬 상단", "고신축성 쿠션 인솔", "내마모성 전용 바닥재"],
    sizes: ["225", "230", "235", "240", "245", "250"]
  },
  {
    id: "biten-01",
    name: "비텐 라인댄스화 L815",
    category: "댄스화",
    price: 16900,
    rating: 4.9,
    reviews: 850,
    img: "https://shop-phinf.pstatic.net/20230113_244/16735959950668XyX8_JPEG/74731804240763426_164893118.jpg",
    description: "라인댄스 전문 브랜드 비텐의 베스트셀러. 뛰어난 접지력과 유연성을 자랑합니다.",
    purchaseUrl: "https://smartstore.naver.com/bten/products/6933291000",
    features: ["라인댄스 최적화 접지", "초경량 설계", "발목 지지 강화"],
    sizes: ["230", "235", "240", "245", "250", "255"]
  },
  {
    id: "allonge-01",
    name: "TS스포츠 알롱제 가죽 재즈화",
    category: "댄스화",
    price: 25000,
    rating: 4.7,
    reviews: 620,
    img: "https://shop-phinf.pstatic.net/20200810_134/1597022400066XyX8_JPEG/알롱제.jpg",
    description: "부드러운 천연 가죽 소재로 발의 움직임을 섬세하게 잡아주는 전문가용 재즈화입니다.",
    purchaseUrl: "https://smartstore.naver.com/dancemall/products/4933939504",
    features: ["천연 가죽 소재", "인체공학적 스플릿 솔", "탁월한 유연성"],
    sizes: ["225", "230", "235", "240", "245", "250", "255"]
  },
  {
    id: "bag-01",
    name: "댄스 전문가용 숄더백",
    category: "액세서리",
    price: 24000,
    rating: 4.8,
    reviews: 430,
    img: "https://shop-phinf.pstatic.net/20220930_208/1664506307304M0J14_JPEG/65642182390176378_1935639600.jpg",
    description: "슈즈와 의상을 분리 수납할 수 있는 넉넉한 공간의 댄스 전용 가방입니다.",
    purchaseUrl: "https://smartstore.naver.com/dancedr/products/7386762391",
    features: ["독립된 슈즈 수납칸", "방수 안감 처리", "대용량 메인 포켓"],
    sizes: ["FREE"]
  },
  {
    id: "skirt-01",
    name: "올인원 모던 댄스 스커트",
    category: "의류",
    price: 20000,
    rating: 4.6,
    reviews: 310,
    img: "https://shop-phinf.pstatic.net/20240810_261/17232742918821fK49_JPEG/34394065675459344_1224673629.jpg",
    description: "우아한 라인과 편안한 신축성을 동시에 잡은 전연령대 인기 스커트입니다.",
    purchaseUrl: "https://smartstore.naver.com/haglinggling/products/10639455325",
    features: ["사방 스트레치 원단", "정전기 방지 처리", "우아한 플레어 컷"],
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: "pants-01",
    name: "슬림핏 하이웨스트 댄스 팬츠",
    category: "의류",
    price: 18000,
    rating: 4.8,
    reviews: 520,
    img: "https://shop-phinf.pstatic.net/20210325_239/1616656461941z8xH4_JPEG/22712217036980076_103328577.jpg",
    description: "다리가 길어 보이는 하이웨스트 디자인과 뛰어난 복원력의 고기능성 팬츠입니다.",
    purchaseUrl: "https://smartstore.naver.com/bridgetmarket/products/5472787906",
    features: ["복부 압박 하이웨스트", "흡습 속건 기능", "실루엣 유지 기술"],
    sizes: ["S", "M", "L", "XL"]
  }
];

export const productData: Record<string, Product> = products.reduce((acc, p) => {
  acc[p.id] = p;
  return acc;
}, {} as Record<string, Product>);
