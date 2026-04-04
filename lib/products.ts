export interface Product {
  id: string;
  name: string;
  price: number;
  category: '라인댄스화' | '의류' | '가방/소품' | '보호대/기능성';
  subCategory: string;
  img: string;
  mallLink: string;
  rating: number;
  reviews: number;
}

export const products: Product[] = [
  // --- 라인댄스화 (Shoes) ---
  {
    id: 'ld-shoe-01',
    name: '라인댄스화 메쉬 재즈화 에어로빅화 줌바 알롱제',
    price: 19800,
    category: '라인댄스화',
    subCategory: '연습용/스니커즈',
    img: 'https://shopping-phinf.pstatic.net/main_8273617/82736173063.2.jpg',
    mallLink: 'https://search.shopping.naver.com/catalog/33607349956',
    rating: 4.7,
    reviews: 994
  },
  {
    id: 'ld-shoe-02',
    name: '라인댄스화 재즈화 에어로빅화 줌바 스포츠 여성화',
    price: 26900,
    category: '라인댄스화',
    subCategory: '연습용/스니커즈',
    img: 'https://shopping-phinf.pstatic.net/main_8162835/81628352054.jpg',
    mallLink: 'https://search.shopping.naver.com/catalog/28352054618',
    rating: 4.7,
    reviews: 688
  },
  {
    id: 'ld-shoe-03',
    name: '라인댄스화 재즈화 줌바신발 라틴 방송 스포츠 사교',
    price: 16900,
    category: '라인댄스화',
    subCategory: '재즈화/슬립온',
    img: 'https://shopping-phinf.pstatic.net/main_8314125/83141254062.jpg',
    mallLink: 'https://search.shopping.naver.com/catalog/31412540623',
    rating: 4.6,
    reviews: 490
  },
  {
    id: 'ld-shoe-04',
    name: '낮은 굽 발편한 스포츠 라인 댄스슈즈 (2cm/3cm)',
    price: 19800,
    category: '라인댄스화',
    subCategory: '전용구두',
    img: 'https://shopping-phinf.pstatic.net/main_8283520/82835205461.jpg',
    mallLink: 'https://search.shopping.naver.com/catalog/33456092018',
    rating: 4.5,
    reviews: 320
  },
  {
    id: 'ld-shoe-05',
    name: 'TS스포츠 스포츠 댄스화+주머니 세트 (알롱제)',
    price: 22900,
    category: '라인댄스화',
    subCategory: '연습용/스니커즈',
    img: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20220921_125%2F1663734000000_12345%2Fimage.jpg&type=f320_320',
    mallLink: 'https://www.11st.co.kr/products/9224059060',
    rating: 4.8,
    reviews: 3208
  },

  // --- 의류 (Apparel) ---
  {
    id: 'ld-cloth-01',
    name: '베럴라인 줌바댄스복 라인 방송 댄스복 랩스커트',
    price: 18900,
    category: '의류',
    subCategory: '스커트/랩스커트',
    img: 'https://shopping-phinf.pstatic.net/main_8219018/82190184062.jpg',
    mallLink: 'https://search.shopping.naver.com/catalog/31901840623',
    rating: 4.7,
    reviews: 596
  },
  {
    id: 'ld-cloth-02',
    name: '여성 라틴 댄스복 hole 티셔츠 연습복 상의',
    price: 18480,
    category: '의류',
    subCategory: '연습복/탑',
    img: 'https://shopping-phinf.pstatic.net/main_8184803/81848032054.jpg',
    mallLink: 'https://search.shopping.naver.com/catalog/28480320546',
    rating: 4.6,
    reviews: 357
  },
  {
    id: 'ld-cloth-03',
    name: '엘레바 폴웨어 줌바 라인 댄스복 치마 스커트',
    price: 7900,
    category: '의류',
    subCategory: '스커트/랩스커트',
    img: 'https://shopping-phinf.pstatic.net/main_8079018/80790184062.jpg',
    mallLink: 'https://search.shopping.naver.com/catalog/20790184062',
    rating: 4.7,
    reviews: 351
  },
  {
    id: 'ld-cloth-04',
    name: '밸리댄스복 힙스카프 줌바 라인댄스 랩스커트',
    price: 6900,
    category: '의류',
    subCategory: '스커트/랩스커트',
    img: 'https://shopping-phinf.pstatic.net/main_8069018/80690184062.jpg',
    mallLink: 'https://search.shopping.naver.com/catalog/20690184062',
    rating: 4.5,
    reviews: 316
  },
  {
    id: 'ld-cloth-05',
    name: '성인발레복 랩스커트 에어로빅 라인댄스복 쉬폰',
    price: 21900,
    category: '의류',
    subCategory: '스커트/랩스커트',
    img: 'https://shopping-phinf.pstatic.net/main_8219018/82190184054.jpg',
    mallLink: 'https://search.shopping.naver.com/catalog/31901840546',
    rating: 4.7,
    reviews: 291
  },

  // --- 가방/소품/보호대 ---
  {
    id: 'ld-acc-01',
    name: '썬버드 화이트라인 쿠션 무릎보호대 (댄서용)',
    price: 5100,
    category: '보호대/기능성',
    subCategory: '관절보호대',
    img: 'https://shopping-phinf.pstatic.net/main_8051001/80510014062.jpg',
    mallLink: 'https://search.shopping.naver.com/catalog/20510014062',
    rating: 4.8,
    reviews: 1079
  },
  {
    id: 'ld-acc-02',
    name: '[대용량] 전문 댄서백 댄스 슈즈 가방',
    price: 12900,
    category: '가방/소품',
    subCategory: '댄스가방',
    img: 'https://shopping-phinf.pstatic.net/main_8129001/81290014062.jpg',
    mallLink: 'https://search.shopping.naver.com/catalog/21290014062',
    rating: 4.8,
    reviews: 430
  },
  {
    id: 'ld-acc-03',
    name: '휴비딕 드라이핏 스포츠 무릎보호대 밴드 세트',
    price: 19900,
    category: '보호대/기능성',
    subCategory: '관절보호대',
    img: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20230101_100%2F1672500000000_12345%2Fimage.jpg&type=f320_320',
    mallLink: 'https://search.shopping.naver.com/search/all?query=%ED%9C%B4%EB%B9%84%EB%94%95+%EB%AC%B4%EB%A6%8E%EB%B3%B4%ED%98%B8%EB%8C%80',
    rating: 4.5,
    reviews: 121
  },
  {
    id: 'ld-acc-04',
    name: '아디다스 퍼포먼스 무릎 보호대 니슬리브',
    price: 21240,
    category: '보호대/기능성',
    subCategory: '관절보호대',
    img: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20230202_200%2F1675200000000_12345%2Fimage.jpg&type=f320_320',
    mallLink: 'https://search.shopping.naver.com/search/all?query=%EC%95%84%EB%94%94%EB%8B%A4%EC%8A%A4+%EB%AC%B4%EB%A6%8E%EB%B3%B4%ED%98%B8%EB%8C%80',
    rating: 4.6,
    reviews: 70
  },
  {
    id: 'ld-acc-05',
    name: '제이제이 댄스 전문 쇼퍼백 댄스 가방',
    price: 28000,
    category: '가방/소품',
    subCategory: '댄스가방',
    img: 'https://shopping-phinf.pstatic.net/main_8280001/82800014062.jpg',
    mallLink: 'https://search.shopping.naver.com/catalog/22800014062',
    rating: 4.8,
    reviews: 34
  }
];
